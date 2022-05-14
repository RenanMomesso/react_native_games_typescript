import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import {
    View,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
    useWindowDimensions
} from "react-native";
import Text from '../Text'

type ButtonProps = {
    title: string;
    family?: 1 | 2 | 3;
} & TouchableWithoutFeedbackProps;

const Button: React.FC<ButtonProps> = ({ title, family = 1, ...props }) => {
    const { width } = useWindowDimensions();
    return (
        <TouchableWithoutFeedback {...props}>
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    borderRadius: 12,
                    shadowOffset: { width: 3, height: 3 },
                    shadowColor: "#489dcf",
                    shadowOpacity: 1.0,
                    shadowRadius: 9,
                    marginTop: 12,
                    marginBottom: 12
                }}>
                <View
                    style={{
                        backgroundColor: "#55b9f3",
                        borderRadius: 12,
                        shadowOffset: { width: -4, height: -4 },
                        shadowColor: "#62d5ff",
                        shadowOpacity: 1.0,
                        shadowRadius: 18,
                        width: width / 1.5,
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                    <LinearGradient
                        colors={["#4da7db", "#5bc6ff"]}
                        start={{ x: 0.5, y: 0.5 }}
                        style={[{ borderRadius: 10, padding: 10, width:'100%',justifyContent:"center",
                        alignItems:"center"  }]}>
                        <Text
                            family={family}
                            style={{
                                fontSize: 20,
                                color: "white",
                                fontWeight: "bold",
                                letterSpacing: 1,
                                textTransform: "uppercase"
                            }}>
                            {title}
                        </Text>
                    </LinearGradient>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Button;
