export const headerLinks = [
	{
		imgURL: '/icons/Home.svg',
		label: 'Home',
		route: '/',
	},
	{
		label: 'Create lesson',
		route: '/lessons/create',
	},
	{
		label: 'My Profile',
		route: '/profile',
	},
	{
		imgURL: '/icons/upcoming.svg',
		route: '/upcoming',
		label: 'Upcoming',
	},
	{
		imgURL: '/icons/previous.svg',
		route: '/previous',
		label: 'Previous',
	},
	{
		imgURL: '/icons/Video.svg',
		route: '/recordings',
		label: 'Recordings',
	},
	{
		imgURL: '/icons/add-personal.svg',
		route: '/personal-room',
		label: 'Personal Room',
	},
	{
		imgURL: '',
		route: '/aboutus',
		label: 'About us',
	},
]

export const avatarImages = [
	'/images/avatar-1.jpeg',
	'/images/avatar-2.jpeg',
	'/images/avatar-3.png',
	'/images/avatar-4.png',
	'/images/avatar-5.png',
]

export const lessonDefaultValues = {
	title: '',
	description: '',
	location: '',
	imageUrl: '',
	startDateTime: new Date(),
	endDateTime: new Date(),
	categoryId: '',
	price: '',
	isFree: false,
	url: '',
}
