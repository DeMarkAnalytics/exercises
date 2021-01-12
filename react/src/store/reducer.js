import {combineReducers} from 'redux';
import {reducer as ordersReducer} from './orders';
import {reducer as summaryPanelReducer} from './summaryPanel';

export default combineReducers({
  orders: ordersReducer,
  summaryPanel: summaryPanelReducer
});
