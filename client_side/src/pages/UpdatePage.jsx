import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function UpdatePage() {
  const { noteId } = useParams();
  const navigate=useNavigate()
  const getdata = () => {
    axios
      .get(`http://localhost:8080/notes/getSingleNote/${noteId}`, {
        withCredentials: true,
      })
      .then((res) => {
        settitle(res.data.note.title);
        setbody(res.data.note.body);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [notesImage, setnotesimage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, body, notesImage);
    axios
      .patch(
        `http://localhost:8080/notes/update/${noteId}`,
        { title, body, notesImage },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div
      className="container p-3 max-w-3xl mx-auto min-vh-100"
      style={{ maxWidth: "60%" }}
    >
      <h1 className="text-center my-4">Update Page</h1>
      <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            className="mb-3"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Update the body content..."
            className="mb-3"
            value={body}
            onChange={(e) => setbody(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            className="mb-3"
            onChange={(e) => setnotesimage(e.target.files[0])}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
