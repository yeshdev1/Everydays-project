import ACTIONS  from '../utilities/constants';

export default function everydays_data(state = [], action){
  if(action.type === ACTIONS.DEFAULT_DATA){
    return [...action.payload.sort( (a,b) => {
        return a.creationDate > b.creationDate
    })]
  }
  else if(action.type === ACTIONS.LAST_NAME_SORTED_DATA) {
    return[...action.payload.sort( (a,b) => {
       if(!a.name && !b.name) return a.creationDate > b.creationDate;
       else {
         if(!a.name) return 1;
         else if(!b.name) return -1;
         else {
           if(!a.name.last && !b.name.last){
             return a.name.first > b.name.first;
           }
           else{
             if(!a.name.last) return 1;
             else if(!b.name.last) return -1;
             else{
               return a.name.last > b.name.last;
             }
           }
         }
       }
    })]
  }
  return state;
}
