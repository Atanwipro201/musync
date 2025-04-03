import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Monkey from '../screens/MonkeyScreen'
import Nakamas from '../screens/NakamasScreen'
const Tab = createBottomTabNavigator()
export default function MyTabs(){
    return(
        
        <Tab.Navigator>
            <Tab.Screen name="Monkey" component={Monkey}/>
            <Tab.Screen name="Nakama" component={Nakamas}/>
        </Tab.Navigator>
        
    );
}