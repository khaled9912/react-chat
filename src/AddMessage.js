import React from 'react';

class AddMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={
        message:'',
        }
        this.isDisabled=this.isDisabled.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    
    }
    isDisabled = () => {
        const {message} = this.state;
        return message==='';
      };

    handleChange(e){
        const {name, value} = e.target;
        this.setState(prevState=>({
            [name]:value,
        }));
    };
    handleSubmit(e){
        e.preventDefault();
        const {user} = this.props;
        const {message} = this.state;
        const newMessage = this.buildMessage(user.username,message);
        
        this.props.onAddItem(newMessage);
    }

    buildMessage(user, message){
        return {
            username:user,
            message:message,
        }
    }
    render(){
        return (
            <div>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your message..." 
                    name='message'
                    value={this.state.message}
                    onChange={this.handleChange}
                    />
                    <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>
                        SEND
                    </button>
                    </div>
                </form>
                </div>
        )
    }
}

export default AddMessage;