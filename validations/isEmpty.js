// Validate name
export const checkForName = name => {
  if (name !== null && name !== undefined && name !== '') {
    return true;
  }
  return false;
};

// Validate email
export const checkForEmail = email => {
  if (email !== null && email !== undefined && email !== '') {
    return true;
  }
  return false;
};

// Validate username
export const checkForUsername = username => {
  if (username !== null && username !== undefined && username !== '') {
    return true;
  }
  return false;
};

// Validate password
export const checkForPassword = password => {
  if (password !== null && password !== undefined && password !== '') {
    return true;
  }
  return false;
};
