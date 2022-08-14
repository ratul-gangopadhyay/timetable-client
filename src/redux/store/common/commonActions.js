export const Types = {
  SHOW_SPINNER: 'SHOW_SPINNER',
  HIDE_SPINNER: 'HIDE_SPINNER',
};

export const showSpinner = (message) => ({
  type: Types.SHOW_SPINNER,
  payload: { message },
});

export const hideSpinner = () => ({
  type: Types.HIDE_SPINNER,
});
