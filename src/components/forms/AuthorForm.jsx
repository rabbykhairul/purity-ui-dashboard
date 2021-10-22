import React, { useContext, useState } from "react";
import { FaDatabase, FaTrash } from "react-icons/fa";
import Input from "../commons/Input";
import Button from "../commons/Button";
import AuthorContext from "../../contexts/AuthorContext";

const AuthorForm = () => {

  const { selectedAuthor } = useContext(AuthorContext);

  const [fullName, setFullName] = useState(selectedAuthor?.fullName || "");
  const [email, setEmail] = useState(selectedAuthor?.email || "");
  const [role, setRole] = useState(selectedAuthor?.role || "");
  const [level, setLevel] = useState(selectedAuthor?.level || "");
  const [status, setStatus] = useState(selectedAuthor?.status || "");
  const [joiningDate, setJoiningDate] = useState(selectedAuthor?.joiningDate.split("T")[0] || "");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="overlay-form">
      <Input title="Author Name" name="fullName" placeholder="Enter author's name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <Input title="Athor Email" name="email" placeholder="Enter email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input title="Role" name="role" placeholder="eg. Manager" value={role} onChange={(e) => setRole(e.target.value)} />
      <Input title="Level" name="level" placeholder="eg. Organization" value={level} onChange={(e) => setLevel(e.target.value)} />
      <Input title="Status" name="status" placeholder="eg. Online" value={status} onChange={(e) => setStatus(e.target.value)} />
      <Input title="Joining Date" name="joiningDate" placeholder="2021-01-15" type="date" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} />
      <div className="btn-container">
        <Button className="bg-red-500" >
          <FaTrash />
          <span>Delete</span>
        </Button>
        <Button className="bg-green-400" >
          <FaDatabase />
          <span>Save</span>
        </Button>
      </div>
    </form>
  )
};

export default AuthorForm;