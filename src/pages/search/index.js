import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import {FoodList} from '../../components/foodslist'
import api from '../../services/api'

export function Search() {
    const route = useRoute();
    const [receipes, setReceipes] = useState([])
    useEffect(() => {
        async function fetchReceipes() {
            const response = await api.get(`/foods?name_like=${route.params?.name}`)
            setReceipes(response.data)
            console.log(response.data)
        }
        fetchReceipes();
    }, [route.params?.name])
    return (
        <View style={styles.container}>
            <FlatList
                showVerticalScrollIndicator={false}
                style={{marginTop: 14}}
                data={receipes}
                keyExtrator={(item) => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/>}
                ListEmptyComponent={() => <Text style={styles.text}>Não encontramos esta receita...</Text>}
            />
        </View >
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    }, text:{
        fontSize: 16
    }
})