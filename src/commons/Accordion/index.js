import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";




class Accordion extends Component{
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
                <View>
                    <Text
                        style={styles.description}
                        numberOfLines={this.state.numberOfLines}
                        ellipsizeMode="tail"
                    >
                    (Developer) React components are designed with strong isolation in mind: You should be able to drop a component anywhere in your application, trusting that as long as the props are the same, it will look and behave the same way. Text properties that could inherit from outside of the props would break this isolation.
                    </Text>
                </View>
                {
                    this.state.numberOfLines === 4 ?
                    <TouchableOpacity onPress={this.onShow}>
                        <Text style={styles.moreBtnText}>
                            Подробнее
                        </Text>
                    </TouchableOpacity>: null
                }
            
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
        height:13,
        marginRight:5
    },
    description:{
        color:"rgba(0,0,0,0.7)"
    },  
    moreBtnText:{
        color:"#2F7CFF"
    }
})

export default Accordion