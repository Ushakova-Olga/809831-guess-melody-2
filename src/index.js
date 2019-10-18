import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./components/welcome-screen/welcome-screen.jsx";

const init = () => {
  const settings = {
    gameTime: 4,
    errorCount: 7,
  };

  ReactDOM.render(
      <WelcomeScreen
        errorCount={settings.errorCount}
        time={settings.gameTime}
      />,
      document.querySelector(`#root`)
  );
};

init();
