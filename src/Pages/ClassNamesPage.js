import React, { useState } from "react";
import { useGetClassesQuery, useCreateClassMutation } from "../states/apiSlice";
import ClassNames from "../components/classTables/ClassNamescomponents";

const ClassNamesPage = () => {
  // FOR FETCHING

  const { data, isLoading, isSuccess, isError, error } = useGetClassesQuery(`2023-2024`);
  const[createClass]=useCreateClassMutation()
  console.log(data);
  let rows = [];
  if (isLoading) {
    console.log("loading");
  }
  if (isError) {
    console.log(`the api provided error: ${error}`);
  }
  if (isSuccess) {
    const { data: classes } = data;
    const { classes: klasses } = classes;
    rows = klasses;
    console.log(rows);
  }

  const [newClass, setNewClass] = useState({
    name: "",
    category: "",
  });

  const handleChange = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createClass(newClass);
    console.log(newClass);
    setNewClass({ name: "", category: "" });
  };
  const handleRowDelete = () => {
    console.log("weee");
  };

  return (
    <>
      <ClassNames
        rows={rows}
        loading={isLoading || !rows}
        className={"S6 MPC 2019"}
        newClass={newClass}
        setNewClass={setNewClass}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        handleRowDelete={handleRowDelete}
      />
    </>
  );
};

export default ClassNamesPage;