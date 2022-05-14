import { BoardsState } from "./types";
import { getAvailableMoves, isTerminal, printFormattedBoard } from "./board";

export const getBestMove = (
    state: BoardsState,
    maximing: boolean,
    depth = 0
): number => {
    const terminalObject = isTerminal(state);
    if (terminalObject) {
        console.log("terminal object", terminalObject);
        if (terminalObject.winner === "x") {
            return 100 - depth;
        } else if (terminalObject.winner === "o") {
            return -100 + depth;
        }
        return 0;
    }

    if (maximing) {
        let best = -100;
        getAvailableMoves(state).forEach((index: number) => {
            const child: BoardsState = [...state];
            child[index] = "x";
            console.log(`Child board (x turn) (depth: ${depth})`);
            printFormattedBoard(child);
            const childValue = getBestMove(child, false, depth + 1);
            console.log("childvalue", childValue);
            console.log("best", best);
            best = Math.max(best, childValue);
        });
        return best;
    }
    if (!maximing) {
        let best = 100;
        getAvailableMoves(state).forEach((index: number) => {
            const child: BoardsState = [...state];
            child[index] = "o";
            console.log(`Child board (o turn) (depth: ${depth})`);
            printFormattedBoard(child);
            const childValue = getBestMove(child, true, depth - 1);
            console.log("childvalue", childValue);
            console.log("best", best);
            best = Math.min(best, childValue);
        });
        return best;
    }
};
