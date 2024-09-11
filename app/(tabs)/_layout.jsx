import { createStackNavigator } from '@react-navigation/stack';
import Profile from './profile';
import HomeTabs from '../../components/tabs';
import MakingPlan from './making-plan';
import { Colors } from '../../constants/Colors';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

<<<<<<< HEAD
export default function TabLayout() {
    return ( 
        <Tabs screenOptions={{
=======
const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{
>>>>>>> e031a61e8f0972e889dd0b4be87314088298a164
            headerShown: false,
        }}>
            <Stack.Screen name="tabs" component={HomeTabs} />
            <Stack.Screen name="profile" component={Profile}
            />
<<<<<<< HEAD

            <Tabs.Screen name='favorite'
                options={{
                    tabBarStyle: { display: "none" },
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View style={styles.customView}>
                                <AntDesign name="heart" size={24} color={color} />
                                <Text style={{ ...styles.customText, color: focused ? "#FFF" : Colors.PRIMARY }}>Yêu thích</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tabs.Screen name='making-plan'
                options={{
                    tabBarButton: () => {
                        return (
                            <TouchableOpacity style={{
                                top: -30,
                                width: 75,
                                height: 75,
                                borderRadius: 50,
                                borderWidth: 4,
                                borderColor: "#FFF",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#FFF",
                            }}>
                                <Link href={"/(auth)"}><AntDesign name="pluscircle" size={60} color={Colors.PRIMARY} /></Link>
                            </TouchableOpacity>
                        )
                    }
                }}
            />

            <Tabs.Screen name='history'
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <View style={styles.customView}>
                                <Octicons name="history" size={24} color={color} />
                                <Text style={{ ...styles.customText, color: focused ? "#FFF" : Colors.PRIMARY }}>Lịch sử</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tabs.Screen name='profile'
                options={{
                    tabBarStyle: { display: "none" },
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <Link href={'/profile'}>
                            <View style={styles.customView}>
                                <Feather name="user" size={25} color={color} />
                                <Text style={{ ...styles.customText, color: focused ? "#FFF" : Colors.PRIMARY }}>Tài khoản</Text>
                            </View>
                            </Link>
                        )
                    }
                }}
            />

        </Tabs>
    )
=======
            <Stack.Screen name="making-plan" component={MakingPlan}
            />
        </Stack.Navigator>
    );
>>>>>>> e031a61e8f0972e889dd0b4be87314088298a164
}
