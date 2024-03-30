import { Children, ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

type ButtomProps = TouchableOpacityProps & {
  children: ReactNode;
};

type ButtomTextProps = {
  children: ReactNode;
};

type ButtomIconProps = {
  children: ReactNode;
};

function Button({ children, ...rest }: ButtomProps) {
  return (
    <TouchableOpacity
      className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
      activeOpacity={0.7}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

function ButtomText({children}: ButtomTextProps) {
  return <Text className="text-black font-heading text-base mx-2">{children}</Text>;

}

function ButtomIcon({children}: ButtomIconProps) {
  return children;

}

Button.Text = ButtomText;
Button.Icon = ButtomIcon;

export { Button };
