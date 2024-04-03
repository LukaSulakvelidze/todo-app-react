import React from "react";

export const ImageComponents = ({ className, src, alt }) => {
  return (
    <>
      <img className={className} src={src} alt={alt} />
    </>
  );
};
