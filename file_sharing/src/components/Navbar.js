import React from "react";
import Heading from "./Heading";

function Navbar({ isConnected, address }) {
  return (
    <div className="flex flex-row">
      <div className="flex">
        <Heading />
        
      </div>
      <div className="flex">
        <span>
          <button
            className={
              "button rounded-sm text-xs font-semibold text-white cursor-pointer"
            }
          >
            💳{" "}
            {isConnected
              ? address
                ? address.slice(0, 4) +
                  "..." +
                  address.slice(address.length - 4, address.length)
                : "Address Not Found"
              : "Connected"}
          </button>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
