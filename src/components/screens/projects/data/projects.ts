export type Project = {
	name: string
	description: string
	features: string[]
	technologies: string[]
	preview: string[]
	link?: string
}

export const projects: Project[] = [
	{
		name: 'Music Player',
		description: 'Крутой музыкальный плеер с аудио визуализацией',
		technologies: ['JavaScript', 'HTML', 'CSS'],
		features: [
			'Воспроизведение песни из выбранного плейлиста',
			'Приостановка / воспроизведение песни',
			'Случайное воспроизведение следующей песни',
			'Возможность перемотки песни',
			'Классный динамический аудио визуализатор',
			'Смена плейлиста'
		],
		preview: [
			'/abra-cv/images/projects/music-player/1.webp',
			'/abra-cv/images/projects/music-player/2.webp',
			'/abra-cv/images/projects/music-player/3.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/music-player'
	},
	{
		name: 'Game Store',
		description: 'Интернет-магазин игр',
		technologies: [
			'React',
			'JavaScript',
			'Redux',
			'React Router Dom',
			'React Icons',
			'Classnames',
			'Vite.js',
			'HTML',
			'CSS'
		],
		features: [
			'Добавление/удаление игры из корзины',
			'Отдельная страница c полной информации об игре и трейлер',
			'Страница заказа'
		],
		preview: [
			'/abra-cv/images/projects/game-store/1.webp',
			'/abra-cv/images/projects/game-store/2.webp',
			'/abra-cv/images/projects/game-store/3.webp',
			'/abra-cv/images/projects/game-store/4.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/game-store'
	},
	// {
	// 	name: 'Обновление остатков CSV',
	// 	description:
	// 		'Приложение для автоматического обновления остатков товара в файле .csv с интернет-магазина на InSales, через файл остатков на складе из системы учета товаров так же формата .csv',
	// 	technologies: ['React', 'JavaScript', 'Vite.js', 'HTML', 'CSS'],
	// 	features: [
	// 		'Коммерческий проект, deploy на GitHub Pages',
	// 		'Парсинг содержимого двух файлов формата .csv через Papaparse',
	// 		'Программное обновление остатков только необходимых позиций',
	// 		'Вывод в логи обновленных позиций(было-стало)',
	// 		'Экспорт файла .csv'
	// 	],
	// 	preview: ['/abra-cv/images/projects/balloon-csv-comparator/1.webp'],
	// 	link: 'https://github.com/AlexeyAbramovich/balloons-csv-comparator'
	// },
	{
		name: 'Crypto App',
		description:
			'Приложение для мониторинга криптоактивов и цен на криптовалюты',
		technologies: [
			'React',
			'JavaScript',
			'react-chartjs-2',
			'Ant Design',
			'HTML',
			'CSS'
		],
		features: [
			'Добавление криптоактивов',
			'Отображение важной информации о монетах / крипто-портфеле в различных форматах (диаграмма / таблица)',
			'Получение актуальной информации о выбранной монете'
		],
		preview: [
			'/abra-cv/images/projects/crypto-app/1.webp',
			'/abra-cv/images/projects/crypto-app/2.webp',
			'/abra-cv/images/projects/crypto-app/3.webp',
			'/abra-cv/images/projects/crypto-app/4.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/react-crypto-app'
	},
	{
		name: 'Resident Evil Store',
		description: 'Интернет-магазин игр на тематику "Resident Evil"',
		technologies: [
			'React',
			'TypeScript',
			'Redux',
			'React Router Dom',
			'Ant Design',
			'Axios',
			'Vite.js',
			'HTML',
			'SCSS'
		],
		features: [
			'Добавление/удаление игры из корзины',
			'Отдельная страница c полной информации об игре и трейлер',
			'Поиск по доступным играм',
			'Имитация создания заказа',
			'Адаптивный дизайн'
		],
		preview: [
			'/abra-cv/images/projects/resident-evil/1.webp',
			'/abra-cv/images/projects/resident-evil/2.webp',
			'/abra-cv/images/projects/resident-evil/3.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/resident-evil-shop'
	},
	{
		name: 'Employees',
		description: 'Приложение с авторизацией для добавления сотрудников',
		technologies: [
			'React',
			'TypeScript',
			'Redux',
			'RTK Query',
			'React Router Dom',
			'Ant Design',
			'Create React App',
			'HTML',
			'CSS',
			'JavaScript',
			'Node.js',
			'Express.js',
			'Prisma',
			'SQLite'
		],
		features: [
			'Авторизация пользователя с помощью токена JWT',
			'Валидация формы',
			'Приватные роуты',
			'Каждый пользователь может добавлять / редактировать / удалять своих сотрудников',
			'Каждый пользователь может просмотреть список всех сотрудников',
			'Пользователь не может редактировать / удалять сотрудников других пользователей'
		],
		preview: [
			'/abra-cv/images/projects/employees/1.webp',
			'/abra-cv/images/projects/employees/2.webp',
			'/abra-cv/images/projects/employees/3.webp',
			'/abra-cv/images/projects/employees/4.webp',
			'/abra-cv/images/projects/employees/5.webp',
			'/abra-cv/images/projects/employees/6.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/react-employees'
	},
	{
		name: 'ABRA Bank',
		description:
			'Имитация банковского приложения с возможность вносить / переводить / снимать деньги с карты.',
		technologies: ['JavaScript', 'Webpack', 'HTML', 'CSS'],
		features: [
			'Авторизация пользователя с помощью токена',
			'Разработанные разделы с недавними транзакциями / статистикой',
			'Отображение уведомлений о транзакциях и ошибках приложения',
			'Роутинг и приватные роуты',
			'Разработаны пользовательские библиотеки для работы с элементами DOM и обработки запросов API'
		],
		preview: [
			'/abra-cv/images/projects/abra-bank/1.webp',
			'/abra-cv/images/projects/abra-bank/2.webp',
			'/abra-cv/images/projects/abra-bank/3.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/abra-bank'
	},
	{
		name: 'Workout App',
		description: 'Приложение для тренировок',
		technologies: [
			'React',
			'JavaScript',
			'Vite.js',
			'SCSS',
			'Axios',
			'TanStack Query',
			'React Router Dom',
			'React Hook Form',
			'React Select',
			'Node.js',
			'Express.js',
			'Prisma',
			'Postgresql'
		],
		features: [
			'Авторизация пользователя через JWT токен',
			'Страница профиля со статистикой',
			'Добавление новой тренировки',
			'Добавление новых упражнений',
			'Реализация роутинга и приватных роутов',
			'Завершение выполнения упражнения / тренировки'
		],
		preview: [
			'/abra-cv/images/projects/workout-app/1.webp',
			'/abra-cv/images/projects/workout-app/2.webp',
			'/abra-cv/images/projects/workout-app/3.webp',
			'/abra-cv/images/projects/workout-app/4.webp',
			'/abra-cv/images/projects/workout-app/5.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/workout-app'
	},
	// {
	// 	name: 'ABRA сайт-портфолио',
	// 	description:
	// 		'Реализовал свой сайт портфолио для демонстрации своих навыков и сделанных проектов, в который внедрил музыкальный плеер для лучшего восприятия информации.',
	// 	technologies: [
	// 		'React',
	// 		'TypeScript',
	// 		'SCSS Modules',
	// 		'React Router Dom',
	// 		'React Hook Form',
	// 		'Zustand',
	// 		'Vite.js'
	// 	],
	// 	features: [
	// 		'Разработал весь дизайн с нуля и создал переиспользуемые компоненты.',
	// 		'Реализовал анимации на transform свойстве для улучшения производительности.',
	// 		'Сделал роутинг для навигации по сайту через React Router Dom.',
	// 		'Внедрил плеер с музыкой, в котором есть возможность выбирать плейлисты и перематывать/переключать треки.',
	// 		'Создал форму для обратной связи через React Hook Form и подключил к ней бота в Telegram для получения сообщений.',
	// 		'Оптимизировал все ресурсы: картинки, svg иконки, медиа и шрифты.',
	// 		'Сделал деплой на github-pages.'
	// 	],
	// 	preview: [
	// 		'/abra-cv/images/projects/abra-cv/1.webp',
	// 		'/abra-cv/images/projects/abra-cv/2.webp',
	// 		'/abra-cv/images/projects/abra-cv/3.webp',
	// 		'/abra-cv/images/projects/abra-cv/4.webp'
	// 	],
	// 	link: 'https://github.com/AlexeyAbramovich/abra-cv'
	// },
	// {
	// 	name: 'Onlyjobs-It',
	// 	description: 'Цель проекта: Помощь в поиске работы в IT.',
	// 	technologies: [
	// 		'Next.js',
	// 		'TypeScript',
	// 		'SCSS Modules',
	// 		'Axios',
	// 		'TanStack Query',
	// 		'Node.js',
	// 		'Express.js',
	// 		'Prisma',
	// 		'PostgreSQL'
	// 	],
	// 	features: [
	// 		'Frontend: Next.js, Typescript, Axios, TanStack Query, SCSS Modules',
	// 		'Backend: Node.js(Express.js), Typescript, Prisma, PostrgreSQL',
	// 		'Сверстал макеты основных страниц приложения из Figma.',
	// 		'Сделал завершенный адаптивный дизайн.',
	// 		'Использовал SSR + CSR.',
	// 		'Интегрировал API через библиотеку Axios и TanStack Query.',
	// 		'Разработал минимальный backend на Node.js(Express.js)',
	// 		'Сделал пагинацию как на frontend, так и на backend(при помощи Prisma).'
	// 	],
	// 	preview: [
	// 		'/abra-cv/images/projects/onlyjobs-blog/1.webp',
	// 		'/abra-cv/images/projects/onlyjobs-blog/2.webp',
	// 		'/abra-cv/images/projects/onlyjobs-blog/3.webp'
	// 	]
	// },
	{
		name: 'Tic tac toe online',
		description:
			'Разработал Fullstack игру крестики-нолики для игры онлайн в режиме реального времени при помощи SSE.',
		technologies: [
			'Next.js',
			'TypeScript',
			'Tailwind',
			'Shadcn UI',
			'FSD Architecture',
			'Prisma',
			'PostgreSQL',
			'RabbitMQ',
			'Docker'
		],
		features: [
			'Cоздал набор готовых UI компонентов используя библиотеку Shadcn UI.',
			'Реализовал простой и минималистичный UI для приложения используя Tailwind и набор готовых компонентов.',
			'Структуру проекта реализовывал на основе FSD архитектуры',
			'Реализовал аутентификацию и авторизацию через JWT + session и http-only cookies.',
			'Реализовал api routes для работы с бд.',
			'Реализовал логику самой игры с обновлениями в режиме реального времени используя SSE(через EventSource) с RabbitMQ, а также оптимистичные обновления.',
			'Реализовал систему рейтинга игроков и таблицы лидеров, которая также обновляется в режиме реального времени при помощи SSE(EventSource) с RabbitMQ.',
			'Поднял тестовую базу данных и RabbitMQ сервер в Docker.'
		],
		preview: [
			'/abra-cv/images/projects/tic-tac-toe-online/1.webp',
			'/abra-cv/images/projects/tic-tac-toe-online/2.webp',
			'/abra-cv/images/projects/tic-tac-toe-online/3.webp',
			'/abra-cv/images/projects/tic-tac-toe-online/4.webp',
			'/abra-cv/images/projects/tic-tac-toe-online/5.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/tic-tac-toe-online'
	},
	{
		name: 'Расширение Chrome для блокировки сайтов',
		description:
			'Разработал Fullstack приложение для блокировки сайтов по домену и ключевым словам на сайте. Само приложение включает в себя: backend, frontend для администрирования и само расширение для браузера. ',
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind',
			'React Hook Form',
			'Axios',
			'TanStack Query',
			'Orval',
			'FSD Architecture',
			'CRXJS',
			'Vite.js',
			'Nest.js',
			'Swagger',
			'Prisma',
			'PostgreSQL',
			'Docker'
		],
		features: [
			'Backend: Nest.js, TypeScript, Prisma, PostgreSQL, Swagger, Docker',
			'Frontend: Next.js, TypeScript, Tailwind, axios, react-hook-form, TanStack Query, orval',
			'Chrome Extension: React, TypeScript, Tailwind, CRXJS, orval, Vite.js',
			'Реализовал бэкенд на Nest.js, для управления сессиями/авторизацией, работы с пользователем и его аккаунтом, также изменения списка блокируемых сайтов.',
			'Сгенерировал работающую Swagger документацию на основе основных маршрутов с помощью пакета @nestjs/swagger.',
			'Настроил CORS политику для обращения с админки и расширения.',
			'Реализовал аутентификацию и авторизацию через JWT + session и http-only cookies.',
			'Синхронизировал авторизацию в админке и самом расширении.',
			'Структуру админки и расширения строил на основе FSD архитектуры.',
			'Сделал свой кастомный UI-kit с помощью Tailwind, который переиспользовал для админки и расширения.',
			'Использовал автоматическую генерацию клиента для запросов и api при помощи orval на основе Swagger схемы с бэкенда.',
			'Использовал TanStack Query вместо useEffect для работы с запросами на клиенте.',
			'Реализовал расширение для браузера с помощью плагина CRXJS для Vite.js.',
			'Реализовал блокировку сайтов по домену при помощи Chrome Api и Service Worker',
			'Реализовал блокировку сайтов по ключевому слову на сайте при помощи Chrome Api и внедрения context_script в контекст веб-страницы.',
			'Поднял тестовую базу данных PostgreSQL в Docker.'
		],
		preview: [
			'/abra-cv/images/projects/website-blocker-extension/1.webp',
			'/abra-cv/images/projects/website-blocker-extension/2.webp',
			'/abra-cv/images/projects/website-blocker-extension/3.webp',
			'/abra-cv/images/projects/website-blocker-extension/4.webp',
			'/abra-cv/images/projects/website-blocker-extension/5.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/website-blocker-extension'
	}
].reverse()
