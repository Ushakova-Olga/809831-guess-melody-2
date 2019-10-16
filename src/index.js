import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./components/welcome-screen";

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };

  ReactDOM.render(
      <WelcomeScreen
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
      />,
      document.querySelector(`#root`)
  );
};

init();
