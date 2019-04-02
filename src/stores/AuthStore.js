import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import RootStore from "./index";

class AuthStore {
    @persist("list")
    @observable users;
    @persist("object")
    @observable session;
    rootStore;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.session = null;
    }

    @action
    setSession = (session) => {
        this.session = session
    };

    @action
    createUser = (user) => {
        this.users.push(user)
    }

    signIn = async (username, password) =>{
        this.users.map(user => {
            if(user.phone === username){
                if(user.password === password){
                    this.setSession(user)
                }
            }
        })
    }

    signUp = async (user) => {
        this.createUser(user);
    }

}

export default AuthStore;