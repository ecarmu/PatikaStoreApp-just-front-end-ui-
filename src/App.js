import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Title from "./components/PatikaStore/Title/Title";
import SearchBar from "./components/PatikaStore/Search Bar/SearchBar";
import ProductCard from "./components/PatikaStore/ProductCart/ProductCart";
import products from "./components/PatikaStore/ProductCart/products.json";

const App = () => {

    const renderProduct = ( {item} ) => <ProductCard product = {item} />;

    return(<SafeAreaView style = {styles.container}>
        <Title/>
        <SearchBar/>
        
        
        <FlatList
        data={products}
        numColumns={2}
        keyExtractor = {item => item.id.toString()}
        renderItem = { renderProduct  }
        />
        
    </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        margin: 5,
        padding: 5
    },
})

export default App;