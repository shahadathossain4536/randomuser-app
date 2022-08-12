import React from "react";
import { useState } from "react";
import "./RandomUserDataCard.css";

const RandomUserDataCard = ({ user }) => {
  const [activeLink, setActiveLink] = useState(0);
  console.log("user", user.email);
  const icons = [
    "fas fa-user fa-3x",
    "fas fa-envelope fa-3x",
    "fas fa-calendar fa-3x",
    "fas fas fa-location-arrow fa-3x",
    "fas fa-phone fa-3x",
    "fas fa-lock fa-3x",
  ];
  const UserData = ({ user }) => {
    const data = [
      <p className="text-[16px] text-gray-500">
        Hi my name is{" "}
        <span className="text-[38px] text-black mr-1">
          <p>
            {user.name.first} {user.name.last}
          </p>
        </span>
      </p>,
      <p className="text-[16px] text-gray-500">
        My email adders is{" "}
        <span className="text-[38px] text-black mr-1">
          <p>{user.email}</p>
        </span>
      </p>,
      <p className="text-[16px] text-gray-500">
        I was born is{" "}
        <span className="text-[38px] text-black mr-1">
          <p>{user.dob.date.slice(0, 10)}</p>
        </span>
      </p>,
      <p className="text-[16px] text-gray-500">
        My country is{" "}
        <span className="text-[38px] text-black mr-1">
          <p>{user.location.country}</p>
        </span>
      </p>,

      <p className="text-[16px] text-gray-500">
        My phone number is{" "}
        <span className="text-[38px] text-black mr-1">
          <p>{user.phone}</p>
        </span>
      </p>,
      <p className="text-[16px] text-gray-500">
        My password is{" "}
        <span className="text-[38px] text-black mr-1">
          <p>{user.login.password}</p>
        </span>
      </p>,
    ];

    return <h1>{data[activeLink]}</h1>;
  };

  const activeLinkHandler = (index) => {
    setActiveLink(index);
  };
  return (
    <div className="card mt-7 p-7 bg-white rounded-md">
      <div className="flex justify-center items-center">
        {" "}
        <img className="userImg " src={user.picture.large} alt="" />
      </div>

      <UserData user={user} />

      <div className="card-icon">
        {icons.map((icon, index) => (
          <i
            class={icon}
            key={index}
            onMouseEnter={() => activeLinkHandler(index)}
          ></i>
        ))}
      </div>
    </div>
  );
};

// import { IoPersonOutline
//     IoMailOutline
//     IoCalendarOutline
//     IoMdLocate
//     IoCallOutline
//     IoKeyOutline } from "react-icons/io5";

//   const RandomUserDataCard = ({ user }) => {
//     //   const [icon, setIcon] = useState([]);
//     console.log("user", user);
//     const icons = [
//       "IoPersonOutline ",
//       "IoMailOutline ",
//       "IoCalendarOutlin",
//       "IoMdLocate ",
//       "IoCallOutline ",
//       "IoKeyOutline ",
//     ];

//     // IoPersonOutline
//     // IoMailOutline
//     // IoCalendarOutline
//     // IoMdLocate
//     // IoCallOutline
//     // IoKeyOutline
//     return (
//       <div>
//         <img src={user.picture.large} alt="" />
//         <h1>{user.name.first}</h1>
//         <i class="fas fa-thumbs-up fa-5x"></i>
//         <i class="fa-solid fa-earth-africa"></i>
//         <div>
//           {icons.map((icon, index) => (
//             <i class={icon}></i>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   export default RandomUserDataCard;

export default RandomUserDataCard;
