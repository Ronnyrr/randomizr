import { StackNavigator } from 'react-navigation';

import Standup from '../screens/Standup';
import Icebreakers from '../screens/Icebreakers';
import Challenge from '../screens/Challenge';

const RootStack = StackNavigator(
    {
        Standup: {
            screen: Standup,
        },
        Icebreakers: {
            screen: Icebreakers,
        },
        Challenge: {
            screen: Challenge,
        },
    },
    {
        initialRouteName: 'Standup',
        headerMode: 'none',
        cardStyle: {
            shadowOpacity: 0,
        },
        transitionConfig: () => ({
            screenInterpolator: (sceneProps) => {
                const { layout, position, scene } = sceneProps;

                const thisSceneIndex = scene.index;
                const width = layout.initWidth;

                const translateX = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [width, 0],
                });

                return { transform: [{ translateX }] };
            },
        }),
    },
);

export default RootStack;
