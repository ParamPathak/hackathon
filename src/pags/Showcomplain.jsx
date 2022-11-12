import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase';


export const Showcomplaint = () => {
    const [user,setUser] = useState("");
    const handleSubmit = async (e) => {
        const q = query(
            collection(db,"complain")
        ) 
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                
                console.log(doc.data("dqd"))
            })
        } catch (err) {
            console.log(err)
        }
      };

 
  return (
    <div className="formContainer">
    <div className="formWrapper">
       <button onClick={handleSubmit}>Sign up</button>
       dhshdah
    </div>
    </div>
  )
};