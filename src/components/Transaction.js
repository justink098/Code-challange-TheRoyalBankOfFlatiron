import React from "react";

function Transaction({date, desctiption, category, amount}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{desctiption}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
