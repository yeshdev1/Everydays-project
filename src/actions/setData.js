import ACTIONS from '../utilities/constants';

export function setData(data){
  const default_data = data.sort( (a,b) => {
      return a.creationDate > b.creationDate
  })
  return {
    type: ACTIONS.DEFAULT_DATA,
    payload: default_data
  };
}
