import React from "react";
import theme from "theme";
import { Theme, Text, Link, Box, Image, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsColumns, BsImages, BsEnvelope, BsBell, BsGraphUp, BsColumnsGutters, BsGrid, BsImage, BsPhone, BsCheckBox } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"lp/nl/creeer-een-website-voor-een-schoonheidsstudio"} />
		<Helmet>
			<title>
				Creëer een website voor een schoonheidsstudio — uKit. Website builder for business
			</title>
			<meta name={"description"} content={"Maak zelf een mooie en gebruiksvriendelijke website. uKit heeft alles wat u nodig hebt voor dit en meer: een handige bouwer, kant-en-klare sjablonen, onbeperkte hosting, ingebouwde formulieren en meldingen, speciale SEO-tools"} />
			<meta property={"og:title"} content={"Creëer een website voor een schoonheidsstudio — uKit. Website builder for business"} />
			<meta property={"og:description"} content={"Maak zelf een mooie en gebruiksvriendelijke website. uKit heeft alles wat u nodig hebt voor dit en meer: een handige bouwer, kant-en-klare sjablonen, onbeperkte hosting, ingebouwde formulieren en meldingen, speciale SEO-tools"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/favicon.png?v=2021-08-20T04:41:32.122Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#4773FF"} />
		</Helmet>
		<Components.HeaderNl />
		<Section padding="84px 0 100px 0" lg-padding="48px 15px 100px 15px" md-padding="60px 15px 50px 15px" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				align-items="center"
				lg-width="100%"
				lg-flex-wrap="wrap"
				lg-align-items="center"
				lg-justify-content="center"
				max-width="1056px"
			/>
			<Box
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="100%"
				lg-margin="0px 0px 90px 0px"
				lg-padding="0px 20px 0px 20px"
				width="50%"
				display="flex"
				flex-direction="column"
			>
				<Text
					as="h1"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Creëer een website voor een schoonheidsstudio
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Maak zelf een mooie en gebruiksvriendelijke website. uKit heeft alles wat u nodig hebt voor dit en meer: een handige bouwer, kant-en-klare sjablonen, onbeperkte hosting, ingebouwde formulieren en meldingen, speciale SEO-tools
				</Text>
				<Link
					border-style="solid"
					text-decoration-line="initial"
					font="--lead"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					border-radius="100px"
					background="#4773ff"
					display="inline"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
					href="https://ukit.com/signup"
					color="--white"
					border-width="1px"
					border-color="--color-secondary"
				>
					Creëer een website
				</Link>
			</Box>
			<Box
				position="relative"
				flex-direction="column"
				lg-width="100%"
				lg-position="relative"
				lg-left="0px"
				width="50%"
				display="flex"
				left="20px"
				lg-padding="0px 20px 0px 20px"
			>
				<Image
					bottom="auto"
					lg-height="100px"
					lg-left="-24px"
					lg-top="-42px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					width="150px"
					position="absolute"
					right="auto"
					height="150px"
					left="-70px"
					top="-70px"
					lg-width="100px"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_nail_en.webp?v=2021-11-08T19:37:10.912Z"
					width="112%"
					border-width="2px"
					border-style="solid"
					lg-width="100%"
					loading="lazy"
					border-color="#6c757d2f"
					border-radius="18px"
					position="static"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					position="absolute"
					left="auto"
					lg-width="100px"
					lg-height="100px"
					lg-right="-26px"
					width="150px"
					height="150px"
					right="-135px"
					top="auto"
					bottom="-80px"
					transform="rotate(180deg)"
					lg-bottom="-44px"
				/>
			</Box>
		</Section>
		<Section padding="40px 0 80px 0" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				lg-align-items="center"
				lg-justify-content="flex-start"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
				align-items="center"
				lg-flex-wrap="wrap"
			/>
			<Box
				width="20%"
				flex-direction="column"
				align-items="flex-start"
				lg-margin="0px 0px 30px 0px"
				md-width="100%"
				align-self="flex-start"
				display="flex"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
			>
				<Icon
					icon={BsColumns}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="--secondary"
					category="bs"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Prachtige aanpasbare sjablonen
				</Text>
			</Box>
			<Box
				display="flex"
				flex-direction="column"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				md-width="100%"
				align-self="flex-start"
				width="20%"
				align-items="flex-start"
				lg-margin="0px 0px 30px 0px"
			>
				<Icon
					category="bs"
					icon={BsImages}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="--secondary"
				/>
				<Text font="--lead" margin="0px 0px 0px 0px" color="--darkL1">
					Ingebouwde foto-editor
				</Text>
			</Box>
			<Box
				width="20%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="33.33333%"
				lg-flex-direction="column"
				md-width="100%"
				display="flex"
				padding="0px 20px 0px 0px"
				lg-margin="0px 0px 30px 0px"
				align-self="flex-start"
			>
				<Icon
					align-items="center"
					size="63px"
					color="--secondary"
					category="bs"
					icon={BsEnvelope}
					margin="0 0 18px 0"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Kant-en-klare feedbackformulieren
				</Text>
			</Box>
			<Box
				md-width="100%"
				md-margin="0px 0px 30px 0px"
				width="20%"
				flex-direction="column"
				lg-flex-direction="column"
				lg-width="33.33333%"
				align-self="flex-start"
				display="flex"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
			>
				<Icon
					align-items="center"
					size="63px"
					color="--secondary"
					category="bs"
					icon={BsBell}
					margin="0 0 18px 0"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" width="95%">
					Gratis SMS-berichten
				</Text>
			</Box>
			<Box
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				md-width="100%"
				display="flex"
				flex-direction="column"
				width="20%"
				align-self="flex-start"
			>
				<Icon
					icon={BsGraphUp}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="--secondary"
					category="bs"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					SEO-wizard{" "}
				</Text>
			</Box>
		</Section>
		<Section md-padding="40px 0 100px 0" padding="80px 0 183px 0" lg-padding="80px 0 100px 0" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
				flex-wrap="wrap"
			/>
			<Box
				padding="0px 20px 50px 0px"
				lg-width="100%"
				lg-padding="0px 0px 0px 0px"
				width="58.333%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
			>
				<Text
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
				>
					Voorbeelden van website-designs voor schoonheidsstudio’s
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					U hoeft geen site vanaf nul te maken — veel gemakkelijker om te beginnen met een kant-en-klaar thematisch sjabloon. Het kleurenschema en de lettertypes kunnen in een paar klikken worden gewijzigd. En dan gewoon uw domein aansluiten en de site publiceren. Zo simpel is het!
				</Text>
			</Box>
			<Box
				lg-width="100%"
				width="33.333%"
				display="flex"
				flex-direction="row"
				align-items="flex-start"
				margin="0px 0px 0px 8.333999999999996%"
				lg-margin="0px 0px 0px 0px"
			>
				<Box display="flex" flex-direction="column" margin="0px 60px 0px 0px">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						350+
					</Text>
					<Text color="--dark" margin="0px 0px 0px 0px" font="--base">
						Ontwerpen
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" width="30%">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						40+
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						Categorieën
					</Text>
				</Box>
			</Box>
			<Box
				width="66.667%"
				margin="60px 0px 0px 0px"
				display="flex"
				padding="0px 15px 0px 15px"
				position="relative"
				align-items="center"
				justify-content="center"
				lg-width="100%"
			>
				<Image
					left="-184px"
					bottom="75px"
					lg-height="123.547px"
					sm-height="62.4062px"
					sm-top="auto"
					height="124.75px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_industry_en.jpg?v=2021-10-31T16:06:43.865Z"
					position="absolute"
					right="auto"
					top="auto"
					sm-left="-11px"
					sm-right="auto"
					sm-border-radius="6px"
					loading="lazy"
					lg-bottom="30px"
					lg-left="-43px"
					sm-width="100px"
					sm-bottom="20px"
					border-radius="18px"
					width="198px"
					lg-right="auto"
					lg-top="auto"
				/>
				<Image
					lg-height="231.375px"
					lg-display="none"
					lg-bottom="-137px"
					lg-width="213px"
					border-radius="18px"
					top="270.567px"
					lg-right="auto"
					lg-top="auto"
					width="315.7663333333333px"
					bottom="-93.49177777777777px"
					left="-339px"
					right="727.2376666666667px"
					lg-left="-92px"
					loading="lazy"
					height="197.92777777777778px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_icecream_ru.webp?v=2021-09-08T11:26:04.851Z"
					position="absolute"
				/>
				<Image
					sm-right="-11px"
					border-color="#000000"
					sm-width="170px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_psychologist_en.webp?v=2021-09-28T16:00:29.898Z"
					bottom="265.156px"
					right="98px"
					top="-79px"
					sm-bottom="auto"
					sm-top="-44px"
					sm-border-radius="6px"
					height="188.833px"
					border-radius="18px"
					left="301.119px"
					sm-height="107.766px"
					sm-left="auto"
					loading="lazy"
					position="absolute"
					width="304.883px"
				/>
				<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_advert_en.webp?v=2021-10-31T13:56:49.544Z" border-radius="18px" sm-border-radius="6px" loading="lazy" />
			</Box>
			<Box
				justify-content="center"
				align-items="center"
				position="relative"
				lg-width="100%"
				width="33.333%"
				margin="60px 0px 0px 0px"
				display="flex"
				padding="0px 15px 0px 15px"
			>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/hairstylist-and-client-taking-in-salon.webp?v=2021-11-09T10:45:32.904Z"
					bottom="306.058px"
					lg-right="-42px"
					height="179.95px"
					sm-width="154px"
					sm-bottom="auto"
					sm-left="31px"
					position="absolute"
					right="-78.81818181818181px"
					left="164.927px"
					lg-bottom="auto"
					lg-top="-45px"
					sm-top="-51px"
					sm-border-radius="6px"
					border-radius="18px"
					width="265.8681818181818px"
					top="-111px"
					lg-height="187.5px"
					sm-height="96.25px"
					lg-left="auto"
					sm-right="auto"
					loading="lazy"
				/>
				<Image
					border-radius="18px"
					top="313.617px"
					bottom="-98px"
					left="162.983px"
					lg-left="auto"
					sm-height="auto"
					sm-border-radius="6px"
					right="-53px"
					lg-bottom="-67px"
					lg-height="154.625px"
					lg-right="-11px"
					sm-left="auto"
					sm-right="72px"
					width="242px"
					position="absolute"
					sm-width="132px"
					loading="lazy"
					height="159.383px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/cosmetologist-doing-face-treatment-and-applying-face-mask.webp?v=2021-11-09T10:46:05.822Z"
					lg-top="auto"
					sm-bottom="-27px"
					sm-top="auto"
				/>
				<Image
					border-radius="18px"
					width="192px"
					right="-200px"
					sm-right="-66px"
					sm-border-radius="6px"
					bottom="auto"
					left="auto"
					lg-height="119.047px"
					sm-bottom="auto"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Rv4eQizc8WwsricgTJGH.webp?v=2021-08-23T21:27:54.077Z"
					lg-top="-46px"
					sm-left="auto"
					loading="lazy"
					lg-left="200px"
					sm-height="119.047px"
					sm-top="-38px"
					position="absolute"
					top="120px"
					lg-right="auto"
					lg-bottom="auto"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_model_en.jpg?v=2021-10-31T18:27:15.585Z"
					border-radius="18px"
					lg-width="100%"
					sm-border-radius="6px"
					loading="lazy"
				/>
			</Box>
		</Section>
		<Section background="--color-secondary" padding="130px 0 130px 0" lg-padding="100px 0 100px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				lg-margin="0px 0px 40px 0px"
				width="75%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 0px 0px 0px"
				margin="0px 30% 40px 0px"
				lg-width="100%"
			>
				<Text
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
				>
					Belangrijkste functies van uKit
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--white">
					Met uKit kunt u uw eigen schoonheidsstudio website bouwen, zelfs als het de eerste keer is dat u zoiets doet. Het platform is ontwikkeld voor zowel beginnende als professionele gebruikers. U heeft geen hulp nodig van derde partijen
				</Text>
			</Box>
			<Box
				justify-content="center"
				lg-width="100%"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				width="33.333%"
				padding="0px 15px 0px 15px"
				display="flex"
				flex-direction="column"
			>
				<Box
					md-width="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
				>
					<Icon
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsColumnsGutters}
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Stijlvolle sjablonen met thematische content
					</Text>
				</Box>
				<Box
					lg-width="50%"
					md-width="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
				>
					<Icon
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsEnvelope}
						margin="0 0 18px 0"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Kant-en-klare feedbackformulieren
					</Text>
				</Box>
				<Box
					md-width="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
				>
					<Icon
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsBell}
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Gratis SMS-berichten
					</Text>
				</Box>
				<Box
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					display="flex"
					flex-direction="column"
				>
					<Icon
						category="bs"
						icon={BsGrid}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Alles wat u nodig hebt voor een professionele presentatie van uw diensten
					</Text>
				</Box>
				<Box
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
				>
					<Icon
						color="#ffffff"
						category="bs"
						icon={BsImage}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Uw eigen filters toepassen in de ingebouwde foto-editor
					</Text>
				</Box>
				<Box
					md-width="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
				>
					<Icon
						color="#ffffff"
						category="bs"
						icon={BsPhone}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Adaptief design
					</Text>
				</Box>
				<Box
					lg-width="50%"
					md-width="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
				>
					<Icon
						category="bs"
						icon={BsCheckBox}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Onbeperkte hosting{" "}
					</Text>
				</Box>
				<Box
					md-width="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
				>
					<Icon
						category="bs"
						icon={BsGraphUp}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						SEO-wizard
					</Text>
				</Box>
			</Box>
			<Box
				width="58.333%"
				margin="0px 0px 0px 8.333999999999996%"
				display="flex"
				lg-margin="30px 0px 0px 0px"
				lg-width="100%"
			>
				<Image
					border-radius="18px"
					box-shadow="0px 0px 35px 0px #00000040"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/FireShot%20Capture%20416%20-%20Home%20-%20ctuguhij.ukit%201%281%29.webp?v=2021-11-09T10:53:38.096Z"
					width="100%"
					loading="lazy"
					align-self="auto"
					display="inline-block"
				/>
			</Box>
		</Section>
		<Section padding="130px 0 40px 0" color="--darkL1" md-padding="100px 0 20px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				lg-margin="0px 0px 22px 0px"
				lg-width="100%"
				width="66.667%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 15px 0px 15px"
				margin="0px 33.333% 22px 0px"
			>
				<Text
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
				>
					Zo creëert u een website voor uw schoonheidsstudio met uKit
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1">
					Wilt u een mooie website maken zonder een fortuin uit te geven aan ontwikkelaars? Wat kan er makkelijker zijn?! Maak een account aan bij uKit en begin met het maken van uw site. Wij helpen u bij elke stap in het proces. Veel van de taken zijn al geautomatiseerd
				</Text>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="40px 0px 40px 0px">
				<Box
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					width="50%"
					padding="0px 15px 0px 15px"
					display="flex"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/one.svg?v=2021-08-19T23:41:55.506Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Ontwerp staat op eerste plaats
					</Text>
					<Text
						width="84%"
						md-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
					>
						Alle kant-en-klare sjablonen in de catalogus zijn volledig gratis en hebben geen beperkingen. Selecteer degene die u wilt en pas hem aan. Er zijn eenvoudige oplossingen voor schoonheidsinstituten en privé schoonheidsspecialistes
					</Text>
					<Link
						margin="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						border-color="--color-secondary"
						color="--white"
						text-decoration-line="initial"
						padding="15px 25px 16px 25px"
						background="--color-secondary"
						display="inline"
						hover-background="linear-gradient(to right,#537cff,#537cff)"
						href="https://ukit.com/neowizard#templates/all"
						font="--lead"
						border-radius="100px"
					>
						Bekijk templates
					</Link>
				</Box>
				<Box md-width="100%" width="50%" margin="0px 0px 0px 0px" display="flex">
					<Image
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/v14fQ9MhFpEvlQgku9aj.webp?v=2021-08-23T21:27:54.101Z"
					/>
				</Box>
			</Box>
			<Box
				width="100%"
				display="flex"
				flex-wrap="wrap"
				margin="40px 0px 40px 0px"
				md-margin="0px 0px 40px 0px"
			>
				<Box
					md-order="1"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					md-width="100%"
				>
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Group%2059.webp?v=2021-10-03T18:56:02.706Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
					/>
				</Box>
				<Box
					width="50%"
					padding="0px 15px 0px 60px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 15px 0px 15px"
				>
					<Image height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/two.svg?v=2021-08-19T23:46:45.698Z" margin="0px 0px 24px 0px" width="48px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Vertel uw klanten over uzelf en laat ze uw werk zien
					</Text>
					<Text
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
					>
						Beschrijf uw vaardigheden en voeg uw lijst van diensten toe. Introduceer uw team en geef voorbeelden van hun beste werk. Toon de locatie van uw studio op de online kaart en benoem off-site diensten, indien van toepassing. Voeg een prijzenlijst en informatie over uw actuele speciale aanbiedingen en kortingen toe. Versleep de blokken en bewerk hun inhoud
					</Text>
				</Box>
			</Box>
			<Box
				width="100%"
				display="flex"
				flex-wrap="wrap"
				margin="40px 0px 40px 0px"
				md-margin="0px 0px 40px 0px"
			>
				<Box
					width="50%"
					padding="0px 15px 0px 15px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/three.svg?v=2021-08-19T23:48:35.499Z" margin="0px 0px 24px 0px" />
					<Text color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif" margin="0px 0px 24px 0px">
						Stel mobiele- en tabletversies in
					</Text>
					<Text
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
					>
						Schakel over naar de voorbeeldmodus en controleer of al uw pagina’s er goed uitzien op alle schermtypes. Indien nodig kunt u afzonderlijke elementen of blokken verbergen op verschillende soorten apparaten, zoals pc’s, tablets of telefoons. Bovendien kunt u speciale ontwerpopties instellen voor geselecteerde blokken
					</Text>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
					<Image
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Frame%202656%282%29.webp?v=2021-10-04T17:29:39.059Z"
						width="100%"
						display="flex"
						align-items="center"
					/>
				</Box>
			</Box>
			<Box flex-wrap="wrap" margin="40px 0px 40px 0px" width="100%" display="flex">
				<Box
					margin="0px 0px 0px 0px"
					display="flex"
					md-width="100%"
					md-order="1"
					width="50%"
				>
					<Image
						align-items="center"
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/domain_popup.webp?v=2021-10-22T13:51:39.652Z"
						width="100%"
						display="flex"
					/>
				</Box>
				<Box
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 15px 0px 15px"
					width="50%"
					padding="0px 15px 0px 60px"
					display="flex"
					flex-direction="column"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/four.svg?v=2021-08-19T23:50:40.052Z" margin="0px 0px 24px 0px" />
					<Text md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif" margin="0px 0px 24px 0px" color="--darkL1" font="--headline3">
						Verbind uw domein
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						U kunt een mooie en gedenkwaardige domeinnaam met een populaire extensie direct op het uKit Dashboard kiezen. Alle nodige DNS-records worden automatisch ingesteld. Alle uKit-sites krijgen gratis SSL-certificaten en HTTPS-protocol
					</Text>
				</Box>
			</Box>
			<Box
				width="100%"
				display="flex"
				flex-wrap="wrap"
				margin="40px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
			>
				<Box
					md-width="100%"
					width="50%"
					padding="0px 15px 0px 15px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/five.svg?v=2021-08-19T23:51:49.573Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Publiceer uw site
					</Text>
					<Text
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
					>
						Uw site is nu klaar voor zijn eerste bezoekers. Na elke bijwerking of bewerking van de inhoud, klikt u op de knop ’’Publiceren’’ om de wijzigingen op te slaan. uKit maakt automatische back-ups en stelt u in staat handmatige back-ups te maken, zodat u wijzigingen met één klik kunt terugdraaien
					</Text>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
					<Image
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Group%2076.webp?v=2021-09-28T16:38:49.156Z"
						width="100%"
						align-items="center"
						display="flex"
						justify-content="center"
					/>
				</Box>
			</Box>
		</Section>
		<Section
			color="--darkL1"
			lg-padding="40px 0 100px 0"
			md-padding="40px 0 60px 0"
			padding="40px 0 130px 0"
			lg-overflow-x="hidden"
		>
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				justify-content="center"
				lg-padding="0px 0px 0px 0px"
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				padding="0px 190px 0px 190px"
				margin="0px 0px 22px 0px"
			>
				<Text
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Bijna klaar!
				</Text>
				<Text margin="0px 0px 36px 0px" font="--base" color="--darkL1" text-align="center">
					Het is beter om uw site voortdurend te verbeteren en te promoten. En onze speciale tools helpen u daarbij: een SEO wizard, een sectie met statistieken en analytics, integratie met mailingsystemen en CRM, een wizard om de site toe te voegen aan de Google Search Console, en nog veel meer. U hebt geen ervaring of speciale kennis nodig om ze te gebruiken: sommige functies worden zelfs automatisch toegepast
				</Text>
				<Link
					border-style="solid"
					border-radius="100px"
					background="--color-secondary"
					href="https://ukit.com/signup"
					color="--white"
					text-decoration-line="initial"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					font="--lead"
					border-width="1px"
					border-color="--color-secondary"
					display="inline"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
				>
					Creëer een website
				</Link>
			</Box>
		</Section>
		<Section
			padding="130px 0 100px 0"
			background="--color-lightD1"
			lg-padding="100px 0 100px 0"
			md-padding="80px 0 100px 0"
			lg-overflow-x="hidden"
		>
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				display="flex"
				justify-content="center"
				lg-padding="0px 0px 0px 0px"
				md-margin="0px 0px 20px 0px"
				width="100%"
				flex-direction="column"
				align-items="center"
				padding="0px 190px 0px 190px"
				margin="0px 0px 30px 0px"
			>
				<Text
					color="--darkL1"
					text-align="center"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
				>
					Wat kunt u nog meer creëren met uKit?
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1" text-align="center">
					Met uKit kunt u snel bijna alle soorten bedrijfssites lanceren: effectieve landingspagina’s, mooie portfolio’s en promo-websites, eenvoudige online winkels
				</Text>
			</Box>
			<Box margin="36px 0px 30px 0px" width="100%" display="flex" flex-wrap="wrap">
				<Box
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 15px 0px 0px"
					md-width="100%"
				>
					<Link href="/lp/nl/hosting-met-een-websitebouwer" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_auto_en.jpg?v=2021-10-31T16:06:10.863Z"
							width="100%"
							display="flex"
							align-items="center"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Hosting met een websitebouwer
						</Text>
					</Link>
				</Box>
				<Box
					flex-direction="column"
					padding="0px 0px 0px 15px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
				>
					<Link href="/lp/nl/creeer-een-website-voor-online-cursussen" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_abstract_en.webp?v=2021-09-28T15:59:44.719Z"
							width="100%"
							display="flex"
							align-items="center"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Creëer een website voor online cursussen
						</Text>
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				flex-wrap="wrap"
				margin="36px 0px 30px 0px"
				md-margin="0px 0px 30px 0px"
				width="100%"
			>
				<Box
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 15px 0px 0px"
				>
					<Link text-decoration-line="initial" href="/lp/nl/creeer-een-website-voor-psychologen-of-psychotherapeuten" color="--darkL1" hover-color="--primary">
						<Image
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_psychologist_en.webp?v=2021-09-28T16:00:29.898Z"
							width="100%"
						/>
						<Text md-margin="0px 0px 30px 0px" margin="0px 0px 0px 0px" font="--lead">
							Creëer een website voor psychologen of psychotherapeuten
						</Text>
					</Link>
				</Box>
				<Box
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 0px 0px 15px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
				>
					<Link text-decoration-line="initial" href="/lp/nl/creeer-een-website-voor-hotels" color="--darkL1" hover-color="--primary">
						<Image
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_decor_en.webp?v=2021-09-28T16:08:13.810Z"
							width="100%"
							display="flex"
							align-items="center"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Creëer een website voor hotels
						</Text>
					</Link>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				margin="36px 0px 30px 0px"
				md-margin="0px 0px 0px 0px"
				width="100%"
				display="flex"
			>
				<Box
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Link hover-color="--primary" text-decoration-line="initial" href="/lp/nl/creeer-een-website-voor-een-cafe-of-restaurant" color="--darkL1">
						<Image
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_foods_en.webp?v=2021-11-09T09:53:54.262Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Creëer een website voor een café- of restaurant
						</Text>
					</Link>
				</Box>
				<Box
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 0px 0px 15px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<Link href="/lp/nl/creeer-een-website-voor-uw-tandheelkundige-kliniek" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_medicine_en.webp?v=2021-09-28T16:16:02.493Z"
							width="100%"
							display="flex"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Creëer een website voor uw tandheelkundige kliniek
						</Text>
					</Link>
				</Box>
			</Box>
		</Section>
		<Section
			padding="130px 0 130px 0"
			color="--darkL1"
			background="--color-secondary"
			lg-padding="100px 0 100px 0"
			lg-overflow-x="hidden"
		>
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				margin="0px 0px 22px 0px"
				justify-content="center"
				lg-padding="0px 0px 0px 0px"
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				padding="0px 190px 0px 190px"
			>
				<Text
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					sm-text-align="center"
					as="h2"
					text-align="center"
					margin="0px 0px 24px 0px"
				>
					Creëer een website voor een schoonheidsstudio met uKit
				</Text>
				<Text margin="0px 0px 36px 0px" font="--lead" color="--lightD1" text-align="center">
					Bekijk alle uKit-functies en zie zelf hoe het werkt. Krijg 14 dagen gratis toegang zonder enige persoonlijke info in te hoeven voeren
				</Text>
				<Link
					margin="0px 0px 0px 0px"
					border-style="solid"
					padding="15px 25px 16px 25px"
					border-width="1px"
					border-color="--color-secondary"
					border-radius="100px"
					href="https://ukit.com/signup"
					color="--secondary"
					text-decoration-line="initial"
					font="--lead"
					display="inline"
					background="--color-white"
					hover-background="--color-lightD1"
				>
					Probeer het gratis uit
				</Link>
			</Box>
		</Section>
		<Components.FooterNl />
		<RawHtml>
			<script async={true} place={"endOfHead"} rawKey={"61546ad90ff1ad7e45a80d2c"}>
				{"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-N7L44LR');"}
			</script>
			<script async={true} place={"endOfBody"} rawKey={"61546afc558d30d91557a10e"}>
				{"<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-N7L44LR\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>"}
			</script>
			<style place={"endOfHead"} rawKey={"611e3e5f17f5d1001e31a361"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<style place={"endOfBody"} rawKey={"612539d9aa881e07b1d98103"}>
				{"a[href=\"https://quarkly.io/\"]{\ndisplay: none;\n}"}
			</style>
			<style place={"endOfHead"} rawKey={"612539f5007a9d741d076fb3"}>
				{"/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}"}
			</style>
			<script
				type={""}
				async={true}
				src={""}
				place={"endOfHead"}
				rawKey={"61433fb2d64a419fdbb2bf13"}
			>
				{"var uKitAnalytics = (function() {\n\tvar uKitAnalyticsClass = function () {\n\t\tthis.urlAPI = 'https://ukit.com/api/ukitanalitics.gif';\n\t\tthis.guestId = '60789dbe42133a76c73b4fff';\n\t\tthis.historyId = '61433f88d23fb3200498f32d';\n\t\t\n\t\tthis.setCookie = function (name, value, ms) {\n\t\t\tvar expires = '';\n\t\t\tif (ms) {\n\t\t\t\tvar dt = new Date();\n\t\t\t\tdt.setDate(dt.getTime() + ms);\n\t\t\t\texpires = '; expires=' + dt.toUTCString();\n\t\t\t}\n\t\t\t\n\t\t\tdocument.cookie = name + '=' + value + expires + '; path=/';\n\t\t};\n\t\t\n\t\tthis.getCookie = function (name) {\n\t\t\tvar nameEQ = name + '=';\n\t\t\tvar ca = document.cookie.split(';');\n\t\t\tfor (var i = 0; i < ca.length; i++) {\n\t\t\t\tvar c = ca[i];\n\t\t\t\twhile (c.charAt(0) == ' ') c = c.substring(1, c.length);\n\t\t\t\tif (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n\t\t\t}\n\t\t\t\n\t\t\treturn null;\n\t\t};\n\t\t\n\t\tthis.updateVisit = function () {\n\t\t\tvar self = this;\n\t\t\t\n\t\t\tvar anticache = Date.now();\n\t\t\t\n\t\t\tvar uKitAnaliticsGif = new Image();\n\t\t\tuKitAnaliticsGif.onload = function () {\n\t\t\t\t\n\t\t\t};\n\t\t\t\n\t\t\tuKitAnaliticsGif.src = self.urlAPI + '?guestId=' + self.guestId + '&historyId=' + self.historyId + '&anticache=' + anticache;\n\t\t};\n\t\t\n\t\tthis.addVisit = function () {\n\t\t\tvar self = this;\n\t\t\t\n\t\t\tvar anticache = Date.now();\n\t\t\t\n\t\t\tvar uKitAnaliticsGif = new Image();\n\t\t\tuKitAnaliticsGif.onload = function () {\n\t\t\t\t\n\t\t\t};\n\t\t\t\n\t\t\tvar referer = encodeURIComponent(document.referrer + (document.location.search.length > 1 ? ('?' + document.location.search.substr(1)) : ''));\n\t\t\tvar location = encodeURIComponent(window.location.href);\n\t\t\tvar landing = encodeURIComponent(window.location.hostname + window.location.pathname);\n\t\t\t\n\t\t\tuKitAnaliticsGif.src = self.urlAPI + '?guestId=' + self.guestId + '&historyId=' + self.historyId + '&referer=' + referer + '&location=' + location + '&landing=' + landing + '&anticache=' + anticache;\n\t\t};\n\t\t\n\t\tthis.init = function () {\n\t\t\tvar self = this;\n\t\t\t\n\t\t\tif (self.getCookie('uKitAnalyticsSO') != null) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t\n\t\t\tself.setCookie('uKitAnalytics', '@' + self.guestId);\n\t\t\tself.setCookie('uKitAnalyticsSO', true);\n\t\t\t\n\t\t\tself.addVisit();\n\t\t\t\n\t\t\t/*\n\t\t\twindow.addEventListener('focus', function (event) {\n\t\t\t\tself.updateVisit();\n\t\t\t}, false);\n\t\t\t*/\n\t\t};\n\t};\n\t\n\tvar uKitAnalyticsObj = new uKitAnalyticsClass();\n\tuKitAnalyticsObj.init();\n\t\n\treturn uKitAnalyticsObj;\n})();"}
			</script>
			<link rel={"canonical"} href={"/lp/nl/creeer-een-website-voor-een-schoonheidsstudio/"} place={"endOfHead"} rawKey={"618a5613ac17c117460a630e"} />
		</RawHtml>
	</Theme>;
});