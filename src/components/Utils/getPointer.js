import { useEffect, useState } from "react";

export default function getPointer() {

    const [Pointer, getPointer] = useState({});

      const handleMotion = (event) => {
        getPointer({ X: event.clientX, Y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMotion);
  
      return () => {
        window.removeEventListener('mousemove', handleMotion);
      };
}