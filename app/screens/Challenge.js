import React, { Component } from 'react';
import PT from 'prop-types';

import { Header, RandomText, SwipeContainer } from '../components/index';

const designChallengeQuestions = [
    'Design a music player. Consider the controls, imagery, the artist, album cover, etc',
];

class Challenge extends Component {
    previousPage = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <SwipeContainer
                onSwipeRight={() => this.previousPage()}
                colors={['#c86dd7', '#e0a03d']}
            >
                <Header
                    title="Design Challenge"
                    previousPage={() => this.previousPage()}
                />

                <RandomText wordsArray={designChallengeQuestions} />
            </SwipeContainer>
        );
    }
}

Challenge.propTypes = {
    navigation: PT.object,
};

export default Challenge;
