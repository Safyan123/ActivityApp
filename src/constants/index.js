import { GREEN, GREY, GOLDEN, SILVER, RED, PINK, BLACK_FOUR, WHITE, PINK_ONE, PINK_TWO, PINK_THREE, GREEN_ONE, GREEN_TWO, GREEN_THREE, BROWN_ONE, BROWN_TWO, BROWN_THREE, GREEN_FOUR, GREEN_FIVE, GREEN_SIX, PURPLE_ONE, PURPLE_TWO, PURPLE_THREE, DARK_RED_ONE, DARK_RED_TWO, DARK_RED_THREE, DARK_PURPLE_ONE, DARK_PURPLE_TWO, DARK_PURPLE_THREE } from './colors';

export * from './colors'
export * from './fonts'
export * from './images'

export const INVALID_PASS_MESSAGE = 'Password should be at least 8 characters long, as well as requiring uppercase, numeric, and special characters.'
export const USER_EXIST_MESSAGE = 'This username already exists'
export const USER_NAME_ERROR_MESSAGE = "Username shouldn't contain spaces or special chracters"

export const SCREEN_PADDING_HORIZONTAL = 24
export const NAVIGATE_GLOBAL_ROUTE = 'NAVIGATE_GLOBAL_ROUTE'

export const REQUIRED_FIELD_MSG = 'Required Field'

export const USER_LOGIN_OBJ = "user_info_object"
export const USER_ESSENTIAL_CREDENTIALS = 'user_essential_credentials'

export const NO_INTERNET_TITLE = 'Internet not enabled!'
export const NO_INTERNET_MSG = 'Turn on your internet connection to move forward.'

export const SIGNOUT_MSG = 'Are you sure you wanted to signout?'
export const CONFIRM_TITLE = 'Confirmation!'

export const CONNECT_DEVICE_TEXT = "Connect your device"
export const DEVICE_SUCCESS_CONNECT_TEXT = "Successful Connection"
export const SEARCHING_TEXT = "Searching..."

export const VALIDATION_TITLE = 'Validation!'
export const ENTER_EMAIL = 'Please enter email address'
export const ENTER_VALID_EMAIL = 'Please enter valid email address'
export const ENTER_PASSWORD = 'Please enter password'
export const ENTER_NAME = 'Please enter name'
export const ENTER_DOB = 'Please select D.O.B'
export const ENTER_GENDER = 'Please select gender'


export const FILTERS_LIST = [
	{
		title: 'This Month'
	},
	{
		title: 'This Week'
	},
	{
		title: 'Today'
	}
]

export const FILTERS_LIST_TWO = [
	{
		title: 'Active',
	},
	{
		title: 'In Active',
	},
]


export const DISCOVER_LIST = [
	{
		title: 'Play Lasertag',
		name: 'Richard Hawrd',
		distance: '5',
		time: '3 m',
		colors: [PINK_ONE, PINK_TWO, PINK_THREE],
	},
	{
		title: 'New to London',
		name: 'John appleseed',
		distance: '20',
		time: '3 m',
		colors: [GREEN_ONE, GREEN_TWO, GREEN_THREE],
	},
	{
		title: 'Gaming Session',
		name: 'Richard Hawrd',
		distance: '35',
		time: '3 m',
		colors: [BROWN_ONE, BROWN_TWO, BROWN_THREE],
	},
	{
		title: 'Lets watch a movie',
		name: 'John appleseed',
		distance: '50',
		time: '3 m',
		colors: [GREEN_FOUR, GREEN_FIVE, GREEN_SIX],
	},
	{
		title: 'Gaming Session',
		name: 'Richard Hawrd',
		distance: '35',
		time: '3 m',
		colors: [DARK_PURPLE_ONE, DARK_PURPLE_TWO, DARK_PURPLE_THREE],
	},
	{
		title: 'Lets watch a movie',
		name: 'John appleseed',
		distance: '50',
		time: '3 m',
		colors: [DARK_RED_ONE, DARK_RED_TWO, DARK_RED_THREE],
	},
	{
		title: 'Gaming Session',
		name: 'Richard Hawrd',
		distance: '35',
		time: '3 m',
		colors: [GREEN_FOUR, GREEN_FIVE, GREEN_SIX],
	},
	{
		title: 'Lets watch a movie',
		name: 'John appleseed',
		distance: '50',
		time: '3 m',
		colors: [DARK_RED_ONE, DARK_RED_TWO, DARK_RED_THREE],
	},
]

export const ACTIVITY_LIST = [
	{
		title: 'Play Lasertag',
		name: 'Richard Hawrd',
		follower: '27',
		likes: '4',
		distance: '5',
		time: '3 m',
	},
	{
		title: 'New to London',
		name: 'Richard Hawrd',
		follower: '27',
		likes: '4',
		distance: '20',
		time: '3 m',
	},
	{
		title: 'Gaming Session',
		name: 'Richard Hawrd',
		follower: '27',
		likes: '4',
		distance: '35',
		time: '3 m',
	},
	{
		title: 'Lets watch a movie',
		name: 'Richard Hawrd',
		follower: '27',
		likes: '4',
		distance: '50',
		time: '3 m',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		follower: '27',
		likes: '4',
		distance: '50',
		time: '3 m',
	},
	{
		title: 'Gaming Session',
		name: 'Richard Hawrd',
		follower: '27',
		likes: '4',
		distance: '35',
		time: '3 m',
	},
	{
		title: 'Gaming Session',
		name: 'Richard Hawrd',
		follower: '27',
		likes: '4',
		distance: '35',
		time: '3 m',
	},
	{
		title: 'Gaming Session',
		name: 'Richard Hawrd',
		follower: '27',
		likes: '4',
		distance: '35',
		time: '3 m',
	},
]

export const GENDER_OPTIONS = [
  {
    label:'Male',
    value: 'male'
  },

  {
    label:'Female',
    value: 'female'
  }
]


export const GRADIENT_LIST_TWO = [
  {
		index: 0,
    colors: [GREEN, GREY],
    label: 'one'
	},
  {
		index: 1,
    colors: [GOLDEN, SILVER],
    label: 'two'
	},
  {
		index: 2,
    colors: [RED, PINK],
    label: 'three'
	},
  {
		index: 3,
    colors: [BLACK_FOUR, WHITE],
    label: 'four'
	},
  {
		index: 4,
    colors: [RED, GREY],
    label: 'five'
  },
  {
		index: 5,
    colors: [GOLDEN, RED],
    label: 'six'
  }
]


export const GRADIENT_LIST = [
  {
		index: 0,
    colors: [PINK_ONE, PINK_TWO, PINK_THREE],
    label: 'one'
	},
  {
		index: 1,
    colors: [GREEN_ONE, GREEN_TWO, GREEN_THREE],
    label: 'two'
	},
  {
		index: 2,
    colors: [BROWN_ONE, BROWN_TWO, BROWN_THREE],
    label: 'three'
	},
  {
		index: 3,
    colors: [GREEN_FOUR, GREEN_FIVE, GREEN_SIX],
    label: 'four'
	},
  {
		index: 4,
    colors: [DARK_PURPLE_ONE, DARK_PURPLE_TWO, DARK_PURPLE_THREE],
    label: 'five'
  },
  {
		index: 5,
    colors: [DARK_RED_ONE, DARK_RED_TWO, DARK_RED_THREE],
    label: 'six'
  }
]


export const CHAT_LIST = [
	{
		name: 'John Herry',
		follower: '3',
		time: '3 m',
	},
	{
		name: 'Richard Hawrd',
		follower: '7',
		time: '3 m',
	},
	{
		name: 'David Smith',
		follower: '2',
		time: '3 m',
	},
]


export const CONTRIBUTERS_LIST = [
	{
		title: 'Play Lasertag',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'New to London',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'Gaming Session',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'Lets watch a movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
	{
		title: 'How movie',
		name: 'Richard Hawrd',
		imageUrl: '',
	},
]