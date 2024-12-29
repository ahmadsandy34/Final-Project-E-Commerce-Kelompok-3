import React from "react";
import Auth from "../components/auth/Auth";
import SEO from "../components/SEO";

const AuthPage = () => {
  return (
    <>
      <SEO
        title="Log In or Sign Up - Exclusive"
        description="Access your Exclusive account or sign up to enjoy the best shopping experience. Safe and secure login options."
        keywords="login, register, sign in, sign up, exclusive account"
        robots="index, follow"
      />
      <Auth />
    </>
  );
};

export default AuthPage;
