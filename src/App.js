import "./App.css";
import Mark from "./images/avatar-mark-webber.webp";
import { BsDot } from "react-icons/bs";
import Angela from "./images/avatar-angela-gray.webp";
import Jacob from "./images/avatar-jacob-thompson.webp";
import rizky from "./images/avatar-rizky-hasanuddin.webp";
import kimberly from "./images/avatar-kimberly-smith.webp";
import chess from "./images/image-chess.webp";
import nathan from "./images/avatar-nathan-peterson.webp";
import Anna from "./images/avatar-anna-kim.webp";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState(3);

  const clickHandler = () => {
    setIsClicked(true);
    setValue(0);
  };
  return (
    <main className=" bg-Verylightgrayishblue flex h-[100vh] flex-col  justify-center ">
      <div className="container shadow-lg p-5 bg-White2 md:w-[680px] w-[375px] mx-auto ">
        <div className="flex justify-between items-center">
          <h1 className=" text-2xl font-Plus font-[800] ">
            Notifications{" "}
            <span className="bg-Blue text-White2 px-2 rounded-[5px] ">
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
            isClicked ? "bg-White2" : ""
          }  " px-2 py-2 flex gap-2 mt-4 bg-Lightgrayishblue1 font-Plus "  `}
        >
          <img className="w-[50px] h-[50px] " src={Mark} alt="" />
          <div className="flex gap-2 flex-col">
            <p className=" text-[14px]  text-Darkgrayishblue  ">
              <span className=" font-Plus font-[800] hover:text-Blue cursor-pointer text-Verydarkblue ">
                Mark Webber
              </span>{" "}
              reacted to your recent post{" "}
              <span className=" text-Darkgrayishblue font-[800] hover:text-Blue cursor-pointer  ">
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
            isClicked ? "bg-White2" : ""
          }  " px-2 py-2 flex gap-2 mt-2 bg-Lightgrayishblue1 font-Plus "  `}
        >
          <img className="w-[50px] h-[50px] " src={Angela} alt="" />
          <div className="flex gap-2 flex-col">
            <p className="leading-[2rem] ">
              <span className="font-Plus font-[800] hover:text-Blue cursor-pointer ">
                Angela Grey
              </span>
              <span className="ml-2 text-Darkgrayishblue">
                followed you
                {!isClicked && (
                  <BsDot className="inline w-9 h-9 -ml-2  text-Red " />
                )}
              </span>{" "}
            </p>
            <p className="-mt-4 text-Grayishblue text-[15px] ">5m ago</p>
          </div>
        </div>
        {/* End 2nd of div */}
        {/* 3rd div */}
        <div
          className={` ${
            isClicked ? "bg-White2" : ""
          }  " px-2 py-2 flex gap-2 mt-2 bg-Lightgrayishblue1 font-Plus "  `}
        >
          <img className="w-[50px] h-[50px] " src={Jacob} alt="" />
          <div className="flex gap-2 flex-col">
            <p className=" text-[15px] text-Darkgrayishblue  ">
              <span className=" font-Plus font-[800] text-Verydarkblue hover:text-Blue cursor-pointer  ">
                Jacob Thompson
              </span>{" "}
              has joined your group
              <span className=" text-Blue  cursor-pointer font-[800]  ml-2 ">
                Chess Club
                {!isClicked && (
                  <BsDot className="inline w-9 h-9 -ml-2  text-Red " />
                )}
              </span>{" "}
            </p>
            <p className=" text-Grayishblue -mt-2 text-[15px]  ">1 day ago</p>
          </div>
        </div>
        {/* End of 3rd div */}
        {/* 4th div */}
        <div className={`  " px-2 py-2 flex gap-2 mt-2  "  `}>
          <img className="w-[50px] h-[50px] " src={rizky} alt="" />
          <div className="flex gap-2 flex-col">
            <p className=" text-[15px] l ">
              <span className=" font-Plus font-[800] hover:text-Blue cursor-pointer ">
                Rizky Hasanuddin
              </span>
              <span className=" text-Darkgrayishblue font-[500]  ml-2 ">
                sent you a private message
              </span>{" "}
            </p>
            <p className=" text-Grayishblue -mt-2 text-[15px]  ">5 days ago</p>
            <div className=" border-2 px-4 py-4 font-Plus hover:bg-Lightgrayishblue2 cursor-pointer ">
              <p>
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </div>
          </div>
        </div>
        {/* End of 4th div */}
        {/* 5th div */}
        <div className={`  " px-2 py-2 flex gap-2 mt-2     "  `}>
          <img className="w-[50px] h-[50px] " src={kimberly} alt="" />
          <div className="flex gap-2 flex-col w-[100%] ">
            <p className=" text-[15px] l ">
              <span className=" font-Plus font-[800] hover:text-Blue cursor-pointer ">
                Kimberly Smith
              </span>
              <span className=" text-Darkgrayishblue font-[500]  ml-2 ">
                commented on your picture
              </span>{" "}
            </p>
            <p className=" text-Grayishblue -mt-2 text-[15px]  ">1 week ago</p>
          </div>
          <img
            src={chess}
            className="w-10 h-10 cursor-pointer justify-self-end  "
            alt=""
          />
        </div>
        {/* End of 5th div */}
        {/* 6th div */}
        <div className={`  " px-2 py-2 flex gap-2 mt-2 font-Plus    "  `}>
          <img className="w-[50px] h-[50px] " src={nathan} alt="" />
          <div className="flex gap-2 flex-col">
            <p className=" text-[15px] text-Grayishblue ">
              <span className=" font-Plus font-[800] mr-1 text-Verydarkblue hover:text-Blue cursor-pointer ">
                Nathan Peterson
              </span>
              reacted to your recent post
              <span className=" text-Darkgrayishblue font-[800] hover:text-Blue cursor-pointer ml-2 ">
                5 end-game strategies to increase your win rate
              </span>{" "}
            </p>
            <p className=" text-Grayishblue -mt-2 text-[15px]  ">2 week ago</p>
          </div>
        </div>
        {/* End of 6th div */}
        {/* 7th div */}
        <div className={`  " px-2 py-2 flex gap-2 mt-2 font-Plus     "  `}>
          <img className="w-[50px] h-[50px] " src={Anna} alt="" />
          <div className="flex gap-2 flex-col">
            <p className=" text-[15px] text-Grayishblue ">
              <span className=" font-Plus font-[800] mr-1 text-Verydarkblue cursor-pointer hover:text-Blue ">
                Anna Kim
              </span>
              left the group
              <span className=" text-Blue cursor-pointer   font-[800]  ml-2 ">
                Chess Club
              </span>{" "}
            </p>
            <p className=" text-Grayishblue -mt-2 text-[15px]  ">2 week ago</p>
          </div>
        </div>
        {/* End of 7th div */}
      </div>
    </main>
  );
}

export default App;
