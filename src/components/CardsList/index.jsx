import { Grid, Flex } from "./style";
import { Card } from "./Card";

export const CardsList = ({ pokemons }) => {
    const Container = pokemons.length > 4 ? Grid : Flex;
    return (
        <Container>
            {pokemons.map((pokemon, index) => (
                <Card pokemon={pokemon} key={index}/>
            ))}
        </Container>
    )
}