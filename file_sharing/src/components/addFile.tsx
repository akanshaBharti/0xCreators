import React, { useState, useEffect } from "react";
// import { addOperation } from "../utils/operation";
import axios from "axios";
import "./Css/addFile.css";

const FileUpload = ({ contract, account, provider }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<Uint8Array | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const onAddUser = async (event: React.FormEvent) => {
    event.preventDefault();

    if (file) {
      try {
        const blob = new Blob([file], { type: "application/octet-stream" });

        const formData = new FormData();
        if (fileName) {
          formData.append("file", blob, fileName);
        } else {
          formData.append("file", blob);
        }

        const resFile = await axios({
          method: "post", 
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `76d92b17caf26289fe6c`,
            pinata_secret_api_key: `91d3521125be00147dc0ff64096ab8706c7533c236bfc9114a47618c5a470090`,
            "Content-Type": "multipart/form-data",
          },
        });

        const DataHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log(DataHash);
        contract.addfile(account, DataHash);
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
        // await addOperation(DataHash);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("No File Selected");
    }
  };

  const retrieveFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const files = event.target.files;

    if (files && files.length > 0) {
      const data = files[0];
      const reader = new window.FileReader();

      reader.onloadend = () => {
        if (reader.result instanceof ArrayBuffer) {
          const fileData = new Uint8Array(reader.result);
          setFile(fileData);
          setFileName(data.name);

          // console.log('File data as ArrayBuffer:', fileData.slice(0, 10));
          console.log("File name:", data.name);
        }
      };

      reader.readAsArrayBuffer(data);
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <>
    
    <div className="">
      <form>
        {/* <label htmlFor="file-upload">Upload File</label> */}
        <input
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
          disabled={!account}
          className="custom-file-input"
        ></input>

        <span className="textArea text-white">Image: {fileName}</span>
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          onClick={onAddUser}
        >
          Add File
        </button>
      </form>
      </div>

      
    </>
  );
};

export default FileUpload;
