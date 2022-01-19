import PropTypes from 'prop-types';
import { Container } from './Notification.styled';

const Notification = ({ message }) => {
    return <Container>{message}</Container>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
