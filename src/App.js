import React from "react";
import backgroundImage from "./assets/skydiving.jpg";
import { Box, Container, Stack, Typography, styled } from "@mui/material";

const logo = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679650180/skydive%20rhino/images/skydive_rhino_kenya_logo_trnkqy.png";
const width = window.innerWidth

const StyledWrapper = styled(Box)(({ theme }) => ({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	background: `url(${backgroundImage}) no-repeat center center fixed`,
	backgroundSize: "cover",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const BoxWrapper = styled(Container)(({ theme }) => ({
	minWidth: "400px",
	backgroundColor: "rgba(1,1,1, 0.6)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "300px",
	borderRadius: 3,
	paddingTop: "70px",
	paddingBottom: "70px",
}));

const App = () => {
	return (
		<StyledWrapper>
			<BoxWrapper maxWidth="lg">
				<Stack direction="column" textAlign="left" width="100%" spacing={3}>
					<img
						src={logo}
						alt="Logo"
						style={{ marginBottom: "20px", maxWidth: "200px" }}
					/>
					<Typography variant="h2" style={{ color: "#fff", fontWeight: 500 }}>
						Website Coming Soon
					</Typography>
					<Typography
						variant="h5"
						style={{
							color: "#fff",
							margin: "0 auto",
						}}
					>
						Welcome to the world of adventure and excitement. Our website is currently under construction, but we can't
						wait to share the thrill of skydiving with you. Stay
						tuned for updates!
					</Typography>
					<Typography variant="h4" style={{ color: "#fff", fontWeight: 500 }}>
						info@skydiverhinokenya.com
					</Typography>
				</Stack>
			</BoxWrapper>
		</StyledWrapper>
	);
};

export default App;
