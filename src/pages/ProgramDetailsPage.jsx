import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProgramDetails from "../components/Programs/ProgramDetails";
import { useSelector } from "react-redux";

const ProgramDetailsPage = () => {
  const { allPrograms } = useSelector((state) => state.programs);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  
  return (
    <div>
      <Header />
      <ProgramDetails data={data} />

      <Footer />
    </div>
  );
};

export default ProgramDetailsPage;
