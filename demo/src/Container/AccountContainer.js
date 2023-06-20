import React, { useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import { Container } from "reactstrap";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ModalUpdateAccount from "../Components/Account/UpdateAccount/ModalUpdateAccount";

function AccountContainer() {
  // Declare State to manage list Account
  let [listAccount, setListAccount] = useState([]);
  // declare State to manage Open/Close state of Modal Create New Modal
  let [showForm, setShowForm] = useState(false);
  let [showUpdateForm, setShowUpdateForm] = useState(false);
  // declare state to save account need update
  let [accountUpdate, setAccountUpdate] = useState({});
  // Callback function when click on "Create New Button" on Modal
  let onHandleCreateButton = () => {
    // set State
    setShowForm(true);
  };

  let onHandleEditButton = () => {
    setShowUpdateForm(true);
  };

  // Callback function when click on "Close Button" on Modal
  let onHandleCloseButton = () => {
    // set State
    setShowForm(false);
  };
  let onHandleCloseUpdateButton = () => {
    setShowUpdateForm(false);
  };
  // callBack function when click "Create" button in Input Form
  let onHandleCreateNewAccount = (account_new) => {
    // push to listAccount
    listAccount.push(account_new);
    // set State listAccount
    setListAccount(listAccount);
    // save data into LocalStorage
    localStorage.setItem("listAccount", JSON.stringify(listAccount));
    // alert
    alert("Add New account successfully !");
    // close modal
    onHandleCloseButton();
  };

  // callBack function when click "Delete" button in Input Form
  let onHandleDeleteAccount = (id_Delete) => {
    // find index
    var account_Index = listAccount.findIndex(
      (account) => account.id === id_Delete
    );
    console.log("account_Index: ", account_Index);
    console.log("listAccount: ", listAccount);
    // delete
    listAccount.splice(account_Index, 1);

    // set State list Account
    setListAccount(listAccount);
    // save data to LocalStorage
    localStorage.setItem("listAccount", JSON.stringify(listAccount));
    // alert
    alert("Delete successfully !");
  };

  // function set State for Account_Update to display on Input Modal Update
  let onHandleUpdateAccount = (accountUpdate) => {
    setAccountUpdate(accountUpdate);
  };

  // function update account
  let updateAccount = (account_Update) => {
    console.log('account_Update: ', account_Update);
    let listAccount_LocalStorage = JSON.parse(localStorage.getItem("listAccount"));
    console.log('listAccount_LocalStorage: ', listAccount_LocalStorage);
    let accountUpdate_Index = listAccount_LocalStorage.findIndex((account)=>account.id === account_Update.id);
    console.log('accountUpdate_Index: ', accountUpdate_Index);
    // set value
    listAccount_LocalStorage[accountUpdate_Index].fullName = account_Update.fullName;
    listAccount_LocalStorage[accountUpdate_Index].Department = account_Update.Department;
    listAccount_LocalStorage[accountUpdate_Index].Position = account_Update.Position;
    // save data to LocalStorage
    localStorage.setItem("listAccount", JSON.stringify(listAccount_LocalStorage));
    // alert
    alert("Update successfully !");
    setShowUpdateForm(false);
  }

  // declare useEffect
  useEffect(() => {
    if (localStorage && localStorage.getItem("listAccount")) {
      let listAccount_LocalStorage = JSON.parse(
        localStorage.getItem("listAccount")
      );

      // console.log("listAccount_LocalStorage: ", listAccount_LocalStorage);
      setListAccount(listAccount_LocalStorage);
    }
  });

  return (
    <Container>
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
      <ResultForm
        listAccount={listAccount}
        onHandleDeleteAccount={onHandleDeleteAccount}
        onHandleEditButton={onHandleEditButton}
        onHandleUpdateAccount={onHandleUpdateAccount}
      />
      <ModalCreateNewAccount
        showForm={showForm}
        onHandleCloseButton={onHandleCloseButton}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
      />
      <ModalUpdateAccount
      updateAccount={updateAccount}
        accountUpdate={accountUpdate}
        showUpdateForm={showUpdateForm}
        onHandleCloseUpdateButton={onHandleCloseUpdateButton}
      />
    </Container>
  );
}

export default AccountContainer;
