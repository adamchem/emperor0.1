import { combineReducers } from 'redux';
import EmperorsReducer from './reducer_emperors';
import ActiveEmperor from './reducer_active_emperor';
import OrderInfos from './reducer_order_info';

const rootReducer = combineReducers({
  emperors: EmperorsReducer,
  activeEmperor: ActiveEmperor,
  orderInfos: OrderInfos
});

export default rootReducer;
