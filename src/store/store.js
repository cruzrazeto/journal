import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth'
// import { todosApi } from './api/todosApi';
// import { counterSlice } from './slices/counter';
// import { pokemonSlice } from './slices/pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    auth : authSlice.reducer,
    // counter: counterSlice.reducer,
    // pokemons: pokemonSlice.reducer,
    // [todosApi.reducerPath]: todosApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  //             .concat( todosApi.middleware)
})