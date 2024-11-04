import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function LinearView() {
    return (
        <LinearGradient
            colors={['#09E6F8', '#1631E9']}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
        />
    );
}

const styles = StyleSheet.create({
    gradient: {
        width: 36,
        height: 4,
        borderRadius: 2,
    }
});
