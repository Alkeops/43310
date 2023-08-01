import "./Title.css";
/* Componente básico Title que recibe label como prop y renderiza un <h1>
     variant - el estilo especifico del titulo, para eso utilizo la metodologia BEM https://getbem.com/ 
    y template string para la clase, (ver css). De momento se inicializa con un valor vacio, si no mandan variant siempre sera igual a ""
    por ahora solo existe title, subtitle [Esto se puede perfeccionar mas adelante]

*/
export const Title = ({label, variant= "title"}) => <h1 className={`title title--${variant}`}>{label}</h1>;