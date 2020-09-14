import auth, { AuthModel } from "./auth";

// The interface representing our entire store model
export type StoreModel = {
  auth: AuthModel;
};

const storeModel: StoreModel = {
  auth,
};

export default storeModel;
