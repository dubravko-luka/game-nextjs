import { ImageState } from './imageTypes';
import { KnapsackState } from './knapsackTypes';
import { ScreenState } from './screenTypes';
import { WindowState } from './windowTypes';

export interface RootState {
  window: WindowState;
  screen: ScreenState;
  image: ImageState;
  knapsack: KnapsackState;
}
