import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Montrer le bouton lorsque l'utilisateur descend
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 bg-transparent text-grey rounded-full shadow-lg hover:bg-slate-100 transition"
        >
          <ChevronUpIcon className="h-8 w-8" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
