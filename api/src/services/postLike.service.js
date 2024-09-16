import { idValidation } from "../middlewares/global.middleware.js";
import userRepositorie from "../repositories/user.repositorie.js";
import postLikeRepositorie from "../repositories/postLike.repositorie.js";

const index = async ({ user }) => {
  // Validando usuário
  if (!user) throw new Error("<user> parameter with user id not provided.");
  idValidation(user);
  const userShow = await userRepositorie.show(user);
  if (!userShow) throw new Error("User not found.");

  return await postLikeRepositorie.index(user);
};

const update = async ({ user }, post) => {
  // Validando usuário
  if (!user) throw new Error("<user> parameter with user id not provided.");
  idValidation(user);
  const userShow = await userRepositorie.show(user);
  if (!userShow) throw new Error("User not found.");

  const response = await postLikeRepositorie.show(post, user);
  if (response.length) return await postLikeRepositorie.remove(post, user);
  return await postLikeRepositorie.add(post, user);
};

export default {
  update,
  index,
};
