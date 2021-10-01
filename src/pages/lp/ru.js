import React from "react";
import theme from "theme";
import { Theme, Link, Text, Hr, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"lp/ru"} />
		<Helmet>
			<title>
				Готовые решения — uKit. Конструктор сайтов для бизнеса
			</title>
			<meta name={"description"} content={"Создайте сайт, лендинг, интернет-магазин выбранной тематики на конструкторе uKit самостоятельно — готовые решения для бизнеса"} />
			<meta property={"og:title"} content={"Готовые решения — uKit. Конструктор сайтов для бизнеса"} />
			<meta property={"og:description"} content={"Создайте сайт, лендинг, интернет-магазин выбранной тематики на конструкторе uKit самостоятельно — готовые решения для бизнеса"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/favicon.png?v=2021-08-20T04:41:32.122Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#4773FF"} />
		</Helmet>
		<Components.RuHeader />
		<Section>
			<Override slot="SectionContent" max-width="1056px" />
			<Text font="--headline3">
				Готовые решения
			</Text>
			<Hr width="100%" display="flex" color="--grey" border-color="--color-grey" />
			<Box display="flex" flex-wrap="wrap" sm-flex-direction="column">
				<Link
					href="/lp/ru/sozdat-sait-vizitku-online/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт-визитка для бизнеса
				</Link>
				<Link
					href="/lp/ru/sozdat-odnostranichnyj-sajt-lending/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Одностраничный
сайт — лендинг
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-agentstva-nedvizhimosti/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт для агентства недвижимости
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-stomatologii/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт стоматологической клиники
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-stroitelnoj-kompanii/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт строительной компании
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-dezajnera-interjerov/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт-портфолио дизайнера интерьеров
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-yurista/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт юриста
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-obrazovatelnogo-uchrezhdeniya/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт образовательного учреждения
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-uchitelja/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт учителя, педагога или преподавателя{"\n\n"}
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-repetitora/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт репетитора
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-advokata/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Cайт адвоката{"\n\n"}
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-dlya-prodazhi-onlajn-kursov/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт для продажи онлайн-курсов{"\n\n"}
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-portfolio-razrabotchika/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт-портфолио разработчика{"\n\n"}
				</Link>
				<Link
					href="/lp/ru/sozdat-sajt-portfolio-hudozhnika/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт-портфолио художника{"\n\n"}
				</Link>
				<Link
					href="/lp/ru/skolko-stoit-sdelat-sayt/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сколько стоит сделать сайт
				</Link>
				<Link
					href="/lp/ru/sayt-pod-klyuch/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Сайт под ключ
				</Link>
				<Link
					href="/lp/ru/hosting-s-konstruktorom-saytov/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Хостинг с конструктором сайтов
				</Link>
				<Link
					href="/lp/ru/programma-dlya-sozdaniya-saytov/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Программа для создания сайтов
				</Link>
				<Link
					href="https://ukit.com/ru/lp/alt-vk"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					uKit Alt: сделать сайт из страницы ВКонтакте
				</Link>
				<Link
					href="https://ukit.com/ru/lp/convert"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					uKit Alt: сделать сайт из Facebook
				</Link>
				<Link
					href="https://ukit.com/ru/lp/infosite/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Создать сайт-визитку за час
				</Link>
				<Link
					href="https://ukit.com/ru/lp/logistics/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Как создать сайт для транспортной компании
				</Link>
				<Link
					href="https://ukit.com/ru/lp/self/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Создать сайт самостоятельно
				</Link>
				<Link
					href="https://ukit.com/ru/lp/photo/"
					font="--base"
					color="--dark"
					text-decoration-line="initial"
					display="flex"
					flex-direction="row"
					width="50%"
					hover-color="--primary"
					md-width="100%"
				>
					Создать сайт фотографа за вечер
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
				{"<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-N7L44LR\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>"}
			</script>
			<script
				nomodule={false}
				integrity={""}
				crossorigin={""}
				type={""}
				place={"endOfBody"}
				rawKey={"6154764991dc46bf66521a06"}
			/>
			<link
				type={""}
				rel={"canonical"}
				href={"/lp/ru/"}
				place={"endOfHead"}
				rawKey={"613f7f38a7aa2ea61704f04c"}
			/>
		</RawHtml>
	</Theme>;
});