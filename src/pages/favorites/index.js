import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { getFavorites } from '../../utils/storage'
import { useIsFocused } from '@react-navigation/native'
import { FoodList } from '../../components/foodslist'

export function Favorites() {
    const [receipes, setReceipes] = useState([])
    const isFocused = useIsFocused();
    useEffect(() => {
        let isActive = true;        
        async function getReceipes(){
            const result = await getFavorites('@appreceitas')
            if (isActive){
                setReceipes(result);
            }
        }

        if(isActive){
            getReceipes();
        }
    
        getReceipes();

        return() => {
            console.log('saius')
        }

    }, [isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas Favoritas</Text>
            {receipes.length === 0 && (
                <Text>Você ainda não tem receitas salvas nos seus favoritos</Text>
            )}

            <FlatList
                showVerticalScrollIndicator={false}
                style={{marginTop: 14}}
                data={receipes}
                keyExtrator={(item) => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/>}
            />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 36
    }, title:{
        coolor:'#000',
        fontWeight: 'bold',
        fontSize: 24
    }
})