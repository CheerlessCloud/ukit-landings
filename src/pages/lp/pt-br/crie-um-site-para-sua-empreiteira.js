import React from "react";
import theme from "theme";
import { Theme, Text, Link, Box, Image, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsColumnsGutters, BsWindow, BsListUl, BsBell, BsPhone, BsAt, BsBarChart, BsGraphUp, BsCheckBox } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"lp/pt-br/crie-um-site-para-sua-empreiteira"} />
		<Helmet>
			<title>
				Crie um site para sua Empreiteira — uKit. Construtor de sites para empresas
			</title>
			<meta name={"description"} content={"Blocos prontos para propriedades, modelos temáticos, listas de preços, formulários de contato, notificações por SMS e muitos outros elementos temáticos pré-construídos.\nNenhum conhecimento de programação é necessário. Construir seu próprio site é rápido e fácil."} />
			<meta property={"og:title"} content={"Crie um site para sua Empreiteira — uKit. Construtor de sites para empresas"} />
			<meta property={"og:description"} content={"Blocos prontos para propriedades, modelos temáticos, listas de preços, formulários de contato, notificações por SMS e muitos outros elementos temáticos pré-construídos.\nNenhum conhecimento de programação é necessário. Construir seu próprio site é rápido e fácil."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/favicon.png?v=2021-08-20T04:41:32.122Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#4773FF"} />
		</Helmet>
		<Components.PtBrHeader />
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
					Crie um site para sua Empreiteira
				</Text>
				<Text margin="0px 0px 50px 0px" font="--base" color="--dark">
					Blocos prontos para propriedades, modelos temáticos, listas de preços, formulários de contato, notificações por SMS e muitos outros elementos temáticos pré-construídos.
					<br />
					Nenhum conhecimento de programação é necessário. Construir seu próprio site é rápido e fácil
				</Text>
				<Link
					margin="0px 0px 0px 0px"
					border-width="1px"
					border-style="solid"
					background="#4773ff"
					display="inline"
					href="https://ukit.com/pt-BR/signUp"
					color="--white"
					padding="15px 25px 16px 25px"
					border-radius="100px"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
					text-decoration-line="initial"
					font="--lead"
					border-color="--color-secondary"
				>
					Crie Seu Site
				</Link>
			</Box>
			<Box
				width="50%"
				lg-left="0px"
				lg-padding="0px 20px 0px 20px"
				display="flex"
				position="relative"
				left="20px"
				flex-direction="column"
				lg-width="100%"
				lg-position="relative"
			>
				<Image
					right="auto"
					bottom="auto"
					lg-width="100px"
					lg-left="-24px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					width="150px"
					height="150px"
					position="absolute"
					lg-top="-42px"
					left="-70px"
					top="-70px"
					lg-height="100px"
				/>
				<Image
					bottom="-80px"
					lg-width="100px"
					position="absolute"
					width="150px"
					height="150px"
					left="auto"
					right="-135px"
					top="auto"
					transform="rotate(180deg)"
					lg-height="100px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/zvezda1.svg?v=2021-08-19T12:34:32.396Z"
					lg-right="-26px"
					lg-bottom="-44px"
				/>
				<Image
					border-color="#6c757d2f"
					border-radius="18px"
					lg-width="100%"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_building_en.webp?v=2021-09-28T15:58:39.331Z"
					width="112%"
					border-width="2px"
					border-style="solid"
				/>
			</Box>
		</Section>
		<Section padding="40px 0 80px 0" lg-flex-wrap="wrap-reverse" lg-overflow-x="hidden">
			<Override
				slot="SectionContent"
				justify-content="space-between"
				align-items="center"
				lg-flex-wrap="wrap"
				lg-align-items="center"
				lg-justify-content="flex-start"
				max-width="1056px"
				display="block"
				flex-direction="row"
			/>
			<Box flex-wrap="wrap" lg-display="flex" lg-justify-content="center" display="flex">
				<Box
					lg-width="50%"
					lg-flex-direction="column"
					align-self="flex-start"
					width="25%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 20px 0px 0px"
					lg-margin="0px 0px 30px 0px"
					md-width="100%"
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
						Editor fácil de usar
					</Text>
				</Box>
				<Box
					lg-width="50%"
					display="flex"
					flex-direction="column"
					padding="0px 20px 0px 0px"
					lg-margin="0px 0px 30px 0px"
					md-width="100%"
					align-self="flex-start"
					width="25%"
					align-items="flex-start"
					lg-flex-direction="column"
				>
					<Icon
						align-items="center"
						size="63px"
						color="#4773ff"
						category="bs"
						icon={BsWindow}
						margin="0 0 18px 0"
					/>
					<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
						Designs temáticos
					</Text>
				</Box>
				<Box
					padding="0px 20px 0px 0px"
					lg-flex-direction="column"
					lg-margin="0px 0px 30px 0px"
					align-self="flex-start"
					width="25%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					lg-width="50%"
					md-width="100%"
				>
					<Icon
						category="bs"
						icon={BsListUl}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#4773ff"
					/>
					<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead">
						Formulários de contato
					</Text>
				</Box>
				<Box
					display="flex"
					padding="0px 20px 0px 0px"
					lg-flex-direction="column"
					md-margin="0px 0px 30px 0px"
					align-self="flex-start"
					width="25%"
					align-items="flex-start"
					lg-width="50%"
					md-width="100%"
					flex-direction="column"
				>
					<Icon
						color="#4773ff"
						category="bs"
						icon={BsBell}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
					/>
					<Text margin="0px 0px 0px 0px" color="--darkL1" font="--lead" width="95%">
						Notificações automáticas
					</Text>
				</Box>
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
					Exemplos de modelos para sites de Empreiteiras
				</Text>
				<Text margin="0px 0px 30px 0px" font="--base" color="--dark">
					Você só precisa adquirir ou conectar seu domínio. Todo o resto pode ser encontrado no construtor. Você não precisa ser um programador ou web designer. É muito fácil iniciar e editar
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
					<Text color="--darkL1" margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px">
						350+
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						designs
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" width="30%">
					<Text color="--darkL1" margin="0px 0px 0px 0px" font="--headline1" letter-spacing="-1px">
						40+
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						categorias
					</Text>
				</Box>
			</Box>
			<Box
				justify-content="center"
				lg-width="100%"
				width="66.667%"
				margin="60px 0px 0px 0px"
				display="flex"
				padding="0px 15px 0px 15px"
				position="relative"
				align-items="center"
			>
				<Image
					lg-left="-43px"
					sm-border-radius="6px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_medicine_en.webp?v=2021-09-28T16:16:02.493Z"
					left="-200px"
					lg-bottom="30px"
					top="175px"
					sm-top="auto"
					border-radius="18px"
					position="absolute"
					right="auto"
					sm-height="62.4062px"
					sm-right="auto"
					loading="lazy"
					width="198px"
					bottom="auto"
					sm-bottom="20px"
					sm-width="100px"
					sm-left="-11px"
					lg-height="123.547px"
					lg-right="auto"
					lg-top="auto"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_taxi_en.webp?v=2021-10-03T16:49:39.407Z"
					right="auto"
					lg-left="-92px"
					lg-right="auto"
					lg-display="none"
					width="321px"
					bottom="-110px"
					lg-bottom="-137px"
					lg-width="213px"
					lg-top="auto"
					loading="lazy"
					border-radius="18px"
					position="absolute"
					left="-355px"
					top="auto"
					lg-height="231.375px"
				/>
				<Image
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Rv4eQizc8WwsricgTJGH.webp?v=2021-08-23T21:27:54.077Z"
					bottom="252.27876923076923px"
					sm-top="-44px"
					loading="lazy"
					height="204.71923076923076px"
					border-radius="18px"
					width="324.2516153846154px"
					sm-bottom="auto"
					left="302.46138461538465px"
					top="-82px"
					sm-height="107.766px"
					position="absolute"
					right="77.2861px"
					sm-width="170px"
					sm-left="auto"
					sm-right="-11px"
					sm-border-radius="6px"
				/>
				<Image src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_cat_en.webp?v=2021-09-28T16:00:01.205Z" border-radius="18px" sm-border-radius="6px" loading="lazy" />
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
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/f3yCqvj8B7pPrPwF2SU4.webp?v=2021-09-04T17:36:56.052Z"
					border-radius="18px"
					lg-width="100%"
					sm-border-radius="6px"
					loading="lazy"
				/>
				<Image
					sm-right="auto"
					bottom="auto"
					width="300px"
					position="absolute"
					top="-127px"
					lg-right="-42px"
					sm-left="31px"
					sm-height="96.25px"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_exhibition_en.webp?v=2021-10-03T17:22:19.826Z"
					height="199.95px"
					right="-76px"
					lg-height="187.5px"
					sm-width="154px"
					sm-bottom="auto"
					sm-top="-51px"
					sm-border-radius="6px"
					border-radius="18px"
					lg-bottom="auto"
					lg-left="auto"
					lg-top="-45px"
					left="auto"
				/>
				<Image
					sm-left="auto"
					sm-border-radius="6px"
					width="254.14285714285714px"
					position="absolute"
					lg-right="-11px"
					lg-top="auto"
					sm-height="auto"
					sm-right="72px"
					sm-width="132px"
					top="344.417px"
					right="-39px"
					sm-bottom="-27px"
					sm-top="auto"
					loading="lazy"
					bottom="-85px"
					left="136.84014285714287px"
					lg-bottom="-67px"
					lg-height="154.625px"
					lg-left="auto"
					height="166.583px"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_service_en.webp?v=2021-10-04T19:25:32.838Z"
					border-radius="18px"
				/>
				<Image
					sm-border-radius="6px"
					bottom="auto"
					lg-left="200px"
					sm-height="119.047px"
					sm-right="-66px"
					top="120px"
					right="-200px"
					lg-bottom="auto"
					lg-top="-46px"
					sm-bottom="auto"
					sm-left="auto"
					border-radius="18px"
					position="absolute"
					left="auto"
					lg-right="auto"
					loading="lazy"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_psychologist_en.webp?v=2021-09-28T16:00:29.898Z"
					width="192px"
					lg-height="119.047px"
					sm-top="-38px"
				/>
			</Box>
		</Section>
		<Section background="--color-secondary" padding="130px 0 130px 0" lg-padding="100px 0 100px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				margin="0px 25% 40px 0px"
				lg-width="100%"
				lg-margin="0px 0px 40px 0px"
				width="75%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 15px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--white"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Os principais recursos para a criação do site de sua Empreiteira
				</Text>
				<Text color="--white" margin="0px 0px 30px 0px" font="--base">
					Com o assistente de SEO integrado você não precisa contratar especialistas em web para promover seu site. Você pode construir uma página a partir de blocos e widgets prontos para uso. A integração com serviços externos é configurada em apenas alguns cliques
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
						icon={BsWindow}
						margin="0 0 18px 0"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Modelos temáticos para empreiteiras
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
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsPhone}
						margin="0 0 18px 0"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Designs responsivos
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
						size="63px"
						color="#ffffff"
						category="bs"
						icon={BsAt}
						margin="0 0 18px 0"
						align-items="center"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Bloco de contatos em todas as páginas
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
						icon={BsBell}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Um conjunto de widgets para criar um portfólio
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
						icon={BsBarChart}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Formulários de contato integrados
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
						icon={BsGraphUp}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
						category="bs"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Chats online, botões de retorno de chamada
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
						icon={BsCheckBox}
						margin="0 0 18px 0"
						align-items="center"
						size="63px"
						color="#ffffff"
					/>
					<Text margin="0px 0px 0px 0px" color="--white" font="--lead">
						Calculadora online do uCalc
					</Text>
				</Box>
			</Box>
			<Box
				width="58.333%"
				margin="0px 0px 0px 8.333999999999996%"
				display="inline-block"
				lg-margin="30px 0px 0px 0px"
				lg-width="100%"
			>
				<Image
					display="inline-block"
					border-radius="18px"
					box-shadow="0px 0px 35px 0px #00000040"
					src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/FireShot%20Capture%20394%20-%20Home%20-%20efgrfg.ukit%201%281%29.webp?v=2021-10-05T15:35:39.361Z"
					width="100%"
					loading="lazy"
				/>
			</Box>
		</Section>
		<Section padding="130px 0 40px 0" color="--darkL1" md-padding="100px 0 20px 0" lg-overflow-x="hidden">
			<Override slot="SectionContent" flex-direction="row" max-width="1056px" flex-wrap="wrap" />
			<Box
				padding="0px 15px 0px 15px"
				margin="0px 33.333% 22px 0px"
				lg-margin="0px 0px 22px 0px"
				lg-width="100%"
				width="66.667%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
			>
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Como criar um site para sua empreiteira no uKit
				</Text>
				<Text font="--base" color="--darkL1" margin="0px 0px 0px 0px">
					Lançar seu próprio site é fácil, mesmo se você não tiver qualquer habilidade de programação ou webdesign. O processo levará apenas algumas horas. Basta seguir as etapas abaixo:
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
						Escolha um modelo
					</Text>
					<Text
						font="--base"
						width="84%"
						md-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
					>
						Você poderá escolher entre centenas de designs temáticos prontos para usar para os mais diferentes tipos de negócios, não importa se eles são de uma ou várias páginas. Cada design vem com o conteúdo já preenchido com textos reais para te inspirar quando você for preencher sobre o seu negócio. Você pode deixar os textos prontos ou personalizar todo o conteúdo, como preferir. Os esquemas de cores e fontes também podem ser alterados com apenas alguns cliques
					</Text>
					<Link
						color="--white"
						margin="0px 0px 0px 0px"
						border-radius="100px"
						background="--color-secondary"
						display="inline"
						hover-background="linear-gradient(to right,#537cff,#537cff)"
						border-color="--color-secondary"
						href="https://ukit.com/neowizard#templates/all"
						text-decoration-line="initial"
						font="--lead"
						padding="15px 25px 16px 25px"
						border-width="1px"
						border-style="solid"
					>
						Veja os modelos
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
				display="flex"
				flex-wrap="wrap"
				margin="40px 0px 40px 0px"
				md-margin="0px 0px 40px 0px"
				width="100%"
			>
				<Box
					display="flex"
					md-width="100%"
					md-order="1"
					width="50%"
					margin="0px 0px 0px 0px"
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
					padding="0px 15px 0px 60px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					md-width="100%"
					md-padding="0px 15px 0px 15px"
					width="50%"
				>
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/two.svg?v=2021-08-19T23:46:45.698Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Personalize o conteúdo
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Adicione ou edite textos, faça o upload de fotos e vídeos e mostre a qualidade dos seus produtos ou serviços com os mais variados elementos web: sliders, galerias, cronogramas, blocos com etapas, listas de preços, etc. Até as imagens podem ser editadas diretamente no construtor
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
						Configure a versão para smartphones e tablets
					</Text>
					<Text
						font="--base"
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
					>
						O uKit adapta os sites a todos os dispositivos sem sua intervenção. Mas se quiser, você pode ocultar elementos individuais ou widgets inteiros e personalizar o plano de fundo e o design separadamente para tablets ou smartphones
					</Text>
				</Box>
				<Box width="50%" margin="0px 0px 0px 0px" display="flex" md-width="100%">
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
			<Box width="100%" display="flex" flex-wrap="wrap" margin="40px 0px 40px 0px">
				<Box
					margin="0px 0px 0px 0px"
					display="flex"
					md-width="100%"
					md-order="1"
					width="50%"
				>
					<Image
						width="100%"
						display="flex"
						align-items="center"
						justify-content="center"
						loading="lazy"
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/domain_popup.webp?v=2021-10-22T13:51:39.652Z"
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
					<Image width="48px" height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/four.svg?v=2021-08-19T23:50:40.052Z" margin="0px 0px 24px 0px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Conecte seu domínio
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
						width="84%"
						lg-width="100%"
					>
						Você pode registrar um domínio no próprio Painel de Controle do uKit. A hospedagem será configurada automaticamente. O site terá suporte a HTTPS, o protocolo de transmissão seguro, e nenhuma etapa extra é necessária para obter o certificados SSL necessário
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
					<Image height="48px" src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/five.svg?v=2021-08-19T23:51:49.573Z" margin="0px 0px 24px 0px" width="48px" />
					<Text margin="0px 0px 24px 0px" color="--darkL1" font="--headline3" md-font="normal 500 26px/32px &quot;Inter&quot;, sans-serif">
						Publique seu site
					</Text>
					<Text
						width="84%"
						lg-width="100%"
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--base"
					>
						Assim que você clicar no botão «Publicar», o site ficará disponível para os visitantes. Sinta-se à vontade para editar seu conteúdo a qualquer momento: o uKit permite que você mantenha até 10 backups. Se você fizer algo errado, basta reverter para a versão correta ou desfazer a ação no editor com o botão «Desfazer»
					</Text>
				</Box>
				<Box md-width="100%" width="50%" margin="0px 0px 0px 0px" display="flex">
					<Image
						src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/Group%2076.webp?v=2021-09-28T16:38:49.156Z"
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
			md-padding="40px 0 60px 0"
			padding="40px 0 130px 0"
			color="--darkL1"
			lg-padding="40px 0 100px 0"
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
					margin="0px 0px 24px 0px"
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
				>
					Está quase pronto!
				</Text>
				<Text margin="0px 0px 36px 0px" font="--base" color="--darkL1" text-align="center">
					Não se esqueça de adicionar seu site aos mecanismos de busca e cuidar do SEO. Você pode verificar se o site está realmente pronto com um assistente especial. Ele mostrará exatamente o que você precisa melhorar em seu site para garantir uma classificação mais elevada nos resultados da pesquisa
				</Text>
				<Link
					border-color="--color-secondary"
					border-radius="100px"
					color="--white"
					text-decoration-line="initial"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					border-width="1px"
					border-style="solid"
					display="inline"
					href="https://ukit.com/pt-BR/signUp"
					font="--lead"
					background="--color-secondary"
					hover-background="linear-gradient(to right,#537cff,#537cff)"
				>
					Crie Seu Site
				</Link>
			</Box>
		</Section>
		<Section
			md-padding="80px 0 100px 0"
			padding="130px 0 100px 0"
			background="--color-lightD1"
			lg-padding="100px 0 100px 0"
			lg-overflow-x="hidden"
		>
			<Override slot="SectionContent" max-width="1056px" flex-wrap="wrap" flex-direction="row" />
			<Box
				flex-direction="column"
				align-items="center"
				padding="0px 190px 0px 190px"
				width="100%"
				display="flex"
				margin="0px 0px 30px 0px"
				justify-content="center"
				lg-padding="0px 0px 0px 0px"
				md-margin="0px 0px 20px 0px"
			>
				<Text
					font="--headline1"
					letter-spacing="-1px"
					color="--darkL1"
					text-align="center"
					md-font="normal 700 36px/42px &quot;Inter&quot;, sans-serif"
					as="h2"
					margin="0px 0px 24px 0px"
				>
					O que mais você pode criar com o uKit?
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1" text-align="center">
					O construtor uKit permite que você lance seu projeto para qualquer negócio ou tema em apenas algumas horas, sem nenhum conhecimento técnico ou habilidade especial
				</Text>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="36px 0px 30px 0px">
				<Box
					flex-direction="column"
					padding="0px 15px 0px 0px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
					width="50%"
					margin="0px 0px 0px 0px"
					display="flex"
				>
					<Link text-decoration-line="initial" href="/lp/pt-br/crie-um-site-para-sua-imobiliaria" color="--darkL1" hover-color="--primary">
						<Image
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_design_en.webp?v=2021-09-30T15:03:24.717Z"
							width="100%"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead" md-margin="0px 0px 30px 0px">
							Crie um site para sua imobiliária
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
					<Link color="--darkL1" hover-color="--primary" text-decoration-line="initial" href="/lp/pt-br/crie-um-site-promocional-para-o-seu-negocio">
						<Image
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_abstract_en.webp?v=2021-09-28T15:59:44.719Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
						/>
						<Text font="--lead" margin="0px 0px 0px 0px">
							Crie um Site Promocional para o seu negócio
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
					<Link href="/lp/pt-br/construtor-de-sites-promocionais" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
						<Image
							align-items="center"
							justify-content="center"
							border-radius="18px"
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_fastfood_en.webp?v=2021-10-03T16:49:03.527Z"
							width="100%"
							display="flex"
						/>
						<Text font="--lead" md-margin="0px 0px 30px 0px" margin="0px 0px 0px 0px">
							{" "}Construtor de Sites Promocionais
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
					<Link hover-color="--primary" text-decoration-line="initial" href="/lp/pt-br/crie-um-site-para-sua-imobiliaria" color="--darkL1">
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
						<Text font="--lead" margin="0px 0px 0px 0px">
							Crie um site para sua imobiliária
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
					<Link href="/lp/pt-br/crie-seu-site-de-consultor-juridico" color="--darkL1" hover-color="--primary" text-decoration-line="initial">
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
							Crie seu site de consultor jurídico
						</Text>
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
					<Link text-decoration-line="initial" href="/lp/pt-br/crie-um-site-de-clinica-odontologica" color="--darkL1" hover-color="--primary">
						<Image
							margin="0px 0px 18px 0px"
							loading="lazy"
							src="https://uploads.quarkly.io/611e3e5f17f5d1001e31a363/images/new_medicine_en.webp?v=2021-09-28T16:16:02.493Z"
							width="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							border-radius="18px"
						/>
						<Text margin="0px 0px 0px 0px" font="--lead">
							Crie um site de clínica odontológica
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
				align-items="center"
				padding="0px 190px 0px 190px"
				margin="0px 0px 22px 0px"
				justify-content="center"
				lg-padding="0px 0px 0px 0px"
				width="100%"
				display="flex"
				flex-direction="column"
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
					Crie um site para sua empreiteira no uKit
				</Text>
				<Text text-align="center" margin="0px 0px 36px 0px" font="--lead" color="--lightD1">
					Comece a usar a plataforma sem compromisso ou pagamento. Confira os modelos e as funcionalidades do construtor agora mesmo gratuitamente
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
					color="--secondary"
					border-color="--color-secondary"
					border-radius="100px"
					display="inline"
					background="--color-white"
					hover-background="--color-lightD1"
					border-style="solid"
					href="https://ukit.com/pt-BR/signUp"
					text-decoration-line="initial"
					font="--lead"
					padding="15px 25px 16px 25px"
					margin="0px 0px 0px 0px"
					border-width="1px"
				>
					Experimente de graça
				</Link>
			</Box>
		</Section>
		<Components.PtBrFooter />
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
			<link rel={"canonical"} href={"/lp/pt-br/crie-um-site-para-sua-empreiteira/"} place={"endOfHead"} rawKey={"615c7608df089181a52fdb0a"} />
		</RawHtml>
	</Theme>;
});