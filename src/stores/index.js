import AuthStore from "./AuthStore";


class RootStore {
    authStore: AuthStore

    constructor() {
        this.authStore = new AuthStore();
    }


}

const rootStore = new RootStore();

export default  rootStore;

export {
    AuthStore
}