import { useEffect, useState } from "react";
import { Button } from "../common";
import { GoSun } from "react-icons/go";
import { LuMoon } from "react-icons/lu";

export const ToggleTheme = () => {
  //Bool para manejar el tema, un estado simple
  const [isDarkMode, setIsDarkMode] = useState(false);

  /*
    El efecto ocurre 
    cuando se monta el componente (esta en el dom)
    cuando isDarkMode cambia, por eso esta en su array de dependencias [isDarkMode]
    si isDarkMode === false no pasaria nada porque hay un condicional
    En este lugar podria hacerse algo para agregar una clase o elemento en el document. 
    (podria ser algo como document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light))
    lo demas es trabajo de los estilos css
  */
  useEffect(() => {
    if (isDarkMode) console.log("Agregar clase de modo dark"); 
  }, [isDarkMode]);

  return (
    <Button
      icon={isDarkMode ? <LuMoon /> : <GoSun />} //Si esta habilitado muestra un icono, si no muestra otro (Clase mas avanzada)
      onClick={() => setIsDarkMode(!isDarkMode)} //Al hacer click, realiza un toggle ya que !isDarkMode seria lo opuesto de lo que tiene en ese momento isDarkMode. !false === true
    />
  );
};
