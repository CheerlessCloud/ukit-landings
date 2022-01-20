import React from "react";
import theme from "theme";
import { Theme, Text, Link, Box, Image, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsColumns, BsGrid, BsEye, BsCheckBox, BsTablet, BsWindow, BsLock, BsColumnsGutters, BsBookmark, BsPhone, BsXSquare } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"lp/pl/utworz-witryne-nauczyciela"} />
		<Helmet>
			<title>
				Utwórz witrynę nauczyciela — uKit. Kreator stron internetowych dla firm
			</title>
			<meta name={"description"} content={"Możesz stworzyć własną witrynę portfolio w ciągu jednej nocy. Brak kodowania, pełna zgodność z wymogami prawnymi, gotowe szablony tematyczne, intuicyjny interfejs i nielimitowany hosting. Wszystkie potrzebne funkcje na wyciągnięcie ręki."} />
			<meta property={"og:title"} content={"Utwórz witrynę nauczyciela — uKit. Kreator stron internetowych dla firm"} />
			<meta property={"og:description"} content={"Możesz stworzyć własną witrynę portfolio w ciągu jednej nocy. Brak kodowania, pełna zgodność z wymogami prawnymi, gotowe szablony tematyczne, intuicyjny interfejs i nielimitowany hosting. Wszystkie potrzebne funkcje na wyciągnięcie ręki."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/favicon.png?v=2021-08-20T04:41:32.122Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#4773FF"} />
		</Helmet>
		<Components.HeaderPl />
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
				width="50%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="100%"
				lg-margin="0px 0px 90px 0px"
				lg-padding="0px 20px 0px 20px"
			>
				<Text
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h1"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
				>
					Utwórz witrynę nauczyciela
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Możesz stworzyć własną witrynę portfolio w ciągu jednej nocy. Brak kodowania, pełna zgodność z wymogami prawnymi, gotowe szablony tematyczne, intuicyjny interfejs i nielimitowany hosting. Wszystkie potrzebne funkcje na wyciągnięcie ręki
				</Text>
				<Link
					color="--white"
					text-decoration-line="initial"
					font="--lead"
					margin="0px 0px 0px 0px"
					href="https://ukit.com/pl/signUp"
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
					border-radius="100px"
					background="#4773ff"
					display="inline"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
					padding="15px 25px 16px 25px"
				>
					Stwórz stronę internetową
				</Link>
			</Box>
			<Box
				width="50%"
				left="20px"
				lg-width="100%"
				display="flex"
				position="relative"
				flex-direction="column"
				lg-position="relative"
				lg-left="0px"
				lg-padding="0px 20px 0px 20px"
			>
				<Image
					position="absolute"
					bottom="auto"
					lg-left="-24px"
					right="auto"
					top="-70px"
					lg-width="100px"
					lg-height="100px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					width="150px"
					height="150px"
					left="-70px"
					lg-top="-42px"
				/>
				<Image
					lg-height="100px"
					lg-bottom="-44px"
					width="150px"
					height="150px"
					left="auto"
					lg-width="100px"
					bottom="-80px"
					transform="rotate(180deg)"
					lg-right="-26px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					position="absolute"
					right="-135px"
					top="auto"
				/>
				<Image
					lg-width="100%"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_education_en.webp?v=2021-10-03T17:06:03.939Z"
					width="112%"
					border-width="2px"
					border-style="solid"
					border-color="#6c757d2f"
					border-radius="18px"
				/>
			</Box>
		</Section>
		<Section padding="40px 0 80px 0" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
				align-items="center"
				lg-flex-wrap="wrap"
				lg-align-items="center"
				lg-justify-content="flex-start"
			/>
			<Box
				padding="0px 20px 0px 0px"
				lg-margin="0px 0px 30px 0px"
				md-width="100%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				align-self="flex-start"
				width="20%"
				lg-width="33.33333%"
				lg-flex-direction="column"
			>
				<Icon
					color="--secondary"
					category="bs"
					icon={BsColumns}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
				/>
				<Text color="--darkL1" font="--lead" margin="0px 0px 0px 0px">
					Kreator online
				</Text>
			</Box>
			<Box
				lg-flex-direction="column"
				display="flex"
				align-items="flex-start"
				lg-width="33.33333%"
				lg-margin="0px 0px 30px 0px"
				md-width="100%"
				align-self="flex-start"
				width="20%"
				flex-direction="column"
				padding="0px 20px 0px 0px"
			>
				<Icon
					category="bs"
					icon={BsGrid}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="--secondary"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Szablony i gotowe bloki
				</Text>
			</Box>
			<Box
				md-width="100%"
				align-self="flex-start"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				width="20%"
				lg-margin="0px 0px 30px 0px"
			>
				<Icon
					size="63px"
					color="--secondary"
					category="bs"
					icon={BsEye}
					margin="0 0 18px 0"
					align-items="center"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Wersja dla osób niedowidzących
				</Text>
			</Box>
			<Box
				display="flex"
				lg-width="33.33333%"
				align-self="flex-start"
				width="20%"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-flex-direction="column"
				md-width="100%"
				md-margin="0px 0px 30px 0px"
				flex-direction="column"
			>
				<Icon
					icon={BsCheckBox}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="--secondary"
					category="bs"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" width="95%">
					Zgodność z wymogami prawnymi
				</Text>
			</Box>
			<Box
				display="flex"
				align-items="flex-start"
				align-self="flex-start"
				width="20%"
				flex-direction="column"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				md-width="100%"
			>
				<Icon
					category="bs"
					icon={BsTablet}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="--secondary"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Adaptacyjny projekt
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
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 50px 0px"
				lg-width="100%"
				lg-padding="0px 0px 0px 0px"
				width="58.333%"
			>
				<Text
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
				>
					Przykłady szablonów stron internetowych dla nauczycieli
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Gotowa struktura i domyślna treść wymagająca minimum edycji. A jednak możesz zmienić wszystko, co chcesz: projekt, zawartość i strukturę
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
				<Box margin="0px 60px 0px 0px" display="flex" flex-direction="column">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						350+
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						wzorów
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" width="30%">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						40+
					</Text>
					<Text font="--base" color="--dark" margin="0px 0px 0px 0px">
						kategorii
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
					bottom="75px"
					lg-bottom="30px"
					sm-width="100px"
					height="124.75px"
					position="absolute"
					right="auto"
					sm-bottom="20px"
					sm-border-radius="6px"
					border-radius="18px"
					left="-184px"
					top="auto"
					lg-right="auto"
					sm-height="62.4062px"
					sm-top="auto"
					sm-right="auto"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_cleaning_en.webp?v=2021-09-28T16:25:14.701Z"
					width="198px"
					lg-height="123.547px"
					lg-left="-43px"
					lg-top="auto"
					sm-left="-11px"
				/>
				<Image
					border-radius="18px"
					position="absolute"
					top="270.567px"
					width="315.7663333333333px"
					bottom="-93.49177777777777px"
					lg-left="-92px"
					lg-right="auto"
					lg-width="213px"
					height="197.92777777777778px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_banking_en.webp?v=2021-09-28T16:11:24.736Z"
					right="727.2376666666667px"
					lg-bottom="-137px"
					lg-height="231.375px"
					lg-display="none"
					left="-339px"
					lg-top="auto"
					loading="lazy"
				/>
				<Image
					width="297.5218888888889px"
					sm-left="auto"
					position="absolute"
					bottom="267.6111111111111px"
					sm-height="107.766px"
					sm-border-radius="6px"
					border-color="#000000"
					border-radius="18px"
					sm-right="-11px"
					sm-top="-44px"
					height="186.38888888888889px"
					sm-bottom="auto"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_abstract_en.webp?v=2021-09-28T15:59:44.719Z"
					left="291.4831111111111px"
					right="115px"
					top="-79px"
					sm-width="170px"
				/>
				<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_psychologist_en.webp?v=2021-09-28T16:00:29.898Z" border-radius="18px" sm-border-radius="6px" loading="lazy" />
			</Box>
			<Box
				margin="60px 0px 0px 0px"
				display="flex"
				padding="0px 15px 0px 15px"
				justify-content="center"
				align-items="center"
				position="relative"
				lg-width="100%"
				width="33.333%"
			>
				<Image
					loading="lazy"
					position="absolute"
					right="-74px"
					bottom="333.3277777777778px"
					sm-right="auto"
					sm-height="96.25px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/teamwork-over-the-teacher-s-laptop.webp?v=2021-09-10T08:40:27.803Z"
					lg-bottom="auto"
					lg-right="-42px"
					sm-top="-51px"
					sm-border-radius="6px"
					sm-bottom="auto"
					sm-left="31px"
					border-radius="18px"
					width="229.51666666666665px"
					top="-111px"
					lg-left="auto"
					lg-top="-45px"
					left="196.46633333333335px"
					lg-height="187.5px"
					sm-width="154px"
					height="152.67222222222222px"
				/>
				<Image
					lg-left="auto"
					sm-bottom="-27px"
					sm-border-radius="6px"
					height="154.383px"
					sm-height="auto"
					sm-right="72px"
					sm-top="auto"
					loading="lazy"
					position="absolute"
					top="auto"
					lg-bottom="-67px"
					lg-height="154.625px"
					lg-right="-11px"
					lg-top="auto"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_fastfood_en.webp?v=2021-10-03T16:49:03.527Z"
					border-radius="18px"
					right="-53px"
					left="auto"
					width="247px"
					bottom="-93px"
					sm-left="auto"
					sm-width="132px"
				/>
				<Image
					top="120px"
					sm-bottom="auto"
					lg-height="119.047px"
					lg-top="-46px"
					sm-left="auto"
					sm-right="-66px"
					sm-top="-38px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_medicine_en.webp?v=2021-09-28T16:16:02.493Z"
					left="auto"
					lg-right="auto"
					loading="lazy"
					lg-bottom="auto"
					lg-left="200px"
					sm-height="119.047px"
					right="-200px"
					bottom="auto"
					sm-border-radius="6px"
					border-radius="18px"
					width="192px"
					position="absolute"
				/>
				<Image
					lg-width="100%"
					sm-border-radius="6px"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_coaching_en.webp?v=2021-09-28T16:15:54.080Z"
					border-radius="18px"
				/>
			</Box>
		</Section>
		<Section background="--color-secondary" padding="130px 0 130px 0" lg-padding="100px 0 100px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				lg-width="100%"
				lg-margin="0px 0px 40px 0px"
				width="75%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 0px 0px 0px"
				margin="0px 25% 40px 0px"
			>
				<Text
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
				>
					Kluczowe funkcje tworzenia stron internetowych dla nauczycieli
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--white">
					Możesz zacząć od motywu lub dowolnego innego szablonu. Dostępne są również opcje wielostronicowe i jednostronicowe. Nazwa domeny jest bezpłatna, ale możesz też kupić domenę drugiego poziomu lub podłączyć istniejącą. Możesz konfigurować i edytować wszystkie elementy za pomocą kilku kliknięć bez żadnego doświadczenia w kodowaniu
				</Text>
			</Box>
			<Box
				flex-direction="column"
				justify-content="center"
				lg-width="100%"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				width="33.333%"
				padding="0px 15px 0px 15px"
				display="flex"
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
						category="bs"
						icon={BsWindow}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Szablony stron edukacyjnych
					</Text>
				</Box>
				<Box
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Icon
						color="#ffffff"
						category="bs"
						icon={BsLock}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
					/>
					<Text color="--white" font="--lead" margin="0px 0px 0px 0px">
						Pełna zgodność z prawem
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
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsCheckBox}
						margin="0 0 18px 0"
						align-items="center"
					/>
					<Text font="--lead" margin="0px 0px 0px 0px" color="--white">
						Prosty i łatwy w obsłudze edytor
					</Text>
				</Box>
				<Box
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Icon
						category="bs"
						icon={BsColumnsGutters}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text color="--white" font="--lead" margin="0px 0px 0px 0px">
						Gotowe klocki
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
						color="#ffffff"
						category="bs"
						icon={BsBookmark}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Darmowy protokół HTTPS
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
						Adaptacyjny projekt
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
						icon={BsEye}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
					/>
					<Text color="--white" font="--lead" margin="0px 0px 0px 0px">
						Wersja dla osób niedowidzących
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
						icon={BsXSquare}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Brak reklam firm zewnętrznych
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
					loading="lazy"
					border-radius="18px"
					box-shadow="0px 0px 35px 0px #00000040"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/FireShot%20Capture%20393%20-%20Home%20-%20gcvhojo.ukit%201.webp?v=2021-10-03T17:15:24.391Z"
					width="100%"
				/>
			</Box>
		</Section>
		<Section padding="130px 0 40px 0" color="--darkL1" md-padding="100px 0 20px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				flex-direction="column"
				align-items="flex-start"
				padding="0px 15px 0px 15px"
				margin="0px 33.333% 22px 0px"
				lg-margin="0px 0px 22px 0px"
				lg-width="100%"
				width="66.667%"
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
					Jak stworzyć stronę internetową nauczyciela za pomocą uKit
				</Text>
				<Text font="--base" color="--darkL1" margin="0px 0px 0px 0px">
					Witrynę można łatwo utworzyć, korzystając z technologii przeciągnij i upuść — nie potrzebujesz pomocy specjalistów internetowych. Ale jeśli utkniesz i nie możesz czegoś rozgryźć, możesz skorzystać z bazy wiedzy, często zadawanych pytań i pomocy technicznej
				</Text>
			</Box>
			<Box flex-wrap="wrap" margin="40px 0px 40px 0px" width="100%" display="flex">
				<Box
					width="50%"
					padding="0px 15px 0px 15px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/one.svg?v=2021-08-19T23:41:55.506Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Wybierz szablon
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						md-width="100%"
					>
						Możesz skorzystać z gotowych projektów, aby sprawdzić implementację potrzebnych funkcji i sekcji tematycznych. W większości przypadków treść można pozostawić bez zmian lub dostosować ją według własnego uznania. Wszystko jest łatwe w obsłudze i bezproblemowe. Dodatkowo możesz aktywować wersję dla osób niedowidzących dla dowolnego szablonu
					</Text>
					<Link
						href="https://ukit.com/neowizard#templates/all"
						text-decoration-line="initial"
						font="--lead"
						border-style="solid"
						border-radius="100px"
						hover-background="linear-gradient(to right,#537cff,#537cff)"
						display="inline"
						color="--white"
						padding="15px 25px 16px 25px"
						margin="0px 0px 0px 0px"
						border-width="1px"
						border-color="--color-secondary"
						background="--color-secondary"
					>
						Zobacz szablony
					</Link>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
					<Image
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/v14fQ9MhFpEvlQgku9aj.webp?v=2021-08-23T21:27:54.101Z"
						width="100%"
						display="flex"
						align-items="center"
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
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					md-width="100%"
					md-order="1"
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
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 15px 0px 15px"
					width="50%"
					padding="0px 15px 0px 60px"
					display="flex"
					flex-direction="column"
					justify-content="center"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/two.svg?v=2021-08-19T23:46:45.698Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Dodaj niestandardową treść
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Dodaj własne obrazy, tekst, filmy, recenzje, galerie, certyfikaty, pliki dokumentów i dowolną inną zawartość. Obrazy można edytować bezpośrednio w kreatorze. uKit nie nakłada żadnych ograniczeń na hosting ani liczbę stron. Struktura jest łatwa do dostosowania do obowiązujących przepisów
					</Text>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				margin="40px 0px 40px 0px"
				md-margin="0px 0px 40px 0px"
				width="100%"
				display="flex"
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
					<Image height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/three.svg?v=2021-08-19T23:48:35.499Z" margin="0px 0px 24px 0px" width="48px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Skonfiguruj wersje mobilne i na tablety
					</Text>
					<Text
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
					>
						Ponieważ uKit automatycznie tworzy mobilną wersję witryny, musisz tylko upewnić się, że strony witryny wyświetlają się poprawnie na wszystkich urządzeniach. W razie potrzeby możesz zmienić poszczególne ustawienia: wyświetlić/ukryć wybrane bloki, schemat kolorów i menu mobilne
					</Text>
				</Box>
				<Box md-width="100%" width="50%" margin="0px 0px 0px 0px" display="flex">
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Frame%202656%282%29.webp?v=2021-10-04T17:29:39.059Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
					/>
				</Box>
			</Box>
			<Box display="flex" flex-wrap="wrap" margin="40px 0px 40px 0px" width="100%">
				<Box
					md-order="1"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					md-width="100%"
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
					<Text color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif" margin="0px 0px 24px 0px">
						Połącz swoją domenę
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Możesz użyć darmowej nazwy domeny dostarczonej przez uKit lub zarejestrować/podłączyć własną domenę. Jeśli kupujesz domenę od uKit, nie musisz jej konfigurować: wszystkie niezbędne rekordy DNS są tworzone automatycznie. W każdym przypadku wersja witryny HTTPS jest tworzona automatycznie za darmo
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
					width="50%"
					padding="0px 15px 0px 15px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
				>
					<Image height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/five.svg?v=2021-08-19T23:51:49.573Z" margin="0px 0px 24px 0px" width="48px" />
					<Text md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif" margin="0px 0px 24px 0px" color="--darkL1" font="--headline3">
						Opublikuj swoją witrynę
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Możesz edytować zawartość witryny tak, jak chcesz, ale wszystkie zmiany zaczną obowiązywać dopiero po opublikowaniu witryny. Eksperymentuj tyle, ile potrzebujesz. Bez obaw, uKit zapewnia automatyczne i ręczne tworzenie kopii zapasowych w przypadku jakichkolwiek problemów, dzięki czemu możesz jednym kliknięciem wrócić do poprzednich wersji witryny
					</Text>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
					<Image
						width="100%"
						align-items="center"
						display="flex"
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Group%2076.webp?v=2021-09-28T16:38:49.156Z"
					/>
				</Box>
			</Box>
		</Section>
		<Section
			padding="40px 0 130px 0"
			color="--darkL1"
			lg-padding="40px 0 100px 0"
			md-padding="40px 0 60px 0"
			lg-overflow-x="hidden"
		>
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" max-width="1056px" />
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
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Ostatnie poprawki
				</Text>
				<Text margin="0px 0px 36px 0px" font="--base" color="--darkL1" text-align="center">
					Aby rozpocząć indeksowanie witryny, dodaj ją do wyszukiwarek. Możesz to zrobić na pulpicie nawigacyjnym uKit. Dodatkowo możesz sprawdzić, czy strona jest gotowa do promocji za pomocą specjalnego kreatora SEO
				</Text>
				<Link
					text-decoration-line="initial"
					margin="0px 0px 0px 0px"
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
					color="--white"
					font="--lead"
					padding="15px 25px 16px 25px"
					border-radius="100px"
					background="--color-secondary"
					display="inline"
					href="https://ukit.com/pl/signUp"
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
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-padding="0px 0px 0px 0px"
				md-margin="0px 0px 20px 0px"
				padding="0px 190px 0px 190px"
				margin="0px 0px 30px 0px"
				justify-content="center"
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
					Co jeszcze możesz stworzyć za pomocą uKit?
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1" text-align="center">
					Nasz kreator stron jest gotowy na każde zadanie: korzystając z gotowych bloków i projektów możesz tworzyć różnego rodzaju projekty bez żadnej wiedzy i umiejętności programistycznych
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
					<Link href="/lp/pl/stworz-strone-promocyjna-dla-swojej-firmy" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_fastfood_en.webp?v=2021-10-03T16:49:03.527Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							twórz stronę promocyjną dla swojej firmy
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
					<Link href="/lp/pl/utworz-strone-docelowa" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_cleaning_en.webp?v=2021-09-28T16:25:14.701Z"
							width="100%"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Utwórz stronę docelową
						</Text>
					</Link>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				margin="36px 0px 30px 0px"
				md-margin="0px 0px 30px 0px"
				width="100%"
				display="flex"
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
					<Link href="/lp/pl/utworz-witryne-korepetytora" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_building_en.webp?v=2021-09-28T15:58:39.331Z"
						/>
						<Text font="--lead" md-margin="0px 0px 30px 0px" margin="0px 0px 0px 0px">
							Utwórz witrynę korepetytora
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
					<Link color="--darkL1" hover-color="--primary" text-decoration-line="initial" href="/lp/pl/stworz-strone-internetowa-kliniki-stomatologicznej">
						<Image
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_medicine_en.webp?v=2021-09-28T16:16:02.493Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Stwórz stronę internetową kliniki stomatologicznej
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
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 15px 0px 0px"
					md-width="100%"
				>
					<Link href="/lp/pl/stworz-portfolio-projektanta-wnetrz" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_decor_en.webp?v=2021-09-28T16:08:13.810Z"
							width="100%"
							display="flex"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Stwórz portfolio projektanta wnętrz
						</Text>
					</Link>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					padding="0px 0px 0px 15px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
				>
					<Link href="/lp/pl/stworz-strone-internetowa-placowki-edukacyjnej" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_abstract_en.webp?v=2021-09-28T15:59:44.719Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Stwórz stronę internetową placówki edukacyjnej
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
					text-align="center"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					sm-text-align="center"
				>
					Stwórz stronę nauczyciela za pomocą uKit
				</Text>
				<Text margin="0px 0px 36px 0px" font="--lead" color="--lightD1" text-align="center">
					Możesz zacząć korzystać z platformy uKit za darmo. Okres próbny — 14 dni
					<Link
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						href="https://ukit.com/ru/signup"
					>
						<br />
					</Link>
				</Text>
				<Link
					href="https://ukit.com/pl/signUp"
					color="--secondary"
					margin="0px 0px 0px 0px"
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
					background="--color-white"
					text-decoration-line="initial"
					font="--lead"
					padding="15px 25px 16px 25px"
					border-radius="100px"
					display="inline"
					hover-background="--color-lightD1"
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
			<link rel={"canonical"} href={"/lp/pl/utworz-witryne-nauczyciela/"} place={"endOfHead"} rawKey={"6159e77568a321c9b0ac57c1"} />
		</RawHtml>
	</Theme>;
});