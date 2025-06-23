import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Item from '../components/Item';
import { sampleItens } from '../data/sampleItens';

export default function Home() {
    const [itens, setItens] = useState(sampleItens);

    const deleteItem = (id) => {
        setItens(prev => prev.filter(note => note.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tarefas</Text>
            <FlatList
                data={itens}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Item note={item} onDelete={deleteItem} />
                )}
                ListEmptyComponent={<Text style={styles.empty}>Nenhuma nota ainda.</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        padding: 16
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5
    },
    empty: {
        textAlign: 'center',
        marginTop: 20,
        color: '#999'
    }
});