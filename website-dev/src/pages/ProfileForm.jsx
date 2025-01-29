import React, { useState } from "react";
import axios from "axios";
import "./styles/ProfileForm.css";
import { BiSolidUserAccount } from "react-icons/bi";

const ProfileForm = () => {
  const [file, setFile] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vision, setVision] = useState("");
  const [experience, setExperience] = useState("");
  const [additional, setAdditional] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [position, setPositon] = useState("DEFAULT");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const STRAPI_URL = "https://govapi.peterpeterp.xyz"

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  let currentDate = new Date();
  let dueDate = new Date("2025-04-19T23:59:59");

  const [portalOpen, setPortalOpen] = useState(currentDate < dueDate);

  const resolveForm = () => {
    if (
      !firstName ||
      !lastName ||
      !vision ||
      !experience ||
      !file ||
      position === "DEFAULT"
    ) {
      setError("Please fill out all required fields");
      return false;
    }
    return true;
  };

  const uploadEntry = async () => {
    try {
      
      const formData = new FormData();
      
      formData.append("files", file, file.name);
      // upload file
      const uploadResponse = await fetch(`${STRAPI_URL}/api/upload`, {
        method: "post",
        body: formData,
      });
  
      // get result of upload
      const uploadedImage = await uploadResponse.json();
  
      // if error
      if (uploadedImage.error) {
        throw new Error(uploadedImage.error.message);
      }
  
      // create entry
      const newEntry = {
        data: {
          firstName: firstName,
          lastName: lastName,
          position: position,
          vision: vision,
          experience: experience,
          additional: additional,
          videoLink: videoLink,
          headshot: uploadedImage[0].id
        },
      };
  
      // Create entry API request
      const response = await fetch(`${STRAPI_URL}/api/candidates`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });
  
      const result = await response.json();
  
      if (result.error) {
        throw new Error(result.error.message);
      }
  
      console.log("Profile uploaded successfully:", result);
      setSuccess(true);
      setError("");
      return;
    } catch (error) {
      console.error("Error uploading data:", error);
      setError(
        "Error uploading data, please try again or contact the elections committee"
      );
    }
  }

  const handleSubmit = async () => {
    let date = new Date();
    if (date > dueDate) {
      setError("The portal is closed for submissions");
      window.location.reload();
      return;
    }
    if (resolveForm()) {
      
      setLoading(true);

      await uploadEntry();
      

    }
    setLoading(false);
  };

  return (
    <div className="page">
      <div className="glow"></div>
      <div className="card-header">
        <h2 className="title">Candidate Profile Submisson</h2>
      </div>

      <div className="profile-form">
        {portalOpen ? (
          <>
            {!success ? (
              <>
                {" "}
                <div className="name-inputs">
                  <input
                    className="input"
                    placeholder="First Name*"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  ></input>
                  <input
                    className="input"
                    placeholder="Last Name*"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  ></input>

                  <select
                    className="input"
                    style={{ height: "2.4rem", width: "100%" }}
                    name="cars"
                    id="cars"
                    onChange={(e) => setPositon(e.target.value)}
                    value={position}
                  >
                    <option value="DEFAULT" selected disabled>
                      Position*
                    </option>
                    <option value="p">President</option>
                    <option value="vp">Vice President</option>
                    <option value="s">Secretary</option>
                    <option value="pr">Public Relations Coordinator</option>
                    <option value="g">Grade Chair</option>
                    <option value="12">Grade 12/8 rep</option>
                    <option value="11">Grade 11 rep</option>
                    <option value="10">Grade 10 rep</option>
                    <option value="9">Grade 9 rep</option>
                  </select>
                </div>
                <div className="headshot">
                  <div className="sub">Upload a profile headshot!</div>
                  <BiSolidUserAccount id="icon-profile" size={50} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{ Width: "11rem", maxWidth: "80%" }}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <textarea
                  className="textarea"
                  name="taname"
                  id="taid"
                  rows="7"
                  wrap="soft"
                  maxLength="600"
                  placeholder="your vision for Burnaby North* (600 Characters MAX) ..."
                  onChange={(e) => setVision(e.target.value)}
                  value={vision}
                ></textarea>
                <textarea
                  className="textarea"
                  name="taname"
                  id="taid"
                  rows="7"
                  wrap="soft"
                  maxLength="600"
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                  placeholder="your leadership experience* (600 Characters MAX)..."
                ></textarea>
                <textarea
                  className="textarea"
                  name="taname"
                  id="taid"
                  rows="7"
                  wrap="soft"
                  maxLength="200"
                  onChange={(e) => setAdditional(e.target.value)}
                  value={additional}
                  placeholder="any other additional info (200 Characters MAX)..."
                ></textarea>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <input
                    className="input"
                    placeholder="Campaign Video Link (YOUTUBE, VIMEO, OR GOOGLE DRIVE ONLY)"
                    onChange={(e) => setVideoLink(e.target.value)}
                  ></input>
                </div>
                <div className="error">{error}</div>
                {loading ? (
                  <button className="submit-btn" disabled>
                    LOADING ...
                  </button>
                ) : (
                  <button className="submit-btn" onClick={handleSubmit}>
                    Submit Candidate Profile
                  </button>
                )}
              </>
            ) : (
              <h4>
                Submission Successful, thank you for submitting your profile.
                Good Luck!
              </h4>
            )}
          </>
        ) : (
          <h4>Can't Submit, the portal is closed for submissions</h4>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
