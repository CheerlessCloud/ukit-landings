import React from "react";
import theme from "theme";
import { Theme, Text, Link, Box, Image, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsColumnsGutters, BsWindow, BsListUl, BsBell, BsCheckBox, BsPhone, BsAt, BsBarChart, BsGraphUp } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"lp/ru/sozdat-sajt-stroitelnoj-kompanii"} />
		<Helmet>
			<title>
				Создайте сайт строительной компании — uKit. Конструктор сайтов для бизнеса
			</title>
			<meta name={"description"} content={"Качественные блоки для портфолио, готовые шаблоны, секции с прайс-листами, формы обратной связи и другие тематические элементы дизайна. Оповещения о заявках и никакого программированияСайт легко сделать своими руками без всяких профильных знаний\nСайт легко сделать своими руками без всяких профильных знаний.\n"} />
			<meta property={"og:title"} content={"Создайте сайт строительной компании — uKit. Конструктор сайтов для бизнеса"} />
			<meta property={"og:description"} content={"Качественные блоки для портфолио, готовые шаблоны, секции с прайс-листами, формы обратной связи и другие тематические элементы дизайна. Оповещения о заявках и никакого программированияСайт легко сделать своими руками без всяких профильных знаний\nСайт легко сделать своими руками без всяких профильных знаний.\n"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/favicon.png?v=2021-08-20T04:41:32.122Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#4773FF"} />
		</Helmet>
		<Components.RuHeader />
		<Section padding="84px 0 100px 0" lg-padding="48px 15px 100px 15px" md-padding="60px 15px 50px 15px" lg-overflow-x="hidden">
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
				lg-margin="0px 0px 90px 0px"
				lg-padding="0px 20px 0px 20px"
				width="50%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="100%"
			>
				<Text
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h1"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
				>
					Создайте сайт строительной компании
				</Text>
				<Text color="--dark" margin="0px 0px 50px 0px" font="--base">
					Качественные блоки для портфолио, готовые шаблоны, секции с прайс-листами, формы обратной связи и другие тематические элементы дизайна. Оповещения о заявках и никакого программирования
					<br />
					<br />
					Сайт легко сделать своими руками без всяких профильных знаний
				</Text>
				<Link
					color="--white"
					font="--lead"
					border-style="solid"
					border-radius="100px"
					display="inline"
					href="https://ukit.com/ru/signup"
					text-decoration-line="initial"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					border-width="1px"
					border-color="--color-secondary"
					background="#4773ff"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
				>
					Создать сайт компании
				</Link>
			</Box>
			<Box
				width="50%"
				position="relative"
				lg-width="100%"
				lg-left="0px"
				display="flex"
				left="20px"
				flex-direction="column"
				lg-position="relative"
				lg-padding="0px 20px 0px 20px"
			>
				<Image
					bottom="auto"
					lg-width="100px"
					width="150px"
					height="150px"
					position="absolute"
					left="-70px"
					right="auto"
					top="-70px"
					lg-height="100px"
					lg-left="-24px"
					lg-top="-42px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
				/>
				<Image
					lg-width="100px"
					lg-height="100px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					width="150px"
					left="auto"
					bottom="-80px"
					transform="rotate(180deg)"
					lg-right="-26px"
					height="150px"
					position="absolute"
					right="-135px"
					top="auto"
					lg-bottom="-44px"
				/>
				<Image
					border-style="solid"
					border-color="#6c757d2f"
					border-radius="18px"
					lg-width="100%"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/RTS1kyhE6814GQuucWfh.webp?v=2021-09-04T14:20:09.784Z"
					width="112%"
					border-width="2px"
				/>
			</Box>
		</Section>
		<Section padding="40px 0 80px 0" lg-flex-wrap="wrap-reverse" lg-overflow-x="hidden">
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
			<Box flex-wrap="wrap" lg-display="flex" lg-justify-content="center" display="flex">
				<Box
					padding="0px 20px 0px 0px"
					lg-margin="0px 0px 30px 0px"
					md-width="100%"
					align-self="flex-start"
					flex-direction="column"
					align-items="flex-start"
					lg-width="50%"
					lg-flex-direction="column"
					width="20%"
					display="flex"
				>
					<Icon
						icon={BsColumnsGutters}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#4773ff"
						category="bs"
					/>
					<Text
						margin="0px 0px 0px 0px"
						color="--darkL1"
						font="--lead"
						align-self="auto"
						position="static"
					>
						Понятный онлайн-конструктор
					</Text>
				</Box>
				<Box
					flex-direction="column"
					align-items="flex-start"
					lg-width="50%"
					lg-flex-direction="column"
					lg-margin="0px 0px 30px 0px"
					width="20%"
					padding="0px 20px 0px 0px"
					md-width="100%"
					align-self="flex-start"
					display="flex"
				>
					<Icon
						category="bs"
						icon={BsWindow}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#4773ff"
					/>
					<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
						Тематические шаблоны
					</Text>
				</Box>
				<Box
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					width="20%"
					display="flex"
					flex-direction="column"
					md-width="100%"
					align-self="flex-start"
					lg-width="50%"
					lg-flex-direction="column"
					lg-margin="0px 0px 30px 0px"
				>
					<Icon
						size="63px"
						color="#4773ff"
						category="bs"
						icon={BsListUl}
						margin="0 0 18px 0"
						align-items="center"
					/>
					<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
						Готовые формы для заявок
					</Text>
				</Box>
				<Box
					width="20%"
					padding="0px 20px 0px 0px"
					lg-width="50%"
					lg-flex-direction="column"
					md-width="100%"
					md-margin="0px 0px 30px 0px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					align-self="flex-start"
				>
					<Icon
						color="#4773ff"
						category="bs"
						icon={BsBell}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
					/>
					<Text color="--darkL1" font="--lead" width="95%" margin="0px 0px 0px 0px">
						Автоматические оповещения
					</Text>
				</Box>
				<Box
					display="flex"
					align-items="flex-start"
					lg-width="50%"
					md-width="100%"
					align-self="flex-start"
					width="20%"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					lg-flex-direction="column"
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
						Встроенный рекламный модуль
					</Text>
				</Box>
			</Box>
		</Section>
		<Section lg-padding="80px 0 100px 0" md-padding="40px 0 100px 0" padding="80px 0 183px 0" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				flex-wrap="wrap"
				max-width="1056px"
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
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Примеры шаблонов сайтов строительной тематики
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Вам потребуется только приобрести или привязать свой домен. Всё остальное уже есть внутри uKit. Не нужно быть программистом или дизайнером. Легко начать и просто отредактировать
				</Text>
			</Box>
			<Box
				flex-direction="row"
				align-items="flex-start"
				margin="0px 0px 0px 8.333999999999996%"
				lg-margin="0px 0px 0px 0px"
				lg-width="100%"
				width="33.333%"
				display="flex"
			>
				<Box display="flex" flex-direction="column" margin="0px 60px 0px 0px">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						350+
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						Шаблонов
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" width="30%">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						40+
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						Тематик
					</Text>
				</Box>
			</Box>
			<Box
				margin="60px 0px 0px 0px"
				display="flex"
				padding="0px 15px 0px 15px"
				position="relative"
				align-items="center"
				justify-content="center"
				lg-width="100%"
				width="66.667%"
			>
				<Image
					bottom="auto"
					lg-left="-43px"
					sm-height="62.4062px"
					sm-right="auto"
					sm-border-radius="6px"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/nyIDiz9WgPslUePZ7nXM.webp?v=2021-09-04T17:37:32.140Z"
					right="auto"
					sm-width="100px"
					left="-200px"
					position="absolute"
					top="175px"
					lg-top="auto"
					sm-bottom="20px"
					sm-left="-11px"
					sm-top="auto"
					border-radius="18px"
					lg-bottom="30px"
					lg-height="123.547px"
					lg-right="auto"
					width="198px"
				/>
				<Image
					left="-355px"
					bottom="-110px"
					lg-right="auto"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/77gjPoI5JvTq1FAMquGm.webp?v=2021-09-04T17:37:55.466Z"
					border-radius="18px"
					position="absolute"
					width="321px"
					right="auto"
					lg-display="none"
					loading="lazy"
					top="auto"
					lg-height="231.375px"
					lg-left="-92px"
					lg-width="213px"
					lg-bottom="-137px"
					lg-top="auto"
				/>
				<Image
					top="-82px"
					height="204.71923076923076px"
					left="302.46138461538465px"
					sm-height="107.766px"
					sm-right="-11px"
					sm-border-radius="6px"
					loading="lazy"
					border-radius="18px"
					position="absolute"
					bottom="252.27876923076923px"
					sm-top="-44px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Rv4eQizc8WwsricgTJGH.webp?v=2021-08-23T21:27:54.077Z"
					right="77.2861px"
					sm-width="170px"
					sm-bottom="auto"
					sm-left="auto"
					width="324.2516153846154px"
				/>
				<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_complex_ru.webp?v=2021-09-05T17:11:42.996Z" border-radius="18px" sm-border-radius="6px" loading="lazy" />
			</Box>
			<Box
				padding="0px 15px 0px 15px"
				justify-content="center"
				align-items="center"
				position="relative"
				lg-width="100%"
				width="33.333%"
				margin="60px 0px 0px 0px"
				display="flex"
			>
				<Image
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/f3yCqvj8B7pPrPwF2SU4.webp?v=2021-09-04T17:36:56.052Z"
					border-radius="18px"
					lg-width="100%"
					sm-border-radius="6px"
				/>
				<Image
					lg-left="auto"
					lg-right="-42px"
					sm-width="154px"
					sm-right="auto"
					height="199.95px"
					position="absolute"
					left="auto"
					lg-height="187.5px"
					lg-top="-45px"
					sm-top="-51px"
					loading="lazy"
					top="-127px"
					width="300px"
					bottom="auto"
					sm-bottom="auto"
					sm-height="96.25px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_exhibition_ru.webp?v=2021-09-05T17:13:31.340Z"
					right="-76px"
					lg-bottom="auto"
					sm-left="31px"
					sm-border-radius="6px"
					border-radius="18px"
				/>
				<Image
					sm-left="auto"
					border-radius="18px"
					lg-bottom="-67px"
					sm-bottom="-27px"
					height="166.583px"
					width="254.14285714285714px"
					right="-39px"
					sm-width="132px"
					lg-right="-11px"
					lg-top="auto"
					sm-right="72px"
					sm-top="auto"
					sm-border-radius="6px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/EQ5NUJ2vJkflcZOEukUa.webp?v=2021-09-04T17:36:05.180Z"
					bottom="-85px"
					lg-left="auto"
					lg-height="154.625px"
					sm-height="auto"
					loading="lazy"
					position="absolute"
					top="344.417px"
					left="136.84014285714287px"
				/>
				<Image
					sm-height="119.047px"
					sm-top="-38px"
					width="192px"
					left="auto"
					lg-left="200px"
					lg-top="-46px"
					loading="lazy"
					border-radius="18px"
					bottom="auto"
					sm-left="auto"
					sm-right="-66px"
					lg-right="auto"
					lg-bottom="auto"
					sm-border-radius="6px"
					lg-height="119.047px"
					sm-bottom="auto"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_psychologist_ru%201.webp?v=2021-09-05T12:16:59.810Z"
					position="absolute"
					top="120px"
					right="-200px"
				/>
			</Box>
		</Section>
		<Section background="--color-secondary" padding="130px 0 130px 0" lg-padding="100px 0 100px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				width="75%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 0px 0px 0px"
				margin="0px 25% 40px 0px"
				lg-width="100%"
				lg-margin="0px 0px 40px 0px"
			>
				<Text
					as="h2"
					margin="0px 0px 15px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Какие функции есть у uKit для создания эффективных сайтов строительных компаний
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--white">
					Вам не придётся нанимать специалистов, чтобы сделать свой собственный сайт для рекламы услуг и сбора заявок. Любую страницу можно собрать из готовых блоков и виджетов. Интеграция с внешними сервисами настраивается в пару кликов
				</Text>
			</Box>
			<Box
				lg-flex-wrap="wrap"
				width="33.333%"
				padding="0px 15px 0px 15px"
				display="flex"
				flex-direction="column"
				justify-content="center"
				lg-width="100%"
				lg-flex-direction="row"
			>
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
						category="bs"
						icon={BsWindow}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Готовые шаблоны для строительных сайтов
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
						icon={BsPhone}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Автоматическая поддержка мобильных
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
						icon={BsAt}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Сквозной блок с контактами
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
						icon={BsBell}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Набор виджетов для организации портфолио
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
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsBarChart}
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Встроенные формы для сбора заявок
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
						icon={BsGraphUp}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Онлайн-чаты, кнопки заказа звонка
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
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsCheckBox}
						margin="0 0 18px 0"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Онлайн-калькуляторы в uCalc
					</Text>
				</Box>
			</Box>
			<Box
				margin="0px 0px 0px 8.333999999999996%"
				display="flex"
				lg-margin="30px 0px 0px 0px"
				lg-width="100%"
				height="1280px"
				width="58.333%"
			>
				<Image
					border-radius="18px"
					box-shadow="0px 0px 35px 0px #00000040"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/FireShot%20Capture%20375%20-%20%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20-%20edrdevre.ukit%201.webp?v=2021-09-05T17:24:21.231Z"
					width="100%"
					loading="lazy"
					height="1350px"
					display="inline-block"
				/>
			</Box>
		</Section>
		<Section padding="130px 0 40px 0" color="--darkL1" md-padding="100px 0 20px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" max-width="1056px" />
			<Box
				margin="0px 33.333% 22px 0px"
				lg-margin="0px 0px 22px 0px"
				lg-width="100%"
				width="66.667%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 15px 0px 15px"
			>
				<Text
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
				>
					Как самостоятельно создать сайт строительной компании в uKit
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1">
					У вас точно получится запустить свой собственный сайт, даже если у вас нет навыков программирования или других профильных знаний. Процесс отнимет всего пару часов вашего времени. Достаточно пройти алгоритм по шагам
				</Text>
			</Box>
			<Box flex-wrap="wrap" margin="40px 0px 40px 0px" width="100%" display="flex">
				<Box
					align-items="flex-start"
					md-width="100%"
					width="50%"
					padding="0px 15px 0px 15px"
					display="flex"
					flex-direction="column"
					justify-content="center"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/one.svg?v=2021-08-19T23:41:55.506Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Выберите подходящий шаблон
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						md-width="100%"
					>
						Вам будут доступны сотни готовых тематических дизайнов для разных типов бизнес-сайтов, одностраничных и многостраничных. Вместе с шаблоном вы получаете осмысленное текстовое наполнение, которое наглядно демонстрирует, где и какой должен располагаться контент. При желании его можно оставить «как есть», а можно переделать. Цветовая палитра и шрифты меняются в пару кликов
					</Text>
					<Link
						href="https://ukit.com/neowizard#templates/all"
						padding="15px 25px 16px 25px"
						margin="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						hover-background="linear-gradient(to right,#537cff,#537cff)"
						color="--white"
						text-decoration-line="initial"
						font="--lead"
						border-color="--color-secondary"
						border-radius="100px"
						background="--color-secondary"
						display="inline"
					>
						Посмотреть шаблоны
					</Link>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" md-width="100%" width="50%">
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
				margin="40px 0px 40px 0px"
				md-margin="0px 0px 40px 0px"
				width="100%"
				display="flex"
				flex-wrap="wrap"
			>
				<Box
					display="flex"
					md-width="100%"
					md-order="1"
					width="50%"
					margin="0px 0px 0px 0px"
				>
					<Image
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/T8x4FOdlRwXqxz1XfpHV.webp?v=2021-08-23T21:27:54.084Z"
						width="100%"
					/>
				</Box>
				<Box
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 15px 0px 15px"
					width="50%"
					padding="0px 15px 0px 60px"
					display="flex"
				>
					<Image margin="0px 0px 24px 0px" width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/two.svg?v=2021-08-19T23:46:45.698Z" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Наполните свой сайт
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Добавьте или отредактируйте текстовое содержимое, загрузите свои фото и видео с объектов, продемонстрируйте качество своей работы с помощью других элементов сайта. На выбор предоставляются слайдеры, галереи, таймлайны, блоки с этапами работ и прайс-листы. Картинки можно отредактировать прямо в конструкторе
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
					<Text font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif" margin="0px 0px 24px 0px" color="--darkL1">
						Проверьте отображение на мобильных
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Трафик с мобильных устройств очень важен. uKit адаптирует сайты под любые экраны без участия пользователей. Но при желании можно скрыть отдельные элементы или целые виджеты, по-другому настроить фон и оформление отдельно для планшетов или смартфонов
					</Text>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/JyMuPVgRgDIWC4tESuu2.webp?v=2021-08-23T21:27:54.052Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
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
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/CsTt7bKyG2eVypJO3i4v.webp?v=2021-08-23T21:27:54.009Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
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
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Настройте домен
					</Text>
					<Text
						font="--base"
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
					>
						Зарегистрировать новое доменное имя, можно не покидая панели управления uKit, привязка к хостингу будет настроена автоматически. Сайт будет поддерживать защищённый протокол HTTPS, никаких дополнительных действий для получения SSL-сертификатов не требуется
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
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					width="50%"
					padding="0px 15px 0px 15px"
					display="flex"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/five.svg?v=2021-08-19T23:51:49.573Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Опубликуйте сайт
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Как только вы нажмёте кнопку «Опубликовать», сайт станет доступен для посещения. Не бойтесь редактировать его содержимое в процессе работы, uKit позволяет хранить до 10 резервных копий. Если вы сделаете что-то не так, просто откатитесь до нужной версии или отмените действие в редакторе кнопкой «Назад»
					</Text>
				</Box>
				<Box md-width="100%" width="50%" margin="0px 0px 0px 0px" display="flex">
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
					as="h2"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Почти готово!
				</Text>
				<Text text-align="center" margin="0px 0px 36px 0px" font="--base" color="--darkL1">
					Не забудьте добавить сайт в поисковые системы и позаботиться о SEO-продвижении. Проверить готовность можно в специальном визарде. Пока сайт индексируется, вы можете привлечь своих первых клиентов с помощью онлайн-рекламы. Запустить эффективные рекламные кампании можно в специальном рекламном модуле
				</Text>
				<Link
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
					display="inline"
					text-decoration-line="initial"
					font="--lead"
					padding="15px 25px 16px 25px"
					border-radius="100px"
					background="--color-secondary"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
					href="https://ukit.com/ru/signup"
					color="--white"
					margin="0px 0px 0px 0px"
				>
					Создать сайт
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
				justify-content="center"
				lg-padding="0px 0px 0px 0px"
				md-margin="0px 0px 20px 0px"
				display="flex"
				padding="0px 190px 0px 190px"
				margin="0px 0px 30px 0px"
				width="100%"
				flex-direction="column"
				align-items="center"
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
					Какие ещё сайты можно сделать в uKit
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1" text-align="center">
					Конструктор uKit позволяет запускать любые тематические проекты для бизнеса буквально за несколько часов без специальных знаний и навыков. Любой сайт можно сделать своими руками
				</Text>
			</Box>
			<Box display="flex" flex-wrap="wrap" margin="36px 0px 30px 0px" width="100%">
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
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_advokat_ru.webp?v=2021-09-07T08:55:43.180Z"
							width="100%"
							display="flex"
							align-items="center"
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
					<Link href="/lp/ru/sozdat-sait-vizitku-online" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
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
						<Text margin="0px 0px 0px 0px" font="--lead">
							Сайт-визитка для бизнеса
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
					<Link href="/lp/ru/sozdat-sajt-dezajnera-interjerov" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_decor_ru.webp?v=2021-09-07T07:36:51.835Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							{" "}Сайт-портфолио дизайнера интерьеров
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
					<Link href="/lp/ru/sozdat-sajt-agentstva-nedvizhimosti" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_coworking_ru.webp?v=2021-09-07T07:45:42.330Z"
							width="100%"
							display="flex"
						/>
						<Text font="--lead" margin="0px 0px 0px 0px">
							Сайт агентства недвижимости
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
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Link href="/lp/ru/sozdat-odnostranichnyj-sajt-lending" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_autolaw_ru.webp?v=2021-09-07T08:56:18.654Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Одностраничный сайт
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
					<Link href="/lp/ru/sozdat-sajt-stomatologii" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_dental_ru%201.webp?v=2021-09-05T12:18:24.069Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
						/>
						<Text font="--lead" margin="0px 0px 0px 0px">
							Сайт стоматологической клиники
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
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					sm-text-align="center"
					as="h2"
					text-align="center"
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
				>
					Создать сайт строительной компании в uKit
				</Text>
				<Text margin="0px 0px 36px 0px" font="--lead" color="--lightD1" text-align="center">
					Начните использовать платформу без каких-либо обязательств и предоплаты. Ознакомьтесь с шаблонами и функциональными возможностями конструктора прямо сейчас
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
					color="--secondary"
					text-decoration-line="initial"
					padding="15px 25px 16px 25px"
					border-color="--color-secondary"
					hover-background="--color-lightD1"
					href="https://ukit.com/ru/signup"
					margin="0px 0px 0px 0px"
					border-width="1px"
					border-style="solid"
					border-radius="100px"
					display="inline"
					background="--color-white"
					font="--lead"
				>
					Начать бесплатно
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
			<link rel={"canonical"} href={"/lp/ru/sozdat-sajt-stroitelnoj-kompanii/"} place={"endOfHead"} rawKey={"613fa1f026787f98c9931c52"} />
		</RawHtml>
	</Theme>;
});