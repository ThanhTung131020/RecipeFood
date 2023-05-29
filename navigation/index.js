
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from './homeNavigation'
import LoginStackScreen from './loginNavigation'
import LoveStackScreen from './loveNavigation'

const Tab = createBottomTabNavigator();
const Mytabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused
                                ? 'home' : 'home-outline';
                            break;
                        case 'Love':
                            iconName = focused
                                ? 'heart'
                                : 'heart-outline';
                            break;
                        case 'Login':
                            iconName = focused
                                ? 'person'
                                : 'person-outline';
                            break;
                        default:
                            break;
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#18C070',
                    height: 65,
                    paddingBottom: 10,

                },
                tabBarLabelStyle: {
                    fontSize: 13
                },
                headerShown: false,

            })}

        >

            <Tab.Screen name="Love" component={LoveStackScreen} options={{ title: 'Yêu thích' }} />
            <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: 'Trang chủ' }} />
            <Tab.Screen name="Login" component={LoginStackScreen} options={{ title: 'Đăng nhập' }} />
        </Tab.Navigator>
    )
};
export default Mytabs;