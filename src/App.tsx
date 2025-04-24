import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonList from "./features/pokemon/pages/PokemonListPage";
import PokemonDetail from "./features/pokemon/pages/PokemonDetailPage";
import TeamBuilder from "./features/teamBuilder/pages/TeamBuilderPage";
import Favorites from "./features/favorites/pages/FavoritesPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import AppLayout from "./layouts/AppLayout";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/pokemon" element={<PokemonList />} />
					<Route path="/pokemon/:id" element={<PokemonDetail />} />
					<Route path="/team-builder" element={<TeamBuilder />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
