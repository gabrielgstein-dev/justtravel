import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import kenyaReducer from './slices/kenya.slice'

export const store = configureStore({
  reducer: {
    kenya: kenyaReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
