import { View, Text, StyleSheet } from 'react-native'

export function Instructions ({data, index}) {
    return(
        <View style={styles.container}>
            <Text style={styles.step}>{index +1}- </Text>
            <Text style={styles.instructions}>{data.text}</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 8,
        marginBottom: 14
    }, step:{
        fontWeight: 'bold',
        fontSize: 18
    }, instructions:{
        lineHeight: 20
    }
    }
)