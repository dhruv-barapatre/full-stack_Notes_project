import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const handleCraete = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/notes/create",{title,body},{withCredentials:true})
    .then((res)=>{
      toast.success(res.data.message)
    })
    .catch((err)=>{
      toast.error(err.response.data.message)
      setTitle("")
      setbody("")
    })
  };
  return (
    <div
      className="container p-3 max-w-3xl mx-auto min-vh-100"
      style={{ maxWidth: "60%" }}
    >
      <h1 className="text-center my-4">Create a Note</h1>
      <Form className="d-flex flex-column gap-3" onSubmit={handleCraete}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter note title"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control
            value={body}
            required
            onChange={(e) => setbody(e.target.value)}
            as="textarea"
            rows={5}
            placeholder="Enter note content"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Note
        </Button>
      </Form>
    </div>
  );
}
