import {
  createRouter,
} from '@expo/ex-navigation';

import CarSelect from './containers/CarSelect';
import ItemsSelect from './containers/ItemsSelect';

const Router = createRouter(() => ({
  carSelect: () => CarSelect,
  itemSelect: () => ItemsSelect,
}));

export default Router;
