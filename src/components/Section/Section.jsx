import PropTypes from 'prop-types';
import { Container, ContainerTitle } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <Container>
            <ContainerTitle>{title}</ContainerTitle>
            {children}
        </Container>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section;
