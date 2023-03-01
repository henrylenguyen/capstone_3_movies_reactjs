import React from "react";
import bg from "assets/images/background-login-admin.png";
import LoginAdmin from "layouts/admin/login/LoginAdmin";


const LoginPage = () => {
  return (
    <>
      <div className="h-full relative">
        <img src={bg} alt="background" className="object-cover h-full" />
        <LoginAdmin></LoginAdmin>
      </div>
    </>
  );
};

export default LoginPage;
