import { createStackNavigator } from '@react-navigation/stack';
import Profile from './profile';
import HomeTabs from '../../components/tabs';
import MakingPlan from './making-plan';
import Place from './navigators/place';

const Stack = createStackNavigator();

export default function tabsLayout() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="tabs" component={HomeTabs} />
            <Stack.Screen name="profile" component={Profile}
            />
            <Stack.Screen name="making-plan" component={MakingPlan}
            />
            <Stack.Screen name="place" component={Place} />
        </Stack.Navigator>
    );
}
