import React from "react";
import { Search } from "../SearchComponent";
import { Table } from "../table/TableComponent";
import styles from "./styles.css";

const MainComponent = () => {
  return (
    <div className="block">
      <div className="header">
        <div className="header-label">
          <div className="label">All customers</div>
          <div className="min-label">Active members</div>
        </div>

        <Search />
      </div>
      <Table />
    </div>
  );
};

export { MainComponent };
