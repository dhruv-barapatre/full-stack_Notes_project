import React, { useEffect, useState } from "react";
import NotesCard from "../Components/NotesCard";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Notespage = () => {
  const [state, setstate] = useState([]);
  const navigate = useNavigate();
  const Fetchdata = () => {
    axios
      .get("http://localhost:8080/notes/getAllNote", {
        withCredentials: true,
      })
      .then((data) => {
        console.log(data.data)
        if (data.data.data) {
          setstate(data.data.data);
        } else {
          setstate([]);
        }
        toast.success(data.data.message);
      })
      .catch((err) => {
        setstate([]);
        if (err.response.data.message == "You are not Login..Login First....") {
          navigate("/sign-in");
        }
        toast.error(err.response.data.message);
      });
  };
  useEffect(() => {
    Fetchdata();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Notes</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {state.length > 0 ? (
          state.map((el) => (
            <NotesCard fun={Fetchdata} key={el._id} data={el} />
          ))
        ) : (
          <p>No notes found</p>
        )}
      </div>
    </div>
  );
};

export default Notespage;
