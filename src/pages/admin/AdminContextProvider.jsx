import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [userRole, setUserRole] = useState("user");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedInUser(JSON.parse(user));
      switch (JSON.parse(user).username) {
        case "admin":
          setUserRole("admin");
          break;
        case "doctor":
          setUserRole("doctor");
          break;
        case "patient":
          setUserRole("patient");
          break;
        default:
          setUserRole("user");
          break;
      }
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  const setLoggedUserDetails = useCallback((user) => {
    localStorage.setItem("user", JSON.stringify(user));
  }, []);

  const contextValue = useMemo(() => {
    return {
      userRole,
      loggedInUser,
      setLoggedUserDetails,
    };
  }, [userRole,loggedInUser, setLoggedUserDetails]);

  return (
    <AdminContext.Provider value={contextValue}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
