export default function(state = {}, action) {
  switch(action.type){
    case: 'SELECT_BLOG':
      return action.payload;
  }

  return state;
}
