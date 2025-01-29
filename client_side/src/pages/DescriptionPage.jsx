import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom"

function SomeComponent() {
  let params = useParams()
  params.postId
}
const DescriptionPage = () => {
    const [state,setstate]=useState([])
    const {id}=useParams()
    const notesGet=()=>{
      axios.get(`http://localhost:8080/notes/getSingleNote/${id}`,{withCredentials:true})
      .then((response)=>{
        console.log(response.data.note)
        setstate(response.data.note)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    useEffect(()=>{
      notesGet()
    },[])
  const containerStyle = {
    textAlign: "center",
    backgroundColor: "white",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    maxWidth: "600px",
    height: "500px",
    width: "100%",
    margin: "0 auto",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    color: "#333",
  };
  return (
    <div style={{ height: "100vh" }}>
      <div className="container" style={containerStyle}>
        <h1 style={headingStyle}>{state.title}</h1>
        <img src={state.notesImage} alt="" style={imageStyle} />
        <p style={paragraphStyle}>{state.body}</p>
      </div>
    </div>
  );
};

export default DescriptionPage;
