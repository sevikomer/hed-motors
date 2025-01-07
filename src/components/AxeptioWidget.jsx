import { useEffect } from "react";

const AxeptioWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.axept.io/sdk.js";
    script.async = true;
    script.onload = () => console.log("Axeptio script loaded");
    script.onerror = () => console.error("Failed to load Axeptio script");
    document.body.appendChild(script);

    window.axeptioSettings = {
      clientId: "677d79e8913888e62b750148", // Remplacez par votre Client ID
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default AxeptioWidget;
