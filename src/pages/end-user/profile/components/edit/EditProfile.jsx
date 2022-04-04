import React from "react";

import TermsFaq from "../../../../../shared/terms/TermsFaq";

//custom style
import "./editProfile.style.css";

import avatar from "../../../../../assets/img/avatarProfile.png";
import upload from "../../../../../assets/img/upload.png";
import walet from "../../../../../assets/img/walet.png";
import circle from "../../../../../assets/img/circle-white.png";


const EditProfile = () => {
  return (
    <div className="container ps-0 pt-3 edit-profile-container">
      <div className="row ps-0">
        <div className="col-md-6 ">
          <form>
            <div className="form-group">
              <label htmlFor="FullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="FullName"
                placeholder="Paul miller"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Country" className="form-label">
                Phone Number
              </label>
              <div className="d-flex">
                <select className="form-select max-w20" id="CountryCode">
                  <option>
                    +216 
                  </option>
                  <option value={1}>+1</option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  placeholder="number"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Country" className="form-label">
                Country
              </label>
              <select className="form-select" id="Country">
                <option defaultValue={"Tunisia"}>Tunisia</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                className="form-control"
                placeholder="UI/UX Designer"
                id="bio"
                rows={3}
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary primary-button mt-3"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="position-relative  d-flex flex-column justify-content-center align-items-center">
            <img src={avatar} alt="profile" />
            <input
              type="file"
              className="form-control-file upload-pic-avatar"
            />
            <img className="upload-pic" src={upload} alt="profile" />
            <p className="text-center mt-3 desc-avatar">
              *Avatar should be 20*20 px.
            </p>
          </div>
        </div>
      </div>
      <TermsFaq/>
    </div>
  );
};

export default EditProfile;
