const axios = require('axios')

const BASE_URL = "muravleva-bookshelf-django.herokuapp.com/api/books"

async function getListFromAPI(endpoint) {
  return await axios.get(`${BASE_URL}${endpoint}`, {mode: 'cors'})
}

export async function lookupUnfinishedList(user_id) {
  let response = await getListFromAPI('unfinished/');
  var filteredData = response.data.filter(function (item)
  {
    return item.user_id === user_id;
  });
  return filteredData;
}

export async function lookupFinishedList(user_id) {
  let response = await getListFromAPI('finished/');
  var filteredData = response.data.filter(function (item)
  {
    return item.user_id === user_id;
  });
  return filteredData;
}

export async function lookupSaveBook(book) {
  let response = await axios.post(BASE_URL, book)
  return response.data
}

export async function lookupDeleteBook(book) {
  await axios.delete(`${BASE_URL}${book.id}/`)
}

export async function lookupSetFinished(book, finished) {
  return await axios.patch(`${BASE_URL}${book.id}/`, {finished: finished});
}