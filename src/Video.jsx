import { useEffect, useRef } from "react";

const config = {
  facingMode: 'user',
  width: 400,
  height: 400
}

export default function Video({ className }) {
  const videoRef = useRef(null)
  useEffect(() => {
    const navigator = window.navigator
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: false, video: config })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          alert("No se pudo utilizar la camara :(");
          console.log("No se pudo utilizar la camara :(", err);
        })
    } else {
      alert("No existe la funcion getUserMedia... oops :( no se puede usar la camara");
    }
  }, [])

  return (
    <video ref={videoRef} autoPlay={true} className={className}></video>
  )
}