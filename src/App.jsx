import { Clase04, Clase05, Clase06, Clase07 } from "./clases";
import { FlexComponent } from "./components/common";

function App() {
  return (
    <div style={{paddingBottom: 100}}>
      <FlexComponent align="flex-start" gap={50}>
        {/* CLASE COMPONENTES 1 - clases/Clase04
            ctrl + p Clase04 para abrirlo  o F12
      */}
       {/*  <Clase04 /> */}
        {/* CLASE COMPONENTES 2 - clases/Clase05
            ctrl + p Clase05 para abrirlo  o F12
      */}
        {/* <Clase05 /> */}
        {/* CLASE PROMISES, ASINCRONIA Y MAP */}
        {/* <Clase06 /> */}
        {/* CLASE CONSUMIENDO APIS - clases/Clase07 */}
        <Clase07 />
      </FlexComponent>
    </div>
  );
}

export default App;
