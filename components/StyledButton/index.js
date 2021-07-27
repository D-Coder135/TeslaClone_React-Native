import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from "./styles";

const StyledButton = (props) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => {
                    console.warn("Hey there");
                }}
            >
                <Text style={styles.text}>
                    Custom Order
                </Text>
            </Pressable>
        </View>
    );
}

export default StyledButton;