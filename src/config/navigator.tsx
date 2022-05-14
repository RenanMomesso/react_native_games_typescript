import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TicTacToe, Home, GamesSinglePlayers } from "@screens";
import React, { ReactElement } from "react";

export type StackNavigatorParams = {
    Home: undefined;
    Game: { gameId: string };
    GamesSinglePlayers: undefined;
    TicTacToe: undefined
};
const Stack = createStackNavigator<StackNavigatorParams>();

const config: React.FC = (): ReactElement => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="TicTacToe" component={TicTacToe} />
                <Stack.Screen name="GamesSinglePlayers" component={GamesSinglePlayers} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default config;
