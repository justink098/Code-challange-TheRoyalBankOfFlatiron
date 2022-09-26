import React, {useEffect , useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const[useData, deployData] = useState([])

  useEffect(() =>{
    fetch("http://localhost:8001/transactions")
    .then((data) => data.json())
    .then((info) => {
      deployData(info)
      console.log(info)
    })
  }, []);
   
  function deployInfo(form){
    const newArray=[...useData, form]
    deployData(newArray)
  }
  return (
    <div>
      <Search />
      <AddTransactionForm  deploy={deployInfo}/>
      <TransactionsList  changes={useData}/>
    </div>
  );
}

export default AccountContainer;
