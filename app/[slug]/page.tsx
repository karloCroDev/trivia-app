import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

type retrievedData = {
  params: {
    slug: string;
  };
  searchParams: {};
};
const page = (id: retrievedData) => {
  console.log(id);
  return (
    <>
      <Navbar />
      <Main category={id.params.slug} />
    </>
  );
};

export default page;
