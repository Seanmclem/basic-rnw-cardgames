import React from 'react'
import { StyleSheet, View, Button } from 'react-native';

export const ButtonGenerate = ({ generateDeck }) => {
    return (
        <View style={styles.container}>
            <Button
                onPress={generateDeck}
                title="make deck"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
