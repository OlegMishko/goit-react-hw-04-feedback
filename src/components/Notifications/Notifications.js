import PropTypes from 'prop-types'
import { NotificationsBoard } from './Notifications.styled.jsx'

export const Notifications = ({ message }) => {
    return (
        <NotificationsBoard>
            <p>{message}</p>
        </NotificationsBoard>
    );
};

Notifications.propTypes = {
    message: PropTypes.string.isRequired,
};