import AppRoutes from "./routes";
import Layout from "../src/components/layout/Layout";
import LoginModal from "./components/modal/LoginModal";
import MenuSidebar from "./components/navbar/MenuSidebar";
import PatientTabs from "./components/patient/PatientTabs";
import RegisterModal from "./components/modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import UserModal from "./components/modal/UserModal";
import { useEffect } from "react";
import useLoginModal from "./stores/useLoginModal";
import useNewUser from "./stores/useNewUser";
import useRegisterModal from "./stores/useRegisterModal";
import useTokenState from "./stores/useTokenState";
import axios from "axios";

function App() {
  const { isRegisterOpen } = useRegisterModal();
  const { isLoginOpen } = useLoginModal();
  const { isUserOpen } = useNewUser();
  const { isToken } = useTokenState();

  useEffect(() => {
    isToken && (axios.defaults.headers.common["x-auth-token"] = isToken);
    if (isLoginOpen || isRegisterOpen || isUserOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLoginOpen, isRegisterOpen, isUserOpen, isToken]);

  return (
    <Layout>
      <ToasterProvider />
      {isRegisterOpen && <RegisterModal />}
      {isLoginOpen && <LoginModal />}
      {isUserOpen && <UserModal />}
      <AppRoutes />
      <PatientTabs />
      <MenuSidebar />
    </Layout>
  );
}

export default App;
