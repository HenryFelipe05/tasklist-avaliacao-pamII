import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { formatDate } from '../utils/dateFormatter';

export default function Item({ note, onDelete }) {
    const RightActions = () => (
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(note.id)}>
            <Text style={styles.deleteText}>Excluir</Text>
        </TouchableOpacity>
    );

    return (
        <Swipeable renderRightActions={RightActions} style={styles.swipeable}>
            <View style={styles.card}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{note.description}</Text>
                <Text style={styles.date}>{formatDate(note.date)}</Text>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2
    },
    swipeable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4
    },
    description: {
        fontSize: 14,
        color: '#555'
    },
    date: {
        fontSize: 12,
        color: '#aaa',
        marginTop: 6
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        borderRadius: 8,
        marginVertical: 4
    },
    deleteText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});