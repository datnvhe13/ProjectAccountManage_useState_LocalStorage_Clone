import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { getDate } from './../../../Ultils/Helpers/getNowDate';
import { generateID } from "../../../Ultils/Helpers/generateId";

function InputForm(props) {
  // callBack props transfer from AccountContainer
  let { onHandleCreateNewAccount } = props;
  // declare States to save data in Input TextField
  let [email, setEmail] = useState("");
  let [userName, setUserName] = useState("");
  let [fullName, setFullName] = useState("");
  let [Department, setDepartment] = useState("Giám đốc");
  let [Position, setPosition] = useState("Test");

  //
  let handleCreateButton= () => {
    let accountNew = {
      id: generateID(),
      email: email,
      userName: userName,
      fullName: fullName,
      Department: Department,
      Position: Position,
      CreateDate: getDate(),
    };
    // 
    onHandleCreateNewAccount(accountNew);
  };

  let handleResetButton = () => {
    setEmail("");
    setUserName("");
    setFullName("");
  }

  return (
    <Container>
      <Form>
        {/* Email */}
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="Email"
            name="email"
            placeholder="Input Email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>
        {/* Username */}
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input
            id="Username"
            name="Username"
            placeholder="Input Username"
            type="text"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </FormGroup>

        {/* FullName */}
        <FormGroup>
          <Label for="examplePassword">FullName</Label>
          <Input
            id="FullName"
            name="FullName"
            placeholder="Input FullName"
            type="text"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Department */}
        <FormGroup>
          <Label for="exampleSelect">Select a Department</Label>
          <Input
            id="DepartmentSelect"
            name="Department"
            type="select"
            value={Department}
            onChange={(event) => {
              setDepartment(event.target.value);
            }}
          >
            <option value={"Giám đốc"}>Giám đốc</option>
            <option value={"Bảo vệ"}>Bảo vệ</option>
            <option value={"Kỹ thuật"}>Kỹ thuật</option>
            <option value={"Marketing"}>Marketing</option>
            <option value={"Kế toán"}>Kế toán</option>
          </Input>
        </FormGroup>

        {/* Position */}
        <FormGroup>
          <Label for="exampleSelect">Select a Position</Label>
          <Input
            id="PositionSelect"
            name="Position"
            type="select"
            value={Position}
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          >
            <option value={"Test"}>Test</option>
            <option value={"Dev"}>Dev</option>
            <option value={"PM"}>PM</option>
            <option value={"Scrum Master"}>Scrum Master</option>
          </Input>
        </FormGroup>

        {/* Button */}
        <Button color="primary" onClick={handleCreateButton}>
          Create
        </Button>
        <Button color="danger" onClick={handleResetButton}>Reset</Button>
      </Form>
    </Container>
  );
}

export default InputForm;
