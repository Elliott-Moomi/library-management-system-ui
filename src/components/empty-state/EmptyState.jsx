import React from 'react';
import './EmptyState.scss'

export const EmptyState = ({message}) =>{
  return <h1 className="empty-state">{message}</h1>;
}