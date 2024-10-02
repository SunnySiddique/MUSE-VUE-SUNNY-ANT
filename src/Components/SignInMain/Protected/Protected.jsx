import { Navigate } from "react-router-dom";
import { useAuthentication } from "../../../context/FirebaseContext";

const Protected = ({ children }) => {
  const { currentUser } = useAuthentication();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Protected;
