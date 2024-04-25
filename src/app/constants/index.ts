export const headerLinks = [
	{
		label: 'Home',
		route: '/',
	},
	{
		label: 'Create Course',
		route: '/course/create',
	},
	{
		label: 'My Profile',
		route: '/profile',
	},
	{
		label: 'About us',
		route: '/aboutus',
	},
	{
		label: 'Mentors',
		route: '/mentors',
	},
	{
		label: 'Companies',
		route: '/companies',
	},
	{
		label: 'Universities',
		route: '/universities',
	},
	{
		label: 'Student’s achievements',
		route: '/student-achievements',
	},
]

export const eventDefaultValues = {
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

export const sidebarLinks = [
	{
		imgURL: '/icons/Home.svg',
		route: '/',
		label: 'Home',
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
]

export const avatarImages = [
	'/images/avatar-1.jpeg',
	'/images/avatar-2.jpeg',
	'/images/avatar-3.png',
	'/images/avatar-4.png',
	'/images/avatar-5.png',
]
