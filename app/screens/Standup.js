import React, { Component } from 'react';
import PT from 'prop-types';

import { Header, RandomText, SwipeContainer } from '../components/index';

const weeklyQuestions = [
    'Tell something about the PO! What do you like and how do you use this in communication?',
    'If there is a possibility for prototyping and testing in the project, what would it be?',
    'What would you build if you had another week?',
    'If there is one thing you could change in the project, what would you change?',
    'What does the client think of the project?',
    'What does the client think of the team?',
    'What does the client think of Label A?',
    'What is the end goal of the project?',
    'Name a KPI of the client.',
    'How does your work impact the clients business?',
    'What is the biggest tech trend for the clients business?',
    'Name a moment when working agile really was an advantage.',
    'Share your last  meeting that should have been an e-mail.',
    'Share your last  e-mail that should have been a meeting',
    'What would Bram say about the project if he was still here?',
    'Could SysOps tell what the project is about in 1 sentence? If not tell them?',
    'If you should give one person a compliment in the project. All point at 1 in 3...2...1... and why?',
    'Who\'s expertise could you use on the team and why?',
    'How many sprints are left and when is the deadline (for a mayor release)?',
    'When development ends what will be our role?',
    'What kind of candy are you designing or thinking about?',
    'When did you underpromise overdeliver for the last time?',
    'How to bond more with the client?',
    'Explain the best feature of the application.',
    'Whom of your relatives would use the app and why?',
];

class Standup extends Component {
    nextPage = () => {
        this.props.navigation.navigate('Icebreakers');
    }

    render() {
        return (
            <SwipeContainer onSwipeLeft={() => this.nextPage()}>
                <Header
                    title="Weekly standup"
                    nextPage={() => this.nextPage()}
                />

                <RandomText wordsArray={weeklyQuestions} />
            </SwipeContainer>
        );
    }
}

Standup.propTypes = {
    navigation: PT.object,
};

export default Standup;
