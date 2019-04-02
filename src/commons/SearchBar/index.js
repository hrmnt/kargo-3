import React,{Component} from "react";
import {TouchableOpacity, View, StyleSheet, TextInput}  from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class SearchBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={[styles.container, this.props.backgroundColor]}>
                <View style={styles.inputContainer}>
                    <Ionicons name="ios-search" size={22} style={styles.search} color="rgba(0,0,0,0.2)"  />
                    <TextInput
                        style={styles.input}
                        placeholder={"Найдите товар"}
                    />
                </View>
                <TouchableOpacity style={styles.filterWrap}>
                    <FontAwesome color={"#fff"} name={"filter"} size={22} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:15,
        marginBottom:10,
        flexDirection:"row"
    },
    mainText: {
      fontSize: 28,
      color:"#EF741C",
      fontWeight:"normal"
    },
    inputContainer:{
        backgroundColor:"rgba(0,0,0,0.05)",
        height:40,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
        flex:1,
        marginRight:5
    },
    input:{
        flex:1,
        fontSize:15,
        color:"#c9c9c9"
    },
    search:{
        paddingRight:10,
    },
    filterWrap:{
        backgroundColor: "#EF741C",
        borderRadius:5,
        paddingHorizontal:10,
        alignItems: "center",
        justifyContent:"center"
    }
  });


export default SearchBar;