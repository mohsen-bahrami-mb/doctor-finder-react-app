import AppRoutes from "./routes";
import Layout from "../src/components/layout/Layout";
import LoginModal from "./components/modal/LoginModal";
import MenuSidebar from "./components/navbar/MenuSidebar";
import PatientTabs from "./components/patient/PatientTabs";
import RegisterModal from "./components/modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import { useEffect } from "react";
import useLoginModal from "./stores/useLoginModal";
import useRegisterModal from "./stores/useRegisterModal";

function App() {
  const { isRegisterOpen } = useRegisterModal();
  const { isLoginOpen } = useLoginModal();
  
  useEffect(()=> {
    if (isLoginOpen || isRegisterOpen) {
      document.body.classList.add("overflow-hidden"); 
    } else {
      document.body.classList.remove("overflow-hidden"); 
    }
  }, [isLoginOpen, isRegisterOpen])
  
  return (
    <Layout>
      <ToasterProvider />
      {isRegisterOpen && <RegisterModal />}
      {isLoginOpen && <LoginModal />}
      <AppRoutes />
      <PatientTabs />
      <MenuSidebar />
    </Layout>
  );
}

export default App;
