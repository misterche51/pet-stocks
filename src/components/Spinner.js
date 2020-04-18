import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
const Spinner = () => {
  return (
    <Loader className= "tabs__spinner"
            type="Puff"
            color="#00BFFF"
            height={80}
            width={80}
    />
  );
}

export default Spinner;
