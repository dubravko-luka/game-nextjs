import { AllyState } from './allyTypes';
import { AttackDefenseState } from './attackDefenseTypes';
import { CardState } from './cardTypes';
import { EnemyState } from './enemyTypes';
import { ImageState } from './imageTypes';
import { KnapsackState } from './knapsackTypes';
import { MailboxState } from './mailboxTypes';
import { ScreenState } from './screenTypes';
import { SettingState } from './settingTypes';
import { ShopState } from './shopTypes';
import { WebSocketState } from './webSocketTypes';
import { WindowState } from './windowTypes';

export interface RootState {
	window: WindowState;
	screen: ScreenState;
	image: ImageState;
	knapsack: KnapsackState;
	card: CardState;
	shop: ShopState;
	mailbox: MailboxState;
	setting: SettingState;
	ally: AllyState;
	enemy: EnemyState;
	attackDefense: AttackDefenseState;
	webSocket: WebSocketState;
}
