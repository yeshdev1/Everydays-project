import ACTIONS from '../utilities/constants';

export function updateData(data) {

  const sorted_data = data.sort( (a,b) => {
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
  })

  return {
    type: ACTIONS.LAST_NAME_SORTED_DATA,
    payload: sorted_data
  };
}
