import { createContext } from "react";

const AuthorContext = createContext({
  authors: [],
  authorCreated: (author) => author,
  authorUpdated: (author) => author,
  authorDeleted: (author) => author,
});

export default AuthorContext;