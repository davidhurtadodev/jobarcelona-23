import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import recipesService from '@/lib/services/recipesService';

// Type of state
export interface recipesState {
  value: {}[];
  status: 'idle' | 'loading' | 'failed';
}

// Initial state

const initialState: recipesState = {
  value: [],
  status: 'idle',
};

export const fetchItemsAsync = createAsyncThunk(
  'items/fetchItems',
  async (query: string) => {
    const { results } = await recipesService.getData(query);
    return results;
  }
);
export const deleteItemsAsync = createAsyncThunk(
  'items/deleteAsync',
  async (id: string) => {
    await itemsService.deleteItem(id);
    return id;
  }
);
export const createItemAsync = createAsyncThunk(
  'items/createAsync',
  async (content: Item) => {
    const item = await itemsService.create(content);
    return item;
  }
);

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        state = action.payload.items;
      })
      .addCase(createItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(createItemAsync.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(createItemAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemsAsync.fulfilled, (state, action) => {
        const idDeleted: string = action.payload;
        const filterDeleted = state.items.filter(
          (item: ItemFetched) => item.id !== idDeleted
        );
        state.items = filterDeleted;
      })
      .addCase(deleteItemsAsync.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(fetchItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchItemsAsync.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default itemsSlice.reducer;
