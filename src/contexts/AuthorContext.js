import { createContext } from "react";

const AuthorContext = createContext({
  authors: [],
  selectedAuthor: null,
  authorSelected: (author) => author,
  authorCreated: (author) => author,
  authorUpdated: (author) => author,
  authorDeleted: (author) => author,
});

export default AuthorContext;