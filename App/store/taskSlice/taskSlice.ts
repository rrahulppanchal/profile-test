// Import necessary modules
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from '../store';

// Define the type for the data you want to send in the POST request
interface addTask {
  taskData: string;
  assignToIds: string;
  assignById: string;
  assignByName: string;
  assignToNames: string;
  Id: number;
}
export const getTask = createAsyncThunk('task/getTask', async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/tasks/1');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addTask = createAsyncThunk('task/addTask', async (data: addTask, { dispatch }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/tasks', data);
    dispatch(getTask());
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deleteTask = createAsyncThunk('task/addTask', async (id: number, { dispatch }) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    dispatch(getTask());
    return response.data;
  } catch (error) {
    throw error;
  }
});

interface DataState {
  task: any[];
  posts: any[];
  taskRes: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DataState = {
  task: [],
  taskRes: [],
  posts: [],
  isLoading: false,
  error: null
};

const taskSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.taskRes = action.payload;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'error';
      })
      .addCase(getTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.task = action.payload;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'error';
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'error';
      });
  }
});

// Export the reducer and actions
// export const {} = taskSlice.actions;
export default taskSlice.reducer;
