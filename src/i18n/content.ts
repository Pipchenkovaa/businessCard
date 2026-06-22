// ─────────────────────────────────────────────────────────────────────────
// All copy lives here. `links` is language-independent; `content.en` / `content.ru`
// hold every localized string. Edit text here without touching components.
// ─────────────────────────────────────────────────────────────────────────

export type Lang = "en" | "ru"

export const links = {
	name: "Alina Pipchenkova",
	email: "pipchenkova0701@gmail.com",
	phone: "+7 916 925 92 77",
	telegram: "https://t.me/pip_ch",
	telegramHandle: "@pip_ch",
	github: "https://github.com/Pipchenkovaa",
	githubHandle: "Pipchenkovaa",
	cv: "./cv.pdf", // drop your CV at public/cv.pdf to enable the download button
}

export type Project = {
	name: string
	kind: string
	year: string
	description: string
	role: string
	tags: string[]
	href?: string
	hrefLabel?: string
}

export type Experience = {
	org: string
	role: string
	period: string
	detail: string
}
export type Education = { org: string; title: string; period: string }
export type LabItem = {
	name: string
	note: string
	href: string
	tags: string[]
}

type Content = {
	nav: { label: string; href: string }[]
	ui: {
		contact: string
		seeWork: string
		downloadCv: string
		sendMessage: string
		mailHint: string
	}
	hero: {
		role: string
		location: string
		marker: string
		headline: [string, string]
		accent: string // accented word inside line 2
		intro: string
		availability: string
		meta: { k: string; v: string }[]
	}
	approach: { eyebrow: string; title: string; quote: string; body: string[] }
	colophon: {
		eyebrow: string
		title: string
		lead: string
		body: string
		tech: string[]
	}
	stack: {
		eyebrow: string
		title: string
		note: string
		groups: { label: string; items: string }[]
	}
	about: {
		eyebrow: string
		title: string
		body: string[]
		highlightsLabel: string
		highlights: string[]
	}
	services: {
		eyebrow: string
		title: string
		items: { n: string; title: string; body: string; tags: string[] }[]
	}
	work: { eyebrow: string; title: string; projects: Project[] }
	exp: {
		eyebrowExp: string
		titleExp: string
		eyebrowEdu: string
		titleEdu: string
		items: Experience[]
		education: Education[]
	}
	lab: { eyebrow: string; title: string; items: LabItem[] }
	contact: {
		eyebrow: string
		title: [string, string]
		body: string
		nameLabel: string
		reachLabel: string
		messageLabel: string
		namePh: string
		reachPh: string
		messagePh: string
	}
	footer: { tagline: string }
}

const en: Content = {
	nav: [
		{ label: "Work", href: "#work" },
		{ label: "About", href: "#about" },
		{ label: "Experience", href: "#experience" },
		{ label: "Contact", href: "#contact" },
	],
	ui: {
		contact: "Get in touch",
		seeWork: "See selected work",
		downloadCv: "Download CV",
		sendMessage: "Send message",
		mailHint: "Opens in your mail app — no data leaves your device.",
	},
	hero: {
		role: "Frontend Developer, UI/UX Designer",
		location: "Moscow",
		marker: "Business website",
		headline: ["I design & build", "the front of the web."],
		accent: "the front",
		intro:
			"Frontend developer and UI/UX designer. I take a product from a blank Figma file to a fast, animated, production-ready interface — and I understand the business it serves.",
		availability: "Open to frontend & UI/UX roles",
		meta: [
			{ k: "Who", v: "Alina Pipchenkova" },
			{ k: "What", v: "Frontend & UI/UX" },
			{ k: "Where", v: "Moscow / remote" },
			{ k: "Stack", v: "React, Next, TypeScript" },
			{ k: "Status", v: "Available" },
		],
	},
	approach: {
		eyebrow: "Approach",
		title: "How I work.",
		quote: "One craft, from the first frame to the final commit.",
		body: [
			"I work the whole width of a product. A screen starts in Figma and ends in production React — same hands, so nothing gets lost in the handoff.",
			"Every decision traces back to a reason: a business goal, a metric, a constraint. I'd rather ship something clear and fast than something clever and fragile — and I'll question the brief if the brief is wrong.",
		],
	},
	colophon: {
		eyebrow: "Colophon",
		title: "How this is built.",
		lead: "No template, no page builder. Hand-written, every component.",
		body: "React, TypeScript, Tailwind and Framer Motion, bundled with Vite and deployed as static files. Bilingual, keyboard-navigable, and it respects reduced-motion. The chromed A floats on a flat black canvas; everything else is type and restraint.",
		tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
	},
	stack: {
		eyebrow: "Stack",
		title: "Tools I build with.",
		note: "Comfortable across the modern frontend stack — from component architecture and state to motion and 3D.",
		groups: [
			{
				label: "Frontend",
				items: "React, Next.js, TypeScript, JavaScript, Effector, REST / DTO",
			},
			{
				label: "Styling & motion",
				items:
					"Tailwind CSS, styled-components, GSAP, Framer Motion, Three.js / R3F",
			},
			{
				label: "Design & tooling",
				items: "Figma, Storybook, Vite, Webpack, Git, Docker",
			},
		],
	},
	about: {
		eyebrow: "About",
		title: "A developer who reads the brief and the balance sheet.",
		body: [
			"I'm a frontend developer with a designer's eye, finishing a Business Management degree at HSE's Graduate School of Business. That mix is the point: I can design an interface in Figma, build it in React, and explain why it moves a business metric.",
			"Alongside the BSc I took minors in machine learning and applied programming — so data models and algorithms aren't a foreign language. I'm just as comfortable with a UI-kit and a scroll animation as I am with PESTEL, SWOT, and a financial model.",
		],
		highlightsLabel: "What that looks like in practice",
		highlights: [
			"Builds UI-kits and design systems from scratch",
			"Client–server integration (REST API, DTO)",
			"Motion & 3D — GSAP, Three.js, Framer Motion",
			"Team coordination: planning, tasking, control",
		],
	},
	services: {
		eyebrow: "What I do",
		title: "Three ways I help products ship.",
		items: [
			{
				n: "01",
				title: "Frontend Development",
				body: "Production React and Next.js apps: component architecture, design systems, state with Effector, client–server integration, and the refactoring that keeps it all fast.",
				tags: ["React", "Next.js", "TypeScript", "Effector"],
			},
			{
				n: "02",
				title: "UI/UX Design",
				body: "Design from a blank canvas: research, wireframes, UI-kits, and polished Figma layouts that hand off cleanly to development — because I build them too.",
				tags: ["Figma", "UI-kit", "Design system", "Prototyping"],
			},
			{
				n: "03",
				title: "Animated Landings",
				body: "Distinctive, fully responsive landing pages with motion and 3D at their core — the kind of site people remember after they close the tab.",
				tags: ["GSAP", "Three.js", "Motion", "Vite"],
			},
		],
	},
	work: {
		eyebrow: "Selected work",
		title:
			"Real products, shipped — from investor platforms to industrial sites.",
		projects: [
			{
				name: "Atlas IR",
				kind: "Investor-relations platform & service marketplace",
				year: "2024 — now",
				description:
					"A platform that helps public companies and IPOs build investor relationships — with a transparent marketplace where clients configure services and track them through a personal portal. I build the frontend from Figma to production: UI-kit, components, and the client–server layer.",
				role: "Frontend Developer, UI/UX",
				tags: ["Next.js", "React", "TypeScript", "Effector", "Tailwind"],
				href: "https://atlas-ir.com",
				hrefLabel: "atlas-ir.com",
			},
			{
				name: "FSK Lab",
				kind: "Landing for a construction-tech product",
				year: "2024 — 2025",
				description:
					"Designed the layout from scratch and shipped a seven-page landing for FSK Lab, a developer of digital construction solutions — built around scroll animation and interactive 3D.",
				role: "Designer & Frontend Developer",
				tags: ["React", "TypeScript", "Vite", "GSAP", "Three.js / R3F"],
			},
			{
				name: "FSK Group — Corporate Portal",
				kind: "UI-kit & component library",
				year: "2024 — 2025",
				description:
					"Refined the design and built the UI-kit component library powering the corporate portal of the FSK Group, documented in Storybook for a multi-developer team.",
				role: "Frontend Developer",
				tags: ["React", "TypeScript", "styled-components", "Storybook"],
			},
			{
				name: "SDM MetallProM",
				kind: "Site for a metal-structures manufacturer",
				year: "2025",
				description:
					"An industrial, architectural site for a full-cycle metal-structures manufacturer — from project documentation to fabrication — with a portfolio of delivered objects.",
				role: "Frontend Developer",
				tags: ["Next.js", "React", "TypeScript"],
				href: "https://sdm-mp.ru",
				hrefLabel: "sdm-mp.ru",
			},
		],
	},
	exp: {
		eyebrowExp: "Experience",
		titleExp: "Where I've shipped",
		eyebrowEdu: "Education",
		titleEdu: "Education",
		items: [
			{
				org: "Atlas IR",
				role: "Web Developer, UI/UX, Project Coordination",
				period: "2024 — now",
				detail:
					"Build UI-kits from scratch, design and ship components, handle REST/DTO client–server work and regression testing, and coordinate the team's planning and tasks.",
			},
			{
				org: "FSK",
				role: "Web Developer",
				period: "Oct 2024 — Jan 2025",
				detail:
					"Designed and built the FSK Lab landing (3D, animation) and developed UI-kit components for the FSK Group corporate portal.",
			},
		],
		education: [
			{
				org: "HSE University",
				title: "BSc, Business Management — Graduate School of Business",
				period: "2026",
			},
			{
				org: "HSE — Minor",
				title: "Data Mining — foundations of machine learning",
				period: "2024",
			},
			{
				org: "HSE — Minor",
				title: "Applied Programming — algorithms & data structures",
				period: "2025",
			},
		],
	},
	lab: {
		eyebrow: "Lab",
		title: "Earlier studies & experiments.",
		items: [
			{
				name: "Fantasy Auth Form",
				note: "A two-screen authorization flow for new and returning users.",
				href: "https://pipchenkovaa.github.io/Authorization-Form/",
				tags: ["SCSS", "JS"],
			},
			{
				name: "Parallax 3D Page",
				note: "A scrolling page built around a GSAP parallax effect.",
				href: "https://pipchenkovaa.github.io/Webpage-With-A-Parallax-Effect/",
				tags: ["GSAP", "JS"],
			},
			{
				name: "Apple / Mac Site",
				note: "A multi-page site study in Apple's interface language.",
				href: "https://pipchenkovaa.github.io/Apple_Mac-Website/",
				tags: ["HTML", "CSS", "JS"],
			},
			{
				name: "Fashion News",
				note: "A minimalist news page — first build with Tailwind CSS.",
				href: "https://pipchenkovaa.github.io/News-Webpage/",
				tags: ["Tailwind", "JS"],
			},
		],
	},
	contact: {
		eyebrow: "Contact",
		title: ["Let's build", "something good."],
		body: "Open to frontend and UI/UX roles, and to selected landing-page and interface work. Tell me what you're making.",
		nameLabel: "Name",
		reachLabel: "Email or company",
		messageLabel: "Message",
		namePh: "Your name",
		reachPh: "how to reach you",
		messagePh: "What are you building?",
	},
	footer: { tagline: "Designed & built in Moscow" },
}

const ru: Content = {
	nav: [
		{ label: "Работы", href: "#work" },
		{ label: "Обо мне", href: "#about" },
		{ label: "Опыт", href: "#experience" },
		{ label: "Контакты", href: "#contact" },
	],
	ui: {
		contact: "Связаться",
		seeWork: "Смотреть работы",
		downloadCv: "Скачать CV",
		sendMessage: "Отправить",
		mailHint: "Откроется в вашем почтовом клиенте — данные никуда не уходят.",
	},
	hero: {
		role: "Frontend-разработчик, UI/UX-дизайнер",
		location: "Москва",
		marker: "Портфолио",
		headline: ["Проектирую и собираю", "интерфейсы — от макета до прода."],
		accent: "интерфейсы",
		intro:
			"Frontend-разработчик и UI/UX-дизайнер. Веду продукт от чистого макета в Figma до быстрого анимированного интерфейса в проде — и понимаю бизнес, которому он служит.",
		availability: "Открыта к ролям во frontend и UI/UX",
		meta: [
			{ k: "Кто", v: "Алина Пипченкова" },
			{ k: "Что", v: "Frontend и UI/UX" },
			{ k: "Где", v: "Москва, удалённо" },
			{ k: "Стек", v: "React, Next, TypeScript" },
			{ k: "Статус", v: "Открыта к работе" },
		],
	},
	approach: {
		eyebrow: "Подход",
		title: "Как я работаю.",
		quote: "Одно ремесло — от первого кадра до последнего коммита.",
		body: [
			"Я работаю по всей ширине продукта. Экран начинается в Figma и заканчивается в проде на React — одни руки, так что на передаче ничего не теряется.",
			"За каждым решением стоит причина: бизнес-цель, метрика, ограничение. Лучше отгрузить понятное и быстрое, чем умное и хрупкое — и я переспрошу про задачу, если задача поставлена неверно.",
		],
	},
	colophon: {
		eyebrow: "Колофон",
		title: "Как это сделано.",
		lead: "Без шаблонов и конструкторов. Каждый компонент — руками.",
		body: "React, TypeScript, Tailwind и Framer Motion, сборка на Vite, деплой статикой. Двуязычный, с навигацией с клавиатуры и поддержкой reduced-motion. Хромированная «А» парит на плоском чёрном холсте; всё остальное — типографика и сдержанность.",
		tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
	},
	stack: {
		eyebrow: "Стек",
		title: "Инструменты, на которых работаю.",
		note: "Уверенно работаю со всем современным frontend-стеком — от архитектуры компонентов и стейта до анимации и 3D.",
		groups: [
			{
				label: "Frontend",
				items: "React, Next.js, TypeScript, JavaScript, Effector, REST / DTO",
			},
			{
				label: "Стили и анимация",
				items:
					"Tailwind CSS, styled-components, GSAP, Framer Motion, Three.js / R3F",
			},
			{
				label: "Дизайн и тулинг",
				items: "Figma, Storybook, Vite, Webpack, Git, Docker",
			},
		],
	},
	about: {
		eyebrow: "Обо мне",
		title: "Разработчик, который читает и бриф, и баланс.",
		body: [
			"Я frontend-разработчик с дизайнерским взглядом и заканчиваю бакалавриат по бизнес-менеджменту в Высшей школе бизнеса НИУ ВШЭ. Именно в этом миксе суть: я могу спроектировать интерфейс в Figma, собрать его на React и объяснить, как он влияет на бизнес-метрику.",
			"Параллельно с дипломом прошла майноры по машинному обучению и прикладному программированию — так что модели данных и алгоритмы для меня не чужой язык. Мне одинаково близки UI-kit и скролл-анимация, и PESTEL, SWOT и финансовая модель.",
		],
		highlightsLabel: "Как это выглядит на практике",
		highlights: [
			"Собираю UI-kit и дизайн-системы с нуля",
			"Клиент-серверная интеграция (REST API, DTO)",
			"Анимация и 3D — GSAP, Three.js, Framer Motion",
			"Координация команды: планы, задачи, контроль",
		],
	},
	services: {
		eyebrow: "Чем помогаю",
		title: "Три способа довести продукт до релиза.",
		items: [
			{
				n: "01",
				title: "Frontend-разработка",
				body: "Боевые приложения на React и Next.js: архитектура компонентов, дизайн-системы, стейт на Effector, клиент-серверная интеграция и рефакторинг, который держит всё это быстрым.",
				tags: ["React", "Next.js", "TypeScript", "Effector"],
			},
			{
				n: "02",
				title: "UI/UX-дизайн",
				body: "Дизайн с чистого листа: ресёрч, вайрфреймы, UI-kit и аккуратные макеты в Figma, которые чисто уходят в разработку — потому что разрабатываю их я же.",
				tags: ["Figma", "UI-kit", "Дизайн-система", "Прототипы"],
			},
			{
				n: "03",
				title: "Анимированные лендинги",
				body: "Выразительные адаптивные лендинги с анимацией и 3D в основе — те, что запоминаются после закрытия вкладки.",
				tags: ["GSAP", "Three.js", "Motion", "Vite"],
			},
		],
	},
	work: {
		eyebrow: "Избранные работы",
		title:
			"Реальные продукты в проде — от инвест-платформ до промышленных сайтов.",
		projects: [
			{
				name: "Atlas IR",
				kind: "IR-платформа и маркетплейс услуг",
				year: "2024 — сейчас",
				description:
					"Платформа, помогающая публичным компаниям и IPO выстраивать отношения с инвесторами — с прозрачным маркетплейсом, где клиент конфигурирует услуги и отслеживает их в личном кабинете. Делаю фронтенд от Figma до прода: UI-kit, компоненты и клиент-серверный слой.",
				role: "Frontend-разработчик, UI/UX",
				tags: ["Next.js", "React", "TypeScript", "Effector", "Tailwind"],
				href: "https://atlas-ir.com",
				hrefLabel: "atlas-ir.com",
			},
			{
				name: "ФСК ЛАБ",
				kind: "Лендинг для продукта в стройтехе",
				year: "2024 — 2025",
				description:
					"Спроектировала макет с нуля и собрала семистраничный лендинг для ФСК ЛАБ — разработчика цифровых решений для строительства — на основе скролл-анимации и интерактивного 3D.",
				role: "Дизайнер и frontend-разработчик",
				tags: ["React", "TypeScript", "Vite", "GSAP", "Three.js / R3F"],
			},
			{
				name: "ГК ФСК — корпоративный портал",
				kind: "UI-kit и библиотека компонентов",
				year: "2024 — 2025",
				description:
					"Доработала дизайн и собрала библиотеку UI-kit-компонентов для корпоративного портала ГК ФСК, задокументированную в Storybook для команды из нескольких разработчиков.",
				role: "Frontend-разработчик",
				tags: ["React", "TypeScript", "styled-components", "Storybook"],
			},
			{
				name: "SDM МеталлПром",
				kind: "Сайт производителя металлоконструкций",
				year: "2025",
				description:
					"Промышленный, архитектурный сайт для производителя металлоконструкций полного цикла — от проектной документации до изготовления — с портфолио сданных объектов.",
				role: "Frontend-разработчик",
				tags: ["Next.js", "React", "TypeScript"],
				href: "https://sdm-mp.ru",
				hrefLabel: "sdm-mp.ru",
			},
		],
	},
	exp: {
		eyebrowExp: "Опыт",
		titleExp: "Где работала",
		eyebrowEdu: "Образование",
		titleEdu: "Образование",
		items: [
			{
				org: "Atlas IR",
				role: "Web-разработчик, UI/UX, координация",
				period: "2024 — сейчас",
				detail:
					"Собираю UI-kit с нуля, проектирую и выпускаю компоненты, веду клиент-серверную работу (REST/DTO) и регрессионное тестирование, координирую планы и задачи команды.",
			},
			{
				org: "ФСК",
				role: "Web-разработчик",
				period: "окт 2024 — янв 2025",
				detail:
					"Спроектировала и собрала лендинг ФСК ЛАБ (3D, анимация) и разработала UI-kit-компоненты для корпоративного портала ГК ФСК.",
			},
		],
		education: [
			{
				org: "НИУ ВШЭ",
				title: "Бакалавр, бизнес-менеджмент — Высшая школа бизнеса",
				period: "2026",
			},
			{
				org: "НИУ ВШЭ — майнор",
				title: "Интеллектуальный анализ данных — основы ML",
				period: "2024",
			},
			{
				org: "НИУ ВШЭ — майнор",
				title: "Прикладное программирование — алгоритмы и структуры данных",
				period: "2025",
			},
		],
	},
	lab: {
		eyebrow: "Лаборатория",
		title: "Ранние работы и эксперименты.",
		items: [
			{
				name: "Fantasy Auth Form",
				note: "Двухэкранная форма авторизации для новых и вернувшихся пользователей.",
				href: "https://pipchenkovaa.github.io/Authorization-Form/",
				tags: ["SCSS", "JS"],
			},
			{
				name: "Parallax 3D Page",
				note: "Скролл-страница вокруг параллакс-эффекта на GSAP.",
				href: "https://pipchenkovaa.github.io/Webpage-With-A-Parallax-Effect/",
				tags: ["GSAP", "JS"],
			},
			{
				name: "Apple / Mac Site",
				note: "Многостраничный этюд в интерфейсном языке Apple.",
				href: "https://pipchenkovaa.github.io/Apple_Mac-Website/",
				tags: ["HTML", "CSS", "JS"],
			},
			{
				name: "Fashion News",
				note: "Минималистичная новостная страница — первый билд на Tailwind.",
				href: "https://pipchenkovaa.github.io/News-Webpage/",
				tags: ["Tailwind", "JS"],
			},
		],
	},
	contact: {
		eyebrow: "Контакты",
		title: ["Давайте сделаем", "что-то хорошее."],
		body: "Открыта к ролям во frontend и UI/UX, а также к отдельным проектам по лендингам и интерфейсам. Расскажите, что вы создаёте.",
		nameLabel: "Имя",
		reachLabel: "Почта или компания",
		messageLabel: "Сообщение",
		namePh: "Ваше имя",
		reachPh: "как с вами связаться",
		messagePh: "Что вы создаёте?",
	},
	footer: { tagline: "Спроектировано и собрано в Москве" },
}

export const content: Record<Lang, Content> = { en, ru }
export type { Content }
