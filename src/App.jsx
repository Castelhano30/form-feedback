import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    
        <Layout>
        <Banner />
        <Formulario />
        </Layout>
    
  );
};

export default App;

