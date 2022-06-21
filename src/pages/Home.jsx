import React, { useEffect, useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";
export default function Home() {
  // const [msgs, setMsgs] = useState([]);
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  // useEffect(() => {
  //   const querySnapshot = getDocs(collection(firestore, "messages"));
  //   onSnapShot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //   });

  // }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value.toString());
    let data = {
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
    </>
  );
}
