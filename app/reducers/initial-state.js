export default initialState = {
  messages: [],
  isFetchingMessages: true,
  failedToFetchMessages: false
};

export const state = {
  FAILED: 0,
  IS_FETCHING: 1,
  SUCCESS: 2
};
