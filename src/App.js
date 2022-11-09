import "./App.css";
import Mark from "./images/avatar-mark-webber.webp";
import { BsDot } from "react-icons/bs";
import Angela from "./images/avatar-angela-gray.webp";
import Jacob from "./images/avatar-jacob-thompson.webp";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState(3);

  const clickHandler = () => {
    setIsClicked(true);
    setValue(0);
  };
  return (
    <main className="bg-red-500 flex h-[100vh] flex-col  justify-center ">
      <div className="container p-5 bg-white w-[375px] mx-auto ">
        <div className="flex justify-between items-center">
          <h1 className=" text-2xl font-Plus font-[800] ">
            Notifications{" "}
            <span className="bg-Blue text-white px-2 rounded-[5px] ">
              {value}
            </span>{" "}
          </h1>
          <h3
            onClick={clickHandler}
            className=" font-Plus cursor-pointer text-Darkgrayishblue hover:text-Blue "
          >
            Mark all as read
          </h3>
        </div>
        {/* one div */}
        <div
          className={` ${
            isClicked ? "bg-White" : ""
          }  " px-2 py-4 flex gap-2 mt-4 bg-Lightgrayishblue2 "  `}
        >
          <img className="w-[50px] h-[50px] " src={Mark} alt="" />
          <div className="flex gap-2 flex-col">
            <p className=" text-[15px]   ">
              <span className=" font-Plus font-[800] ">Mark Webber</span>{" "}
              reacted to your recent post{" "}
              <span className=" text-Darkgrayishblue font-[500] hover:text-Blue cursor-pointer  ">
                My first tournament today!{" "}
                {!isClicked && (
                  <BsDot className="inline w-9 h-9 -ml-2  text-Red " />
                )}
              </span>{" "}
            </p>
            <p className="-mt-2 text-Grayishblue  ">1m ago</p>
          </div>
        </div>
        {/* End of div */}
        {/* 2nd div */}
        <div
          className={` ${
            isClicked ? "bg-White" : ""
          }  " px-2 py-4 flex gap-2 mt-4 bg-Lightgrayishblue2 "  `}
        >
          <img className="w-[50px] h-[50px] " src={Angela} alt="" />
          <div className="flex gap-2 flex-col">
            <p className="leading-[2rem] ">
              <span className="font-Plus font-[800] ">Angela Grey</span>
              <span className="ml-2">
                followed you
                {!isClicked && (
                  <BsDot className="inline w-9 h-9 -ml-2  text-Red " />
                )}
              </span>{" "}
            </p>
            <p className="-mt-4 text-Grayishblue ">5m ago</p>
          </div>
        </div>
        {/* End 2nd of div */}
        {/* 3rd div */}
        <div
          className={` ${
            isClicked ? "bg-White" : ""
          }  " px-2 py-4 flex gap-2 mt-4 bg-Lightgrayishblue2 "  `}
        >
          <img className="w-[50px] h-[50px] " src={Jacob} alt="" />
          <div className="flex gap-2 flex-col">
            <p className=" text-[15px] l ">
              <span className=" font-Plus font-[800] ">Jacob Thompson</span> has
              joined your group
              <span className=" text-Blue font-[500]  ml-2 ">
                Chess Club
                {!isClicked && (
                  <BsDot className="inline w-9 h-9 -ml-2  text-Red " />
                )}
              </span>{" "}
            </p>
            <p className=" text-Grayishblue -mt-2  ">1day ago</p>
          </div>
        </div>
        {/* End of 3rd div */}
      </div>
    </main>
  );
}

export default App;
