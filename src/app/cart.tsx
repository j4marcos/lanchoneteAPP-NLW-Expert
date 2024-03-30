import { Header } from "@/components/header";
import { View, Text, ScrollView, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Product } from "@/components/product";
import { ProductCartProps, useCartStore } from "./stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";

export default function Cart() {
  const cartStore = useCartStore();

  const total = formatCurrency(
    cartStore.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)
  );

  function handleProductRemove(product: ProductCartProps) {
    Alert.alert("Remover produto", `Deseja remover ${product.title} do carrinho?`, [
        {
            text: "Cancelar",
        },
        {
            text: "Remover",
            onPress: () => cartStore.remove(product.id),
        }
    ])
  }


  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        extraHeight={100}
      >
        <ScrollView>
          <View className="flex-1 p-5">
            {cartStore.products.length > 0 ? (
              <View className="border-b border-slate-700">
                {cartStore.products.map((product) => (
                  <Product key={product.id} data={product} onPress={() => handleProductRemove(product)}/>
                ))}
              </View>
            ) : (
              <Text className="font-body text-slate-400 text-center my-8">
                Seu carrinho esta vazio.
              </Text>
            )}

            <View className="flex-row gap-2 items-center mt-5 mb-4">
              <Text className="text-white font-subtitle text-xl">Total:</Text>
              <Text className="text-lime-400 text-2xl font-heading">
                {total}
              </Text>
            </View>

            <Input placeholder="Informe o endereço de entrega com run, bairro, CEP, numero e complemento" />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="p-5 gap-5">
        <Button>
          <Button.Text>Enviar pedido</Button.Text>

          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton title="Voltar ao cardapio" href="/" />
      </View>
    </View>
  );
}
