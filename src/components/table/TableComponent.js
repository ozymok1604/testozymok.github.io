import React, { useContext } from "react";
import { UsersContext } from "../../context";
import styles from "./styles.css";

const rows = [
  {
    name: "Janes Janefd",
    company: "Google",
    phone: "(096) 707 0205",
    email: "qwert@gmail.com",
    country: "UKraine",
    status: "active",
  },
  {
    name: "Floyd Janefd",
    company: "Facebook",
    phone: "(096)7070666",
    email: "qwert@gmail.com",
    country: "Poland",
    status: "active",
  },
  {
    name: "Jacob Jones",
    company: "Google",
    phone: "(099) 337 0205",
    email: "qwert@gmail.com",
    country: "UKraine",
    status: "inactive",
  },
  {
    name: "Jane Janefd",
    company: "Google",
    phone: "(096) 717 0275",
    email: "qwert@gmail.com",
    country: "UKraine",
    status: "active",
  },
  {
    name: "Jane Janefd",
    company: "Yahooo",
    phone: "(096) 747 0205",
    email: "qwert@gmail.com",
    country: "UKraine",
    status: "inactive",
  },
];

const Table = () => {
  const { filterValue } = useContext(UsersContext);
  return (
    <div>
      <div className="table-header">
        <div className="column-label">Customer Name</div>
        <div className="column-label">Company</div>
        <div className="column-label">Phone Number</div>
        <div className="column-label">Email</div>
        <div className="column-label">Country</div>
        <div className="column-label">Status</div>
      </div>
      {rows
        .filter(
          (value) =>
            value.name.includes(filterValue) ||
            value.company.includes(filterValue) ||
            value.phone.includes(filterValue) ||
            value.email.includes(filterValue) ||
            value.country.includes(filterValue) ||
            value.status.includes(filterValue)
        )
        .map((row) => (
          <div className="row">
            <div className="row-element">{row.name}</div>
            <div className="row-element">{row.company}</div>
            <div className="row-element">{row.phone}</div>
            <div className="row-element">{row.email}</div>
            <div className="row-element">{row.country}</div>
            {row.status == "active" ? (
              <div className="status-active">{row.status}</div>
            ) : (
              <div className="status-inactive">{row.status}</div>
            )}
          </div>
        ))}
    </div>
  );
};

export { Table };
