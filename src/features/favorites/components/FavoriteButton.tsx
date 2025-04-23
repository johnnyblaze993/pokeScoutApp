import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useFavoritesStore } from "../../../store/favoriteStore";

interface FavoriteButtonProps {
  name: string;
}

const FavoriteButton = ({ name }: FavoriteButtonProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const handleClick = () => {
    if (isFavorite(name)) {
      removeFavorite(name); // Remove from favorites if already a favorite
    } else {
      addFavorite(name); // Add to favorites if not already a favorite
    }
  };

  return (
    <IconButton onClick={handleClick} color="error">
      {isFavorite(name) ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default FavoriteButton;
