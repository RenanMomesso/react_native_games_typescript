import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { ReactElement, ReactNode } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

type GradientBackgroundProps = {
    children: ReactNode;
};

const GradientBackground: React.FC<GradientBackgroundProps> = ({
    children
}): ReactElement => {
    return (
        <View style={{ flex: 1 }}>
                <StatusBar style="light" />
                <LinearGradient
                    colors={["#9600FF", "#AEBAF8"]}
                    style={styles.gradient}
                    start={{ x: 0.7, y: 0 }}>
                    {children}
                </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    gradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});

export default GradientBackground;
