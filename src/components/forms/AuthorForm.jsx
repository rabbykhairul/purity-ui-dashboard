import React, { useContext, useState } from "react";
import { FaDatabase, FaTrash } from "react-icons/fa";
import Input from "../commons/Input";
import Button from "../commons/Button";
import AuthorContext from "../../contexts/AuthorContext";
import { createAuthor, deleteAuthor, updateAuthor } from "../../services/authorService";

const AuthorForm = () => {

  const { selectedAuthor, authorCreated, authorUpdated, authorDeleted } = useContext(AuthorContext);

  const [fullName, setFullName] = useState(selectedAuthor?.fullName || "");
  const [email, setEmail] = useState(selectedAuthor?.email || "");
  const [role, setRole] = useState(selectedAuthor?.role || "");
  const [level, setLevel] = useState(selectedAuthor?.level || "");
  const [status, setStatus] = useState(selectedAuthor?.status || "");
  const [joiningDate, setJoiningDate] = useState(selectedAuthor?.joiningDate.split("T")[0] || "");

  const validateFormData = () => fullName && email;

  const updateAuthorDetails = async () => {
    const payload = { fullName, email, role, level, status, joiningDate };
    const updatedAuthor = await updateAuthor(selectedAuthor._id, payload)
    if (updatedAuthor) {
      authorUpdated(updatedAuthor);
    } else authorUpdated(selectedAuthor);
  }

  const createNewAuthor = async () => {
    const payload = { fullName, email, role, level, status, joiningDate };
    const newAuthor = await createAuthor(payload)

    if (newAuthor) authorCreated(newAuthor);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValidationPassed = validateFormData();

    if (formValidationPassed) {
      if (selectedAuthor) updateAuthorDetails();
      else createNewAuthor();
    }
  }

  const handleDelete = () => {
    deleteAuthor(selectedAuthor._id);
    authorDeleted(selectedAuthor);
  }

  return (
    <form className="overlay-form" onSubmit={handleSubmit}>
      <Input title="Author Name" name="fullName" placeholder="Enter author's name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <Input title="Author Email" name="email" placeholder="Enter email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input title="Role" name="role" placeholder="eg. Manager" value={role} onChange={(e) => setRole(e.target.value)} />
      <Input title="Level" name="level" placeholder="eg. Organization" value={level} onChange={(e) => setLevel(e.target.value)} />
      <Input title="Status" name="status" placeholder="eg. Online" value={status} onChange={(e) => setStatus(e.target.value)} />
      <Input title="Joining Date" name="joiningDate" placeholder="2021-01-15" type="date" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} />
      <div className="btn-container">
        {selectedAuthor && 
          <Button className="bg-red-500" onClick={handleDelete} >
            <FaTrash />
            <span>Delete</span>
          </Button>
        }
        <Button className="bg-green-400" type="submit" >
          <FaDatabase />
          <span>Save</span>
        </Button>
      </div>
    </form>
  )
};

export default AuthorForm;