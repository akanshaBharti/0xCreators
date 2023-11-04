import Button from "./Button";
import Heading from "./Heading";

function Wallet() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black ">
      <div className=" pt-28 pb-20">
        <Heading />
      </div>
      <div className="pt-8">
        <Button />
      </div>
    </div>
  );
}

export default Wallet;
