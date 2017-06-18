export const EMPEROR_SELECTED ='EMPEROR_SELECTED';
export const ORDER_BOOK = 'ORDER_BOOK';
export const POST_ORDER = 'POST_ORDER';

export function selectEmperor(emperor) {
  return {
    type: EMPEROR_SELECTED,
    payload: emperor
  }
};

export function orderBook(amount){
  return {
    type: ORDER_BOOK,
    payload: amount
  }
};

export function fetchPosts() {
  $.ajax({
    type: "get",
    url: "/form"
  }).done(orderinfos => {
    return{
      type: FETCH_POSTS,
      payload: orderinfos
    }
  });
}

export function postOrder(data){
  $.ajax({
    type: "post",
    url: "/form",
    data: data,
    dataType:'JSON'
  }).done(orderinfos => {
    return{
      type: POST_ORDER,
      payload: orderinfos
    }
  });
}