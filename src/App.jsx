import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Clase04, Clase05, Clase06, Clase07, Clase10 } from "./clases";
import { Clase08 } from "./clases/Clase08";
import { FlexComponent } from "./components/common";
import { Pokemon } from "./components/Pokemons/Pokemon";

const getPokemon = async (pokemonNumber) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
    );
    if (!response.ok) {
      throw new Error("No hay pokemon");
    }
    return response;
  } catch (e) {
    console.log(e);
  }
};

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="clase04" element={<Clase04 />} />
      <Route path="clase05" element={<Clase05 />} />
      <Route path="clase06" element={<Clase06 />} />
      <Route path="clase07" element={<Clase07 />} />
      <Route path="clase08" element={<Clase08 />} />
      <Route path="clase10" element={<Clase10 />} />
      <Route /* Te permite hacer peticiones antes de montar el componente de la ruta 
        loader recibe {params} [en este caso id] y ejecuta la funcion. 
        id = identifica el resultado de esa peticion en especifico
        errorElement se detona si hubo algun error en la carga
      */
        path="pokemon/:id"
        element={<Pokemon />}
        loader={({ params }) => getPokemon(params.id)}
        id="pokeId"
        errorElement={<div>Ocurrio un error</div>}
      />
      <Route
        path="*"
        element={
          <Navigate to="Clase04" />
        } /* Navigate es un componente de redirección */
      />
      
    </>
  )
);

function App() {
  return (
    <div style={{ paddingBottom: 100 }}>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
