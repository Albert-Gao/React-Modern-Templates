import React from 'react'
import { Provider } from 'react-redux'
import { reduxStore } from '../redux'

export const Providers: React.FC = ({ children }) => (
  <Provider store={reduxStore}>{children}</Provider>
)
