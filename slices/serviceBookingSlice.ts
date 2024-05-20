import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ServiceBookingSliceState {
  workingAddress: string;
}

const initialState: ServiceBookingSliceState = {
  workingAddress: '',
};

export const ServiceBookingSliceState = createSlice({
  name: 'serviceBooking',
  initialState,
  reducers: {
    setWorkingAddress: (state, action: PayloadAction<string>) => {
      state.workingAddress = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWorkingAddress } = ServiceBookingSliceState.actions;

export default ServiceBookingSliceState.reducer;
