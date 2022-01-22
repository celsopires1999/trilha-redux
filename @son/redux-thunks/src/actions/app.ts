import axios from 'axios';

//action types
export const IS_FETCHING = 'IS_FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHED_ERROR = 'FETCHED_ERROR';

//action creators
export function isFetching(bool: boolean) {
    return {
        type: IS_FETCHING,
        isLoading: bool
    }
}

export function fetchedError(err: any) {
    return {
        type: FETCHED_ERROR,
        error: err
    }
}

export function fetched(data: any) {
    return {
        type: FETCHED,
        data
    }
}

//thunks
export function thunkFetchData() {
    return async (dispatch: any) => {
        dispatch(isFetching(true));
        try {
            const { data } = await axios.get('https://api.icndb.com/jokes');
            dispatch(fetched(data.value));
        } catch (error) {
            dispatch(fetchedError(error))
        } finally {
            dispatch(isFetching(false));
        }
    }
}
