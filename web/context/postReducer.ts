import { Reducer } from "react";
import { TAction, TPostContext } from "./type";

export const PostReducer: Reducer<TPostContext, TAction> = (state, action) => {
  switch (action.type) {
    case "NEW_POST":
      return { currentPost: action.payload };
    default:
      return state;
  }
};
