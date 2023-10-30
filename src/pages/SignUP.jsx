import React, { useState } from "react";
import IMG from "../assets/signUp-image.svg";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import {db} from '../firebase'
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth'
import {doc, serverTimestamp, setDoc} from 'firebase/firestore'

const SignUP = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const {name, email, password} = formData;
    const navigate = useNavigate();
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    async function onSubmit(e){
      e.preventDefault();

      try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(auth ,email,password)

        updateProfile(auth.currentUser, {
          displayName : name,
        });

        const user = userCredential.user
        const formDataCopy = {...formData};
        delete formDataCopy.password;
        formDataCopy.timestamp = serverTimestamp();


        await setDoc(doc(db, "users", user.uid), formDataCopy);
        navigate("/");
        console.log("success");
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="signUp__page">
      <div className="signUp__page__left">
        <h4
          style={{
            marginLeft: "40px",
            marginTop: "15px",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          Resumate
        </h4>
        <form onSubmit={onSubmit}>
        <div className="signUp__card">
          <h4 style={{ textAlign: "center", marginBottom: "5px" }}>
            Create your account for free!
          </h4>
          <button className="signUp__google">Sign up with Google</button>
          <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <p>First name</p>
          <input type="text" placeholder="Enter your Full name" id="name" value={name} onChange={onChange}/>
          <p>Email Address</p>
          <input type="text" placeholder="Enter your Email" id="email" value={email} onChange={onChange}/>
          <p>Password</p>
          <input type="text" placeholder="Password" id="password" value={password} onChange={onChange}/>
          <button type="submit">Create Account</button>
          <p style={{ fontSize: "14px", marginTop: "5px" , textAlign: "center"}}>
            Already have an account?<Link to="/login" style={{marginLeft: "10px",fontWeight:"bold"}}>Login</Link>
          </p>
        </div>
        </form>
        
      </div>
      <div className="signUp__page__right">
        <h1 style={{fontSize: "28px", fontWeight: "600", textAlign: "center"}}>
          Get <span style={{color: "#2814AB"}}>Styled</span> and <span style={{color: "#2814AB"}}> Sequenced</span> resume and land your favorite job interview
        </h1>
        <img src={IMG} alt="resume" />
      </div>
    </div>
  );
};

export default SignUP;
