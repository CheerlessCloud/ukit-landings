import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsPhone, BsChat, BsCreditCard, BsGrid, BsDiamond, BsBucket, BsDocumentSpreadsheet, BsVolumeUp, BsStar } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"lp/ru/sozdat-sajt-agentstva-nedvizhimosti"} />
		<Helmet>
			<title>
				Создайте сайт для агентства недвижимости — uKit. Конструктор сайтов для бизнеса
			</title>
			<meta name={"description"} content={"Безлимитный хостинг и неограниченное количество страниц, готовые шаблоны, удобный визуальный редактор, интеграции с CRM, SMS-уведомления о заявках. И всё без программирования или профильных навыков. Сайт можно сделать своими руками.\n"} />
			<meta property={"og:title"} content={"Создайте сайт для агентства недвижимости — uKit. Конструктор сайтов для бизнеса"} />
			<meta property={"og:description"} content={"Безлимитный хостинг и неограниченное количество страниц, готовые шаблоны, удобный визуальный редактор, интеграции с CRM, SMS-уведомления о заявках. И всё без программирования или профильных навыков. Сайт можно сделать своими руками."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/favicon.png?v=2021-08-20T04:41:32.122Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#4773FF"} />
		</Helmet>
		<Components.RuHeader />
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
					as="h1"
				>
					Создайте сайт для агентства недвижимости
					<br />
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Безлимитный хостинг и неограниченное количество страниц, готовые шаблоны, удобный визуальный редактор, интеграции с CRM, SMS-уведомления о заявках. И всё без программирования или профильных навыков. Сайт можно сделать своими руками
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
					background="#4773ff"
					display="inline"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
				>
					Создать сайт агентства недвижимости
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/RTS1kyhE6814GQuucWfh.webp?v=2021-09-04T14:20:09.784Z"
					width="112%"
					border-width="2px"
					border-style="solid"
					border-color="#6c757d2f"
					border-radius="18px"
					lg-width="100%"
					loading="lazy"
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
				md-justify-content="center"
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
				md-width="50%"
				sm-width="100%"
			>
				<Icon
					category="bs"
					icon={BsPhone}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="#4773ff"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Работа на мобильных
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
				md-width="50%"
				sm-width="100%"
			>
				<Icon
					category="bs"
					icon={BsChat}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="#4773ff"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Онлайн-чаты и формы
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
				md-width="50%"
				sm-width="100%"
			>
				<Icon
					category="bs"
					icon={BsCreditCard}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="#4773ff"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Приём онлайн-оплаты
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
				md-width="50%"
				md-margin="0px 0px 30px 0px"
				sm-width="100%"
			>
				<Icon
					category="bs"
					icon={BsGrid}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="#4773ff"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" width="95%">
					Тематические шаблоны
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
				md-width="50%"
				sm-width="100%"
			>
				<Icon
					category="bs"
					icon={BsDiamond}
					margin="0 0 18px 0"
					align-items="center"
					size="63px"
					color="#4773ff"
				/>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
					Широкие возможности
					<br />
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
				padding="0px 20px 50px 0px"
				lg-width="100%"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Примеры шаблонов сайтов агентств недвижимости
					<br />
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Всё, что нужно, уже есть в uKit: покупка своего домена, интеграции с CRM и онлайн-чатами, почта для домена, бесплатные SSL, безлимитный хостинг и т.п. Вам остаётся только выбрать один из вариантов оформления или создать свой с нуля
					<br />
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/qoFFuATt1iqLQChVlShu.webp?v=2021-09-04T17:37:16.724Z"
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/nyIDiz9WgPslUePZ7nXM.webp?v=2021-09-04T17:37:32.140Z"
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/EQ5NUJ2vJkflcZOEukUa.webp?v=2021-09-04T17:36:05.180Z"
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
				<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/RTS1kyhE6814GQuucWfh.webp?v=2021-09-04T14:20:09.784Z" border-radius="18px" sm-border-radius="6px" loading="lazy" />
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/3lu7fTCmHUSFyU1s137T%20%281%29%201.webp?v=2021-09-05T12:39:49.289Z"
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/bk4sHrCcpmFWrSmDXlEC%201.webp?v=2021-09-04T17:41:52.612Z"
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/f3yCqvj8B7pPrPwF2SU4.webp?v=2021-09-04T17:36:56.052Z"
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/77gjPoI5JvTq1FAMquGm.webp?v=2021-09-04T17:37:55.466Z"
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
					as="h2"
				>
					Что вы получаете для запуска сайтов риелторских агентств
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--white">
					Не нужно нанимать программистов или изучать основы web-дизайна, чтобы сделать в uKit качественные сайты для риелторов и агентств недвижимости. Всё можно собрать своими руками в специальном онлайн-конструкторе из готовых виджетов и блоков
					<br />
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
					<Icon
						category="bs"
						icon={BsBucket}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Модуль магазина для приёма онлайн-оплаты за услуги
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
						icon={BsGrid}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Готовые тематические шаблоны для агентств
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
						icon={BsPhone}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Поддержка мобильных устройств
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
						icon={BsDocumentSpreadsheet}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Простая интеграция CRM и конструктора форм uCalc
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
						icon={BsChat}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Онлайн-чаты и сбор заявок с сайта
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
						icon={BsVolumeUp}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						SMS-уведомления о важных событиях
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
						icon={BsStar}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Этапы, таймлайны, отзывы и другие готовые элементы страниц
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/FireShot%20Capture%20375%20-%20%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20-%20edrdevre.ukit%201%281%29.webp?v=2021-09-05T07:47:01.608Z"
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
					as="h2"
				>
					Как создать сайт агентства недвижимости в uKit своими руками
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1">
					Даже если вы познакомились с платформой всего пару минут назад и не имеете никаких профильных навыков для работы со своими сайтами, у вас обязательно всё получится. Уже в течение нескольких часов у вас в распоряжении будет функциональная онлайн-платформа, на которой можно будет разместить описания объектов, прайсы на свои услуги, формы для сбора заявок и другие элементы
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
						Выберите шаблон
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						md-width="100%"
					>
						Вы можете начать с тематического или любого другого шаблона в каталоге, их несколько сотен. В пару кликов можно сменить шрифт или цветовую гамму. Удалите лишние или наоборот добавьте нужные элементы и виджеты. В любой момент шаблон можно поменять, написанный и загруженный контент останется на месте
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
						Наполните сайт информацией
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Можно оставить текстовое наполнение и изображения, поставляемые вместе с шаблоном. Но если вы хотите сделать качественный сайт — наполните сайт оригинальным контентом: текстами, своими картинками и видео. Прямо в конструкторе можно редактировать изображения: маски, фильтры, кадрирование, наложение фигур и произвольное рисование
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
						Проверьте отображение на мобильных устройствах
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Все элементы интерфейса автоматически подстраиваются под экран любого устройства: персональные компьютеры, планшеты или смартфоны. Если вам не нравится, как выглядит тот или иной элемент, его можно скрыть на определённых типах устройств или настроить альтернативный внешний вид: сменить фон и предусмотреть деление на колонки
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
					md-padding="0px 15px 0px 15px"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/four.svg?v=2021-08-19T23:50:40.052Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Настройте свой домен
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Придумайте своё доменное имя и зарегистрируйте его, не покидая панели управления uKit. Вам даже не придётся вручную редактировать DNS-записи для перенаправления на хостинг. При наличии можно привязать уже имеющиеся доменные имена. Бесплатные SSL-сертификаты для поддержки HTTPS-версии сайта генерируются и настраиваются автоматически
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
						Опубликуйте сайт агентства
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Нажмите кнопку «Опубликовать» — ваш сайт теперь полностью готов к своим первым посетителям. Не бойтесь менять содержимое страниц и экспериментировать. Платформа uKit может хранить до 10 резервных копий, созданных вручную и автоматически. Что-то пошло не так? Просто верните более удачную версию из бэкапа
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
					as="h2"
				>
					Осталось ещё немного!
				</Text>
				<Text margin="0px 0px 36px 0px" font="--base" color="--darkL1" text-align="center">
					Чтобы посетителям было проще найти ваш сайт, уделите внимание SEO-тегам на каждой странице. Чтобы ничего не пропустить и не забыть, проверьте готовность сайта в специальном визарде. Запустите свою первую рекламную кампанию — в этом вам поможет наш встроенный рекламный модуль
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
					Создать сайт агентства
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
					as="h2"
				>
					Какие ещё проекты можно сделать в uKit
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1" text-align="center">
					uKit — это простой и по-настоящему эффективный онлайн-конструктор для любых бизнес-сайтов. Не имея профильных знаний и опыта, вы сможете сделать здесь практически любой проект своими руками
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
					<Link href="/lp/ru/sozdat-sajt-yurista" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_advokat_ru.webp?v=2021-09-07T08:55:43.180Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Сайт юриста
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
					<Link href="/lp/ru/sozdat-sajt-stroitelnoj-kompanii" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_complex_ru.webp?v=2021-09-05T17:11:42.996Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Сайт строительной компании
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
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<Link href="/lp/ru/sozdat-sait-vizitku-online" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_abstract_ru.webp?v=2021-09-08T10:55:07.717Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Сайт-визитка для бизнеса
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
					<Link href="/lp/ru/sozdat-sajt-stomatologii" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_dental_ru%201.webp?v=2021-09-05T12:18:24.069Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Сайт стоматологической клиники
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
							Сайт-портфолио дизайнера интерьеров
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
					<Link href="/lp/ru/sozdat-odnostranichnyj-sajt-lending" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_service_ru.webp?v=2021-09-08T10:54:09.171Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Одностраничный сайт
						</Text>
					</Link>
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
					as="h2"
					text-align="center"
				>
					Уже готовы сделать сайт агентства недвижимости в uKit?
				</Text>
				<Text margin="0px 0px 36px 0px" font="--lead" color="--lightD1">
					Ознакомьтесь с готовыми шаблонами и возможностями конструктора прямо сейчас — без каких-либо обязательств. Вам точно понравится!
					<Link
						href="https://ukit.com/ru/signup"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						<br />
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
					Попробовать бесплатно
				</Link>
			</Box>
		</Section>
		<Components.RuFooter />
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
			<style place={"endOfBody"} rawKey={"612539d9aa881e07b1d98103"}>
				{"a[href=\"https://quarkly.io/\"]{\ndisplay: none;\n}"}
			</style>
			<style place={"endOfHead"} rawKey={"612539f5007a9d741d076fb3"}>
				{"/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}"}
			</style>
			<script
				async={true}
				src={""}
				type={""}
				place={"endOfHead"}
				rawKey={"61433fb2d64a419fdbb2bf13"}
			>
				{"var uKitAnalytics = (function() {\n\tvar uKitAnalyticsClass = function () {\n\t\tthis.urlAPI = 'https://ukit.com/api/ukitanalitics.gif';\n\t\tthis.guestId = '60789dbe42133a76c73b4fff';\n\t\tthis.historyId = '61433f88d23fb3200498f32d';\n\t\t\n\t\tthis.setCookie = function (name, value, ms) {\n\t\t\tvar expires = '';\n\t\t\tif (ms) {\n\t\t\t\tvar dt = new Date();\n\t\t\t\tdt.setDate(dt.getTime() + ms);\n\t\t\t\texpires = '; expires=' + dt.toUTCString();\n\t\t\t}\n\t\t\t\n\t\t\tdocument.cookie = name + '=' + value + expires + '; path=/';\n\t\t};\n\t\t\n\t\tthis.getCookie = function (name) {\n\t\t\tvar nameEQ = name + '=';\n\t\t\tvar ca = document.cookie.split(';');\n\t\t\tfor (var i = 0; i < ca.length; i++) {\n\t\t\t\tvar c = ca[i];\n\t\t\t\twhile (c.charAt(0) == ' ') c = c.substring(1, c.length);\n\t\t\t\tif (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n\t\t\t}\n\t\t\t\n\t\t\treturn null;\n\t\t};\n\t\t\n\t\tthis.updateVisit = function () {\n\t\t\tvar self = this;\n\t\t\t\n\t\t\tvar anticache = Date.now();\n\t\t\t\n\t\t\tvar uKitAnaliticsGif = new Image();\n\t\t\tuKitAnaliticsGif.onload = function () {\n\t\t\t\t\n\t\t\t};\n\t\t\t\n\t\t\tuKitAnaliticsGif.src = self.urlAPI + '?guestId=' + self.guestId + '&historyId=' + self.historyId + '&anticache=' + anticache;\n\t\t};\n\t\t\n\t\tthis.addVisit = function () {\n\t\t\tvar self = this;\n\t\t\t\n\t\t\tvar anticache = Date.now();\n\t\t\t\n\t\t\tvar uKitAnaliticsGif = new Image();\n\t\t\tuKitAnaliticsGif.onload = function () {\n\t\t\t\t\n\t\t\t};\n\t\t\t\n\t\t\tvar referer = encodeURIComponent(document.referrer + (document.location.search.length > 1 ? ('?' + document.location.search.substr(1)) : ''));\n\t\t\tvar location = encodeURIComponent(window.location.href);\n\t\t\tvar landing = encodeURIComponent(window.location.hostname + window.location.pathname);\n\t\t\t\n\t\t\tuKitAnaliticsGif.src = self.urlAPI + '?guestId=' + self.guestId + '&historyId=' + self.historyId + '&referer=' + referer + '&location=' + location + '&landing=' + landing + '&anticache=' + anticache;\n\t\t};\n\t\t\n\t\tthis.init = function () {\n\t\t\tvar self = this;\n\t\t\t\n\t\t\tif (self.getCookie('uKitAnalyticsSO') != null) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t\n\t\t\tself.setCookie('uKitAnalytics', '@' + self.guestId);\n\t\t\tself.setCookie('uKitAnalyticsSO', true);\n\t\t\t\n\t\t\tself.addVisit();\n\t\t\t\n\t\t\t/*\n\t\t\twindow.addEventListener('focus', function (event) {\n\t\t\t\tself.updateVisit();\n\t\t\t}, false);\n\t\t\t*/\n\t\t};\n\t};\n\t\n\tvar uKitAnalyticsObj = new uKitAnalyticsClass();\n\tuKitAnalyticsObj.init();\n\t\n\treturn uKitAnalyticsObj;\n})();"}
			</script>
			<script async={true} place={"endOfHead"} rawKey={"61546ad90ff1ad7e45a80d2c"}>
				{"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-N7L44LR');"}
			</script>
			<script async={true} place={"endOfBody"} rawKey={"61546afc558d30d91557a10e"}>
				{"<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-N7L44LR\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>"}
			</script>
			<link rel={"canonical"} href={"/lp/ru/sozdat-sajt-agentstva-nedvizhimosti/"} place={"endOfHead"} rawKey={"613fa1bcbed7ad9852999c00"} />
		</RawHtml>
	</Theme>;
});