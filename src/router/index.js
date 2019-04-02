import {Home, DetailedProduct, CompanyDetailed, Profile, Splash ,SignIn, SignUp, SignUpContinue} from "../components";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

const AuthContainer = createStackNavigator({
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

const HomeContainer = createStackNavigator({
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

const ProfileContainer = createStackNavigator({
    Profile:{
        screen: Profile
    }
},{ headerMode: 'none' })

const TabNavigation = createBottomTabNavigator({
    Home: HomeContainer,
    Profile: ProfileContainer,
})

const Router = createStackNavigator({
    AuthStack:{
        screen:AuthContainer
    },
    MainTabs:{
        screen: TabNavigation
    }
},{ headerMode: 'none' })

const Apps = createAppContainer(Router);


export default Apps;