import React,{Component,} from "react";
import {Text, View, SafeAreaView, StyleSheet, ScrollView}  from "react-native";
import {Header, SearchBar, Item,Tags} from "../../commons";
import Grid from 'react-native-grid-component';
import FeeIcon from "../../commons/FeeIcon";
import UserBar from "../../commons/UserBar";
import Accordion from "../../commons/Accordion";

import alignToRight from "../../assets/images/align-to-right.png";
import price from "../../assets/images/price.png";
import contacts from "../../assets/images/сontacts.png";

import List from "../../commons/List";
import ContactList from "../../commons/ContactList";


class DetailedProduct extends Component{
    constructor(props){
        super(props);
    }
    state={
        tags:['black', 'white', 'red', 'green', 'blue', 'blue']
    }


    navigate = () =>{
        this.props.navigation.navigate("CompanyDetailed");
    }
    _renderItem = (data, i) => (
        <Item tags={this.state.tags} index = {i}></Item>
      );
    
    _renderPlaceholder = i => <View style={styles.item} key={i} />;
    
    onBack = () =>{
        const {pop} = this.props.navigation;
        pop(1);
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Header onBack={() => this.onBack()}></Header>
                <ScrollView style={styles.wrapContainer}>
                    <View style={styles.titleWrap}>
                    <Text style={styles.title}>
                        Поддержаные, салоные автомобили Б/У
                    </Text>
                    <View style={styles.row}>
                        {
                            this.state.tags.map((tag) => {
                                return(
                                    <Tags text={tag}></Tags>
                                )
                            })
                        }
                    </View>
                    </View>
                    <View style={styles.feeWrap}>
                        <View style={[styles.priceWrap]}>
                            <View style={styles.priceRow}>
                                <Text style={styles.topText}>Продовец </Text>
                                <Text style={styles.topText}>70000 ₸</Text>
                            </View>
                            <View style={styles.priceRow}>
                                <Text style={styles.secText}>от </Text>
                                <Text  style={styles.thirdText}>7000 ₸</Text>
                            </View>
                        </View>
                        <FeeIcon style={styles.feeWrapW} fee="90" />
                    </View>
                    <UserBar onPress={this.navigate} />
                    <Accordion image={alignToRight} title={"Описание"} />
                    <List image={price} title={"Цена"} />
                    <ContactList image={contacts} title="Контакты" />
                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapContainer:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.05)"
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
    titleWrap:{
        backgroundColor:"#fff"
    },
    item: {
        flex: 1,
        height: 120,
        margin: 1
    },
    list: {
        flex: 1,
    },
    title:{
        fontSize:22,
        marginBottom:3,
        paddingHorizontal:15
    },
    row:{
        flexDirection:"row",
        overflow:"hidden",
        alignItems:'center',
        paddingHorizontal:15,
        marginBottom:10

    },
    feeWrap:{
        flexDirection:"row",
        paddingHorizontal:15,
        paddingBottom:10,
        backgroundColor:"#fff",
        alignItems:"center"
    },
    priceWrap:{
        backgroundColor:"#EF741C",
        paddingHorizontal:7.5,
        paddingVertical:5,
        borderRadius:10
    },
    priceRow:{
        flexDirection:"row",
        color:"#fff",
        alignItems:"flex-end",
    }, 
    topText:{
        color:"#fff",
        fontSize:7,
        fontWeight:"300"
    },
    secText:{
        color:"#fff",
        fontSize:12
    },
    thirdText:{
        color:"#fff",
        fontSize:14
    },
    feeWrapW:{
        zIndex:3,
        marginLeft:10,
        flexDirection:"row",
        alignItems:"center"
    },
  });

export default DetailedProduct;
