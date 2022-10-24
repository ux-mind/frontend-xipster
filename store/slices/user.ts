import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _get from 'lodash/get';

import { userApi } from '@/api';
import { User } from '@/types';
import {
    removeToken,
    setToken,
} from '@/utils';
import { AppState } from '@/store';

interface UserState {
    me: User | null;
    isPending: boolean;
}

const SLICE_NAME = 'user';

export const userSelectors = {
    me: (state: AppState) => _get(state.user, 'me', null),
};

// Not including send magic link functionality here as it is not influencing state

export const logIn = createAsyncThunk(
    `${SLICE_NAME}/logIn`,
    async (token: string | null, { dispatch }) => {
        if (token) {
            setToken(token);
        }

        const loginResponse = await userApi.logIn();

        return loginResponse;
    }
);

export const logOut = createAsyncThunk(
    `${SLICE_NAME}/logOut`,
    () => new Promise<void>((resolve) => {
        removeToken();
        resolve();
    })
);

const initialState: UserState = {
    me: null,
    isPending: false,
}

const userSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        logOut(state) {
            state.me = null;
            state.isPending = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.pending, (state) => {
            state.isPending = true;
        });

        builder.addCase(logIn.fulfilled, (state, action) => {
            state.me = {
                ...action.payload.me,
            };

            state.isPending = false;
        });
    }
});

export default userSlice.reducer;
