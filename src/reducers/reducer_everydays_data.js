import ACTIONS  from '../utilities/constants';

export default function everydays_data(state = [], action){
  if(action.type === ACTIONS.DEFAULT_DATA){
    return [...action.payload]; // Creating an entirely new object with the new state copied into it withe spread operator
  }
  else if(action.type === ACTIONS.LAST_NAME_SORTED_DATA) {
    return [...action.payload];
  }
  return state;
}
