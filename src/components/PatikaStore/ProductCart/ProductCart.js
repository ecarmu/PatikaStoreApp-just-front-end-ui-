import React from "react";
import styles from "./ProductCartStyle";
import { View, Image, Text } from "react-native";


const ProductCard = ( {product} ) => {
    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source = { {uri: product.imgURL}} resizeMode="contain"/>
            <Text style = {styles.productName}>{product.title}</Text>
            <Text style = {styles.price}>{product.price}</Text>

            {!product.inStock && <Text style={styles.notInStock}>STOKTA YOK!</Text>}
            
        </View>
    );
}

export default ProductCard;