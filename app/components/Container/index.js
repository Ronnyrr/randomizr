import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const ContainerEl = styled.View`
    height: 100%;
`;

const Container = ({ children }) => (
    <ContainerEl>
        {children}
    </ContainerEl>
);

Container.propTypes = {
    children: PT.array,
};

export default Container;
