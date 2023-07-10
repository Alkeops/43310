import { Clase04, Clase06 } from "./clases";
import { Clase05 } from "./clases/Clase05";
import { FlexComponent } from "./components/common";

function App() {
  return (
    <div style={{paddingBottom: 100}}>
      <FlexComponent align="flex-start" gap={50}>
        {/* CLASE COMPONENTES 1 - clases/Clase04
            ctrl + p Clase04 para abrirlo  o F12
      */}
        <Clase04 />
        {/* CLASE COMPONENTES 2 - clases/Clase05
            ctrl + p Clase05 para abrirlo  o F12
      */}
        <Clase05 />
        {/* CLASE PROMISES, ASINCRONIA Y MAP */}
        <Clase06 />
      </FlexComponent>
    </div>
  );
}

export default App;
