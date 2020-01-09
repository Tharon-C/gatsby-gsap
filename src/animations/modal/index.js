import React from "react";
import Button from '../../components/Button'
import ModalComponent from "./modal-component";

const Modal = () => {
  const [ modalVisible, setModalVisible ] = React.useState(false)
  return (
    <div>
      <Button
        style={{ marginBottom: "50px" }}
        onClick={() => setModalVisible(true)}
      >
        Show Modal
      </Button>
      <ModalComponent
        visible={modalVisible}
        close={() => setModalVisible(false)}
      />
    </div>
  );
}

export default Modal;
