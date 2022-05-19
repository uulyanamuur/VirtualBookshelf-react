import {lookupDeleteBook, lookupFinishedList, lookupSaveBook, lookupSetFinished, lookupUnfinishedList} from "./lookup";

export async function getUnfinishedList(user_id) {
  return await lookupUnfinishedList(user_id)
}

export async function getFinishedList(user_id) {
  return await lookupFinishedList(user_id)
}

export async function saveBook(book) {
  return await lookupSaveBook(book);
}

export async function setFinished(book, finished) {
  return await lookupSetFinished(book, finished);
}

export async function deleteBook(book) {
  await lookupDeleteBook(book);
}