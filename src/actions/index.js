export const EMPEROR_SELECTED ='EMPEROR_SELECTED';
export const ORDER_BOOK = 'ORDER_BOOK';
export const FETCH_POSTS = 'FETCH_POSTS';

export function selectEmperor(emperor) {
  return {
    type: EMPEROR_SELECTED,
    payload: emperor
  }
};

export function fetchPosts(data) {
  return{
      type: FETCH_POSTS,
      payload: data
    };
};