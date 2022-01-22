import React from 'react';
import { post } from './postContextContent';

export const PostContext = React.createContext();

export const PostStorage = ({ children }) => {
  const value = { post };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
