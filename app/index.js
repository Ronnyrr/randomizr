import React, { Component } from 'react';
import PT from 'prop-types';
import { Font } from 'expo';
import { connect } from 'react-redux';

import RootStack from './config/routes';
import { setFontsLoaded } from './ducks/fonts';

class App extends Component {
    async componentDidMount() {
        await Font.loadAsync({
            'circular-pro-bold': require('./assets/fonts/CircularPro-Bold.otf'),
            'circular-pro-book': require('./assets/fonts/CircularPro-Book.otf'),
            'nimbus-black': require('./assets/fonts/NimbusSansDOT-Blac.otf'),
            'nimbus-black-italic': require('./assets/fonts/NimbusSansDOT-BlacItal.otf'),
        });

        this.props.setFontsLoaded();
    }

    render() {
        return <RootStack />;
    }
}

App.propTypes = {
    setFontsLoaded: PT.func,
};

export default connect(
    null,
    { setFontsLoaded },
)(App);
