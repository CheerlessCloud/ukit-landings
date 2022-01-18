import React from "react";
import theme from "theme";
import { Theme, Text, Link, Box, Image, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsColumnsGutters, BsGear, BsGraphUp, BsBoxArrowUpRight, BsCheckBox, BsGrid, BsDiamond, BsCreditCard, BsCloud, BsDocumentText, BsEnvelope, BsArrowLeftRight, BsBarChart, BsPhone } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"lp/ru/sayt-pod-klyuch"} />
		<Helmet>
			<title>
				Сайт под ключ — uKit. Конструктор сайтов для бизнеса
			</title>
			<meta name={"description"} content={"Готовый сайт на базе любого тематического шаблона в uKit — от $2,5/месяц. Сюда уже входят безлимитный хостинг, SMS-оповещения о заявках из форм и сам онлайн-конструктор. Сайт под ключ с разработкой индивидуального дизайна профессионалами — от 4900 руб. Услуги оказываются собственным web-агентством Divly"} />
			<meta property={"og:title"} content={"Сайт под ключ — uKit. Конструктор сайтов для бизнеса "} />
			<meta property={"og:description"} content={"Готовый сайт на базе любого тематического шаблона в uKit — от $2,5/месяц. Сюда уже входят безлимитный хостинг, SMS-оповещения о заявках из форм и сам онлайн-конструктор. Сайт под ключ с разработкой индивидуального дизайна профессионалами — от 4900 руб. Услуги оказываются собственным web-агентством Divly"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/favicon.png?v=2021-08-20T04:41:32.122Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#4773FF"} />
		</Helmet>
		<Components.RuHeader />
		<Section md-padding="60px 15px 50px 15px" padding="84px 0 100px 0" lg-padding="48px 15px 100px 15px">
			<Override
				slot="SectionContent"
				lg-width="100%"
				lg-flex-wrap="wrap"
				lg-align-items="center"
				lg-justify-content="center"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
				align-items="center"
			/>
			<Box
				lg-width="100%"
				lg-margin="0px 0px 90px 0px"
				lg-padding="0px 20px 0px 20px"
				width="50%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
			>
				<Text
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h1"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
				>
					Сайт под ключ{"\n"}
				</Text>
				<Text font="--base" color="--dark" margin="0px 0px 50px 0px">
					Готовый сайт на базе любого тематического шаблона в uKit — от $2,5/месяц. Сюда уже входят безлимитный хостинг, SMS-оповещения о заявках из форм и сам онлайн-конструктор.{"\n"}
					<br />
					Сайт под ключ с разработкой индивидуального дизайна профессионалами — от 4900 руб. Услуги оказываются собственным web-агентством Divly
				</Text>
				<Link
					border-radius="100px"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
					color="--white"
					text-decoration-line="initial"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					border-width="1px"
					display="inline"
					href="https://ukit.com/ru/signup"
					font="--lead"
					border-style="solid"
					border-color="--color-secondary"
					background="#4773ff"
				>
					Запустить свой сайт{"\n\n"}
				</Link>
			</Box>
			<Box
				lg-position="relative"
				flex-direction="column"
				display="flex"
				position="relative"
				left="20px"
				lg-width="100%"
				lg-left="0px"
				lg-padding="0px 20px 0px 20px"
				width="50%"
			>
				<Image
					position="absolute"
					left="-70px"
					right="auto"
					top="-70px"
					lg-height="100px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					width="150px"
					height="150px"
					lg-left="-24px"
					lg-top="-42px"
					bottom="auto"
					lg-width="100px"
				/>
				<Image
					top="auto"
					lg-width="100px"
					lg-height="100px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					width="150px"
					height="150px"
					left="auto"
					right="-135px"
					lg-right="-26px"
					position="absolute"
					bottom="-80px"
					transform="rotate(180deg)"
					lg-bottom="-44px"
				/>
				<Image
					border-color="#6c757d2f"
					border-radius="18px"
					lg-width="100%"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_trucking_ru.webp?v=2021-09-24T09:11:17.779Z"
					width="112%"
					border-width="2px"
					border-style="solid"
				/>
			</Box>
		</Section>
		<Section padding="40px 0 80px 0">
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
				lg-margin="0px 0px 30px 0px"
				align-self="flex-start"
				width="20%"
				align-items="flex-start"
				lg-width="33.33333%"
				lg-flex-direction="column"
				md-width="100%"
				display="flex"
				flex-direction="column"
				padding="0px 20px 0px 0px"
			>
				<Icon
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="#4773ff"
					category="bs"
					icon={BsColumnsGutters}
				/>
				<Text
					margin="0px 0px 0px 0px"
					color="--darkL1"
					font="--lead"
					align-self="auto"
					position="static"
				>
					Бесплатные современные шаблоны{"\n\n"}
				</Text>
			</Box>
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
					align-items="center"
					size="63px"
					color="#4773ff"
					category="bs"
					icon={BsGear}
					margin="0 0 18px 0"
				/>
				<Text color="--darkL1" font="--lead" margin="0px 0px 0px 0px">
					Блочный онлайн-конструктор{"\n\n"}
				</Text>
			</Box>
			<Box
				lg-margin="0px 0px 30px 0px"
				md-width="100%"
				align-self="flex-start"
				width="20%"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-flex-direction="column"
				display="flex"
				flex-direction="column"
				lg-width="33.33333%"
			>
				<Icon
					size="63px"
					color="#4773ff"
					category="bs"
					icon={BsGraphUp}
					margin="0 0 18px 0"
					align-items="center"
				/>
				<Text color="--darkL1" font="--lead" margin="0px 0px 0px 0px">
					Модули рекламы и SEO-продвижения
				</Text>
			</Box>
			<Box
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				md-width="100%"
				md-margin="0px 0px 30px 0px"
				lg-flex-direction="column"
				align-self="flex-start"
				width="20%"
				display="flex"
				flex-direction="column"
				lg-width="33.33333%"
			>
				<Icon
					category="bs"
					icon={BsBoxArrowUpRight}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="#4773ff"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" width="95%">
					Любой тип бизнес-сайтов{"\n\n"}
				</Text>
			</Box>
			<Box
				width="20%"
				display="flex"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				flex-direction="column"
				lg-flex-direction="column"
				md-width="100%"
				align-self="flex-start"
			>
				<Icon
					color="#4773ff"
					category="bs"
					icon={BsCheckBox}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
				/>
				<Text font="--lead" margin="0px 0px 0px 0px" color="--darkL1">
					Услуги профессионалов{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section lg-padding="80px 0 100px 0" md-padding="40px 0 100px 0" padding="80px 0 183px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				flex-wrap="wrap"
				max-width="1056px"
			/>
			<Box
				align-items="flex-start"
				padding="0px 20px 50px 0px"
				lg-width="100%"
				lg-padding="0px 0px 0px 0px"
				width="58.333%"
				display="flex"
				flex-direction="column"
			>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Сайт под ключ на базе тематического шаблона
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Готовые варианты оформления сайтов разного профиля и тематики: одностраничные и со сложной структурой, портфолио, лендинги, визитки, онлайн-магазины и др. В каждом есть осмысленное наполнение. Остаётся только настроить под себя и опубликовать
				</Text>
			</Box>
			<Box
				display="flex"
				flex-direction="row"
				align-items="flex-start"
				margin="0px 0px 0px 8.333999999999996%"
				lg-margin="0px 0px 0px 0px"
				lg-width="100%"
				width="33.333%"
			>
				<Box display="flex" flex-direction="column" margin="0px 60px 0px 0px">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						350+
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						Шаблонов
					</Text>
				</Box>
				<Box width="30%" display="flex" flex-direction="column">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						40+
					</Text>
					<Text color="--dark" margin="0px 0px 0px 0px" font="--base">
						Тематик
					</Text>
				</Box>
			</Box>
			<Box
				padding="0px 15px 0px 15px"
				position="relative"
				align-items="center"
				justify-content="center"
				lg-width="100%"
				width="66.667%"
				margin="60px 0px 0px 0px"
				display="flex"
			>
				<Image
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Rv4eQizc8WwsricgTJGH.webp?v=2021-08-23T21:27:54.077Z"
					position="absolute"
					left="-200px"
					lg-right="auto"
					lg-top="auto"
					sm-right="auto"
					width="198px"
					bottom="auto"
					lg-height="123.547px"
					sm-left="-11px"
					sm-border-radius="6px"
					border-radius="18px"
					lg-bottom="30px"
					lg-left="-43px"
					sm-width="100px"
					right="auto"
					top="175px"
					sm-bottom="20px"
					sm-height="62.4062px"
					sm-top="auto"
				/>
				<Image
					position="absolute"
					right="auto"
					lg-left="-92px"
					width="321px"
					lg-bottom="-137px"
					lg-top="auto"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_model_ru.webp?v=2021-09-24T11:19:37.079Z"
					left="-355px"
					top="auto"
					lg-height="231.375px"
					lg-width="213px"
					border-radius="18px"
					bottom="-110px"
					lg-right="auto"
					lg-display="none"
					loading="lazy"
				/>
				<Image
					sm-border-radius="6px"
					height="207.95px"
					width="324.717px"
					right="77.2861px"
					sm-height="107.766px"
					sm-left="auto"
					loading="lazy"
					top="-82px"
					bottom="249.048px"
					sm-width="170px"
					sm-right="-11px"
					sm-top="-44px"
					border-radius="18px"
					position="absolute"
					sm-bottom="auto"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_abstract_ru.webp?v=2021-09-08T10:55:07.717Z"
					left="302px"
				/>
				<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_coworking_ru.webp?v=2021-09-07T07:45:42.330Z" border-radius="18px" sm-border-radius="6px" loading="lazy" />
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
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_advert_ru.webp?v=2021-09-24T09:05:09.415Z"
					border-radius="18px"
					lg-width="100%"
					sm-border-radius="6px"
				/>
				<Image
					sm-border-radius="6px"
					height="199.95px"
					right="-76px"
					bottom="auto"
					lg-height="187.5px"
					sm-width="154px"
					sm-right="auto"
					sm-height="96.25px"
					position="absolute"
					lg-bottom="auto"
					loading="lazy"
					sm-bottom="auto"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_psychologist_ru%201.webp?v=2021-09-05T12:16:59.810Z"
					border-radius="18px"
					width="300px"
					lg-left="auto"
					lg-right="-42px"
					lg-top="-45px"
					top="-127px"
					left="auto"
					sm-left="31px"
					sm-top="-51px"
				/>
				<Image
					border-radius="18px"
					sm-bottom="-27px"
					sm-height="auto"
					sm-top="auto"
					width="254.14285714285714px"
					lg-right="-11px"
					sm-right="72px"
					loading="lazy"
					sm-border-radius="6px"
					height="166.583px"
					top="344.417px"
					bottom="-85px"
					left="136.84014285714287px"
					lg-bottom="-67px"
					sm-left="auto"
					sm-width="132px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/EQ5NUJ2vJkflcZOEukUa.webp?v=2021-09-04T17:36:05.180Z"
					position="absolute"
					right="-39px"
					lg-height="154.625px"
					lg-left="auto"
					lg-top="auto"
				/>
				<Image
					sm-left="auto"
					sm-right="-66px"
					width="192px"
					sm-bottom="auto"
					lg-bottom="auto"
					lg-height="119.047px"
					border-radius="18px"
					position="absolute"
					right="-200px"
					bottom="auto"
					lg-right="auto"
					lg-left="200px"
					sm-height="119.047px"
					sm-top="-38px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_service_ru.webp?v=2021-09-08T10:54:09.171Z"
					top="120px"
					loading="lazy"
					sm-border-radius="6px"
					left="auto"
					lg-top="-46px"
				/>
			</Box>
		</Section>
		<Section padding="130px 0 130px 0" lg-padding="100px 0 100px 0" background="--color-secondary">
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" max-width="1056px" />
			<Box
				lg-width="100%"
				lg-margin="0px 0px 40px 0px"
				display="flex"
				flex-direction="column"
				align-items="center"
				padding="0px 0px 0px 0px"
				margin="0px 15% 40px 15%"
			>
				<Text
					width="100%"
					text-align="center"
					margin="0px 0px 15px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Что вы получаете вместе с uKit
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--white" text-align="center">
					Живая техподдержка, которая доступна круглосуточно, готовые инструменты для самостоятельной рекламы и продвижения, огромный выбор готовых шаблонов с наполнением и удобный конструктор, в которым их можно доработать под свои нужды
				</Text>
			</Box>
			<Box
				padding="0px 15px 0px 15px"
				display="flex"
				flex-direction="row"
				lg-flex-wrap="wrap"
				flex="0 1 auto"
				align-self="auto"
				flex-wrap="wrap"
				justify-content="center"
				lg-width="100%"
				lg-flex-direction="row"
				width="100%"
			>
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
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsGrid}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Индивидуальный дизайн и готовые шаблоны
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
						align-self="center"
						category="bs"
						icon={BsCheckBox}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text text-align="center" margin="0px 0px 0px 0px" color="--white" font="--lead">
						Своё web-агентство Divly{"\n\n"}
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
						icon={BsDiamond}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
						category="bs"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Бесплатный тест на 14 дней
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
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsBoxArrowUpRight}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
					/>
					<Text font="--lead" text-align="center" margin="0px 0px 0px 0px" color="--white">
						Быстрый запуск типовых бизнес-сайтов{"\n\n"}
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
						icon={BsCreditCard}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
						category="bs"
					/>
					<Text font="--lead" text-align="center" margin="0px 0px 0px 0px" color="--white">
						Готовый модуль магазина и приём оплаты онлайн
					</Text>
				</Box>
				<Box
					lg-width="50%"
					md-width="100%"
					width="33%"
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
				>
					<Icon
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsCloud}
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Безлимитный хостинг{"\n\n"}
					</Text>
				</Box>
				<Box
					lg-width="50%"
					md-width="100%"
					width="33%"
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
				>
					<Icon
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsDocumentText}
						margin="0 0 18px 0"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Готовые формы и бесплатные уведомления (email+SMS)
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
						size="63px"
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsEnvelope}
						margin="0 0 18px 0"
						align-items="center"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Виджеты обратной связи, заказа звонка, чаты и т.п.
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
						icon={BsArrowLeftRight}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Лёгкая интеграция с CRM и другими внешними сервисами
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
						align-self="center"
						category="bs"
						icon={BsBarChart}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text color="--white" font="--lead" text-align="center" margin="0px 0px 0px 0px">
						Возможности для ручного и автоматического SEO-продвижения
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
						icon={BsGraphUp}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Модуль для самостоятельного ведения рекламы
					</Text>
				</Box>
				<Box
					lg-width="50%"
					md-width="100%"
					width="33%"
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
				>
					<Icon
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						align-self="center"
						category="bs"
						icon={BsPhone}
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead" text-align="center">
						Адаптивный дизайн и мобильная версия
					</Text>
				</Box>
			</Box>
		</Section>
		<Section color="--darkL1" md-padding="100px 0 20px 0" padding="130px 0 40px 0">
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
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
					Как получить сайт под ключ в uKit
				</Text>
				<Text color="--darkL1" margin="0px 0px 0px 0px" font="--base">
					Вы можете сделать всё своими руками в нашем онлайн-конструкторе или обратиться к профи из собственного web-агентства. В первом случае расходы сводятся только к оплате подписки uKit, а во втором — к подписке добавится оплата услуг профильных специалистов
				</Text>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="40px 0px 40px 0px">
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
						Платные и бесплатные шаблоны, дизайн на заказ
					</Text>
					<Text font="--lead">
						(350+ шаблонов, 40+ тематик){"\n\n"}
					</Text>
					<Text
						width="84%"
						md-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
					>
						Вы можете начать с готового шаблона, который можно получить бесплатно в каталоге uKit, или с любого платного, представленного в магазине шаблонов Divly (от 1000 руб.). Есть возможность заказа полной разработки с нуля под индивидуальные требования заказчика — тоже в Divly, от 4900 руб. Готовый сайт в любом случае размещается на хостинге uKit
					</Text>
					<Link
						border-style="solid"
						border-radius="100px"
						display="inline"
						href="https://ukit.com/neowizard#templates/all"
						padding="15px 25px 16px 25px"
						margin="0px 0px 10px 0px"
						border-width="1px"
						background="--color-secondary"
						hover-background="linear-gradient(to right,#537cff,#537cff)"
						color="--white"
						text-decoration-line="initial"
						font="--lead"
						border-color="--color-secondary"
					>
						Шаблоны uKit{"\n\n"}
					</Link>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" md-width="100%" width="50%">
					<Image
						align-items="center"
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/v14fQ9MhFpEvlQgku9aj.webp?v=2021-08-23T21:27:54.101Z"
						width="100%"
						display="flex"
					/>
				</Box>
			</Box>
			<Box
				md-margin="0px 0px 40px 0px"
				width="100%"
				display="flex"
				flex-wrap="wrap"
				margin="40px 0px 40px 0px"
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
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/T8x4FOdlRwXqxz1XfpHV.webp?v=2021-08-23T21:27:54.084Z"
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
						Наполнение контентом — бесплатно vs платно
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						В конструкторе uKit используется удобный редактор, который легко осваивается для самостоятельной работы. С ним вы сможете наполнить свой сайт самостоятельно. Более того, многие шаблоны в каталоге уже имеют готовое тематическое наполнение. Но если вам не хватает времени, опыта или знаний — делегируйте задачу специалистам нашего web-агентства. Мы наполним сайт качественным контентом в строгом соответствии с техническим заданием
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
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					width="50%"
					padding="0px 15px 0px 15px"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/three.svg?v=2021-08-19T23:48:35.499Z" margin="0px 0px 24px 0px" />
					<Text md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif" margin="0px 0px 24px 0px" color="--darkL1" font="--headline3">
						Готовая мобильная версия{"\n"}
					</Text>
					<Text
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
					>
						Этот функционал бесплатный, вне зависимости от того, как вы получили шаблон: по индивидуальному заказу, собрали сами в конструкторе или использовали вариант из каталога. Уже внутри редактора вы сможете детально управлять видимостью отдельных блоков или элементов на экранах разных типов устройств
					</Text>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
					<Image
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/JyMuPVgRgDIWC4tESuu2.webp?v=2021-08-23T21:27:54.052Z"
					/>
				</Box>
			</Box>
			<Box flex-wrap="wrap" margin="40px 0px 40px 0px" width="100%" display="flex">
				<Box
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					md-width="100%"
					md-order="1"
				>
					<Image
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/CsTt7bKyG2eVypJO3i4v.webp?v=2021-08-23T21:27:54.009Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
					/>
				</Box>
				<Box
					padding="0px 15px 0px 60px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 15px 0px 15px"
					width="50%"
				>
					<Image margin="0px 0px 24px 0px" width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/four.svg?v=2021-08-19T23:50:40.052Z" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Платный и бесплатный домен
					</Text>
					<Text
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
					>
						Все клиенты uKit получают бесплатный домен третьего уровня — имя можно задать самостоятельно, так, чтобы оно легко читалось и запоминалось. Домен второго уровня можно зарегистрировать прямо в панели управления или напрямую через регистратора. При покупке из нашей панели, DNS-записи и HTTPS-версия сайта (с бесплатным SSL-сертификатом) настраиваются автоматически
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
					<Text md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif" margin="0px 0px 24px 0px" color="--darkL1" font="--headline3">
						Готовый интернет-магазин под ключ
					</Text>
					<Text
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
					>
						Самостоятельно наполненный и запущенный на базе бесплатного шаблона магазин обойдётся от 6 $/месяц, в соответствии с тарифным планом «Магазин». Любое количество товаров, различные способы оплаты и доставки, скидки, купоны, готовые формы заказа и настраиваемая страница корзины, интеграция с CRM, системами рассылки и аналитики. Более простой вариант для пользователей без опыта — заказ магазина «под ключ», от 7900 руб. с последующей передачей на самостоятельное обслуживание внутри uKit
					</Text>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/IkVK6AHJ5ffoEWmHhfxR.webp?v=2021-08-23T21:27:54.049Z"
						width="100%"
						align-items="center"
						display="flex"
						justify-content="center"
						loading="lazy"
					/>
				</Box>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="40px 0px 40px 0px">
				<Box
					md-order="1"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					md-width="100%"
				>
					<Image
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/CsTt7bKyG2eVypJO3i4v.webp?v=2021-08-23T21:27:54.009Z"
						width="100%"
						display="flex"
						align-items="center"
					/>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 15px 0px 15px"
					width="50%"
					padding="0px 15px 0px 60px"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/6.svg?v=2021-09-28T20:17:25.803Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Ведение рекламы и профессиональное продвижение
					</Text>
					<Text
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
					>
						Если вы хотите полностью контролировать процесс продвижения своего сайта в поисковых системах — редактируйте метатеги, проверяйте готовность сайта в бесплатном SEO-визарде, подбирайте тематические ключевые запросы и запускайте рекламные кампании в нашем рекламном модуле. Не хотите вникать в тонкости рекламного процесса? Закажите работы в Divly — от 1500 руб.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			color="--darkL1"
			lg-padding="40px 0 100px 0"
			md-padding="40px 0 60px 0"
			flex-wrap="wrap"
			flex-direction="row"
			padding="40px 0 130px 0"
		>
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Text
				width="100%"
				display="flex"
				margin="0px 0px 24px 0px"
				font="--headline1"
				color="--darkL1"
				text-align="center"
				letter-spacing="-1px"
				md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				as="h2"
				justify-content="center"
			>
				Осталось сделать выбор:
			</Text>
			<Box display="flex" width="50%" justify-content="center" md-width="100%">
				<Link
					border-radius="100px"
					display="block"
					text-decoration-line="initial"
					padding="15px 25px 16px 25px"
					margin="0px 0px 15px 0px"
					border-style="solid"
					border-color="--color-secondary"
					font="--lead"
					color="--white"
					border-width="1px"
					align-self="flex-start"
					href="https://ukit.com/ru/signup"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
					background="--color-secondary"
				>
					Хочу всё сам{"\n\n"}
				</Link>
			</Box>
			<Box width="50%" display="flex" justify-content="center" md-width="100%">
				<Link
					color="--white"
					padding="15px 25px 16px 25px"
					border-width="1px"
					border-style="solid"
					display="block"
					text-decoration-line="initial"
					margin="0px 0px 0px 0px"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
					align-self="flex-start"
					href="https://divly.ru/?utm_source=ukit&utm_medium=landing&utm_campaign=sayt-pod-klyuch"
					border-color="--color-secondary"
					background="--color-secondary"
					font="--lead"
					border-radius="100px"
				>
					Заказать сайт под ключ в Divly{"\n\n"}
				</Link>
			</Box>
		</Section>
		<Section lg-padding="100px 0 100px 0" md-padding="80px 0 100px 0" padding="130px 0 100px 0" background="--color-lightD1">
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				align-items="center"
				padding="0px 190px 0px 190px"
				lg-padding="0px 0px 0px 0px"
				width="100%"
				display="flex"
				flex-direction="column"
				margin="0px 0px 30px 0px"
				justify-content="center"
				md-margin="0px 0px 20px 0px"
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
					Какие сайты можно получить в uKit
				</Text>
				<Text font="--base" color="--darkL1" text-align="center" margin="0px 0px 0px 0px">
					Наш онлайн-конструктор позволяет в несколько кликов запускать все типы бизнес-сайтов: корпоративные сайты с блогом или новостным разделом, онлайн-магазины, лендинги, визитки, портфолио и многие другие
				</Text>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="36px 0px 30px 0px">
				<Box
					display="flex"
					flex-direction="column"
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
				>
					{" "}
					<Link href="/lp/ru/sozdat-sait-vizitku-online" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_icecream_ru.webp?v=2021-09-08T11:26:04.851Z"
							width="100%"
							display="flex"
							align-items="center"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Сайт-визитка для бизнеса
						</Text>
						{" "}
					</Link>
				</Box>
				<Box
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 0px 0px 15px"
				>
					<Link href="/lp/ru/sozdat-sajt-agentstva-nedvizhimosti" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_hotel_ru.webp?v=2021-09-08T11:14:49.235Z"
							width="100%"
							display="flex"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Сайт агентства недвижимости
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
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<Link href="/lp/ru/sozdat-sajt-yurista" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_advokat_ru.webp?v=2021-09-07T08:55:43.180Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Сайт юриста
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
					<Link href="/lp/ru/sozdat-sajt-stroitelnoj-kompanii" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_complex_ru.webp?v=2021-09-05T17:11:42.996Z"
							width="100%"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Сайт строительной компании
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
					display="flex"
					flex-direction="column"
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
				>
					<Link text-decoration-line="initial" href="/lp/ru/sozdat-sajt-uchitelja" color="--darkL1" hover-color="--primary">
						<Image
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_abstract_ru.webp?v=2021-09-08T10:55:07.717Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Сайт учителя, педагога или преподавателя
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
					<Link text-decoration-line="initial" href="/lp/ru/sozdat-odnostranichnyj-sajt-lending" color="--darkL1" hover-color="--primary">
						<Image
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_service_ru.webp?v=2021-09-08T10:54:09.171Z"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Одностраничный сайт
						</Text>
					</Link>
				</Box>
			</Box>
		</Section>
		<Section background="--color-secondary" lg-padding="100px 0 100px 0" padding="130px 0 130px 0" color="--darkL1">
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
					sm-text-align="center"
					as="h2"
					text-align="center"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Получить свой сайт под ключ
				</Text>
				<Text margin="0px 0px 36px 0px" font="--lead" color="--lightD1" text-align="center">
					Пора попробовать нашу платформу в действии! Убедитесь во всём лично и совершенно бесплатно
				</Text>
				<Link
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
					hover-background="--color-lightD1"
					color="--secondary"
					padding="15px 25px 16px 25px"
					font="--lead"
					margin="0px 0px 15px 0px"
					border-radius="100px"
					display="inline"
					background="--color-white"
					href="https://ukit.com/ru/signup"
					text-decoration-line="initial"
				>
					Бесплатный тест uKit на 14 дней{"\n\n"}
				</Link>
				<Link
					display="inline"
					hover-background="--color-lightD1"
					href="https://divly.ru/?utm_source=ukit&utm_medium=landing&utm_campaign=sayt-pod-klyuch"
					color="--secondary"
					text-decoration-line="initial"
					padding="15px 25px 16px 25px"
					border-width="1px"
					border-radius="100px"
					font="--lead"
					margin="0px 0px 0px 0px"
					border-style="solid"
					border-color="--color-secondary"
					background="--color-white"
				>
					Заявка на разработку под ключ{"\n\n"}
				</Link>
			</Box>
		</Section>
		<Components.RuFooter />
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
			<link rel={"canonical"} href={"/lp/ru/sayt-pod-klyuch/"} place={"endOfHead"} rawKey={"614f529203bf31f5d7d41de4"} />
		</RawHtml>
	</Theme>;
});