import React,{Component,} from "react";
import {Text, View, SafeAreaView, StyleSheet}  from "react-native";
import {Header, SearchBar, Item} from "../../commons";
import UserProfile from "../../commons/UserProfile";
import SegmentControl from 'react-native-segment-control';

import InfoBox from "./InfoBox";
import ButtonBox from "./ButtonBox";


import list from "../../assets/images/align-to-right.png";
import contacts from "../../assets/images/сontacts.png";
import earth from "../../assets/images/globe_earth.png";
import medical from "../../assets/images/medical.png";


import Grid from 'react-native-grid-component';

const One = () => {
    return <View ><InfoBox image={list} title="ИИН" description="991122334455"></InfoBox>
    <InfoBox image={contacts} title="Номер" description="+7 (777) 111 11 11"></InfoBox>
    </View>;
  };
  const Two = () => {
    return <View><ButtonBox image={earth} title="Язык" description="Русский"></ButtonBox>
    <ButtonBox boxStyle={styles.boxStyle} image={medical} title="Сменить пароль" description="Сменить"></ButtonBox>
    </View>;
  };
  const Three = () => {
    return (
        <View style={styles.viewBox}>
            <SearchBar></SearchBar>
            <ButtonBox image={earth} title="Язык" description="Русский"></ButtonBox>
            <ButtonBox boxStyle={styles.boxStyle} image={medical} title="Сменить пароль" description="Сменить"></ButtonBox>
        </View>
        );
  };
  const segments = [
    {
      title: 'Мои данные',
      view: One
    },
    {
      title: 'Настройки',
      view: Two
    },
    {
        title: 'Заказы',
        view: Three
      }
  ];

class Profile extends Component{
    state={
        tags:['black', 'white', 'red', 'green', 'blue', 'blue']
    }

  
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <UserProfile textStyle={styles.textStyle} imageStyle={styles.imageStyle} starSize={12}></UserProfile>
                <View style={styles.wrapContainer}>
                    <SegmentControl  color={"#EF741C"} segments={segments} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:15,
        paddingVertical:10
    },
    wrapContainer:{
        flex:1,
        paddingVertical:10,
        
    },  
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    item: {
        flex: 1,
        height: 120,
        margin: 1
    },
    list: {
        flex: 1,
    },
    imageStyle:{
        height:50,
        width:50
    },
    textStyle:{
        fontSize:20
    },
    boxStyle:{
        alignItems:"center",   
    },
    viewBox:{
        paddingVertical:10
    }
  });

export default Profile;
