import "./App.css";
import Mark from "./images/avatar-mark-webber.webp";
import { BsDot } from "react-icons/bs";

function App() {
  return (
    <main className="bg-red-500 flex h-[100vh] flex-col  justify-center ">
      <div className="container p-5 bg-cyan-50 w-[375px] mx-auto ">
        <div className="flex justify-between items-center">
          <h1 className=" text-2xl ">
            Notifications{" "}
            <span className="bg-Blue text-white px-2 rounded-[5px] ">3</span>{" "}
          </h1>
          <h3>Mark all as read</h3>
        </div>
        {/* one div */}
        <div className=" px-2 py-4 flex gap-2 mt-4 bg-Lightgrayishblue2 ">
          <img className="w-[50px] h-[50px] " src={Mark} alt="" />
          <div className="flex gap-2 flex-col">
            <p className="">
              <span>Mark Webber</span> reacted to your recent post{" "}
              <span>
                My first tournament today!{" "}
                <BsDot className="inline w-5 h-5  text-Red " />
              </span>{" "}
            </p>
            <p>1m ago</p>
          </div>
        </div>
        {/* End of div */}
      </div>
    </main>
  );
}

export default App;
