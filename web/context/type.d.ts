import { Dispatch } from "react";

type TPostContext = {
  currentPost: {
    category: string;
    title: string;
  };
  dispatch?: Dispatch<TAction>;
};
type TAction = {
  type: "NEW_POST";
  payload: {
    category: string;
    title: string;
  };
};
