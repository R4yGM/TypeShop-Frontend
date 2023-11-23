import { createAsyncThunk } from '@reduxjs/toolkit';
import publicAxios from '../../utils/public-axios';
import toast from 'react-hot-toast';

export const sendSuggestion = createAsyncThunk(
  'suggestion/add',
  async (data: any | undefined) => {
    try {
      const res = await publicAxios.post(`/suggestion/add`, data); 
      if (res.data) {
        toast.success(`Grazie per il suggerimento! 🙂`);
        return res.data;
      }
    } catch (error) {}
  }
);