import { BoardsState, isTerminal, printFormattedBoard } from "@utils";
import React, { ReactElement } from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../Text";

type TicTacToeBoardProps = {
    state: BoardsState;
    size: number;
    onCellPressed?: (index: number) => void;
    disabled?:boolean;
};

const TicTacToeBoard: React.FC<TicTacToeBoardProps> = ({
    state,
    size,
    onCellPressed,
    disabled
}): ReactElement => {
    // printFormattedBoard(state);
    if (!state) return null;
    return (
        <View
            style={{
                width: size + 50,
                height: size + 50,
                backgroundColor: "#473187",
                flexDirection: "row",
                flexWrap: "wrap",
                alignSelf: "center",
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
                paddingTop:size / 20,
                borderRadius: 8,
            }}>
            {state.map((cell, index) => {
                return (
                    <TouchableOpacity
                        disabled={cell !== null ||  disabled}
                        key={index}
                        onPress={() => onCellPressed && onCellPressed(index)}
                        style={{
                            width: "29%",
                            height: "29%",
                            backgroundColor: "#241846",
                            margin: 4,
                            borderRadius: 8,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                        <Text
                            style={{
                                fontSize: size / 3,
                                color: "white",
                                fontWeight: "bold",
                                textAlign:'center',
                                lineHeight:size /3.3
                            }}>
                            {cell}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TicTacToeBoard;
