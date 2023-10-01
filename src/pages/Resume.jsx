import React, { useState } from 'react';
// import './styleF.css'; // Import your CSS files

function ResumeGenerator() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    contact: '',
    address: '',
    fb: '',
    insta: '',
    linked: '',
  });

  const [professionalInfo, setProfessionalInfo] = useState({
    objective: '',
    workExperience: [''],
    academicQualification: [''],
  });

  const [isCVGenerated, setIsCVGenerated] = useState(false);

  const addNewWEField = () => {
    setProfessionalInfo((prevInfo) => ({
      ...prevInfo,
      workExperience: [...prevInfo.workExperience, ''],
    }));
  };

  const addNewAQField = () => {
    setProfessionalInfo((prevInfo) => ({
      ...prevInfo,
      academicQualification: [...prevInfo.academicQualification, ''],
    }));
  };

  const generateCV = () => {
    setIsCVGenerated(true);
  };

  const printCV = () => {
    window.print();
  };

  return (
    <div>
      {isCVGenerated ? (
        // Display CV template
        <div class="container" id="cv-template">
        <div class="row">
            <div class="col-md-4 text-center py-5 background">
                {/* <!-- first col --> */}

                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" class="img-fluid myimg" />
                <div class="container">
                    <p id="nameT1">Nikhil Singh</p>
                    <p id="contactT">9644526993</p>
                    <p id="addressT">D-304 Krishna Appartment Vidya Nagar</p>

                    <hr />

                    <p id="fbT">
                        <a href="#1">https://www.facebook.com/NikhilSingh</a>
                    </p>
                    <p id="instaT">
                        <a href="#1">https://www.instagram.com/NikhilSingh</a>
                    </p>
                    <p id="linkedT">
                        <a href="#1">https://www.linkedin.com/NikhilSingh</a>
                    </p>
                </div>
            </div>
            <div class="col-md-8 py-5">
                {/* <!-- second col --> */}
                <h1 id="nameT2" class="text-center" style="font-weight: 980">Nikhil Singh</h1>


                {/* <!-- Objective Card --> */}

                <div class="card mt-4">
                    <div class="card-header background">
                        <h3>Objective</h3>
                    </div>
                    <div class="card-body">
                        <p id="objectiveT">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam autem, facere ullam doloribus
                            molestias accusantium ipsum perspiciatis libero, fuga corrupti enim quaerat nisi, quam vero
                            obcaecati error molestiae rerum reiciendis nostrum. Temporibus, suscipit voluptas voluptatem
                            dolor magnam voluptatibus quas natus, culpa commodi enim tenetur cum sequi iure vitae iste
                            ad?
                        </p>
                    </div>
                </div>


                {/* <!-- Work Experience --> */}
                <div class="card mt-4">
                    <div class="card-header background">
                        <h3>Work Experience</h3>
                    </div>
                    <div class="card-body">
                        <ul id="weT">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magni.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magni.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magni.</li>
                        </ul>
                    </div>
                </div>


                {/* <!-- Educational Qualification--> */}

                <div class="card mt-4">
                    <div class="card-header background">
                        <h3>Academic Qualification</h3>
                    </div>
                    <div class="card-body">
                        <ul id="aqT">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magni.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magni.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magni.</li>
                        </ul>
                    </div>
                </div>   
            </div>
            <div class="container mt-3 text-center">
                <button onclick={printCV} class="btn background border">Print</button>
            </div>
        </div>
    </div>) : (
        // Display CV form
        <div class="container" id="cv-form">
        <h1 class="text-center my-2">Resume Generator</h1>
        <p class="text-center">Lets Get Started</p>
        <div class="row">
            <div class="col-md-6">
                <h3>Personal Information</h3>

                <div class="form-group">
                    <label for="nameField">Your Name</label>
                    <input type="text" id="nameField" class="form-control" placeholder="Enter Here" />
                </div>

                <div class="form-group mt-2">
                    <label for="contactField">Your Contact</label>
                    <input type="text" id="contactField" class="form-control" placeholder="Enter Here" />
                </div>

                <div class="form-group mt-2">
                    <label for="addressField">Your Address</label>
                    <textarea type="text" id="addressField" class="form-control" placeholder="Enter Here"
                        rows="5"></textarea>
                </div>

                <p class="text-secondary my-3">Important Links</p>

                <div class="form-group mt-2">
                    <label for="fbField">Facebook</label>
                    <input type="text" id="fbField" class="form-control" placeholder="Enter Here" />
                </div>

                <div class="form-group mt-2">
                    <label for="instaField">Instagram</label>
                    <input type="text" id="instaField" class="form-control" placeholder="Enter Name" />
                </div>

                <div class="form-group mt-2">
                    <label for="linkedField">LinkedIn</label>
                    <input type="text" id="linkedField" class="form-control" placeholder="Enter Name" />
                </div>

            </div>


            <div class="col-md-6">
                <h3>Professional Information</h3>

                <div class="form-group mt-2">
                    <label for="">Objective</label>
                    <textarea class="form-control" id="objectiveField" placeholder="Enter Here" rows="5"></textarea>
                </div>


                <div class="form-group mt-2" id="we">
                    <label for="">Working Experience</label>
                    <textarea class="form-control weField" placeholder="Enter Here" rows="3"></textarea>


                    <div class="container text-center mt-2" id="weAddButton">
                        <button onclick={addNewAQField} class="btn btn-primary btn-sm">Add</button>
                    </div>
                </div>

                <div class="form-group mt-2" id="aq">
                    <label for="">Academic Qualification</label>
                    <textarea class="form-control eqField" placeholder="Enter Here" rows="3"></textarea>

                    <div class="container text-center mt-2" id="aqAddButton">
                        <button onclick={addNewAQField} class="btn btn-primary btn-sm">Add</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container text-center mt-3 p-4">
            <button onclick={generateCV} class="btn btn-primary btn-sm">Resume</button>
        </div>

    </div>

      )}

      {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script> */}
    </div>
  );
}

export default ResumeGenerator;
