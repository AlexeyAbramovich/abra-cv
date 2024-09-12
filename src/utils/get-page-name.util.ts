export const getPageName = (path: string) => {
	switch (path) {
		case '/':
			return 'Главная'
		case '/about':
			return 'Обо мне'
		case '/projects':
			return 'Проекты'
		case '/contacts':
			return 'Контакты'
		default:
			return 'Not Found'
	}
}
