import {
  createSlice,
  rejectWithValue,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    //rejectWithValue ميثود بتحصل لما يكون في ايرور
    //لما يجيليها داتا بيترتب عليه ان ريجيكت بتشتغل
    try {
      const res = await fetch("http://localhost:3009/books");
      const data = await res.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (bookData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    //getState => get the global state of app and enter the certain reducer
    try {
      bookData.userName = getState().auth.name;
      const res = await fetch("http://localhost:3009/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-type": "application/json; charset= UTF-8",
        },
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      return data;
      //data is the object from createAsyncThunk
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
       await fetch(`http://localhost:3009/books/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset= UTF-8",
        },
      });

      return item;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: false, error: null },
  extraReducers: {
    //getBooks
    //asyncThunk makes 3 actions (pending , fulfilled , rejected)
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;

      //   {type: 'book/getBooks/pending', payload: undefined, meta: {…}}
      // meta: {arg: undefined, requestId: 'Uv-LIAoZ-qpPh6-hIDXCP', requestStatus: 'pending'}
      // arg will be defined if  i send parameter when i dispatch action from components
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      //immer take the task of non mutating the state =>action.payload
      console.log(action.payload);
      //{type: 'book/getBooks/fulfilled', payload: Array(4), meta: {…}}
      // payload: (4) [{…}, {…}, {…}, {…}]
      // meta: {arg: undefined, requestId: 'ac-msKAcnnz4mRJPqaalf', requestStatus: 'fulfilled'}
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;

      state.error = action.payload;
      console.log(action.payload);
    },

    //insertBook

    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.books.push(action.payload);
      // data is the object from createAsyncThunk  = action
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },

    //deleteBook
    [deleteBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((book) => book.id !== action.payload.item )
    },
    [deleteBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
  },
});

export default bookSlice.reducer;
