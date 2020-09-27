import React from "react";

import { Container, Grid, Typography } from "@material-ui/core";
import { Instagram, LinkedIn, GitHub } from '@material-ui/icons';
import { VSCOIcon,MediumIcon } from "./CustomIcons";

import LinkButton from "./LinkButton";

const Layout = (props) =>
{

	return (
		<Container>
			<Grid
				container
				direction={"column"}
				justify={"center"}
				alignContent={"center"}
				alignItems={"center"}
				spacing={2}
				style={{height: "100vh"}}
			>
				<Grid item>
					<Typography variant={"h2"}>Ben Gillett</Typography>
					<LinkButton href={"https://www.instagram.com/benjamin_gillett"} icon={<Instagram />}/>
					<LinkButton href={"https://www.linkedin.com/in/ben-gillett"} icon={<LinkedIn />}/>
					<LinkButton href={"https://www.github.com/M3tanym"} icon={<GitHub />}/>
					<LinkButton href={"https://vsco.co/ben-gillett"} icon={<VSCOIcon />}/>
					<LinkButton href={"https://medium.com/@bnjmn.gillett"} icon={<MediumIcon />}/>
				</Grid>
			</Grid>
		</Container>
	)
};

export default Layout;
