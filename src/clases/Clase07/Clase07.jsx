import { Nasa } from "../../components/Nasa"
import { Pokemons } from "../../components/Pokemons"
import { FlexComponent, Title } from "../../components/common"

export const Clase07 = () => {
    return (
        <FlexComponent align="flex-start" >
            <Title label="Clase07" />
            {/* <Pokemons /> */}
            <Nasa />
        </FlexComponent>
    )
}