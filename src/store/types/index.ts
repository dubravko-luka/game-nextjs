import { CardState } from './cardTypes';
import { ImageState } from './imageTypes';
import { KnapsackState } from './knapsackTypes';
import { MailboxState } from './mailboxTypes';
import { ScreenState } from './screenTypes';
import { ShopState } from './shopTypes';
import { WindowState } from './windowTypes';

export interface RootState {
  window: WindowState;
  screen: ScreenState;
  image: ImageState;
  knapsack: KnapsackState;
  card: CardState;
  shop: ShopState;
  mailbox: MailboxState;
}
