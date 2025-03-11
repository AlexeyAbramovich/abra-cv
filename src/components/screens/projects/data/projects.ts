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
		name: 'Tic tac toe',
		description: 'Игра крестики-нолики',
		technologies: ['React', 'JavaScript', 'Vite', 'HTML', 'CSS'],
		features: ['Просмотр предыдущих ходов', 'Отматывание ходов'],
		preview: [
			'/abra-cv/images/projects/tic-tac-toe/1.png',
			'/abra-cv/images/projects/tic-tac-toe/2.png'
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
			'/abra-cv/images/projects/music-player/1.webp',
			'/abra-cv/images/projects/music-player/2.webp',
			'/abra-cv/images/projects/music-player/3.webp'
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
		preview: ['/abra-cv/images/projects/recipes/1.webp'],
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
			'/abra-cv/images/projects/game-store/1.webp',
			'/abra-cv/images/projects/game-store/2.webp',
			'/abra-cv/images/projects/game-store/3.webp',
			'/abra-cv/images/projects/game-store/4.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/game-store'
	},
	{
		name: 'Обновление остатков CSV',
		description:
			'Приложение для автоматического обновления остатков товара в файле .csv с интернет-магазина на InSales, через файл остатков на складе из системы учета товаров так же формата .csv',
		technologies: ['React', 'JavaScript', 'Vite', 'HTML', 'CSS'],
		features: [
			'Коммерческий проект, deploy на GitHub Pages',
			'Парсинг содержимого двух файлов формата .csv через Papaparse',
			'Программное обновление остатков только необходимых позиций',
			'Вывод в логи обновленных позиций(было-стало)',
			'Экспорт файла .csv'
		],
		preview: ['/abra-cv/images/projects/balloon-csv-comparator/1.webp'],
		link: 'https://github.com/AlexeyAbramovich/balloons-csv-comparator'
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
			'Vite',
			'SCSS',
			'Axios',
			'Tanstack Query',
			'React Router Dom',
			'React Hook Form',
			'React Select',
			'Node.js',
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
			'/abra-cv/images/projects/workout-app/1.webp',
			'/abra-cv/images/projects/workout-app/2.webp',
			'/abra-cv/images/projects/workout-app/3.webp',
			'/abra-cv/images/projects/workout-app/4.webp',
			'/abra-cv/images/projects/workout-app/5.webp'
		],
		link: 'https://github.com/AlexeyAbramovich/workout-app'
	}
]
