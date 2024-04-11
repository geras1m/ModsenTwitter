export const phoneNumberPattern = /^(\+375) \((29|25|44|33)\) (\d{3})(\d{2})(\d{2})$/;
export const namePattern = /^[a-z][a-z0-9-]*$/i;

export const emailPattern =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const passwordPattern = /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
