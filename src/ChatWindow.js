import React from 'react';
import PropTypes from 'prop-types';
import MessageHistory from './MessageHistory';
import AddMessage from './AddMessage';
class Chat extends React.Component{
    
    
    render(){
        const {user, messages} = this.props;     
        return(
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <MessageHistory user={user} messages={messages}/>
                <AddMessage user={user} onAddItem={this.props.onAddItem}/>
            </div>

        )

    }
}

Chat.propTypes ={
    user:PropTypes.object.isRequired,
    messages:PropTypes.array.isRequired,
    onAddItem:PropTypes.func.isRequired
}
export default Chat;