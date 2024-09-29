import { useState, useEffect } from "react";

function AvvisoImportante({ messages }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 20000); // Cambia messaggio ogni 5 secondi

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="w-full bg-red-600 text-white font-bold text-lg py-2 fixed top-0 left-0 z-50 overflow-hidden">
      <div className="flex justify-center items-center whitespace-nowrap animate-scroll">
        <p>{messages[currentMessageIndex]}</p>
      </div>
    </div>
  );
}

export default AvvisoImportante;
