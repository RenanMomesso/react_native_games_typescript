import { TicTacToeBoard, GradientBackground } from "@components";
import { getBestMove,BoardsState, isTerminal } from "@utils";
import React, { ReactElement, useState } from "react";
import { SafeAreaView, View } from "react-native";

// import { Container } from './styles';

const TicTacToe: React.FC = (): ReactElement => {
    const [boardStateButtons, setBoardStateButtons] = useState<BoardsState>([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]);


    const handleOnCellPressed = (cell: number): void => {
        const stateCopy:BoardsState = [...boardStateButtons];
        if (stateCopy[cell] || isTerminal(stateCopy)) {
            return;
        }
        stateCopy[cell] = "x";
        setBoardStateButtons(stateCopy);
    };

    

    // console.log(recursiveFunction(5))

    return (
        <GradientBackground>
            <SafeAreaView>
                <TicTacToeBoard
                    size={300}
                    state={boardStateButtons}
                    onCellPressed={index => handleOnCellPressed(index)}
                />
            </SafeAreaView>
        </GradientBackground>
    );
};

export default TicTacToe;
