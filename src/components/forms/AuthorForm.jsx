import React from "react";
import { FaDatabase, FaTrash } from "react-icons/fa";
import Input from "../commons/Input";
import Button from "../commons/Button";

const AuthorForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="overlay-form">
      <Input title="Author Name" name="fullName" placeholder="Enter author's name" />
      <Input title="Athor Email" name="email" placeholder="Enter email address" type="email" />
      <Input title="Role" name="role" placeholder="eg. Manager" />
      <Input title="Level" name="level" placeholder="eg. Organization" />
      <Input title="Status" name="status" placeholder="eg. Online" />
      <Input title="Joining Date" name="joiningDate" placeholder="2021-01-15" type="date" />
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