import  {useState, useRef} from 'react';
import { View, Text, FlatList, SectionList } from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-buttom";
import { Link } from "expo-router"

import { CATEGORIES, MENU } from "@/utils/data/products";
import { Product } from '@/components/product';
import { useCartStore } from './stores/cart-store';



export default function Home() {
    const cartStore = useCartStore()
    const [category, setCategory] = useState<string>(CATEGORIES[0])
    const sectionListRef = useRef<SectionList>(null)

    const cartQuantityItens = cartStore.products.reduce((total, product) => total + product.quantity, 0)

    function handleSelectCategory(selectedCategory: string) {
        setCategory(selectedCategory)

        const sectionIndex = CATEGORIES.findIndex((categoria) => categoria === selectedCategory)

        if(sectionListRef.current) {
            sectionListRef.current.scrollToLocation({
                sectionIndex,
                itemIndex: 0,
                animated: true
            })
        }
    }


   
    return (
        <View className=' flex-1 pt-8'>
            <Header title="Faça seu pedido" cartQuantityItens={cartQuantityItens}/>

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

            <SectionList 
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={item => item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({item}) => (
                    <Link href={`/product/${item.id}`} asChild>
                    <Product data={item} />
                    </Link>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text className='text-xl text-white font-heading mt-8 mb-3'>{title}</Text>
                )}
                className='flex-1 p-5'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
            
        </View>
    )
}