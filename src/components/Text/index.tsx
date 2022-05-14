import React, { ReactNode } from "react";
import { Text, TextProps as NativeTextProps } from "react-native";

type TextProps = {
    weight?: "400" | "700"
    children?: ReactNode
    family?: 1 | 2 | 3
} & NativeTextProps



const TextComponent: React.FC<TextProps> = ({
    children,
    style,
    weight = "700",
    family = 1,
    ...props
}) => {

    let fontFamily
    if(family === 1){
        fontFamily = 'belleza'
    } 
    if(family === 2){
        fontFamily = 'bigShould500'
    }
    if(family === 3){
        fontFamily = 'title'
    }
    
    return <Text {...props} style={[{fontFamily}, style]}>{children}</Text>;
};

export default TextComponent;

