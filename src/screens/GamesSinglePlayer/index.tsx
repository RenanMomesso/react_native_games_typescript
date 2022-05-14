import { GradientBackground } from "@components";
import { StackNavigatorParams } from "@config/navigator";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { ReactElement } from "react";
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    SafeAreaView
} from "react-native";

type GamesSinglePlayersProps = {
    games?: [{}];
    navigation: StackNavigationProp<StackNavigatorParams, "TicTacToe">;

};

const GamesSinglePlayers: React.FC<GamesSinglePlayersProps> = ({
    games, navigation
}): ReactElement => {
    return (
        <GradientBackground>
            <SafeAreaView>
                <ScrollView contentContainerStyle={{
                    padding:16
                }}>
                    {/* tipo de game */}
                    {/* jogos */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate('TicTacToe')}
                        style={{
                            borderWidth: 1,
                            backgroundColor: "gray",
                            height: 150,
                            width: 150
                        }}>
                        <Text>Game one</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </GradientBackground>
    );
};

export default GamesSinglePlayers;
