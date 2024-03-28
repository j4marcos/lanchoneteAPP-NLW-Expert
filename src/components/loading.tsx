import { ActivityIndicator, View } from 'react-native'
import colors from "tailwindcss/colors"

export function Loading () {
    return (
        <View className="flex-1 itens-center justify-center bg-slate-9000">
            <ActivityIndicator color={colors.white} />
        </View>
    )
}   