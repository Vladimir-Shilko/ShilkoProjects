import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button, Image, Section, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					NoteDoc
				</Text>
				<Box width="300px" height="100px" position="relative" left="300px">
					<Text>
						шилко владимир иванович
					</Text>
					<Text>
						ID:
					</Text>
				</Box>
				<Button position="relative" left="150px">
					войти
				</Button>
				<Image width="100px" height="100px" position="relative" left="0px" />
			</Box>
		</Section>
		<Box>
			<Button>
				входящие
			</Button>
			<Button>
				исходящие
			</Button>
			<Button>
				ожидают подтверждения
			</Button>
			<Button>
				просроченные
			</Button>
			<Button>
				выполненные
			</Button>
		</Box>
		<Box />
		<Box height="100px">
			<Input height="95px" position="relative" bottom="20px" type="text" />
			<Button height="95px" position="relative" bottom="20px">
				скачать
			</Button>
			<Button
				position="relative"
				bottom="20px"
				height="95px"
				display="inline"
				width="350px"
			>
				<Input type="file" width="230px" />
				загрузить
			</Button>
			<Button width="260px" overflow-x="visible" display="inline-block">
				<Input type="date" display="block" />
				<Input type="date" position="relative" right="36px" left="-4px" />
				отправить
			</Button>
			<Input height="95px" position="relative" bottom="20px" />
			<Button
				width="100px"
				height="95px"
				position="relative"
				bottom="20px"
				background="#cc0003"
			>
				удалить
			</Button>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60fe92edfb3a6f00181af8d3"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});