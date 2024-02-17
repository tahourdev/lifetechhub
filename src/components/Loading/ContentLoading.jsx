import React from "react";
import { ClipLoader, BounceLoader, ScaleLoader } from "react-spinners";
import Spinner from "./Spinner";

const ContentLoading = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <ScaleLoader color="#36d7b7" />
    </div>
  );
};

export default ContentLoading;
