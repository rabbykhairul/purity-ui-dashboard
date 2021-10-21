import { createContext } from 'react';

const UserContext = createContext({
  user: null,
  userLoggedIn: (user) => user,
  userLoggedOut: () => {}
});

export default UserContext;