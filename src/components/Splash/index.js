import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    StackActions,
    NavigationActions
} from 'react-navigation';
import {AuthStore} from "../../stores"
import {inject} from "mobx-react/native";

@inject("authStore")
class Splash extends  React.Component{
    componentDidMount(): void {
        const { navigation, authStore } = this.props;
        const { session } = authStore;
        if(session !== null){
            const resetAction = StackActions.reset({
                index: 0,
                key:null,
                actions: [NavigationActions.navigate({ routeName: 'MainTabs' })],
            });
            navigation.dispatch(resetAction);
        }
        else{
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
            });
            navigation.dispatch(resetAction);
        }

    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.mainText}>
                    KARGO
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'

    },
    mainText:{
        fontSize:18
    },

});

export default  Splash;