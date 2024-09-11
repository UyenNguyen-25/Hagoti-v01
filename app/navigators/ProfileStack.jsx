import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../(tabs)/profile';
import Place from './place';

export default function ProfileStack() {
  return (
      <Stack>
        {/* <Stack.Screen name="profile" /> */}
        <Stack.Screen name="place"/>
      </Stack>
  );
}
