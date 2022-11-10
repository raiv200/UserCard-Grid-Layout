import React from "react";

// The User Profile Card

const UserCard = ({firstName, lastName, email,imageURL}) => {

  return (
    <div className="card__container">
      <div className="card__container__inner ">
        <div className="avatar">
          <img src={imageURL} alt="User profile Pic" className="image" />
        </div>

        <div className="user__details">
          <h2>{firstName} {lastName}</h2>
          <p>Web Developer</p>
        </div>

        <div className="user__email">{email}</div>
      </div>
    </div>
  );
};

export default UserCard;
