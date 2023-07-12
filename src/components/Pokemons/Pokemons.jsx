import { FlexComponent, Title } from "../common"
import { Pokemon } from "./Pokemon"

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

export const Pokemons = () => {
    return (
        <FlexComponent gap="8px">
            <Title label="Pokemons" variant="subtitle" />
            <Pokemon />
        </FlexComponent>
    )
}