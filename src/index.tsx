import { StyleSheet } from "react-native";
import { AppBootstrap } from "@components";
import Navigator from "@config/navigator"

export default function App() {
    return (
        <AppBootstrap>
            <Navigator />
        </AppBootstrap>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
