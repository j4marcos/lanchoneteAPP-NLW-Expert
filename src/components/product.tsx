import {
  ImageProps,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type productDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
};
type ProductProps = TouchableOpacityProps & {
  data: productDataProps;
};

export function Product({ data, ...rest }: ProductProps) {
  return (
    <TouchableOpacity className="w-full flex-row itens-center pb-4" {...rest}>
      <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />

      <View className="flex-1 ml-4">
        <Text className="text-slate-100 font-subtilte text-base flex-1">{data.title}</Text>
        <Text className="text-slate-400 text-xs leading-5 mt-0.5">{data.description}</Text>
      </View>
    </TouchableOpacity>
  );
}
