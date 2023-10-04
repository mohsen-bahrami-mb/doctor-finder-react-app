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

function App() {
  const { isRegisterOpen } = useRegisterModal();
  const { isLoginOpen } = useLoginModal();
  const { isUserOpen } = useNewUser();

  useEffect(() => {
    if (isLoginOpen || isRegisterOpen || isUserOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLoginOpen, isRegisterOpen, isUserOpen]);

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
