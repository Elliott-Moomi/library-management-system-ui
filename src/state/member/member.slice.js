import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: []
};

const bookSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    setMembers: (state, action) => {
      state.members = action.payload;
    },
    fetchMember: () => {},

    addMember: (state, action) => {
      state.members.push(action.payload);
    },
    editMember: (state, action) => {
      const index = state.members.findIndex((member) => member.id === action.payload.id);
      if (index !== -1) {
        state.members[index] = { ...state.members[index], ...action.payload };
      }
    },
    deleteMember: (state, action) => {
      state.members = state.members.filter((member) => member.id !== action.payload);
    }
  }
});

export const { setMembers, addMember, editMember, deleteMember, fetchMembers } =
  memberSlice.actions;
export default memberSlice.reducer;
