import React from 'react';
import { Container } from './styles';

interface HelpPageProps {
    content: React.ReactNode;  // This will allow you to pass JSX content
}

const HelpPage: React.FC<HelpPageProps> = ({ content }) => {
    return (
        <Container>
            <h1>Help</h1>
            {content}
        </Container>
    );
}

export default HelpPage;