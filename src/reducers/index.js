import { combineReducers } from 'redux';
import EmperorsReducer from './reducer_emperors';
import ActiveEmperor from './reducer_active_emperor';
import Ordered from './reducer_order';
import OrderInfos from './reducer_order_info';

const rootReducer = combineReducers({
  emperors: EmperorsReducer,
  activeEmperor: ActiveEmperor,
  ordered: Ordered,
  orderInfos: OrderInfos
});

export default rootReducer;
