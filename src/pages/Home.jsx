import React, { useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";
export default function Home() {
  const [msgs, setMsgs] = useState([]);
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  useEffect(() => {
    getDocs(ref).then((querySnapshot)=>{
      const allmsgs=[];
      querySnapshot.forEach((doc) => {
      const data=doc.data();
      
      allmsgs.push({
        id: data.id,
        message:data.message
      });
      });
      setMsgs(allmsgs);
    });
    
  },[msgs]);

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value.toString());
    let data = {
      id:Math.random(),
      message: messageRef.current.value.toString(),
    };

    try {
      addDoc(ref, data);
      alert("Success!");
    } catch (e) {
      console.log(e);
      alert("Faild!");
    }
  };

  return (
    <>
      <div>Home Page</div>
      <form onSubmit={handleSave}>
        <lable>Enter Message Here</lable>
        <br />
        <input type="text" ref={messageRef} style={{ margin: "10px" }}></input>
        <br />
        <button>Save</button>
      </form>
      <br></br>
      <div>
        <h1>Message List</h1>
        {
        msgs && msgs.map(msg=>{
          return(
            <div className="blog-container" key={msg.id}>
              <h4>{msg.message}</h4>
            </div>
          )
        })
      }
      </div>
    </>
  );
}
