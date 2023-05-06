



export const getUser = async()


export const matchPassword = async (raw, encrypted) =>
  new Promise((resolve, reject) => {
    compare(raw, encrypted).then(resolve).catch(reject);
  });
