export type Cell = "x" | "o" | null;
export type BoardsState = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]
export type Moves = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type BordResult = {
    winner?: Cell,
    direction?: "V" | "H" | "D"
    column?: 1 | 2 | 3
    row?: 1 | 2 | 3
    diagonal?: "MAIN" | "COUNTER"
}