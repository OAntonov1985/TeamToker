import React from 'react';
import { StyleSheet, View } from 'react-native';



export default function BottomLines() {
    return (
        <View style={styles.emptyView} />
    );
}

const styles = StyleSheet.create({
    emptyView: {
        width: 19,
        height: 4,
        backgroundColor: "#D9D9D9",
        borderRadius: 2
    }
});
