import React from "react";

export const InfoCard = ({ imageUri, text }) => {
  const style = {
    backgroundImage: "url(" + { imageUri } + ")"
  }
  return (
    <div className="container flex flex-col sm:flex-row shadow-lg items-center bg-red-50">
      <div className="flex-1 flex-col items-center bg-blue-300 w-full h-full">
        <img className="object-fill w-full" src={imageUri} />
        {/* <div style={style} className="object-fill" /> */}
      </div>
      <div className="flex-1">
        <div className="md:px-4 md:py-4 h-full ">
          <p className="md:text-lg lg:text-xl px-4 py-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

// export const InfoCard = ({ imageUri, text }) => (
//   <div className="container flex flex-col md:flex-row shadow-lg height-10">
//     <div className="container flex-1">
//       <img src={imageUri} />
//     </div>
//     <div className="container flex-1">
//       <div className="flex flex-col justify-center md:px-4 md:py-4 h-full bg-red-50">
//         <p className="md:text-lg lg:text-xl px-4 py-4">{text}</p>
//       </div>
//     </div>
//   </div>
// );