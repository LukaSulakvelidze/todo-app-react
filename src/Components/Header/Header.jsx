import React from "react";
import { ImageComponents } from "../ImageComponents";

const Header = ({
  headerClassname,
  onClick,
  Image_component_className,
  Image_component_src,
  Image_component_alt,
}) => {
  return (
    <header className={headerClassname}>
      <h1 className="todo">TODO</h1>
      <div onClick={onClick} className="dark_mode_cont">
        <ImageComponents
          className={Image_component_className}
          src={Image_component_src}
          alt={Image_component_alt}
        />
      </div>
    </header>
  );
};

export default Header;
