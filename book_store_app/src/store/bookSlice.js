import {
  createSlice,
  createAsyncThink,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3009/books");
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: { books: null },
    extraReducers: {
      //asyncThunk makes 3 actions (pending , fulfilled , rejected)
    [getBooks.pending]: (state, action) => {
      console.log(action);
      //   {type: 'book/getBooks/pending', payload: undefined, meta: {…}}
      // meta: {arg: undefined, requestId: 'Uv-LIAoZ-qpPh6-hIDXCP', requestStatus: 'pending'}
      // arg will be defined if  i send parameter when i dispatch action from components
    },
    [getBooks.fulfilled]: (state, action) => {
        console.log(action);
        //{type: 'book/getBooks/fulfilled', payload: Array(4), meta: {…}}
        // payload: (4) [{…}, {…}, {…}, {…}]
        // meta: {arg: undefined, requestId: 'ac-msKAcnnz4mRJPqaalf', requestStatus: 'fulfilled'}
        

    },
    [getBooks.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default bookSlice.reducer;
