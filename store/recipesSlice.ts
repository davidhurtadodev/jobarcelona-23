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

// Fetching thunk
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
      //cases for fetching recipes
      .addCase(fetchRecipesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const data = action.payload;

        const filteredData = data.map(
          ({
            id,
            title,
            image,
            imageType,
            summary,
            analyzedInstructions,
            vegetarian,
            vegan,
          }: Recipe) => {
            return {
              id,
              title,
              image,
              imageType,
              summary,
              analyzedInstructions,
              vegetarian,
              vegan,
            };
          }
        );
        state.value = filteredData;
      })
      .addCase(fetchRecipesAsync.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default recipesSlice.reducer;
