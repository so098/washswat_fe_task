import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MemoType = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type MemoListState = {
  memoList: MemoType[];
};

const initialState: MemoListState = {
  memoList: [
    {
      id: "AMIFE-6AEM-EFIAM-MEIFE",
      title: "memo의 제목입니다.",
      description: "memo의 상세 내용입니다.",
      createdAt: "2024-06-06",
      updatedAt: "2024-07-01",
    },
  ],
};

export const memoListSlice = createSlice({
  name: "memoList",
  initialState,
  reducers: {
    resetMemoList: () => initialState,
    addMemos: (state, action: PayloadAction<MemoType>) => {
      state.memoList.push(action.payload);
    },
    removeMemo: (state, action: PayloadAction<string>) => {
      state.memoList = state.memoList.filter(
        (memo) => memo.id !== action.payload,
      );
    },
    updateMemo: (
      state,
      action: PayloadAction<Partial<MemoType> & { id: string }>,
    ) => {
      const index = state.memoList.findIndex(
        (memo) => memo.id === action.payload.id,
      );

      if (index !== -1) {
        state.memoList[index] = {
          ...state.memoList[index],
          ...action.payload,
          updatedAt: new Date().toISOString(),
        };
      }
    },
  },
});

export const { resetMemoList, addMemos, removeMemo, updateMemo } =
  memoListSlice.actions;

export default memoListSlice.reducer;
