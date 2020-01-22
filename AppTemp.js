import {createStackNavigator, createAppContainer} from "react-navigation";
import Main from "./mainActivity/main"

const App = createStackNavigator(
    {
        Home: { screen: Main}

    }
    
);

export default createAppContainer(App);