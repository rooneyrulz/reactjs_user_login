const regexOfUsername = /^[a-zA-Z0-9]+$/;

export const isUsername = username => regexOfUsername.test(username);
