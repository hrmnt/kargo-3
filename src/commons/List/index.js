import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import ListItem from "../ListItem";




class List extends Component{
    state={
        numberOfLines:4
    }

    onShow = () =>{
        this.setState({
            numberOfLines:1000
        })
    }


    render(){
        return (
            <View style={styles.accordion}>
                <View style={styles.row}>
                    <Image resizeMode="contain" style={styles.icon} source={this.props.image} />
                    <Text>{this.props.title}</Text>
                </View>
                <View style={styles.list}>
                    <ListItem name="Audi a6 2006" price="7000"/>
                    <ListItem name="Audi a6 2006" price="7000"/>
                    <ListItem name="Audi a6 2006" price="7000"/>
                    <ListItem name="Audi a6 2006" price="7000"/>

                </View>
            </View>
            )
    }
    
   
}

const styles = StyleSheet.create({
    accordion:{
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:"#fff",
        marginBottom:10
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:15
    },
    icon:{
        width:15,
        height:15,
        marginRight:5
    },
    list:{
        flex:1
    }
})

export default List