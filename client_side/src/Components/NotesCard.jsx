import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const NotesCard = ({ fun, data }) => {
  const { title, notesImage, _id } = data;
  console.log(notesImage[0]);
  const Deletenotes = (id) => {
    axios
      .delete(`http://localhost:8080/notes/delete/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        fun();
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        } else {
          toast.error("Server Is not reachable.....");
        }
      });
  };
  return (
    <div key={_id} style={{ margin: "auto" }}>
      <Link to={`/description/${_id}`}>
        <img
          src={notesImage[0] == "h" ? notesImage : `http://localhost:8080/${notesImage}`}
          alt={title}
          className="card-image"
        />
      </Link>
      <h3 className="card-title">{title}</h3>

      <div className="card-buttons">
        <button className="edit-btn">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={`/update_note/${_id}`}
          >
            Edit
          </Link>
        </button>
        <button className="delete-btn" onClick={() => Deletenotes(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
