import React from "react";
import Transaction from "./Transaction";

function TransactionsList({changes}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {changes.map(change=> {
          return(
            <Transaction 
            date={change.date}
            desctiption={change.desctiption}
            category={change.category}
            amount={change.amount}
            key={change.id}
            />
          )
        })}
      </tbody>
    </table>
  );
}

export default TransactionsList;
