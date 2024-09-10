import { createStackNavigator } from '@react-navigation/stack';
import Profile from './profile';
import HomeTabs from '../../components/tabs';
import MakingPlan from './making-plan';
import { Colors } from '../../constants/Colors';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="tabs" component={HomeTabs} />
            <Stack.Screen name="profile" component={Profile}
            />
            <Stack.Screen name="making-plan" component={MakingPlan}
            />
        </Stack.Navigator>
    );
}
