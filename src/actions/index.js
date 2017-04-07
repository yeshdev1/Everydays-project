export function selectBlog(blog){
  console.log('this is the action that is dispatched to select the right blog', blog);
  return {
    type: 'SELECT_BLOG',
    payload: blog
  }
}
