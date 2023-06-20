import React, { useEffect } from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  // get props from Account container
  // , onHandleEditButton
  let { listAccount, onHandleDeleteAccount, onHandleEditButton, onHandleUpdateAccount } = props;
  // 
  let onHandleDelete = (id_Dele) => {
    // console.log("id_Dele : ", id_Dele);
    onHandleDeleteAccount(id_Dele)
  }

  let onHandleUpdate = (accountUpdate) => {
    onHandleEditButton();
    onHandleUpdateAccount(accountUpdate)
    
  }
 
  let items = "";
  // Check :  If listAccount !="" will display data
  if (listAccount) {
    items = listAccount.map((account, index) => {
      return (
        <tr key={index}>
          <td>{account.id}</td>
          <td>{account.email}</td>
          <td>{account.userName}</td>
          <td>{account.fullName}</td>
          <td>{account.Department}</td>
          <td>{account.Position}</td>
          <td>{account.CreateDate}</td>
          <td>
            <Button color="warning" onClick={()=>{onHandleUpdate(account)}}>Edit</Button>
          </td>
          <td>
            <Button color="warning" onClick={()=>{onHandleDelete(account.id)}}>Delete</Button>
          </td>
        </tr>
      );
    });
  }

  return items;
}

export default ResultFormItem;
