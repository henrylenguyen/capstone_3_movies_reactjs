import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import FormUserUpdate from "./FormUserUpdate";

function FormUser(props) {
  const userLogin = useSelector((state) => state.user.userLogin);

  const { switchChange, onSubmitUpdate } = props;

  return (
    <section className="userForm my-6">
      {!userLogin && <h2>Loading...</h2>}

      {!switchChange && userLogin && (
        <>
          <div className="mb-4">
            <TextField
              label={"Email"}
              InputProps={{ readOnly: true }}
              value={userLogin?.email}
              fullWidth
              variant="standard"
            />
          </div>
          <div className="mb-4">
            <TextField
              label={"Họ tên"}
              InputProps={{ readOnly: true }}
              value={userLogin?.hoTen}
              fullWidth
              variant="standard"
            />
          </div>
          <div className="mb-4">
            <TextField
              label={"Điện thoại"}
              InputProps={{ readOnly: true }}
              value={userLogin?.soDT}
              fullWidth
              variant="standard"
            />
          </div>
        </>
      )}

      {switchChange && userLogin && (
        <FormUserUpdate onSubmitUpdate={onSubmitUpdate} />
      )}
    </section>
  );
}

export default FormUser;
