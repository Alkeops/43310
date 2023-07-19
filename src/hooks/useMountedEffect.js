/*
    useEffect  - Primero se montan
               - Cambios de Dependencias

   useMountedEffect(()=>{

    efecto
   },[ dependencias])
*/

import { useEffect, useRef } from "react";

export const useMountedEffect = (effect, deps) => {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) effect();
  }, [...deps]);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
};
