import { Route, Routes } from "react-router-dom"
import { Home } from "./home";
import { PokemonDetails } from "./pokemon-details";

const AppRoutes = () => (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/pokemon-info/:pokemon" element={<PokemonDetails />} />
        </Routes>
);

export { AppRoutes }