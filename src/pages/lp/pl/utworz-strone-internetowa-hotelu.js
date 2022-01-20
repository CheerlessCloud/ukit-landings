import React from "react";
import theme from "theme";
import { Theme, Text, Link, Box, Image, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsColumnsGutters, BsWindow, BsLock, BsEye, BsCheckBox, BsEnvelopeOpen, BsArrowLeftRight, BsGeo, BsArrowRepeat, BsPhone, BsBuilding, BsCloud, BsBarChart, BsChat, BsAt } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"lp/pl/utworz-strone-internetowa-hotelu"} />
		<Helmet>
			<title>
				Utwórz stronę internetową hotelu — uKit. Kreator stron internetowych dla firm
			</title>
			<meta name={"description"} content={"Nie musisz zatrudniać profesjonalnych programistów, aby stworzyć witrynę dla swojego hotelu. Wszystko, czego potrzebujesz, to uKit - narzędzie do tworzenia witryn internetowych. Ma już nieograniczony hosting, gotowe formularze z darmowymi powiadomieniami i narzędzia SEO"} />
			<meta property={"og:title"} content={"Utwórz stronę internetową hotelu — uKit. Kreator stron internetowych dla firm"} />
			<meta property={"og:description"} content={"Nie musisz zatrudniać profesjonalnych programistów, aby stworzyć witrynę dla swojego hotelu. Wszystko, czego potrzebujesz, to uKit - narzędzie do tworzenia witryn internetowych. Ma już nieograniczony hosting, gotowe formularze z darmowymi powiadomieniami i narzędzia SEO"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/favicon.png?v=2021-08-20T04:41:32.122Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#4773FF"} />
		</Helmet>
		<Components.HeaderPl />
		<Section padding="84px 0 100px 0" lg-padding="48px 15px 100px 15px" md-padding="60px 15px 50px 15px" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				justify-content="space-between"
				align-items="center"
				lg-width="100%"
				lg-flex-wrap="wrap"
				lg-align-items="center"
				lg-justify-content="center"
				max-width="1056px"
				flex-direction="row"
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
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h1"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
				>
					Utwórz stronę internetową hotelu
				</Text>
				<Text margin="0px 0px 50px 0px" font="--base" color="--dark">
					Nie musisz zatrudniać profesjonalnych programistów, aby stworzyć witrynę dla swojego hotelu. Wszystko, czego potrzebujesz, to uKit — narzędzie do tworzenia witryn internetowych. Ma już nieograniczony hosting, gotowe formularze z darmowymi powiadomieniami i narzędzia SEO
				</Text>
				<Link
					font="--lead"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					border-style="solid"
					border-radius="100px"
					background="#4773ff"
					display="inline"
					href="https://ukit.com/pl/signUp"
					color="--white"
					text-decoration-line="initial"
					border-width="1px"
					border-color="--color-secondary"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
				>
					Stwórz stronę internetową
				</Link>
			</Box>
			<Box
				display="flex"
				lg-width="100%"
				lg-position="relative"
				lg-left="0px"
				width="50%"
				position="relative"
				left="20px"
				flex-direction="column"
				lg-padding="0px 20px 0px 20px"
			>
				<Image
					lg-left="-24px"
					lg-top="-42px"
					width="150px"
					bottom="auto"
					lg-width="100px"
					lg-height="100px"
					right="auto"
					top="-70px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					height="150px"
					position="absolute"
					left="-70px"
				/>
				<Image
					bottom="-80px"
					lg-width="100px"
					lg-height="100px"
					height="150px"
					width="150px"
					position="absolute"
					left="auto"
					right="-135px"
					top="auto"
					transform="rotate(180deg)"
					lg-bottom="-44px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					lg-right="-26px"
				/>
				<Image
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_decor_en.webp?v=2021-09-28T16:08:13.810Z"
					width="112%"
					border-width="2px"
					border-style="solid"
					border-color="#6c757d2f"
					border-radius="18px"
					lg-width="100%"
				/>
			</Box>
		</Section>
		<Section padding="40px 0 80px 0" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				align-items="center"
				lg-flex-wrap="wrap"
				lg-align-items="center"
				lg-justify-content="flex-start"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
			/>
			<Box
				width="20%"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-flex-direction="column"
				align-self="flex-start"
				display="flex"
				flex-direction="column"
				lg-width="33.33333%"
				lg-margin="0px 0px 30px 0px"
				md-width="100%"
			>
				<Icon
					color="#4773ff"
					category="bs"
					icon={BsColumnsGutters}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
				/>
				<Text
					position="static"
					margin="0px 0px 0px 0px"
					color="--darkL1"
					font="--lead"
					align-self="auto"
				>
					Adaptacyjny projekt
				</Text>
			</Box>
			<Box
				display="flex"
				flex-direction="column"
				padding="0px 20px 0px 0px"
				lg-flex-direction="column"
				width="20%"
				align-items="flex-start"
				lg-width="33.33333%"
				lg-margin="0px 0px 30px 0px"
				md-width="100%"
				align-self="flex-start"
			>
				<Icon
					icon={BsWindow}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="#4773ff"
					category="bs"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Wygodny kreator z technologią «przeciągnij i upuść»
				</Text>
			</Box>
			<Box
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				lg-margin="0px 0px 30px 0px"
				width="20%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				align-self="flex-start"
			>
				<Icon
					category="bs"
					icon={BsLock}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="#4773ff"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Formularze dla feedbacku i zamówień
				</Text>
			</Box>
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				md-width="100%"
				lg-width="33.33333%"
				lg-flex-direction="column"
				md-margin="0px 0px 30px 0px"
				align-self="flex-start"
			>
				<Icon
					category="bs"
					icon={BsEye}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="#4773ff"
				/>
				<Text font="--lead" width="95%" margin="0px 0px 0px 0px" color="--darkL1">
					Darmowe powiadomienia SMS
				</Text>
			</Box>
			<Box
				padding="0px 20px 0px 0px"
				lg-flex-direction="column"
				md-width="100%"
				align-self="flex-start"
				width="20%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				lg-width="33.33333%"
			>
				<Icon
					align-items="center"
					size="63px"
					color="#4773ff"
					category="bs"
					icon={BsCheckBox}
					margin="0 0 18px 0"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Kreator SEO
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 183px 0" lg-padding="80px 0 100px 0" md-padding="40px 0 100px 0" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
				flex-wrap="wrap"
			/>
			<Box
				lg-padding="0px 0px 0px 0px"
				width="58.333%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 50px 0px"
				lg-width="100%"
			>
				<Text
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
				>
					Przykłady projektów stron internetowych hoteli
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Otrzymasz nie tylko projekty tematyczne, ale także gotowe treści z tekstem i obrazami. Treść można łatwo dostosować do własnych potrzeb. Utworzenie i uruchomienie witryny nigdy nie było prostsze
				</Text>
			</Box>
			<Box
				width="33.333%"
				display="flex"
				flex-direction="row"
				align-items="flex-start"
				margin="0px 0px 0px 8.333999999999996%"
				lg-margin="0px 0px 0px 0px"
				lg-width="100%"
			>
				<Box display="flex" flex-direction="column" margin="0px 60px 0px 0px">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						350+
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						wzorów
					</Text>
				</Box>
				<Box flex-direction="column" width="30%" display="flex">
					<Text letter-spacing="-1px" color="--darkL1" margin="0px 0px 0px 0px" font="--headline1">
						40+
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						kategorii
					</Text>
				</Box>
			</Box>
			<Box
				position="relative"
				align-items="center"
				justify-content="center"
				lg-width="100%"
				width="66.667%"
				margin="60px 0px 0px 0px"
				display="flex"
				padding="0px 15px 0px 15px"
			>
				<Image
					top="175px"
					border-radius="18px"
					width="198px"
					left="-200px"
					right="auto"
					lg-height="123.547px"
					sm-border-radius="6px"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_model_en.jpg?v=2021-10-31T18:27:15.585Z"
					lg-right="auto"
					sm-bottom="20px"
					lg-top="auto"
					sm-width="100px"
					sm-height="62.4062px"
					sm-left="-11px"
					position="absolute"
					bottom="auto"
					lg-bottom="30px"
					lg-left="-43px"
					sm-right="auto"
					sm-top="auto"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_abstract_en.webp?v=2021-09-28T15:59:44.719Z"
					position="absolute"
					bottom="-110px"
					top="auto"
					lg-bottom="-137px"
					lg-width="213px"
					left="-355px"
					lg-left="-92px"
					lg-right="auto"
					lg-top="auto"
					lg-display="none"
					border-radius="18px"
					width="321px"
					right="auto"
					lg-height="231.375px"
					loading="lazy"
				/>
				<Image
					sm-bottom="auto"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Rv4eQizc8WwsricgTJGH.webp?v=2021-08-23T21:27:54.077Z"
					top="-82px"
					width="324.717px"
					sm-right="-11px"
					height="207.95px"
					border-radius="18px"
					position="absolute"
					sm-left="auto"
					sm-border-radius="6px"
					loading="lazy"
					bottom="249.048px"
					sm-width="170px"
					sm-height="107.766px"
					sm-top="-44px"
					left="302px"
					right="77.2861px"
				/>
				<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_auto_en.jpg?v=2021-10-31T16:06:10.863Z" border-radius="18px" sm-border-radius="6px" loading="lazy" />
			</Box>
			<Box
				display="flex"
				padding="0px 15px 0px 15px"
				justify-content="center"
				align-items="center"
				position="relative"
				lg-width="100%"
				width="33.333%"
				margin="60px 0px 0px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2006-10-2021%2023.31%201.webp?v=2021-10-06T17:32:27.323Z"
					border-radius="18px"
					lg-width="100%"
					sm-border-radius="6px"
					loading="lazy"
				/>
				<Image
					height="199.95px"
					bottom="auto"
					lg-left="auto"
					sm-width="154px"
					sm-bottom="auto"
					sm-left="31px"
					position="absolute"
					lg-bottom="auto"
					lg-right="-42px"
					sm-top="-51px"
					sm-border-radius="6px"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_psychologist_en.webp?v=2021-09-28T16:00:29.898Z"
					width="300px"
					top="-127px"
					right="-76px"
					left="auto"
					border-radius="18px"
					lg-height="187.5px"
					lg-top="-45px"
					sm-right="auto"
					sm-height="96.25px"
				/>
				<Image
					position="absolute"
					left="136.84014285714287px"
					lg-bottom="-67px"
					lg-height="154.625px"
					sm-left="auto"
					sm-height="auto"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_advert_en.webp?v=2021-10-31T13:56:49.544Z"
					top="344.417px"
					bottom="-85px"
					lg-right="-11px"
					lg-top="auto"
					sm-width="132px"
					sm-border-radius="6px"
					loading="lazy"
					border-radius="18px"
					width="254.14285714285714px"
					sm-bottom="-27px"
					sm-right="72px"
					sm-top="auto"
					right="-39px"
					lg-left="auto"
					height="166.583px"
				/>
				<Image
					sm-border-radius="6px"
					lg-right="auto"
					lg-height="119.047px"
					sm-bottom="auto"
					sm-left="auto"
					sm-right="-66px"
					sm-top="-38px"
					border-radius="18px"
					top="120px"
					bottom="auto"
					lg-left="200px"
					lg-top="-46px"
					width="192px"
					left="auto"
					lg-bottom="auto"
					sm-height="119.047px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_service_en.webp?v=2021-10-04T19:25:32.838Z"
					position="absolute"
					right="-200px"
					loading="lazy"
				/>
			</Box>
		</Section>
		<Section background="--color-secondary" padding="130px 0 130px 0" lg-padding="100px 0 100px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" max-width="1056px" />
			<Box
				padding="0px 0px 0px 0px"
				margin="0px 15% 40px 15%"
				lg-width="100%"
				lg-margin="0px 0px 40px 0px"
				display="flex"
				flex-direction="column"
				align-items="center"
			>
				<Text
					as="h2"
					width="100%"
					text-align="center"
					margin="0px 0px 15px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Kluczowe cechy uKit
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--white" text-align="center">
					Przestań wydawać fortunę na utrzymanie stron internetowych osób trzecich. Z uKit możesz zrobić wszystko sam. Niektóre zadania są nawet zautomatyzowane, więc nie zabierają one Twojego czasu. Nie potrzebujesz też specjalnej wiedzy — wystarczy intuicja i wyobraźnia
				</Text>
			</Box>
			<Box
				align-self="auto"
				padding="0px 15px 0px 15px"
				justify-content="center"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				flex="0 1 auto"
				display="flex"
				flex-direction="row"
				lg-width="100%"
				width="100%"
				flex-wrap="wrap"
			>
				<Box
					width="33%"
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
				>
					<Icon
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsColumnsGutters}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Gotowe szablony{" "}
					</Text>
				</Box>
				<Box
					width="33%"
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
				>
					<Icon
						align-self="center"
						category="bs"
						icon={BsEnvelopeOpen}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Wyskakujące okienka oraz formularze opinii i zamówień
					</Text>
				</Box>
				<Box
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					width="33%"
					display="flex"
					flex-direction="column"
				>
					<Icon
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsArrowLeftRight}
					/>
					<Text text-align="center" margin="0px 0px 0px 0px" color="--white" font="--lead">
						Integracja z CRM i systemami płatności online
					</Text>
				</Box>
				<Box
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					width="33%"
					display="flex"
				>
					<Icon
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsGeo}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Integracja z Mapami Google
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					width="33%"
				>
					<Icon
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsArrowRepeat}
					/>
					<Text text-align="center" margin="0px 0px 0px 0px" color="--white" font="--lead">
						Widżety mediów społecznościowych
					</Text>
				</Box>
				<Box
					md-width="100%"
					width="33%"
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
				>
					<Icon
						category="bs"
						icon={BsPhone}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Adaptacyjny projekt{" "}
					</Text>
				</Box>
				<Box
					md-width="100%"
					width="33%"
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
				>
					<Icon
						align-self="center"
						category="bs"
						icon={BsBuilding}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Wszystko do prezentacji Twojego hotelu i jego pokojów
					</Text>
				</Box>
				<Box
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					width="33%"
					display="flex"
				>
					<Icon
						align-self="center"
						category="bs"
						icon={BsCloud}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Nieograniczony hosting (∞ ruch, ∞ strony, ∞ miejsce na dysku)
					</Text>
				</Box>
				<Box
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					width="33%"
					display="flex"
					flex-direction="column"
				>
					<Icon
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsBarChart}
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Kreator SEO i analityka
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					width="33%"
				>
					<Icon
						category="bs"
						icon={BsChat}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Wsparcie 24/7
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					width="33%"
				>
					<Icon
						category="bs"
						icon={BsAt}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Darmowa domena
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="130px 0 40px 0" color="--darkL1" md-padding="100px 0 20px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" flex-direction="row" max-width="1056px" flex-wrap="wrap" />
			<Box
				width="66.667%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 15px 0px 15px"
				margin="0px 33.333% 22px 0px"
				lg-margin="0px 0px 22px 0px"
				lg-width="100%"
			>
				<Text
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
				>
					Jak stworzyć stronę internetową hotelu za pomocą uKit
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1">
					Uruchomienie strony w uKit to bułka z masłem. Aktualizacja treści i danych kontaktowych jest szybka. Wystarczy wykonać poniższe czynności. Możesz to zrobić sam nawet z zerowym doświadczeniem
				</Text>
			</Box>
			<Box flex-wrap="wrap" margin="40px 0px 40px 0px" width="100%" display="flex">
				<Box
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					width="50%"
					padding="0px 15px 0px 15px"
					display="flex"
					flex-direction="column"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/one.svg?v=2021-08-19T23:41:55.506Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Wybierz szablon
					</Text>
					<Text
						color="--dark"
						font="--base"
						width="84%"
						md-width="100%"
						margin="0px 0px 24px 0px"
					>
						Uruchamianie witryny jest szybsze, jeśli nie zaczynasz od zera. uKit udostępnia ogromną liczbę gotowych szablonów — wystarczy wybrać najbardziej odpowiedni styl i strukturę. Wszystkie szablony mają kilka opcji schematu kolorów. Czcionki, tła i inne parametry projektowe można zmienić za jednym razem
					</Text>
					<Link
						hover-background="linear-gradient(to right,#537cff,#537cff)"
						color="--white"
						padding="15px 25px 16px 25px"
						border-width="1px"
						border-style="solid"
						border-color="--color-secondary"
						background="--color-secondary"
						href="https://ukit.com/neowizard#templates/all"
						text-decoration-line="initial"
						font="--lead"
						margin="0px 0px 0px 0px"
						border-radius="100px"
						display="inline"
					>
						Zobacz szablony
					</Link>
				</Box>
				<Box md-width="100%" width="50%" margin="0px 0px 0px 0px" display="flex">
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
				display="flex"
				flex-wrap="wrap"
				margin="40px 0px 40px 0px"
				md-margin="0px 0px 40px 0px"
				width="100%"
			>
				<Box
					md-width="100%"
					md-order="1"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
				>
					<Image
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Group%2059.webp?v=2021-10-03T18:56:02.706Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
					/>
				</Box>
				<Box
					md-width="100%"
					md-padding="0px 15px 0px 15px"
					width="50%"
					padding="0px 15px 0px 60px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/two.svg?v=2021-08-19T23:46:45.698Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Opisz swoje usługi hotelowe i ceny
					</Text>
					<Text
						font="--base"
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
					>
						Nie jesteś ograniczony rodzajem treści: dodaj zdjęcia swojego hotelu, jego pokoi, baru, kącika dla dzieci itp. Przesyłaj tyle zdjęć, ile potrzebujesz, dodawaj filmy, umieszczaj interaktywne Mapy Google, dodawaj opisy tekstowe i tabele itd. Hosting jest nieograniczony w każdym planie. Nowe elementy strony są dodawane w postaci gotowych bloków i widżetów w edytorze wizualnym
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				flex-wrap="wrap"
				margin="40px 0px 40px 0px"
				md-margin="0px 0px 40px 0px"
				width="100%"
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
						Dodaj informacje o rezerwacji i płatności
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Pokaż ceny pokoi, dodaj cennik usług dodatkowych, twórz formularze rezerwacji, podłącz systemy płatności online. W tym celu dostępny jest moduł sklepu oraz integracja z popularnymi narzędziami płatniczymi, CRM i systemami mailingowymi. Powiadomienia SMS i e-mail z formularzy będą wysyłane do Ciebie za darmo
					</Text>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Frame%202656%281%29.webp?v=2021-11-08T19:20:59.248Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
					/>
				</Box>
			</Box>
			<Box margin="40px 0px 40px 0px" width="100%" display="flex" flex-wrap="wrap">
				<Box
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					md-width="100%"
					md-order="1"
				>
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Frame%202656%282%29.webp?v=2021-10-04T17:29:39.059Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
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
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/four.svg?v=2021-08-19T23:50:40.052Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Skonfiguruj wersje mobilne i na tablety
					</Text>
					<Text
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
					>
						Wszystkie strony utworzone w uKit są poprawnie wyświetlane na wszystkich ekranach. To wszystko załatwione dla Ciebie. Ale możesz dostosować widoczność i opcje projektowania poszczególnych bloków, ukryć je na różnych typach urządzeń i zmienić siatkę dla tabletów (w jednej lub dwóch kolumnach)
					</Text>
				</Box>
			</Box>
			<Box
				margin="40px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				width="100%"
				display="flex"
				flex-wrap="wrap"
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
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/five.svg?v=2021-08-19T23:51:49.573Z" margin="0px 0px 24px 0px" />
					<Text font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif" margin="0px 0px 24px 0px" color="--darkL1">
						Połącz swoją domenę
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Adres strony internetowej Twojego hotelu powinien być rozpoznawalny, łatwy do odczytania i zapamiętania. Możesz zarejestrować nową domenę bezpośrednio na pulpicie nawigacyjnym uKit. Strona automatycznie uruchomi się z bezpiecznym protokołem HTTPS (certyfikat SSL jest dostarczany za darmo)
					</Text>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
					<Image
						align-items="center"
						display="flex"
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/domain_popup.webp?v=2021-10-22T13:51:39.652Z"
						width="100%"
					/>
				</Box>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="40px 0px 40px 0px">
				<Box
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					md-width="100%"
					md-order="1"
				>
					<Image
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Group%2076.webp?v=2021-09-28T16:38:49.156Z"
						width="100%"
						display="flex"
						align-items="center"
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
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/6.svg?v=2021-09-28T20:17:25.803Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Opublikuj swoją witrynę
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Gdy strona jest gotowa, wystarczy, że pokażesz ją potencjalnym klientom. Aby to zrobić, po prostu kliknij przycisk «Opublikuj». W razie potrzeby możesz zmieniać treść, dodawać nowe strony i usuwać nieistotne. Twórz kopie zapasowe, aby nie stracić ważnych informacji i móc szybko przywrócić je w przypadku wystąpienia błędów. Funkcja tworzenia kopii zapasowych jest całkowicie darmowa
					</Text>
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
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Już prawie!
				</Text>
				<Text margin="0px 0px 36px 0px" font="--base" color="--darkL1" text-align="center">
					Aby strona działała i przyciągała klientów, lepiej ją promować w wyszukiwarkach. Pomoże Ci w tym kreator SEO uKit. Aby śledzić wszystkie kluczowe wskaźniki witryny, możesz dodać ją do Google Search Console i Google Analytics. To zajmie tylko kilka minut
				</Text>
				<Link
					href="https://ukit.com/pl/signUp"
					color="--white"
					font="--lead"
					margin="0px 0px 0px 0px"
					border-style="solid"
					border-color="--color-secondary"
					display="inline"
					text-decoration-line="initial"
					padding="15px 25px 16px 25px"
					border-width="1px"
					border-radius="100px"
					background="--color-secondary"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
				>
					Stwórz stronę internetową
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
				lg-padding="0px 0px 0px 0px"
				flex-direction="column"
				align-items="center"
				margin="0px 0px 30px 0px"
				justify-content="center"
				md-margin="0px 0px 20px 0px"
				width="100%"
				display="flex"
				padding="0px 150px 0px 150px"
			>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					text-align="center"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Co jeszcze możesz stworzyć za pomocą uKit?
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1" text-align="center">
					Wszystkie rodzaje witryn biznesowych są tworzone w uKit bez żadnego doświadczenia w programowaniu. Załapiesz to nawet jeśli tworzysz witrynę po raz pierwszy. Dzięki uKit łatwo jest tworzyć promocyjne strony internetowe, katalogi, strony docelowe, blogi firmowe, a nawet sklepy internetowe
				</Text>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="36px 0px 30px 0px">
				<Box
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					{" "}
					<Link href="/lp/pl/utworz-strone-docelowa" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_auto_en.jpg?v=2021-10-31T16:06:10.863Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Utwórz stronę docelową
						</Text>
						{" "}
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
					<Link hover-color="--primary" text-decoration-line="initial" href="/lp/pl/stworz-strone-internetowa-agencji-nieruchomosci" color="--darkL1">
						<Image
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_exhibition_en.webp?v=2021-10-03T17:22:19.826Z"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Stwórz stronę internetową agencji nieruchomości
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
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Link hover-color="--primary" text-decoration-line="initial" href="/lp/pl/utworz-strone-internetowa-dla-prawnika" color="--darkL1">
						<Image
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_autolaw_en.webp?v=2021-09-29T12:17:58.595Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Utwórz stronę internetową dla prawnika
						</Text>
					</Link>
				</Box>
				<Box
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 0px 0px 15px"
					md-width="100%"
				>
					<Link hover-color="--primary" text-decoration-line="initial" href="/lp/en/create-a-real-estate-development-company-website" color="--darkL1">
						<Image
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_building_en.webp?v=2021-09-28T15:58:39.331Z"
							width="100%"
							display="flex"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Utwórz stronę internetową firmy deweloperskiej
						</Text>
					</Link>
				</Box>
			</Box>
			<Box
				width="100%"
				display="flex"
				flex-wrap="wrap"
				margin="36px 0px 30px 0px"
				md-margin="0px 0px 0px 0px"
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
					<Link href="/lp/pl/utworz-witryne-korepetytora" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_abstract_en.webp?v=2021-09-28T15:59:44.719Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Utwórz witrynę korepetytora
						</Text>
					</Link>
				</Box>
				<Box
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 0px 0px 15px"
					md-width="100%"
				>
					<Link color="--darkL1" hover-color="--primary" text-decoration-line="initial" href="/lp/pl/stworz-strone-promocyjna-dla-swojej-firmy">
						<Image
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_advert_en.webp?v=2021-10-31T13:56:49.544Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Stwórz stronę promocyjną dla swojej firmy
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
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				padding="0px 190px 0px 190px"
				margin="0px 0px 22px 0px"
				justify-content="center"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					text-align="center"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					sm-text-align="center"
					as="h2"
				>
					Stwórz stronę hotelu z uKit
				</Text>
				<Text margin="0px 0px 36px 0px" font="--lead" color="--lightD1" text-align="center">
					Czas zobaczyć uKit w akcji. I nic Cię to nie kosztuje. Okres próbny to 14 dni za darmo
					<Link
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						href="https://ukit.com/ru/signup"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
					>
						<br />
					</Link>
				</Text>
				<Link
					text-decoration-line="initial"
					padding="15px 25px 16px 25px"
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
					border-radius="100px"
					hover-background="--color-lightD1"
					color="--secondary"
					font="--lead"
					margin="0px 0px 0px 0px"
					display="inline"
					background="--color-white"
					href="https://ukit.com/pl/signUp"
				>
					Wypróbuj za darmo
				</Link>
			</Box>
		</Section>
		<Components.FooterPl />
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
			<link rel={"canonical"} href={"/lp/pl/utworz-strone-internetowa-hotelu/"} place={"endOfHead"} rawKey={"61897d782873826dd66e6182"} />
		</RawHtml>
	</Theme>;
});