import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      variant="text"
      startIcon={<ArrowBackIcon />}
      sx={{ alignSelf: "flex-start", mb: 2 }}
    >
      Back
    </Button>
  );
};

export default BackButton;
