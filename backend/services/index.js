import { USER } from "../models/index.js";

import bcrypt from "bcrypt";
export const getUser = async (search) =>
  new Promise((resolve, reject) => {
    USER.findOne(search).then(resolve).catch(reject);
  });

export const matchPassword = async (raw, encrypted) =>
  new Promise( (resolve, reject) => {
    bcrypt.compare(raw, encrypted).then(resolve).catch(reject);

  });
