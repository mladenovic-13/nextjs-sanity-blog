import React, { useReducer } from "react";
import { createContext } from "vm";
import { PostReducer } from "./postReducer";
import { TPostContext } from "./type";

const INITIAL_STATE = {
  currentPost: {
    category: "",
    title: "",
  },
};

export const PostContext = createContext(INITIAL_STATE);

type TProviderProps = {
  children: React.ReactNode;
};

export const PostContextProvider = ({ children }: TProviderProps) => {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

  return (
    <PostContext.Provider value={{ currentPost: state.currentPost, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
