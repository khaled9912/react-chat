import PropTypes from 'prop-types';

const MessageHistory=props=>{
    return (
        <div>
        <div className="name sender">{props.user.username}</div>

                <ul className="message-list">
                {props.messages.map((message, index) => (
                    <li
                    key={index}
                    className={
                        message.username === props.user.username ? 'message sender' : 'message recipient'
                    }
                    >
                    <p>{`${message.username}: ${message.message}`}</p>
                    </li>
                ))}
                </ul>

                </div>
    )


}

MessageHistory.propTypes ={
    user:PropTypes.object.isRequired,
    messages:PropTypes.array.isRequired,
}

export default MessageHistory;