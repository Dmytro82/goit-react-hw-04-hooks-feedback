import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Container>
            {options.map(option => {
                return (
                    <Button
                        key={option}
                        name={option}
                        onClick={() => onLeaveFeedback(option)}
                    >
                        {option}
                    </Button>
                );
            })}
        </Container>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
