import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'






class Contact extends React.Component {


    constructor(props) {
      super(props)
      this.state = {
        message: '',
        name: '',
        firstname: '',
        email: ''
      }
      this.updateMessage = this.updateMessage.bind(this)
      this.updateName = this.updateName.bind(this)
      this.updateFirstname = this.updateFirstname.bind(this)
      this.updateEmail = this.updateEmail.bind(this)
    }

    sendMessage(){
        fetch('http://theophane-duval.ovh/backend/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: this.state.message,
                name: this.state.name,
                firstname: this.state.firstname,
                email: this.state.email,
            })
        })    
        .then(response => {
            if (response.ok){
              this.props.backToMap('successMessage')
            } else {
              console.log('error')
            }
          })
        .catch((error) => console.error(error))
    }

    updateMessage(event){
        this.setState({
            message: event.target.value
        })
    }

    updateName(event){
        this.setState({
            name: event.target.value
        })
    }
    updateFirstname(event){
        this.setState({
            firstname: event.target.value
        })
    }
    updateEmail(event){
        this.setState({
            email: event.target.value
        })
    }


    render(){
      return(
        <div className="contact">
          <form>
              <div className="inputContainer">
              <label>Nom</label><input type="text" value={this.state.name} onChange={this.updateName}/>
              </div>
              <div className="inputContainer">
                <label>Prénom</label><input type="text" value={this.state.firstname} onChange={this.updateFirstname}/>
              </div>
              <div className="inputContainer">
                <label>Email</label><input type="text" value={this.state.email} onChange={this.updateEmail}/>
              </div>
              <div className="textareaContainer">
                <label>Message</label><textarea value={this.state.message} onChange={this.updateMessage}></textarea>
              </div>
          </form>
          <button onClick={() => this.sendMessage()}><FontAwesomeIcon icon={faEnvelope}/> ENVOYER</button>
          <div className="close" onClick={() => this.props.backToMap('contact')}>SORTIR</div>
        </div>
      )
    }

}

export default Contact;
