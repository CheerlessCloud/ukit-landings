import React from "react";
import theme from "theme";
import { Theme, Text, Link, Box, Image, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsColumns, BsImages, BsEnvelope, BsGear, BsTablet, BsColumnsGutters, BsImage, BsPencil, BsPhone, BsCloud, BsBarChart, BsEnvelopeOpen } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"lp/nl/creeer-een-kunstenaarsportfolio"} />
		<Helmet>
			<title>
				Creëer een kunstenaarsportfolio — uKit. Website builder for business
			</title>
			<meta name={"description"} content={"Met uKit kunt u een functionele portfolio met een modern ontwerp en een mobiele versie bouwen zonder te programmeren - alles wat u nodig hebt is een avond en uw verbeelding"} />
			<meta property={"og:title"} content={"Creëer een kunstenaarsportfolio — uKit. Website builder for business"} />
			<meta property={"og:description"} content={"Met uKit kunt u een functionele portfolio met een modern ontwerp en een mobiele versie bouwen zonder te programmeren - alles wat u nodig hebt is een avond en uw verbeelding"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/favicon.png?v=2021-08-20T04:41:32.122Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#4773FF"} />
		</Helmet>
		<Components.HeaderNl />
		<Section padding="84px 0 100px 0" lg-padding="48px 15px 100px 15px" md-padding="60px 15px 50px 15px" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				align-items="center"
				lg-width="100%"
				lg-flex-wrap="wrap"
				lg-align-items="center"
				lg-justify-content="center"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
			/>
			<Box
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="100%"
				lg-margin="0px 0px 90px 0px"
				lg-padding="0px 20px 0px 20px"
				width="50%"
				display="flex"
			>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h1"
				>
					Creëer een kunstenaarsportfolio
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Met uKit kunt u een functionele portfolio met een modern ontwerp en een mobiele versie bouwen zonder te programmeren — alles wat u nodig hebt is een avond en uw verbeelding
				</Text>
				<Link
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
					border-radius="100px"
					background="#4773ff"
					color="--white"
					font="--lead"
					margin="0px 0px 0px 0px"
					display="inline"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
					href="https://ukit.com/signup"
					text-decoration-line="initial"
					padding="15px 25px 16px 25px"
				>
					Creëer een portfolio
				</Link>
			</Box>
			<Box
				display="flex"
				position="relative"
				left="20px"
				flex-direction="column"
				lg-width="100%"
				width="50%"
				lg-left="0px"
				lg-padding="0px 20px 0px 20px"
				lg-position="relative"
			>
				<Image
					left="-70px"
					bottom="auto"
					lg-width="100px"
					lg-height="100px"
					lg-left="-24px"
					lg-top="-42px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					height="150px"
					right="auto"
					top="-70px"
					width="150px"
					position="absolute"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_model_en.jpg?v=2021-10-31T18:27:15.585Z"
					width="112%"
					border-width="2px"
					border-style="solid"
					border-color="#6c757d2f"
					border-radius="18px"
					lg-width="100%"
					loading="lazy"
					position="static"
				/>
				<Image
					position="absolute"
					lg-width="100px"
					lg-bottom="-44px"
					lg-right="-26px"
					right="-135px"
					top="auto"
					bottom="-80px"
					transform="rotate(180deg)"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					width="150px"
					height="150px"
					left="auto"
					lg-height="100px"
				/>
			</Box>
		</Section>
		<Section padding="40px 0 80px 0" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				align-items="center"
				lg-flex-wrap="wrap"
				lg-align-items="center"
				lg-justify-content="flex-start"
				max-width="1056px"
			/>
			<Box
				lg-margin="0px 0px 30px 0px"
				align-self="flex-start"
				lg-width="33.33333%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-flex-direction="column"
				md-width="100%"
				width="20%"
			>
				<Icon
					category="bs"
					icon={BsColumns}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="--secondary"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Mooie templates
				</Text>
			</Box>
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				lg-width="33.33333%"
				lg-margin="0px 0px 30px 0px"
				align-self="flex-start"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-flex-direction="column"
				md-width="100%"
			>
				<Icon
					category="bs"
					icon={BsImages}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="--secondary"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Stijlvolle galerijen en sliders
				</Text>
			</Box>
			<Box
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-margin="0px 0px 30px 0px"
				md-width="100%"
				width="20%"
				flex-direction="column"
				lg-width="33.33333%"
				lg-flex-direction="column"
				align-self="flex-start"
				display="flex"
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
					Feedbackformulieren
				</Text>
			</Box>
			<Box
				md-margin="0px 0px 30px 0px"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				md-width="100%"
				width="20%"
				display="flex"
				align-self="flex-start"
			>
				<Icon
					align-items="center"
					size="63px"
					color="--secondary"
					category="bs"
					icon={BsGear}
					margin="0 0 18px 0"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" width="95%">
					Intuïtieve visuele editor
				</Text>
			</Box>
			<Box
				flex-direction="column"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				width="20%"
				display="flex"
				align-items="flex-start"
				lg-flex-direction="column"
				md-width="100%"
				align-self="flex-start"
			>
				<Icon
					size="63px"
					color="--secondary"
					category="bs"
					icon={BsTablet}
					margin="0 0 18px 0"
					align-items="center"
				/>
				<Text font="--lead" margin="0px 0px 0px 0px" color="--darkL1">
					Adaptief design
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 183px 0" lg-padding="80px 0 100px 0" md-padding="40px 0 100px 0" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				flex-wrap="wrap"
				max-width="1056px"
			/>
			<Box
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 50px 0px"
				lg-width="100%"
				lg-padding="0px 0px 0px 0px"
				width="58.333%"
				display="flex"
			>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Voorbeelden van portfolio-ontwerpen voor kunstenaars
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					U kunt elk van de ontwerpen in de catalogus kiezen. Sjablonen kunnen gemakkelijk worden aangepast aan uw behoeften en doelstellingen. U hoeft de code niet aan te passen. Het is een fluitje van een cent!
				</Text>
			</Box>
			<Box
				align-items="flex-start"
				margin="0px 0px 0px 8.333999999999996%"
				lg-margin="0px 0px 0px 0px"
				lg-width="100%"
				width="33.333%"
				display="flex"
				flex-direction="row"
			>
				<Box display="flex" flex-direction="column" margin="0px 60px 0px 0px">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						350+
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
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
				display="flex"
				padding="0px 15px 0px 15px"
				position="relative"
				align-items="center"
				justify-content="center"
				lg-width="100%"
				width="66.667%"
				margin="60px 0px 0px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_service_en.webp?v=2021-10-04T19:25:32.838Z"
					right="auto"
					bottom="75px"
					top="auto"
					lg-left="-43px"
					sm-border-radius="6px"
					loading="lazy"
					left="-184px"
					lg-bottom="30px"
					lg-height="123.547px"
					sm-height="62.4062px"
					sm-left="-11px"
					sm-top="auto"
					border-radius="18px"
					position="absolute"
					width="198px"
					sm-width="100px"
					height="124.75px"
					lg-right="auto"
					lg-top="auto"
					sm-bottom="20px"
					sm-right="auto"
				/>
				<Image
					lg-height="231.375px"
					lg-right="auto"
					border-radius="18px"
					position="absolute"
					right="727.2376666666667px"
					lg-bottom="-137px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_foods_en.webp?v=2021-09-28T16:00:54.401Z"
					width="315.7663333333333px"
					top="270.567px"
					loading="lazy"
					height="197.92777777777778px"
					left="-339px"
					lg-left="-92px"
					lg-top="auto"
					lg-width="213px"
					bottom="-93.49177777777777px"
					lg-display="none"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_industry_en.jpg?v=2021-10-31T16:06:43.865Z"
					border-radius="18px"
					width="304.883px"
					left="301.119px"
					top="-79px"
					sm-right="-11px"
					loading="lazy"
					bottom="265.156px"
					sm-width="170px"
					sm-top="-44px"
					position="absolute"
					sm-bottom="auto"
					sm-border-radius="6px"
					border-color="#000000"
					right="98px"
					sm-height="107.766px"
					sm-left="auto"
					height="188.833px"
				/>
				<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_abstract_en.webp?v=2021-09-28T15:59:44.719Z" border-radius="18px" sm-border-radius="6px" loading="lazy" />
			</Box>
			<Box
				position="relative"
				lg-width="100%"
				width="33.333%"
				margin="60px 0px 0px 0px"
				display="flex"
				padding="0px 15px 0px 15px"
				justify-content="center"
				align-items="center"
			>
				<Image
					lg-top="-45px"
					sm-height="96.25px"
					sm-border-radius="6px"
					loading="lazy"
					position="absolute"
					top="-111px"
					left="auto"
					width="236.78972727272728px"
					right="-57px"
					lg-left="auto"
					sm-bottom="auto"
					bottom="auto"
					lg-bottom="auto"
					lg-height="187.5px"
					sm-width="154px"
					sm-left="31px"
					sm-right="auto"
					sm-top="-51px"
					height="149.03063636363638px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_advert_en.webp?v=2021-10-31T13:56:49.544Z"
					border-radius="18px"
					lg-right="-42px"
				/>
				<Image
					border-radius="18px"
					position="absolute"
					lg-left="auto"
					lg-top="auto"
					sm-bottom="-27px"
					left="162.983px"
					lg-bottom="-67px"
					lg-height="154.625px"
					lg-right="-11px"
					sm-width="132px"
					right="-53px"
					sm-right="72px"
					sm-top="auto"
					height="159.383px"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/female-artist-painting-in-studio%201.webp?v=2021-09-24T11:36:18.693Z"
					width="242px"
					top="313.617px"
					bottom="-98px"
					sm-height="auto"
					sm-left="auto"
					sm-border-radius="6px"
				/>
				<Image
					loading="lazy"
					top="120px"
					lg-right="auto"
					lg-height="119.047px"
					sm-bottom="auto"
					sm-right="-66px"
					sm-border-radius="6px"
					right="-200px"
					bottom="auto"
					sm-height="119.047px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Rv4eQizc8WwsricgTJGH.webp?v=2021-08-23T21:27:54.077Z"
					position="absolute"
					sm-top="-38px"
					sm-left="auto"
					border-radius="18px"
					width="192px"
					left="auto"
					lg-bottom="auto"
					lg-left="200px"
					lg-top="-46px"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_banking_en.webp?v=2021-09-28T16:11:24.736Z"
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
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 0px 0px 0px"
				margin="0px 25% 40px 0px"
				lg-width="100%"
				lg-margin="0px 0px 40px 0px"
				width="75%"
			>
				<Text
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
				>
					Belangrijkste functies van uKit
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--white">
					Zelfs als u nieuw bent op het platform, bent u verzekerd van een portfolio-site van hoge kwaliteit. Geen programmeervaardigheden vereist. Pagina’s worden opgebouwd met kant-en-klare widgets en elementen — gewoon slepen en neerzetten waar u wilt
				</Text>
			</Box>
			<Box
				display="flex"
				flex-direction="column"
				justify-content="center"
				lg-width="100%"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				width="33.333%"
				padding="0px 15px 0px 15px"
			>
				<Box
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					display="flex"
				>
					<Icon
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsColumnsGutters}
						margin="0 0 18px 0"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Thematische sjablonen voor portfolio’s
					</Text>
				</Box>
				<Box
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					display="flex"
				>
					<Icon
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsImage}
						margin="0 0 18px 0"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Mooie sliders en galerijen
					</Text>
				</Box>
				<Box
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					display="flex"
				>
					<Icon
						category="bs"
						icon={BsPencil}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Ingebouwde foto-editor (met kant-en-klare animatie-effecten)
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
				>
					<Icon
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsEnvelope}
					/>
					<Text font="--lead" margin="0px 0px 0px 0px" color="--white">
						Formulieren voor feedback en terugbellen, live chats
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
				>
					<Icon
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsPhone}
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Adaptief ontwerp (mobielvriendelijk)
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
				>
					<Icon
						category="bs"
						icon={BsCloud}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text font="--lead" margin="0px 0px 0px 0px" color="--white">
						Onbeperkte hosting
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
						icon={BsBarChart}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						SEO-tools{" "}
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
						icon={BsEnvelopeOpen}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text font="--lead" margin="0px 0px 0px 0px" color="--white">
						Gratis SMS-berichten{" "}
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				lg-margin="30px 0px 0px 0px"
				lg-width="100%"
				width="58.333%"
				margin="0px 0px 0px 8.333999999999996%"
			>
				<Image
					box-shadow="0px 0px 35px 0px #00000040"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/FireShot%20Capture%20409%20-%20Home%20-%20rdijoko.udo%201.webp?v=2021-10-31T19:28:47.545Z"
					width="100%"
					loading="lazy"
					align-self="auto"
					display="inline-block"
					border-radius="18px"
				/>
			</Box>
		</Section>
		<Section padding="130px 0 40px 0" color="--darkL1" md-padding="100px 0 20px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" flex-direction="row" max-width="1056px" flex-wrap="wrap" />
			<Box
				lg-width="100%"
				width="66.667%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 15px 0px 15px"
				margin="0px 33.333% 22px 0px"
				lg-margin="0px 0px 22px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Zo creëert u een kunstenaarsportfolio met uKit
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1">
					Volg gewoon de stappen hieronder, en u hebt een portfolio in slechts een paar uur. U hoeft niet bang te zijn dat er iets fout gaat. Zelf beginners kunnen het aan
				</Text>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="40px 0px 40px 0px">
				<Box
					padding="0px 15px 0px 15px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					width="50%"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/one.svg?v=2021-08-19T23:41:55.506Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Selecteer een template
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						md-width="100%"
					>
						Onze catalogus staat vol met thematische en universele ontwerpen. U kunt kiezen welke u wilt. Plus, u kunt kleuren, lettertypen, achtergronden en andere ontwerpopties aanpassen
					</Text>
					<Link
						text-decoration-line="initial"
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline"
						hover-background="linear-gradient(to right,#537cff,#537cff)"
						href="https://ukit.com/neowizard#templates/all"
						padding="15px 25px 16px 25px"
						border-width="1px"
						border-style="solid"
						border-color="--color-secondary"
						border-radius="100px"
						background="--color-secondary"
						color="--white"
					>
						Bekijk templates
					</Link>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/v14fQ9MhFpEvlQgku9aj.webp?v=2021-08-23T21:27:54.101Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
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
					display="flex"
					md-width="100%"
					md-order="1"
					width="50%"
					margin="0px 0px 0px 0px"
				>
					<Image
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Group%2059.webp?v=2021-10-03T18:56:02.706Z"
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
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/two.svg?v=2021-08-19T23:46:45.698Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Voeg gepersonaliseerde inhoud toe
					</Text>
					<Text
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
					>
						Vertel ons over uzelf en uw werk. En zorg ervoor dat u voorbeelden geeft. U kunt een portfolio met één of meerdere pagina’s maken — er is geen limiet aan het aantal pagina’s of elementen. Bovendien biedt uKit onbeperkte hosting, dus u kunt zo veel kunstwerken uploaden als u wilt. En om uw werk er nog boeiender uit te laten zien, kunt u schuifbalk- en galerijwidgets gebruiken
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
					align-items="flex-start"
					md-width="100%"
					width="50%"
					padding="0px 15px 0px 15px"
					display="flex"
					flex-direction="column"
					justify-content="center"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/three.svg?v=2021-08-19T23:48:35.499Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Stel mobiele- en tabletversies in
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Alle uKit-sjablonen en -blokken zijn aanpasbaar, zodat uw site er op alle apparaten goed uitziet. Indien nodig kunt u afzonderlijke elementen verbergen, of alternatieve ontwerpblokken instellen voor telefoons en tablets. Bijvoorbeeld: kleur, achtergrond, en het aantal kolommen
					</Text>
				</Box>
				<Box md-width="100%" width="50%" margin="0px 0px 0px 0px" display="flex">
					<Image
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Frame%202656%282%29.webp?v=2021-10-04T17:29:39.059Z"
						width="100%"
					/>
				</Box>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="40px 0px 40px 0px">
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
					md-padding="0px 15px 0px 15px"
					width="50%"
					padding="0px 15px 0px 60px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
				>
					<Image height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/four.svg?v=2021-08-19T23:50:40.052Z" margin="0px 0px 24px 0px" width="48px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Verbind uw domein
					</Text>
					<Text
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
					>
						U kunt een domeinnaam direct op het uKit Dashboard kopen. DNS records zullen automatisch geconfigureerd worden voor onze hosting. Alle sites werken met het veilige HTTPS-protocol, en SSL-certificaten worden standaard aangemaakt
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
					padding="0px 15px 0px 15px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					width="50%"
				>
					<Image margin="0px 0px 24px 0px" width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/five.svg?v=2021-08-19T23:51:49.573Z" />
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
						Het is nog nooit zo gemakkelijk geweest — klik gewoon op de knop ’’Publiceren’’ en alle veranderingen die u hebt gemaakt zullen beschikbaar zijn op de hoofdversie van de site. Voel u vrij om te experimenteren — het systeem maakt automatische back-ups en bewaart tot 10 siteversies. U kunt aanpassingen terugdraaien met één klik
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
			lg-padding="40px 0 100px 0"
			md-padding="40px 0 60px 0"
			padding="40px 0 130px 0"
			color="--darkL1"
			lg-overflow-x="hidden"
		>
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" max-width="1056px" />
			<Box
				flex-direction="column"
				align-items="center"
				padding="0px 190px 0px 190px"
				margin="0px 0px 22px 0px"
				justify-content="center"
				lg-padding="0px 0px 0px 0px"
				width="100%"
				display="flex"
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
					Voeg de site toe aan zoekmachines om de indexering te starten. Sluit analytische systemen aan om specifieke acties van uw bezoekers op de website te analyseren. U kunt dit doen op het uKit Dashboard. Veel tools zijn geautomatiseerd. Bijvoorbeeld, de SEO-wizard die helpt met promotie
				</Text>
				<Link
					color="--white"
					text-decoration-line="initial"
					border-radius="100px"
					background="--color-secondary"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
					display="inline"
					href="https://ukit.com/signup"
					font="--lead"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
				>
					Creëer een portfolio
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
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" max-width="1056px" />
			<Box
				flex-direction="column"
				align-items="center"
				margin="0px 0px 30px 0px"
				lg-padding="0px 0px 0px 0px"
				md-margin="0px 0px 20px 0px"
				width="100%"
				display="flex"
				padding="0px 190px 0px 190px"
				justify-content="center"
			>
				<Text
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					text-align="center"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Wat kunt u nog meer creëren met uKit?
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1" text-align="center">
					Het platform is perfect voor het runnen van een verscheidenheid van sites ontworpen voor het bedrijfsleven: landingspagina’s, promo-sites, catalogi, online winkels, en nog veel meer
				</Text>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="36px 0px 30px 0px">
				<Box
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Link hover-color="--primary" text-decoration-line="initial" href="/lp/nl/creeer-een-website-voor-vastgoedontwikkelaars" color="--darkL1">
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_credit_en.webp?v=2021-10-31T19:45:04.843Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Creëer een website voor vastgoedontwikkelaars
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
					<Link href="/lp/nl/creeer-een-website-voor-makelaars" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_decor_en.webp?v=2021-09-28T16:08:13.810Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Creëer een website voor makelaars
						</Text>
					</Link>
				</Box>
			</Box>
			<Box
				width="100%"
				display="flex"
				flex-wrap="wrap"
				margin="36px 0px 30px 0px"
				md-margin="0px 0px 30px 0px"
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
					<Link href="/lp/nl/creeer-een-website-voor-juridische-adviseurs" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_autolaw_en.webp?v=2021-09-29T12:17:58.595Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
						/>
						<Text md-margin="0px 0px 30px 0px" margin="0px 0px 0px 0px" font="--lead">
							Creëer een website voor juridische adviseurs
						</Text>
					</Link>
				</Box>
				<Box
					padding="0px 0px 0px 15px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Link href="/lp/nl/creeer-een-website-voor-tutors" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_education_en.webp?v=2021-10-03T17:06:03.939Z"
							width="100%"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Creëer een website voor tutors
						</Text>
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				flex-wrap="wrap"
				margin="36px 0px 30px 0px"
				md-margin="0px 0px 0px 0px"
				width="100%"
			>
				<Box
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<Link href="/lp/nl/creeer-een-promo-website-voor-uw-bedrijf" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_banking_en.webp?v=2021-09-28T16:11:24.736Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
						/>
						<Text md-margin="0px 0px 30px 0px" margin="0px 0px 0px 0px" font="--lead">
							Creëer een promo-website voor uw bedrijf
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
					<Link href="/lp/nl/creeer-een-landingspagina" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_dance_en.webp?v=2021-09-28T16:01:28.155Z"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Creëer een landingspagina
						</Text>
					</Link>
				</Box>
			</Box>
		</Section>
		<Section
			lg-padding="100px 0 100px 0"
			padding="130px 0 130px 0"
			color="--darkL1"
			background="--color-secondary"
			lg-overflow-x="hidden"
		>
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				padding="0px 190px 0px 190px"
				margin="0px 0px 22px 0px"
				justify-content="center"
				lg-padding="0px 0px 0px 0px"
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
			>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					sm-text-align="center"
					as="h2"
					text-align="center"
				>
					Creëer een kunstenaarsportfolio met uKit
				</Text>
				<Text margin="0px 0px 36px 0px" font="--lead" color="--lightD1" text-align="center">
					Tijd om uKit zelf uit te proberen — maak gebruik van de 14-daagse proefperiode voor elke nieuwe site. Geen kaartgegevens of andere privé-info nodig
				</Text>
				<Link
					background="--color-white"
					hover-background="--color-lightD1"
					color="--secondary"
					font="--lead"
					padding="15px 25px 16px 25px"
					border-width="1px"
					border-color="--color-secondary"
					display="inline"
					href="https://ukit.com/signup"
					text-decoration-line="initial"
					margin="0px 0px 0px 0px"
					border-style="solid"
					border-radius="100px"
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
			<link rel={"canonical"} href={"/lp/nl/creeer-een-kunstenaarsportfolio/"} place={"endOfHead"} rawKey={"617ef3d341516409870de2fa"} />
		</RawHtml>
	</Theme>;
});