import React,{  useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import axios from "react-axios"

const Addcomplain = () => {

  const [imageUpload, setImageUpload] = useState(null);
  const [text_1, setTx] = useState("");
  const [text_2, setTx2] = useState("");

  const getLabel = async () => {
    const res = await axios.get(`http://localhost:5000/`);
    console.log(res.data)
  }

  const uploadFile = () => {
    const date = new Date()
    if (imageUpload == null) return;
    const storageRef = ref(storage, `${date}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        await setDoc(doc(db, "complain", `${date}`), {
          id: date,
          name : text_1,
          discribe : text_2,
          status : "Work in progress",
          photoURL: downloadURL,
          label: "",
        });
      });
      
    });

    getLabel()    
  };

  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="title">Home</span>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
        <input type="text" onChange={(e) => setTx(e.target.value)}/>
        <input type="text" onChange={(e) => setTx2(e.target.value)}/>
        <button onClick={uploadFile}>upload</button>

    </div>
  </div>
  );
};

export default Addcomplain;