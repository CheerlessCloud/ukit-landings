import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Создание сайта-визитки для бизнеса | uKit
			</title>
			<meta name={"description"} content={"Простое и быстрое создание сайта-визитки для вашего бизнеса. Никакого кода, масса готовых шаблонов, бесплатные SMS-уведомления и заявки, безлимитный хостинг. Готовый сайт за один вечер."} />
			<meta property={"og:title"} content={"Создание сайта-визитки для бизнеса | uKit"} />
			<meta property={"og:description"} content={"Простое и быстрое создание сайта-визитки для вашего бизнеса. Никакого кода, масса готовых шаблонов, бесплатные SMS-уведомления и заявки, безлимитный хостинг. Готовый сайт за один вечер."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/favicon.png?v=2021-08-20T04:41:32.122Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#4773FF"} />
		</Helmet>
		<Section padding="34px 0 24px 0">
			<Override
				slot="SectionContent"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
				align-items="center"
			/>
			<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/logo.svg?v=2021-08-19T11:29:12.664Z" width="80px" height="34px" />
			<Box display="flex" align-items="center" padding="0px 0px 0px 0px">
				<Link
					href="https://ukit.com/ru/whyus"
					color="--dark"
					text-decoration-line="initial"
					font="--menu"
					hover-color="--primary"
					padding="5px 7px 5px 7px"
					transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
					margin="0px 7px 0px 7px"
					md-display="none"
				>
					Почему мы{"\n\n"}
				</Link>
				<Link
					href="https://ukit.com/ru/pricing"
					color="--dark"
					text-decoration-line="initial"
					font="--menu"
					hover-color="--primary"
					padding="5px 7px 5px 7px"
					transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
					margin="0px 7px 0px 7px"
					md-display="none"
				>
					Цены
				</Link>
				<Link
					href="https://ukit.com/ru/signin"
					color="--dark"
					text-decoration-line="initial"
					font="--menu"
					hover-color="--primary"
					padding="5px 7px 5px 7px"
					transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
					margin="0px 7px 0px 7px"
					md-display="none"
				>
					Войти
				</Link>
				<Link
					href="https://ukit.com/ru/signUp"
					color="--secondary"
					text-decoration-line="initial"
					font="--menu"
					hover-color="--primary"
					padding="5px 18px 5px 18px"
					transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
					margin="0px 7px 0px 7px"
					border-width="2px"
					border-style="solid"
					border-color="--color-secondary"
					border-radius="50px"
				>
					Создать сайт{"\n\n"}
				</Link>
			</Box>
		</Section>
		<Section padding="84px 0 100px 0" lg-padding="48px 15px 100px 15px" md-padding="60px 15px 50px 15px">
			<Override
				slot="SectionContent"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
				align-items="center"
				lg-width="100%"
				lg-flex-wrap="wrap"
				lg-align-items="center"
				lg-justify-content="center"
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
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Создание сайта-визитки для бизнеса
					<br />
					{"\n\n"}
				</Text>
				<Text margin="0px 0px 30px 0px" font="normal 300 18px/28px --fontFamily-googleInter" color="--dark">
					Никакого кода, масса готовых шаблонов, бесплатные SMS-уведомления и заявки, безлимитный хостинг. Готовый сайт за один вечер
					<Link href="https://ukit.com/ru/signup">
						<br />
						{"\n\n"}
					</Link>
				</Text>
				<Link
					href="https://ukit.com/ru/signup"
					color="--white"
					text-decoration-line="initial"
					font="--lead"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
					border-radius="100px"
					background="--color-secondary"
					display="inline"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
				>
					Создать сайт-визитку{"\n\n"}
				</Link>
			</Box>
			<Box
				width="50%"
				display="flex"
				position="relative"
				left="20px"
				flex-direction="column"
				lg-width="100%"
				lg-position="relative"
				lg-left="0px"
				lg-padding="0px 20px 0px 20px"
			>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					width="150px"
					height="150px"
					position="absolute"
					left="-70px"
					right="auto"
					top="-70px"
					bottom="auto"
					lg-width="100px"
					lg-height="100px"
					lg-left="-24px"
					lg-top="-42px"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					width="150px"
					height="150px"
					position="absolute"
					left="auto"
					right="-135px"
					top="auto"
					bottom="-80px"
					transform="rotate(180deg)"
					lg-width="100px"
					lg-height="100px"
					lg-bottom="-44px"
					lg-right="-26px"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/bZGE1tHTkrxhpKK8gEss.webp?v=2021-08-23T21:38:43.245Z"
					width="112%"
					border-width="2px"
					border-style="solid"
					border-color="#6c757d2f"
					border-radius="18px"
					lg-width="100%"
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
				width="20%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				lg-margin="0px 0px 30px 0px"
				md-width="100%"
			>
				<Image width="60px" height="63px" margin="0px 0px 18px 0px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/shablon.svg?v=2021-08-19T13:00:42.491Z" />
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Современные шаблоны
				</Text>
			</Box>
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				lg-margin="0px 0px 30px 0px"
				md-width="100%"
			>
				<Image width="60px" height="63px" margin="0px 0px 18px 0px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/vozmozhnosti.svg?v=2021-08-19T13:03:04.070Z" />
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Широкие возможности
				</Text>
			</Box>
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				lg-margin="0px 0px 30px 0px"
				md-width="100%"
			>
				<Image width="60px" height="63px" margin="0px 0px 18px 0px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/konsturktor.svg?v=2021-08-19T13:03:12.272Z" />
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Удобный конструктор
				</Text>
			</Box>
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				md-width="100%"
				md-margin="0px 0px 30px 0px"
			>
				<Image width="60px" height="63px" margin="0px 0px 18px 0px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/magazin.svg?v=2021-08-19T13:03:21.738Z" />
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" width="95%">
					Понятный интернет-магазин
				</Text>
			</Box>
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="33.33333%"
				lg-flex-direction="column"
				md-width="100%"
			>
				<Image width="60px" height="63px" margin="0px 0px 18px 0px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/analitika.svg?v=2021-08-19T13:03:30.897Z" />
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Расширенная аналитика
					<br />
					{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 183px 0" lg-padding="80px 0 100px 0" md-padding="40px 0 100px 0">
			<Override
				slot="SectionContent"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
				flex-wrap="wrap"
			/>
			<Box
				width="58.333%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 20px 0px 0px"
				lg-width="100%"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Примеры шаблонов сайтов-визиток
					<br />
					{"\n\n"}
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Нужен только свой домен, простейший хостинг и качественный конструктор, чтобы собрать свой вариант. У нас всё это можно получить в одном месте
					<br />
					{"\n\n"}
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
						350{"\n\n"}
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						Шаблонов{"\n\n"}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" width="30%">
					<Text margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px" color="--darkL1">
						40
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						Тематик{"\n\n"}
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/T8x4FOdlRwXqxz1XfpHV.webp?v=2021-08-23T21:27:54.084Z"
					border-radius="18px"
					position="absolute"
					width="198px"
					left="-200px"
					right="auto"
					bottom="auto"
					top="175px"
					lg-bottom="30px"
					lg-height="123.547px"
					lg-left="-43px"
					lg-right="auto"
					lg-top="auto"
					sm-width="100px"
					sm-bottom="20px"
					sm-height="62.4062px"
					sm-left="-11px"
					sm-right="auto"
					sm-top="auto"
					sm-border-radius="6px"
					loading="lazy"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/nFUflQBrTpl7BqtsOGzR.webp?v=2021-08-23T21:27:54.052Z"
					border-radius="18px"
					position="absolute"
					width="321px"
					left="-355px"
					right="auto"
					bottom="-110px"
					top="auto"
					lg-bottom="-137px"
					lg-height="231.375px"
					lg-left="-92px"
					lg-right="auto"
					lg-top="auto"
					lg-width="213px"
					lg-display="none"
					loading="lazy"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/nmCUxieGGsl3krtz3us5.webp?v=2021-08-23T21:27:54.082Z"
					border-radius="18px"
					position="absolute"
					width="287px"
					left="230px"
					right="auto"
					top="-50px"
					bottom="auto"
					sm-width="170px"
					sm-bottom="auto"
					sm-height="107.766px"
					sm-left="auto"
					sm-right="-11px"
					sm-top="-44px"
					sm-border-radius="6px"
					loading="lazy"
				/>
				<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/uPbEN4SxGj7zOJOWZjNi.webp?v=2021-08-23T21:27:54.088Z" border-radius="18px" sm-border-radius="6px" loading="lazy" />
			</Box>
			<Box
				width="33.333%"
				margin="60px 0px 0px 0px"
				display="flex"
				padding="0px 15px 0px 15px"
				justify-content="center"
				align-items="center"
				position="relative"
				lg-width="100%"
			>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/KbUkkIuDvuVPHkeN6OGL.webp?v=2021-08-23T21:27:54.039Z"
					border-radius="18px"
					width="300px"
					position="absolute"
					top="-100px"
					right="-90px"
					bottom="auto"
					left="auto"
					lg-bottom="auto"
					lg-height="187.5px"
					lg-left="auto"
					lg-right="-42px"
					lg-top="-45px"
					sm-width="154px"
					sm-bottom="auto"
					sm-left="31px"
					sm-right="auto"
					sm-top="-51px"
					sm-height="96.25px"
					sm-border-radius="6px"
					loading="lazy"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/62rwRRgQ1V2w6j9QWMZ7.webp?v=2021-08-23T21:27:54.007Z"
					border-radius="18px"
					width="247px"
					position="absolute"
					top="auto"
					right="-50px"
					bottom="-70px"
					left="auto"
					lg-bottom="-67px"
					lg-height="154.625px"
					lg-left="auto"
					lg-right="-11px"
					lg-top="auto"
					sm-bottom="-27px"
					sm-height="auto"
					sm-left="auto"
					sm-right="72px"
					sm-top="auto"
					sm-width="132px"
					sm-border-radius="6px"
					loading="lazy"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/kM1sffZzF1TxYmTUbCXG.webp?v=2021-08-23T21:27:54.045Z"
					border-radius="18px"
					width="192px"
					position="absolute"
					top="120px"
					right="-200px"
					bottom="auto"
					left="auto"
					lg-right="auto"
					lg-bottom="auto"
					lg-height="119.047px"
					lg-left="200px"
					lg-top="-46px"
					sm-bottom="auto"
					sm-height="119.047px"
					sm-left="auto"
					sm-right="-66px"
					sm-top="-38px"
					sm-border-radius="6px"
					loading="lazy"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Rv4eQizc8WwsricgTJGH.webp?v=2021-08-23T21:27:54.077Z"
					border-radius="18px"
					lg-width="100%"
					sm-border-radius="6px"
					loading="lazy"
				/>
			</Box>
		</Section>
		<Section background="--color-secondary" padding="130px 0 130px 0" lg-padding="100px 0 100px 0">
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
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Что вы получите от сайта
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--white">
					Любой желающий может сделать свой сайт — никаких правок кода, только готовые виджеты и секции. Подробные инструкции с примерами, масса готовых шаблонов. Не нужно быть программистом или дизайнером, чтобы создать свою первую визитку
					<br />
					{"\n\n"}
				</Text>
			</Box>
			<Box
				width="33.333%"
				padding="0px 15px 0px 15px"
				display="flex"
				flex-direction="column"
				justify-content="center"
				lg-width="100%"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
			>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					margin="0px 0px 42px 0px"
					lg-width="50%"
					md-width="100%"
				>
					<Image width="64px" height="64px" margin="0px 0px 12px 0px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/shablonu.svg?v=2021-08-19T23:26:28.208Z" />
					<Text margin="0px 0px 0px 0px" color="--white" font="normal 400 18px/28px --fontFamily-googleInter">
						Готовые шаблоны, блоки и формы
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
					<Image width="64px" height="64px" margin="0px 0px 12px 0px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/divece.svg?v=2021-08-19T23:27:46.728Z" />
					<Text margin="0px 0px 0px 0px" color="--white" font="normal 400 18px/28px --fontFamily-googleInter">
						Умная адаптация для мобильных устройств
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
					<Image width="64px" height="64px" margin="0px 0px 12px 0px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/analitics.svg?v=2021-08-19T23:28:18.170Z" />
					<Text margin="0px 0px 0px 0px" color="--white" font="normal 400 18px/28px --fontFamily-googleInter">
						Система статистики и аналитики
						<br />
						{"\n\n"}
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
					<Image width="64px" height="64px" margin="0px 0px 12px 0px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/pochta.svg?v=2021-08-19T23:28:38.419Z" />
					<Text margin="0px 0px 0px 0px" color="--white" font="normal 400 18px/28px --fontFamily-googleInter">
						Бесплатная почта на домене
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/uCWrZDWyzurU5XtCjTgg.webp?v=2021-08-23T21:27:54.095Z"
					width="100%"
					loading="lazy"
				/>
			</Box>
		</Section>
		<Section padding="130px 0 40px 0" color="--darkL1" md-padding="100px 0 20px 0">
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
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
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Как создать сайт-визитку самому в uKit
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1">
					Создайте сайт-визитку самостоятельно за несколько часов, даже если вы никогда не делали этого раньше
					<br />
					{"\n\n"}
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
						Начните с дизайна
						<br />
						{"\n\n"}
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						md-width="100%"
					>
						Вы занимаетесь фотографией, оказываете юридические услуги или организуете свадьбы? У нас есть готовые варианты для практически для любого типа малого бизнеса
					</Text>
					<Link
						href="https://ukit.com/neowizard#templates/all"
						color="--white"
						text-decoration-line="initial"
						font="--lead"
						padding="15px 25px 16px 25px"
						margin="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						border-color="--color-secondary"
						border-radius="100px"
						background="--color-secondary"
						display="inline"
						hover-background="linear-gradient(to right,#537cff,#537cff)"
					>
						Посмотреть шаблоны
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
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					md-width="100%"
					md-order="1"
				>
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/T8x4FOdlRwXqxz1XfpHV.webp?v=2021-08-23T21:27:54.084Z"
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
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/two.svg?v=2021-08-19T23:46:45.698Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Наполните свой сайт контентом
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						В uKit это просто. Можно оставить дизайн из шаблона, заменив демо-контент на собственный. А можно добавить блоки в конструкторе или полностью переделать всё содержимое страницы
						<br />
						{"\n\n"}
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
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Настройте мобильную и планшетную версии
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Наш конструктор почти все сделает за вас, вам останеться только проверить и внести небольшие корректировки
						<br />
						{"\n\n"}
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
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/CsTt7bKyG2eVypJO3i4v.webp?v=2021-08-23T21:27:54.009Z"
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
					md-padding="0px 15px 0px 0px"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/four.svg?v=2021-08-19T23:50:40.052Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Привяжите свой домен
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Вы можете получить новый домен в панели управления uKit или привязать уже имеющийся. SSL-сертификаты для HTTPS-версии сайта предоставляются бесплатно и настраиваются автоматически. Ничего не придётся редактировать вручную
						<br />
						{"\n\n"}
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
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/five.svg?v=2021-08-19T23:51:49.573Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Опубликуйте свой сайт
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Не бойтесь сделать что-то не так. В истории будет храниться до 10 версий, создаваемых автоматически или вручную. В любой момент вы сможете откатить изменения
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
		</Section>
		<Section padding="40px 0 130px 0" color="--darkL1" lg-padding="40px 0 100px 0" md-padding="40px 0 60px 0">
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
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Почти готово!
				</Text>
				<Text margin="0px 0px 36px 0px" font="--base" color="--darkL1" text-align="center">
					Осталось только добавить сайт в поисковые системы и позаботиться о SEO. Ничего сложного. uKit позволяет задать мета-теги для каждой страницы вашего сайта. Также вы можете затустить рекламу в сети. Рекламный модуль уже встроен в uKit!
				</Text>
				<Link
					href="https://ukit.com/ru/signup"
					color="--white"
					text-decoration-line="initial"
					font="--lead"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
					border-radius="100px"
					background="--color-secondary"
					display="inline"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
				>
					Создать сайт-визитку{"\n\n"}
				</Link>
			</Box>
		</Section>
		<Section padding="130px 0 100px 0" background="--color-lightD1" lg-padding="100px 0 100px 0" md-padding="80px 0 100px 0">
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				align-items="center"
				padding="0px 190px 0px 190px"
				margin="0px 0px 30px 0px"
				justify-content="center"
				lg-padding="0px 0px 0px 0px"
				md-margin="0px 0px 20px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					text-align="center"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
				>
					Что еще можно сделать в uKit
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1" text-align="center">
					Создайте любой сайт самостоятельно. Даже если вы никогда не делали этого раньше
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
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/nmCUxieGGsl3krtz3us5.webp?v=2021-08-23T21:32:38.620Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="18px"
						margin="0px 0px 18px 0px"
						loading="lazy"
					/>
					<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
						Сайт медицинского учреждения
					</Text>
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
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/62rwRRgQ1V2w6j9QWMZ7.webp?v=2021-08-23T21:27:54.007Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="18px"
						margin="0px 0px 18px 0px"
						loading="lazy"
					/>
					<Text margin="0px 0px 0px 0px" font="--lead">
						Сайт ресторана{"\n\n"}
					</Text>
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
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/kpBQuHCwUXOxAFMZ9668.webp?v=2021-08-23T21:27:54.069Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="18px"
						margin="0px 0px 18px 0px"
						loading="lazy"
					/>
					<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
						Сайт ведущего
					</Text>
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
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/EaElHJMX5pO9hFfboobP.webp?v=2021-08-23T21:27:54.035Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="18px"
						margin="0px 0px 18px 0px"
						loading="lazy"
					/>
					<Text margin="0px 0px 0px 0px" font="--lead">
						Интернет-магазин
					</Text>
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
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/HJJys9EgxkzTkr9b7zCR.webp?v=2021-08-23T21:27:54.029Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="18px"
						margin="0px 0px 18px 0px"
						loading="lazy"
					/>
					<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
						Сайт турагентства
						<br />
						{"\n\n"}
					</Text>
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
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/lsxY55E55GPUk7AuFKmJ.webp?v=2021-08-23T21:27:54.062Z"
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						border-radius="18px"
						margin="0px 0px 18px 0px"
						loading="lazy"
					/>
					<Text margin="0px 0px 0px 0px" font="--lead">
						Сайт для питомника животных
						<br />
						{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="130px 0 130px 0" color="--darkL1" background="--color-secondary" lg-padding="100px 0 100px 0">
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
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					sm-text-align="center"
				>
					Создать сайт на uKit
				</Text>
				<Text margin="0px 0px 36px 0px" font="--lead" color="--lightD1" text-align="center">
					Создайте сайт-визитку самостоятельно за несколько часов, даже если вы никогда не делали этого раньше
					<Link href="https://ukit.com/ru/signup">
						<br />
						{"\n\n"}
					</Link>
				</Text>
				<Link
					href="https://ukit.com/ru/signup"
					color="--secondary"
					text-decoration-line="initial"
					font="--lead"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					border-width="1px"
					border-style="solid"
					border-color="--color-secondary"
					border-radius="100px"
					display="inline"
					background="--color-white"
					hover-background="--color-lightD1"
				>
					Попробовать бесплатно{"\n\n"}
				</Link>
			</Box>
		</Section>
		<Section padding="18px 0 24px 0" background="linear-gradient(to right,#f3f5f8,#f3f5f8)">
			<Override
				slot="SectionContent"
				max-width="1056px"
				flex-direction="row"
				justify-content="space-between"
				align-items="center"
				flex-wrap="wrap"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
			/>
			<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/logo.svg?v=2021-08-19T11:29:12.664Z" width="80px" height="34px" />
			<Box display="flex" align-items="center" padding="18px 0px 18px 0px" md-flex-direction="column">
				<Link
					href="https://ukit.com/ru/whyus"
					color="--dark"
					text-decoration-line="initial"
					font="--menu"
					hover-color="--primary"
					padding="5px 7px 5px 7px"
					transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
					margin="0px 7px 0px 7px"
					md-margin="0px 7px 5PX 7px"
				>
					Почему мы{"\n\n"}
				</Link>
				<Link
					href="https://ukit.com/ru/pricing"
					color="--dark"
					text-decoration-line="initial"
					font="--menu"
					hover-color="--primary"
					padding="5px 7px 5px 7px"
					transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
					margin="0px 7px 0px 7px"
					md-margin="0px 7px 5PX 7px"
				>
					Цены
				</Link>
				<Link
					href="https://ukit.com/ru/signin"
					color="--dark"
					text-decoration-line="initial"
					font="--menu"
					hover-color="--primary"
					padding="5px 7px 5px 7px"
					transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
					margin="0px 7px 0px 7px"
					md-margin="0px 7px 5PX 7px"
				>
					Войти
				</Link>
				<Link
					href="https://ukit.com/ru/signUp"
					color="--secondary"
					text-decoration-line="initial"
					font="--menu"
					hover-color="--primary"
					padding="5px 18px 5px 18px"
					transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
					margin="0px 7px 0px 7px"
					border-width="2px"
					border-style="solid"
					border-color="--color-secondary"
					border-radius="50px"
				>
					Создать сайт{"\n\n"}
				</Link>
			</Box>
			<Hr
				width="100%"
				margin="16px 0px 16px 0px"
				padding="0px 0px 0px 0px"
				background="linear-gradient(to right,#f3f5f8,#f3f5f8)"
				border-width="0px 0px 2px 0px"
				border-color="#6c757d29"
			/>
			<Box
				width="100%"
				md-display="flex"
				md-align-items="center"
				md-flex-direction="column"
				md-justify-content="center"
			>
				<Link
					href="https://ukit.com/ru/agreement"
					text-decoration-line="initial"
					font="--footer"
					color="--grey"
					hover-color="--primary"
					margin="0px 24px 0px -1px"
					padding="5px 0px 5px 0px"
					md-margin="0px 0px 0px 0px"
				>
					Соглашение
				</Link>
				<Link
					href="https://ukit.com/ru/storage"
					text-decoration-line="initial"
					font="--footer"
					color="--grey"
					hover-color="--primary"
					margin="0px 24px 0px -1px"
					padding="5px 0px 5px 0px"
					md-margin="0px 0px 0px 0px"
				>
					Договор с держателем карты{"\n\n"}
				</Link>
				<Link
					href="https://ukit.com/ru/privacy"
					text-decoration-line="initial"
					font="--footer"
					color="--grey"
					hover-color="--primary"
					margin="0px 24px 0px -1px"
					padding="5px 0px 5px 0px"
					md-margin="0px 0px 0px 0px"
				>
					Конфиденциальность
				</Link>
				<Link
					href="https://ukit.com/ru/details"
					text-decoration-line="initial"
					font="--footer"
					color="--grey"
					hover-color="--primary"
					margin="0px 24px 0px -1px"
					padding="5px 0px 5px 0px"
					md-margin="0px 0px 0px 0px"
				>
					Юридическая информация{" \n\n"}
				</Link>
			</Box>
		</Section>
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
			<style place={"endOfHead"} rawKey={"611e3e5f17f5d1001e31a361"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});