import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation"
import Main from "./mainActivity/main"
import NextRedirectActivity from "./redirectActivities/nextRedirectActivity"

const App = createStackNavigator(
    {
        Home: { screen: Main},
        redirect: {
          screen: NextRedirectActivity
        }

    }
    
);

export default createAppContainer(App);