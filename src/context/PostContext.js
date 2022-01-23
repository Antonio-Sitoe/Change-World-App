import React from 'react';
import { post } from './postContextContent';
import { Notifica } from './notifica';

export const PostContext = React.createContext();

export const PostStorage = ({ children }) => {
  const value = { post,Notifica };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
