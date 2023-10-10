import React from "react";

function punibtn() {
  const playpuniSound = () => {
    const audio = new Audio('/puni.mp3');
    audio.play();
  };

  return (
    <button onMouseOver={playpuniSound}>
		</button>
  );
}

export default punibtn;
