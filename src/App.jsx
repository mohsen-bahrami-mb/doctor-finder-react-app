import AppARoutes from "./routes";
import Layout from "../src/components/layout/Layout";
import MenuSidebar from "./components/navbar/MenuSidebar";
import PatientTabs from "./components/patient/PatientTabs";

function App() {
  
  return (
    <Layout>
      <AppARoutes />
      <PatientTabs />
      <MenuSidebar />
    </Layout>
  );
}

export default App;
