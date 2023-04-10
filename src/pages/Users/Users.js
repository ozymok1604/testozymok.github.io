import { useState } from "react";
import { MainComponent } from "../../components/main-component";
import { SideMenuComponent } from "../../components/side-menu";
import { UsersContext } from "../../context";

const Users = () => {
  const [filterValue, setFilterValue] = useState("");
  const handleFilterChange = ({ target: { value } }) => {
    setFilterValue(value);
  };
  return (
    <UsersContext.Provider value={{ handleFilterChange, filterValue }}>
      <SideMenuComponent />
      <MainComponent />
    </UsersContext.Provider>
  );
};

export { Users };
