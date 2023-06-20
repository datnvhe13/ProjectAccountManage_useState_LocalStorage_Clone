import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputUpdateForm from "./InputUpdateForm";

function ModalUpdateAccount(props) {
  // callBack props transfer from AccountContainer
  let {
    showUpdateForm,
    onHandleCloseUpdateButton,
    onHandleEditButton,
    accountUpdate,
    updateAccount
  } = props;
  // function close modal
  let handleCloseModal = () => {
    onHandleCloseUpdateButton();
  };

  return (
    <Container>
      <Modal isOpen={showUpdateForm}>
        <ModalHeader>Update Account</ModalHeader>
        <ModalBody>
          {/* Input Form */}
          <InputUpdateForm
            onHandleEditButton={onHandleEditButton}
            accountUpdate={accountUpdate}
            updateAccount={updateAccount}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              handleCloseModal();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalUpdateAccount;
