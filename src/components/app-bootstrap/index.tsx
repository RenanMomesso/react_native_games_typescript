import {
    useFonts,
    BigShouldersDisplay_100Thin,
    BigShouldersDisplay_300Light,
    BigShouldersDisplay_400Regular,
    BigShouldersDisplay_500Medium,
    BigShouldersDisplay_600SemiBold,
    BigShouldersDisplay_700Bold,
    BigShouldersDisplay_800ExtraBold,
    BigShouldersDisplay_900Black
} from "@expo-google-fonts/big-shoulders-display";
import { Belleza_400Regular } from "@expo-google-fonts/belleza";
import AppLoading from "expo-app-loading";
import React, { ReactElement, ReactNode } from "react";

type AppBootstrapProps = {
    children: ReactNode;
};

const AppBootstrap = ({children}:AppBootstrapProps): ReactElement => {
    const [fontsLoaded] = useFonts({
        bigShould500: BigShouldersDisplay_500Medium,
        bigShould700: BigShouldersDisplay_700Bold,
        bigShouldBlack: BigShouldersDisplay_900Black,
        belleza: Belleza_400Regular,
        title:BigShouldersDisplay_800ExtraBold

    });

    return fontsLoaded ? <>{children}</>  : <AppLoading />
}

export default AppBootstrap

