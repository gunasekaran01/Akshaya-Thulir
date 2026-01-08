import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function StartupForm() {
  const [formData, setFormData] = useState({});

 
  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = document.querySelectorAll("[required]");
    let allFilled = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        allFilled = false;
      }
    });

    if (!allFilled) {
      alert("Please fill all the required (*) fields before submitting.");
      return;
    }

    const form = new FormData(event.target);
    const data = {};

    form.forEach((value, key) => {
      data[key] = value;
    });

    setFormData(data);

    console.log("FULL FORM DATA:", data);
    alert("Form submitted! Check console for full details.");
  };


  return (
    <>
     <style>{`
      .f4rm {
        background-color: #f5f5dc;
    }
    `}
    </style>
    <div className="mt-4 mb-5">
      <h2 className="text-center mb-4" style={{color:" #895416ff"}}>Startup Registration Form</h2>

      <form id="startupForm" className="p-4 bg-white" noValidate onSubmit={handleSubmit}>

        {/* PERSONAL INFORMATION */}
        <div className="container shadow-sm rounded p-3"  style={{ backgroundColor: "#fff0f099" }}>
          <div className="pt-3 h5"style={{color:" #895416ff"}}>Personal Information</div>

          <div className="row mt-3">
            <div className="col-md-6 mb-3">
              <input name="firstName" className="f4rm form-control" placeholder="First Name*" required />
            </div>
            
            <div className="col-md-6 mb-3">
              <input name="lastName" className="f4rm form-control" placeholder="Last Name*" required />
            </div>

            <div className="col-md-6 mb-3">
              <input name="email" type="email" className="f4rm form-control" placeholder="Email Address*" required />
            </div>

            <div className="col-md-6 mb-3">
              <input name="mobile" className="f4rm form-control" placeholder="Mobile Number*" required />
            </div>
          </div>
          </div>

          {/* LOCATION DETAILS */}
          <div className="container shadow-sm rounded mt-5 p-3"  style={{ backgroundColor: "#fff0f099" }}>

          <div className=" pt-3 h5"style={{color:" #895416ff"}}>Location Details</div>

          <div className="row mt-3">
            <div className="col-md-4 mb-3">
              <label className="form-label">Country <span style={{ color: "red" }}>*</span></label>
              <select name="country" className="form-select f4rm" required>
                <option value="">Select Country</option>
                <option>India</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">State <span style={{ color: "red" }}>*</span></label>
              <select name="state" className="form-select f4rm" required>
                <option value="">Select State</option>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>Andhra Pradesh</option>
                <option>Karnataka</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">District <span style={{ color: "red" }}>*</span></label>
              <input name="district" className="form-control f4rm" placeholder="District" required />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">City <span style={{ color: "red" }}>*</span></label>
              <input name="city" className="form-control f4rm" placeholder="City" required />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Area <span style={{ color: "red" }}>*</span></label>
              <input name="area" className="form-control f4rm" placeholder="Area" required />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Pin Code <span style={{ color: "red" }}>*</span></label>
              <input name="pincode" type="number" min="600000" max="699999" className="form-control f4rm" placeholder="Pin Code" required />
            </div>
          </div>
        </div>

        {/* COMPANY DETAILS */}
        <div className="container shadow-sm rounded mt-5 p-3"  style={{ backgroundColor: "#fff0f099" }}>
          <div className="pt-3 h5" style={{color:" #895416ff"}}>Company Details</div>

          <div className="row mt-3">
            <div className="col-md-6 mb-3">
              <label className="form-label">Startup Name <span style={{ color: "red" }}>*</span></label>
              <input name="startupName" className="form-control f4rm" placeholder="Startup Name" required />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Legal Status <span style={{ color: "red" }}>*</span></label>
              <select name="legalStatus" className="form-select f4rm" required>
                <option value="">Select Type</option>
                <option>Proprietorship</option>
                <option>Partnership</option>
                <option>LLP</option>
                <option>Pvt Ltd</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Year Established <span style={{ color: "red" }}>*</span></label>
              <input name="yearEstablished" type="number" min="1800" max="2100" className="form-control f4rm" placeholder="YYYY" required  />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Stage <span style={{ color: "red" }}>*</span></label>
              <select name="stage" className="form-select f4rm" required>
                <option value="">Select Stage</option>
                <option>Idea</option>
                <option>Prototype</option>
                <option>Early</option>
                <option>Scaling</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Sector <span style={{ color: "red" }}>*</span></label>
              <select name="sector" className="form-select f4rm" required>
                <option value="">Select Sector</option>
                <option>EdTech</option>
                <option>HealthTech</option>
                <option>AI</option>
                <option>DeepTech</option>
              </select>
            </div>

            <div className="col-md-12 mb-3">
              <label className="form-label">Founder Details <span style={{ color: "red" }}>*</span></label>
              <textarea name="founderDetails" className="form-control f4rm" rows="3" placeholder="Founder Name, Qualification, Background" required></textarea>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Team Size <span style={{ color: "red" }}>*</span></label>
              <input name="teamSize" type="number" className="form-control f4rm" placeholder="Number of team members" required />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">GST / CIN <span style={{ color: "red" }}>*</span></label>
              <input name="gstNumber" className="form-control f4rm" placeholder="GST / CIN Number" required />
            </div>

            <div className="col-md-12 mb-3">
              <label className="form-label">Registered Office Address <span style={{ color: "red" }}>*</span></label>
              <textarea name="officeAddress" className="form-control f4rm" rows="2" placeholder="Address" required></textarea>
            </div>
          </div>
          </div>

          {/* STARTUP REQUIREMENTS */}
          <div className="container shadow-sm rounded mt-5 p-3"  style={{ backgroundColor: "#fff0f099" }}>
          <div className="pt-3 h5"style={{color:" #895416ff"}}>Startup Requirements</div>

          <div className="row mt-3">
            <div className="col-md-4 mb-3">
              <label className="form-label">Funding Needed?</label>
              <select name="funding" className="form-select f4rm">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Mentorship Required?</label>
              <select name="mentorship" className="form-select f4rm">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Technology Support Required?</label>
              <select name="techSupport" className="form-select f4rm">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Incubation Space Needed?</label>
              <select name="incubation" className="form-select f4rm">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Internship Support?</label>
              <select name="internship" className="form-select f4rm">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Government Scheme Eligibility Check?</label>
              <select name="govtCheck" className="form-select f4rm">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-success px-4">Submit</button>
          <button type="reset" className="btn btn-secondary px-4 ms-2">Reset</button>
        </div>

      </form>
    </div>
    </>
  );
}