import {Home, DetailedProduct, CompanyDetailed, Profile, Splash ,SignIn, SignUp, SignUpContinue} from "../components";

import {
    NavigationScreenConfig,
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
const AuthContainer = StackNavigator({
    Splash:{
        screen:Splash
    },
    SignIn:{
        screen:SignIn
    },
    SignUp:{
        screen:SignUp
    },
    SignUpContinue:{
        screen: SignUpContinue
    }
},{ headerMode: 'none' })

const HomeContainer = StackNavigator({
    Home:{
        screen:Home
    },   
    DetailedProduct:{
        screen:DetailedProduct
    },
    CompanyDetailed:{
        screen:CompanyDetailed
    }
}, { headerMode: 'none' })

const ProfileContainer = StackNavigator({
    Profile:{
        screen: Profile
    }
},{ headerMode: 'none' })

const TabNavigation = TabNavigator({
    Home: {
        screen:HomeContainer
    },
    Profile:{
        screen:ProfileContainer},
})

const Router = StackNavigator({
    AuthStack:{
        screen:AuthContainer
    },
    MainTabs:{
        screen: TabNavigation
    }
},{ headerMode: 'none' })

const Apps = Router;


export default Apps;