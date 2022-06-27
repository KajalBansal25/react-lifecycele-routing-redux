import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { changeStatus, fetchName } from "../actionCreator/actions";
import {
  updateAge,
  updateName,
  updateStatus,
  fetchUserName,
} from "../reducers/userReducer";
const Profile = () => {
  const { name, age, status } = useSelector((state) => {
    console.log(state);
    return state;
  });

  const dispatch = useDispatch();
  const changeAge = (age) => {
    dispatch(updateAge(age));
  };
  const changeName = () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const res2 = await res.json();
    dispatch(fetchUserName());
  };
  const changeStatus = (status) => {
    dispatch(updateStatus(status));
  };

  return (
    <>
      <h3>hello,everyone.</h3>
      <h2>I am {name}.</h2>
      <h2> I am {age} years old.</h2>
      <h2>I am {status}</h2>
      <button style={{ padding: 20 }} onClick={() => changeAge(40)}>
        update age
      </button>
      <button style={{ padding: 20 }} onClick={() => changeName()}>
        update name
      </button>
      <button style={{ padding: 20 }} onClick={() => changeStatus("Smart")}>
        update status
      </button>
    </>
  );
};

export default Profile;
