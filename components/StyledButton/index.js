import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from "./styles";

const StyledButton = (props) => {

    const type = props.type;

    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
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