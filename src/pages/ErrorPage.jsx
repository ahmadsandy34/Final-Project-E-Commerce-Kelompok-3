/* eslint-disable no-unused-vars */
import React from "react";
import Error from "../components/error/Error";
import PropTypes from "prop-types";

const ErrorPage = ({ error = 1 }) => {
  // menampilkan jenis error berdasarkan props
  return (
    <>
    {error === 1 && (
        <Error
          nav="404 Error"
          title="404 Not Found"
          desc="Your visited page not found. You may go home page."
        />
      )}
    {error === 2 && (
        <Error
          nav="500 Error"
          title="Error Code 500"
          desc="We apologize for the inconvenience and appreciate your patience."
        />
      )}
    {error === 3 && (
        <Error
          nav="401 Error"
          title="Access Denied 401"
          desc="You do not have permission to view this page."
        />
      )}
    </>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.number.isRequired
};

export default ErrorPage;
