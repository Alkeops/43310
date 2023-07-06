import { Clase04 } from "./clases";
import { Clase05 } from "./clases/Clase05";
import { FlexComponent } from "./components/common";

function App() {
  return (
    <div>
      <FlexComponent align="flex-start" gap={50}>
        {/* CLASE COMPONENTES 1 - clases/Clase04
            ctrl + p Clase04 para abrirlo 
      */}
        <Clase04 />
        {/* CLASE COMPONENTES 2 - clases/Clase05
            ctrl + p Clase05 para abrirlo 
      */}
        <Clase05 />
      </FlexComponent>
    </div>
  );
}

export default App;
