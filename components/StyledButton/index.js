import React from 'react';
import {Text, View, Pressable} from 'react-native';

const StyledButton = (props) => {
    return (
        <View>
            <Pressable
                style={styles.button}
                onPress={() => {
                    console.warn("Hey there");
                }}
            >
                <Text>
                    Custom Order
                </Text>
            </Pressable>
        </View>
    );
}

export default StyledButton;