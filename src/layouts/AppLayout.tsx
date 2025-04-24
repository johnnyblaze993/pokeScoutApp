import { Box, Container, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				minHeight: "100vh", // ✅ allow full height + scroll
				width: "100%",
				backgroundColor: theme.palette.background.default,
				color: theme.palette.text.primary,
				overflowX: "hidden", // ✅ only hide horizontal scroll
			}}
		>
			<Container
				maxWidth={false} // Allow the container to span the full width
				sx={{
					pt: 8.5,
					height: "calc(100vh - 64px)",
					display: "flex",
					flexDirection: "column",
					width: "90%", // Increase the width of the layout
					maxWidth: "1600px", // Set a larger maximum width
					margin: "auto", // Center the layout
				}}
			>
				<Outlet />
			</Container>
		</Box>
	);
};

export default AppLayout;
