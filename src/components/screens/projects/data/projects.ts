export type Project = {
	name: string
	description: string
	features: string[]
	technologies: string[]
	preview: string[]
	link: string
}

export const projects: Project[] = [
	{
		name: 'Weather',
		description: 'Прогноз погоды для выбранного города',
		technologies: ['JavaScript', 'HTML', 'CSS'],
		features: [
			'Для запросов используется fetch()',
			'Данные о погоде берутся с сайта api.openweathermap.org'
		],
		preview: ['/images/projects/weather/1.webp'],
		link: 'https://github.com/AlexeyAbramovich/weather'
	},
	{
		name: 'Star Wars',
		description: 'Симуляция полёта кораблей из звездных войн',
		technologies: ['JavaScript', 'HTML', 'CSS'],
		features: [
			'Для запросов используется fetch()',
			'Данные по кораблям берутся с сайта swapi.dev'
		],
		preview: [
			'/images/projects/star-wars/1.webp',
			'/images/projects/star-wars/2.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/starwars'
	},
	{
		name: 'Colors',
		description: 'Генератор случайных цветов',
		technologies: ['JavaScript', 'Chroma.js', 'HTML', 'CSS'],
		features: [
			'Фиксация цвета',
			'Фиксированные цвета сохраняются при перезагрузке'
		],
		preview: ['/images/projects/colors/1.webp'],
		link: 'https://github.com/AlexeyAbramovich/colors'
	},
	{
		name: 'Tic tac toe',
		description: 'Игра крестики-нолики',
		technologies: ['React', 'JavaScript', 'Vite', 'HTML', 'CSS'],
		features: ['Просмотр предыдущих ходов', 'Отматывание ходов'],
		preview: [
			'/images/projects/tic-tac-toe/1.png',
			'/images/projects/tic-tac-toe/2.png'
		],
		link: 'https://github.com/AlexeyAbramovich/tic-tac-toe'
	},
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
			'/images/projects/music-player/1.webp',
			'/images/projects/music-player/2.webp',
			'/images/projects/music-player/3.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/music-player'
	},
	{
		name: 'Recipes',
		description: 'Сайт с рецептами',
		technologies: [
			'React',
			'TypeScript',
			'Redux',
			'RTK Query',
			'React Router Dom',
			'JSON Server',
			'Vite',
			'HTML',
			'CSS'
		],
		features: [
			'Загрузка данных рецептов с json-сервера',
			'Добавление нового рецепта',
			'Добавление рецепта в избранное',
			'Поиск по рецептам'
		],
		preview: ['/images/projects/recipes/1.webp'],
		link: 'https://github.com/AlexeyAbramovich/recipes'
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
			'Vite',
			'HTML',
			'CSS'
		],
		features: [
			'Добавление/удаление игры из корзины',
			'Отдельная страница c полной информации об игре и трейлер',
			'Страница заказа'
		],
		preview: [
			'/images/projects/game-store/1.webp',
			'/images/projects/game-store/2.webp',
			'/images/projects/game-store/3.webp',
			'/images/projects/game-store/4.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/game-store'
	},
	{
		name: 'GTA 6 Preorder',
		description: 'Форма для предзаказ ГТА 6',
		technologies: [
			'React',
			'TypeScript',
			'React Hook Form',
			'TailwindCSS',
			'HTML',
			'Vite',
			'Express',
			'Prisma',
			'PostgreSQL'
		],
		features: ['Данные из формы сохраняются в базу данных PostgreSQL'],
		preview: ['/images/projects/gta-6/1.webp'],
		link: 'https://github.com/AlexeyAbramovich/gta-6'
	},
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
			'/images/projects/crypto-app/1.webp',
			'/images/projects/crypto-app/2.webp',
			'/images/projects/crypto-app/3.webp',
			'/images/projects/crypto-app/4.webp'
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
			'Vite',
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
			'/images/projects/resident-evil/1.webp',
			'/images/projects/resident-evil/2.webp',
			'/images/projects/resident-evil/3.webp'
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
			'Express',
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
			'/images/projects/employees/1.webp',
			'/images/projects/employees/2.webp',
			'/images/projects/employees/3.webp',
			'/images/projects/employees/4.webp',
			'/images/projects/employees/5.webp',
			'/images/projects/employees/6.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/react-employees'
	},
	{
		name: 'ABRA Bank',
		description:
			'Имитация банковского приложения с возможность вносить / переводить / снимать деньги с карты. 📝 Приложение было разработано в ходе курса на htmllessons.io. Серверная часть была предоставлена автором этого курса и разработана с использованием Nest.js',
		technologies: ['JavaScript', 'Webpack', 'HTML', 'CSS'],
		features: [
			'Авторизация пользователя с помощью токена',
			'Разработанные разделы с недавними транзакциями / статистикой',
			'Отображение уведомлений о транзакциях и ошибках приложения',
			'Роутинг и приватные роуты',
			'Разработаны пользовательские библиотеки для работы с элементами DOM и обработки запросов API'
		],
		preview: [
			'/images/projects/abra-bank/1.webp',
			'/images/projects/abra-bank/2.webp',
			'/images/projects/abra-bank/3.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/abra-bank'
	},
	{
		name: 'Workout App',
		description: 'Приложение для тренировок',
		technologies: [
			'React',
			'JavaScript',
			'Vite',
			'SCSS',
			'Axios',
			'Tanstack Query',
			'React Router Dom',
			'React Hook Form',
			'React Select',
			'Express',
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
			'/images/projects/workout-app/1.webp',
			'/images/projects/workout-app/2.webp',
			'/images/projects/workout-app/3.webp',
			'/images/projects/workout-app/4.webp',
			'/images/projects/workout-app/5.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/workout-app'
	}
]
