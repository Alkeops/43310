import { useRef } from "react";
import "./Video.css";
import { Button } from "../common";
import { LuPause, LuPlay } from "react-icons/lu";

/*
    useRef nos da un espacio donde almacenar referencias, estas pueden ser a 
    nodos del dom, por ejemplo si quisieramos reproducir y pausar un video 
    necesitamos acceder a ese nodo en especifico,  y esta es la forma que nos
    permite react de hacerlo
*/

export const Video = () => {
  const videoRef = useRef(null);

  return (
    <div className="video">
      <Button
        icon={<LuPlay />} /* Se le manda un icono al button */
        className="video__play" /* Una clase para posicionar con estilos */
        onClick={() => {
          videoRef.current.play(); /* Como el nodo de video tiene la referencia, podemos saber que accedemos al metodo play para reproducir */
        }}
      />
      <Button
        icon={<LuPause />}
        className="video__pause"
        onClick={() => {
          videoRef.current.pause(); /* Como el nodo de video tiene la referencia, podemos saber que accedemos al metodo pause para pausar la reproducción */
        }}
      />
      <video ref={videoRef}>
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
      </video>
    </div>
  );
};
