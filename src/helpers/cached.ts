import { Item, Comment } from "../types";

const cachedConstants = {
  ITEMS: "ITEMS",
  COMMENTS: "COMMENTS",
  SELECTED_ITEM: "SELECTED_ITEM",
};

export const setCachedSelectedItem = (data: Item | null) => {
  localStorage.setItem(cachedConstants.SELECTED_ITEM, JSON.stringify(data));
};

export const getCachedSelectedItem = (): Item | null => {
  const data = localStorage.getItem(cachedConstants.SELECTED_ITEM);

  if (data) {
    return JSON.parse(data) as Item;
  }
  return null;
};

export const setCachedItems = (data: Item[]) => {
  localStorage.setItem(cachedConstants.ITEMS, JSON.stringify(data));
};

export const getCachedItems = (): Item[] => {
  const data = localStorage.getItem(cachedConstants.ITEMS);

  if (data) {
    return JSON.parse(data) as Item[];
  }
  return [];
};

export const setCachedComments = (data: Comment[]) => {
  localStorage.setItem(cachedConstants.COMMENTS, JSON.stringify(data));
};

export const getCachedComments = (): Comment[] => {
  const data = localStorage.getItem(cachedConstants.COMMENTS);

  if (data) {
    return JSON.parse(data) as Comment[];
  }
  return [];
};
