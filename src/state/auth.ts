import { Action, Thunk, thunk, action } from "easy-peasy";
import { AuthPayload } from "../models/AuthPayload";

export type Auth = {
  token?: string;
  user?: string;
};

export interface AuthModel {
  auth: Auth;
  addAuth: Action<AuthModel, Auth>;
  signIn: Thunk<AuthModel, AuthPayload, {}, {}, Promise<Auth>>;
}

const authModel: AuthModel = {
  auth: {
    token: undefined,
    user: undefined,
  },
  addAuth: action((state, payload) => {
    state.auth = payload;
  }),
  signIn: thunk(async (actions, payload) => {
    const auth: Auth = {
      token: payload.email + payload.email,
      user: payload.email,
    };

    actions.addAuth(auth);

    return auth;
  }),
};

export default authModel;
