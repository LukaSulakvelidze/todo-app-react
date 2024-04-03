import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import sun_icon from "../assets/Icons/Sun_Icon.png";
import moon_icon from "../assets/Icons/Moon_Icon.png";

const LandPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [bodyClass, setBodyClass] = useState("");

  const changeBodyClass = (newClass) => {
    setBodyClass(newClass);
  };

  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);

  return (
    <>
      <Header
        headerClassname={darkMode ? "header_dark" : null}
        onClick={() => {
          setDarkMode(!darkMode);
          {
            darkMode
              ? changeBodyClass("body_light")
              : changeBodyClass("body_dark");
          }
        }}
        Image_component_className={darkMode ? "sun_icon" : "moon_icon"}
        Image_component_src={darkMode ? sun_icon : moon_icon}
        Image_component_alt={darkMode ? "sun_icon" : "moon_icon"}
      />
      <Main
        form_className={darkMode ? "form_dark" : null}
        radio_input_className={
          darkMode ? "radio_input radio_input_dark" : "radio_input"
        }
        tasks_container_className={
          darkMode ? "tasks_container tasks_container_dark" : "tasks_container"
        }
        task_className={darkMode ? "task_dark" : "task"}
        label_className={darkMode ? "label_dark" : null}
        create_input_className={
          darkMode ? "create_input create_input_dark" : "create_input"
        }
        statistic_container_className={
          darkMode
            ? "statistic_container statistic_container_dark"
            : "statistic_container"
        }
        filter_cont_className={
          darkMode
            ? "filter_cont_dark filter_cont_mobile"
            : "filter_cont_mobile"
        }
      />
      <Footer />
    </>
  );
};

export default LandPage;
