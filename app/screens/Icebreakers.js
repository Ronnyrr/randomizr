import React, { Component } from 'react';
import PT from 'prop-types';

import { Header, RandomText, SwipeContainer } from '../components/index';

const icebreakerQuestions = [
    'Welke vakantie bestemming staat er op nr. 1 op jouw bucketlist?',
    'Zoet of hartig?', 'If you would have to work on a different job for a week, what would that be?',
    'What\'s your favorite soda?',
    'If you where an icebreaker how would you break the ice?',
    'Wat is jou guilty pleasure?',
    'Share an experience that changed your life.',
    'Lente, zomer, herfst of winter?', 'What subject did you hate most in school?',
    'If you would be able to spend infinite money for a day, what would you do?',
    'Mountain holidays or beach holidays?',
    'Waar kan iemand jou \'s nachts wakker voor maken?',
    'Waar zou je naar toe verhuizen als je alles wat je wilt kunt meenemen?',
    'Als je morgen wakker zou worden als een dier, welk dier zou je dan zijn?',
    'What was the name of your first pet?',
    'Are you a morning or night person?',
    'What\'s your favorite cartoon character, and why?',
    'If you could have an endless supply of any food, what would you get?',
    'Wat is je favoriete cartoonfiguur?',
    'Wat is het vreemdste wat je hebt gegeten?',
    'If someone made a movie of your life would it be a drama, a comedy, a romantic-comedy, action film, or science fiction?',
    'Als je één leuk, diep of groot moment uit je leven kon herbeleven, wat zou dat dan zijn?',
    'If you were an ice cream flavor, which one would you be and why?',
    'If someone is looking for a new TVseries to watch, which one would you recommend?',
    'Wat vind je de beste uitvinding tot nu toe?',
    'Wat is je favoriete comfort food?',
    'What is your favorite sport?',
    'How many languages do you speak?',
    'If you could complete in the olympics, what sport would it be?',
    'If you could meet a famous person, who would you meet?',
    'What is your favorite meal?',
    'If you would go back to school, which degree would you study?',
    'If you were an animal, what would you be and why?',
    'What is one goal you\'d like to accomplish during your lifetime?',
    'When you were little, who was your favorite super hero and why?',
    'Who is your hero? (a parent, a celebrity, an influential person in one\'s life)',
    'What\'s your favorite thing to do in the summer?',
    'If they made a movie of your life, what would it be about and which actor would you want to play you?',
    'If you could visit any place in the world, where would you choose to go and why',
    'What\'s the ideal dream job for you?',
    'What are your favorite hobbies?',
    'What are your pet peeves or interesting things about you that you dislike?',
    'What\'s the weirdest thing you\'ve ever eaten?',
];

class Icebreakers extends Component {
    previousPage = () => {
        this.props.navigation.goBack();
    }

    nextPage = () => {
        this.props.navigation.navigate('Challenge');
    }

    render() {
        return (
            <SwipeContainer
                onSwipeLeft={() => this.nextPage()}
                onSwipeRight={() => this.previousPage()}
                colors={['#05c6f3', '#c86dd7']}
            >
                <Header
                    title="Ice breakers"
                    previousPage={this.previousPage}
                    nextPage={this.nextPage}
                />

                <RandomText wordsArray={icebreakerQuestions} />
            </SwipeContainer>
        );
    }
}

Icebreakers.propTypes = {
    navigation: PT.object,
};

export default Icebreakers;
