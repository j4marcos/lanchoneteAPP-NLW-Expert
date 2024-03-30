import {create} from 'zustand';
import { ProductProps } from '@/utils/data/products';
import * as cartInMomory from './helpers/cart-in-memory';

export type ProductCartProps = ProductProps & {
    
    quantity: number;
}

type StatePros = {
    products: ProductCartProps[]
    add: (product: ProductProps) => void;
}

export const useCartStore = create<StatePros>((set) => ({
    products: [],
    add: (product: ProductProps) => set((state) => ({
        products: cartInMomory.add(state.products, product),
    })),
}));