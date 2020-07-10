import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native';

export const CardItem = ({ suit, rank }) => {
    return (
        <View style={styles.container}>
            <Text>
                {`${suit}, ${rank}`}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'solid black 1px'
    },
});
