import React,{  useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";


const Addcomplain = () => {

  const [imageUpload, setImageUpload] = useState(null);
  const [text_1, setTx] = useState("");
  const [text_2, setTx2] = useState("");
  const [text_3, setTx3] = useState("");


  const uploadFile = () => {
    const date = new Date()
    if (imageUpload == null) return;
    const storageRef = ref(storage, `${date}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        await setDoc(doc(db, "complain", `${date}`), {
          id: date,
          name : text_1,
          lol : text_2,
          sd : text_3,
          photoURL: downloadURL,
          label: "",
        });
      });
      
    });
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
        <input type="text" onChange={(e) => setTx3(e.target.value)}/>
        <button onClick={uploadFile}>upload</button>

    </div>
  </div>
  );
};

export default Addcomplain;