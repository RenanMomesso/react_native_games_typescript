import React, { ReactElement } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { StackNavigatorParams } from "@config/navigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { GradientBackground, Button, Text } from "@components";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

const Home = ({ navigation }: HomeProps): ReactElement => {
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.titleText}>BRAIN {"\n"}BOOOOM</Text>

               
                <View style={{alignSelf:'center',marginTop:25}}>
                    <Button family={3} title="Single Player" onPress={() => navigation.navigate('GamesSinglePlayers')}/>
                    <Button family={3} title="Multi Player" onPress={() => alert('foi')}/>
                    <Button family={3} title="LOGIN" onPress={() => alert('foi')}/>
                    <Button family={3} title="SETTINGS" onPress={() => alert('foi')}/>
                </View>
            </ScrollView>
        </GradientBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleText: {
        fontSize: 65,
        fontFamily: "bigShouldBlack",
        alignSelf: "center",
        textAlign: "center",
        fontWeight: "bold",
        paddingTop: 120,
        textShadowColor: "gray",
        textShadowOffset: { width: -1, height: -1 },
        textShadowRadius: 12,
        shadowOpacity: 0.54,
        color: "#AEBAF8"
    }
});

export default Home;
