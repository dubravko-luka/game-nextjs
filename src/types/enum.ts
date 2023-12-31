export enum SCREEN_ENUM {
	HOME = 'HOME',
	RANKED = 'RANKED',
	PVP = 'PVP',
	TUTORIAL = 'TUTORIAL',
	TUTORIAL_1 = 'TUTORIAL_1',
	KNAPSACK = 'KNAPSACK',
	CARD = 'CARD',
	SHOP = 'SHOP',
	ACTIVITY = 'ACTIVITY',
	DAILY_TASK = 'DAILY_TASK',
	MAILBOX = 'MAILBOX',
	PLAY_PVP = 'PLAY_PVP',
}

export enum MODE_GAME {
	RANKED = 'RANKED',
	PVP = 'PVP',
	TUTORIAL = 'TUTORIAL',
}

export enum ICON_1_ENUM {
	PLAY = `[0, 0]`,
	EXISTS = `[1, 0]`,
	SPEAKER = `[2, 0]`,
	HOME = `[3, 0]`,
	//
	SETTING = `[0, 1]`,
	STAR = `[1, 1]`,
	REPEAT = `[2, 1]`,
	PAUSE = `[3, 1]`,
	//
	LIST = `[0, 2]`,
	CHECK = `[1, 2]`,
	INFO = `[2, 2]`,
	POWER = `[3, 2]`,
	//
	LOCK = `[0, 3]`,
	SHARE = `[1, 3]`,
	DOWNLOAD = `[2, 3]`,
	MONEY = `[3, 3]`,
	//
	WIFI = `[0, 4]`,
	RANK = `[1, 4]`,
	SHOP = `[2, 4]`,
	ACHIEVEMENT = `[3, 4]`,
	//
	DAILY_TASK = `[0, 5]`,
	ACTIVITY = `[1, 5]`,
	CARD = `[2, 5]`,
	KNAPSACK = `[3, 5]`,
	//

	LETTER = `[0, 6]`,
	LETTER_OPENED = `[1, 6]`,
	LETTER_NOT_OPEN = `[2, 6]`,
	SEARCH = `[3, 6]`,
}

export enum ICON_2_ENUM {
	NUMBER_1 = `[0, 0]`,
	NUMBER_2 = `[1, 0]`,
	NUMBER_3 = `[2, 0]`,
}

export enum INDEXEDDB_OBJECT_NAME {
	IMAGES = 'images',
}

export enum KNAPSACK_ENUM_TAB {
	ALL = 'ALL',
	CARD_FRAGMENT = 'CARD_FRAGMENT',
	ITEMS = 'ITEMS',
	GIFT_BAG = 'GIFT_BAG',
}

export enum CARD_ENUM_TAB {
	ALL = 'ALL',
	BEATMAN = 'BEATMAN',
	DEVIL = 'DEVIL',
	FAIRY = 'FAIRY',
	HUMAN = 'HUMAN',
	MONSTER = 'MONSTER',
}

export enum SHOP_ENUM_TAB {
	HERO = 'HERO',
	CARD = 'CARD',
	MYSTERY_BOX = 'MYSTERY_BOX',
}

export enum MAILBOX_ENUM_TAB {
	SYSTEM = 'SYSTEM',
	NEWS = 'NEWS',
	GIFTS = 'GIFTS',
}

export enum PLAYER_ENUM {
	PLAYER_1 = 'PLAYER_1',
	PLAYER_2 = 'PLAYER_2',
}

export enum position_card {
	TOP_ENEMY = -403,
	TOP_ENEMY_MAIN = -427,
	TOP_ALLY = 404,
	TOP_ALLY_MAIN = 381,
}

export enum CARD_TYPE {
	HERO = 'HERO',
	CARD = 'CARD',
}

export enum PLAY_ENUM_SOCKET {
	START = 'START',
	CREATE = 'CREATE',
	JOIN = 'JOIN',
	END_TURN = 'END_TURN',
	GO_TO_BATTLE = 'GO_TO_BATTLE',
	ATTACK = 'ATTACK',
	CLOSE = 'CLOSE',
}
