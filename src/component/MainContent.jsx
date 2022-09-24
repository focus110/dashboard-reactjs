import React from "react";
import Title from "./Title";
import SearchForm from "./SearchForm";
import Table from "./Table";
import RightIcon from "./RightIcon";

const MainContent = () => {
  return (
    <div className="wrap__box  w-full sm:w-[80%] bg-themeGrey-25">
      <div className="flex items-center justify-between">
        <Title title="Admin Dashboard" />
        <RightIcon />
      </div>
      <SearchForm />
      <Table />
    </div>
  );
};

export default MainContent;
