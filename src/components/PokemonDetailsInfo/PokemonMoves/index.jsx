import { Moves, MovesDiv, MoveName, Title, Move, MoveType } from "./style"
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-toggler"
import "../../PokemonMainInfo/style.css"


export const PokemonMoves = ({ pokeInfos }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Moves className="pokemon-moves" theme={theme}>
            <Title theme={theme}>Movimentos</Title>
            <MovesDiv>
                {pokeInfos.moves.map((move, index) => (
                    <Move theme={theme} key={index}>
                        <MoveName theme={theme}>{move.move.name}</MoveName>
                        <MoveType className={`typecard ${pokeInfos.movesTypes[index]}`}>{pokeInfos.movesTypes[index]}</MoveType>
                    </Move>
                ))}
            </MovesDiv>
        </Moves>
    )
}