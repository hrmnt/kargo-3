import React,{Component,} from "react";
import {Text, View, SafeAreaView, StyleSheet}  from "react-native";
import {Header, SearchBar, Item} from "../../commons";
import Grid from 'react-native-grid-component';

class Home extends Component{
    state={
        tags:['black', 'white', 'red', 'green', 'blue', 'blue']
    }

    navigate = () =>{
        const {navigation} = this.props;
        navigation.navigate("DetailedProduct");
    }
    
    _renderItem = (data, i) => (
        <Item tags={this.state.tags} navigate={this.navigate} index = {i}></Item>
      );
    
      _renderPlaceholder = i => <View style={styles.item} key={i} />;
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Header title={"Товары"}></Header>
                <SearchBar></SearchBar>
                <View style={styles.wrapContainer}>
                    <Grid
                        style={styles.list}
                        renderItem={this._renderItem}
                        renderPlaceholder={this._renderPlaceholder}
                        data={['black', 'white', 'red', 'green', 'blue', 'blue']}
                        itemsPerRow={2}
                        
                    />
                </View>
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
        paddingVertical:10
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
    }
  });

export default Home;
