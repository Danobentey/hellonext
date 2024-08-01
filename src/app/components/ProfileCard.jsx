import React from "react";

const ProfileCard = ({ img, name, role, company }) => {
  return (
    <div>
      <img src={img} alt="profile pic" className="block" />
      <h3>
        {name}, {role} {`@${company}`}
      </h3>
    </div>
  );
};

export default ProfileCard;
