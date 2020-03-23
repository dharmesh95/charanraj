export const findUserByName = (userList, name) => {
  for (let index = 0; index < userList.length; index++) {
    const user = userList[index];
    if (user.name === name) return user;
  }
  return { name };
};
