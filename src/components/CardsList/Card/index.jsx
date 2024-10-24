import { useContext } from "react";
import { Link } from "react-router-dom";
import { Div, P, TypesUl, Type } from './card-style.jsx';
import { ThemeContext } from "../../../contexts/theme-toggler"
import "../../../index.css";
import "../../../assets/fonts/PixelifySans-Regular.ttf";
export const Card = ({ pokemon }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Link to={`/pokemon-info/${pokemon.name}`} >
            <Div className="card" theme={theme}>
                <img src={pokemon.image} alt={pokemon.name} />
                <h3 className="pokemon-name">{pokemon.name}</h3>
                <TypesUl>
                    {pokemon.types.map((type, index) => (
                        <Type key={index} className={`typecard ${type.type.name}`}>{type.type.name}</Type>
                    ))}
                </TypesUl>
                <P className="pokemon-id">Pokédex number: #{pokemon.id}</P>
            </Div>
        </Link>
    )
}