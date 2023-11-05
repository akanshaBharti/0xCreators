import React from "react";
import Heading from "./Heading";
import App from "../App";

function Navbar ({account}){
    return(
        <div className="flex flex-row  ">
            <div className="flex ">
                <Heading/>
            </div>
            <div className="flex ">
            <span><button
          className={ "button px-6 py-2 rounded-sm text-xs font-semibold text-white cursor-pointer"}
        >
          💳{" "}
          {account
            ? account.slice(0, 4) +
              "..." +
              account.slice(account.length - 4, account.length)
            : "Connect"}
          </button></span>
        </div>
            </div>
    )
}
export default Navbar;