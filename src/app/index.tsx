import  {useState} from 'react';
import { View, FlatList } from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-buttom";

import { CATEGORIES } from "@/utils/data/products";



export default function Home() {
    const [category, setCategory] = useState<string>(CATEGORIES[0])

    function handleSelectCategory(selectedCategory: string) {
        console.log(selectedCategory)
        setCategory(selectedCategory)
    }
   
    return (
        <View className=' flex-1 pt-8'>
            <Header title="Faça seu pedido" cartQuantityItens={3}/>

            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item}
                horizontal
                renderItem={({item}) => (
                    <CategoryButton 
                    title={item} 
                    isSelected={item === category}
                    onPress={() => handleSelectCategory(item)}
                    />
                )}
                className="max-h-10 mt-5 "
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12 , paddingHorizontal: 20 }}
            />
            
        </View>
    )
}