import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../components/product-card';
import { AddressTypes } from '../../utils/interfaces';
import authAxios from '../../utils/auth-axios';
import { setError } from '../../utils/error';
import toast from 'react-hot-toast';

export interface CartSliceState {
  cartItems: Product[];
  shippingAddress: AddressTypes | null;
}

const initialState: CartSliceState = {
  cartItems: [],
  shippingAddress: null,
};
export const Size = createAsyncThunk('user/cart-size', async () => { 
  try {
    const { data } = await authAxios.get(`/cart/size`); 
    return data;
  } catch (error: any) {
    console.log(error)
  }
});
export const getUserOrder = createAsyncThunk('user/cart', async () => { 
  try {
    const { data } = await authAxios.get(`/cart/get-cart`); 
    return data;
  } catch (error: any) {
    const message = setError(error);
    toast.error(message);
  }
});

type User = {
  email: string;
  password: string;
};

export const AddCart = createAsyncThunk(
  'user/add-cart',
  async (product: Product, thunkAPI) => {
    try {
      const res = await authAxios.post('/cart/add-item', product);
      if (res.data) {
        toast.success(`Item added!`);
        return res.data;
      }
    } catch (error: any) {
      const message = setError(error);
      toast.error(message);
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const RemoveCart = createAsyncThunk(
  'user/remove-cart',
  async (product: Product, thunkAPI) => {
    try {
      const res = await authAxios.post('/cart/remove-item', product);
      if (res.data) {
        toast.success(`Item removed!`);
        return res.data;
      }
    } catch (error: any) {
      const message = setError(error);
      toast.error(message);
      thunkAPI.rejectWithValue(message);
    }
  }
);
/*
export const AddCart = createAsyncThunk('user/add-cart', async (product: any) => { // Aggiungi il parametro userId
  try {
    console.log(product)
    const { data } = await authAxios.post(`/cart/add-item`, product, {
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header
      },
    });
    return data;
  } catch (error: any) {
    const message = setError(error);
    toast.error(message);
  }
});
*/

export const cartSlice = createSlice({
  name: 'cart-items',
  initialState: initialState,

  reducers: {
    addToCart: (state: CartSliceState, action: PayloadAction<Product>) => {
      const product = action.payload;
      const exist = state.cartItems.find(
        (item: any) => item._id == product._id
      );
      console.log("aaaaa")
      if (exist) {
        state.cartItems = state.cartItems.map((item: any) =>
          item._id == product._id ? { ...product, qty: item.qty + 1 } : item
        );
      } else {
        state.cartItems = [...state.cartItems, { ...product, qty: 1 }];
      }
      
    },
    removeFromCart: (state: CartSliceState, action: PayloadAction<Product>) => {
      const product = action.payload;
      const exist = state.cartItems.find(
        (item: any) => item._id == product._id
      );

      if (exist && exist.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (item: any) => item._id !== product._id
        );
      } else {
        state.cartItems = state.cartItems.map((item: any) =>
          item._id == product._id ? { ...product, qty: item.qty - 1 } : item
        );
      }
    },
    saveAddress: (
      state: CartSliceState,
      action: PayloadAction<AddressTypes>
    ) => {
      state.shippingAddress = action.payload;
    },
    reset: (state: any) => {
      state.cartItems = [];
      state.shippingAddress = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, saveAddress, reset } =
  cartSlice.actions;

export default cartSlice;
