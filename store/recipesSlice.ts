import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import recipesService from '@/lib/services/recipesService';
import { Recipe } from '@/lib/types/Recipe';

// Type of state
export interface recipesState {
  value: Recipe[];
  status: 'idle' | 'loading' | 'failed';
}

// Initial state

const initialState: recipesState = {
  value: [],
  status: 'idle',
};

export const fetchRecipesAsync = createAsyncThunk(
  'recipes/fetchRecipes',
  async (query: string) => {
    const { results } = await recipesService.getData(query);
    return results;
  }
);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(fetchRecipesAsync.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default recipesSlice.reducer;
