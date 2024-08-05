import React from "react";

const ProfileCard = ({ img, name, role, company, statement }) => {
  return (
    <div className="border border-gray-700 rounded-3xl p-8">
      <img src={img} alt="profile pic" className="" width="100%" />
      <h3 className="bg-white text-black text-sm w-fit px-4 rounded-3xl relative -top-8 ml-auto mr-4">
        {role} {`@${company}`}
      </h3>
      <div>
        <h1 className="text-2xl">{name}</h1>
        <p>{statement}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
