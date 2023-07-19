import {
  NavLink,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  useLocation,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import { Clase04, Clase05, Clase06, Clase07 } from "./clases";
import { Clase08 } from "./clases/Clase08";
import { Button, FlexComponent } from "./components/common";

const getPokemon = async (pokemonName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("No se pudo obtener el pokemon");
    }
    return response;
  } catch (e) {
    throw new Error("No se pudo obtener el pokemon");
  }
};

const Test = () => {
  const pokemon = useRouteLoaderData("pokemon");
  const params = useParams();
  const location = useLocation();
  console.log({ params, pokemon, location });

  return <div>{pokemon.name}</div>;
};
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Principal</h1>
      <NavLink
        to="clase04"
        style={({ isActive }) => ({
          background: isActive ? "red" : "blue",
        })}
      >
        Clase 04
      </NavLink>
      <Button label="Clase 05" onClick={() => navigate("clase05")} />
      <Button label="Atras" onClick={() => navigate(-1)} />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          necessitatibus consectetur delectus in ducimus. Quam vel voluptatum
          placeat maiores laboriosam.
        </div>
      }
      element={<Navbar />}
    >
      <Route path="clase04" element={<Clase04 />} />
      <Route path="clase05" element={<Clase05 />} />
      <Route path="clase06" element={<Clase06 />} />
      <Route path="clase07" element={<Clase07 />} />
      <Route path="clase08" element={<Clase08 />} />
      <Route
        path="pokemon/:pokemonName"
        element={<Test />}
        errorElement={<div>No existe ese Pokemon</div>}
        loader={({ params: { pokemonName } }) => getPokemon(pokemonName)}
        id="pokemon"
      />
      <Route
        path="*"
        element={<Navigate to="Clase04"/>}
        errorElement={<div>No existe ese Pokemon</div>}
      />
    </Route>
  )
);

function App() {
  return (
    <div style={{ paddingBottom: 100 }}>
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
        {/*  <Clase07 /> */}
        {/* - */}
        <RouterProvider router={router} />
      </FlexComponent>
    </div>
  );
}

export default App;
