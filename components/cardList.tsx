import React, { useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native';
import { CardItem } from './cardItem';
import { ButtonGenerate } from './buttonGenerate';
import { makeHandleDeck } from '../libs/cardUtilities';

export const CardList = () => {
    const [deck, setDeck] = useState<any[]>([])

    const handleGenerateDeck = makeHandleDeck

    return (
        <View style={styles.container}>
            <View>
                {deck.map(card => {
                    <CardItem
                        suit={card.suit}
                        rank={card.rank}
                    />
                })}
            </View>
            <ButtonGenerate generateDeck={handleGenerateDeck} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // border: 'solid black 1px'
    },
});
