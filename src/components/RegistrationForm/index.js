import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    isFirstNameFilled: true,
    isLastNameFilled: true,
    isValid: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
  }

  onBlurFirstName = event => {
    const {firstname, isFirstNameFilled} = this.state
    this.setState({username: event.target.value})
    if (firstname === '') {
      this.setState(prevState => ({
        isFirstNameFilled: !prevState.isFirstNameFilled,
      }))
    }
  }

  onBlurLastName = event => {
    const {lastname, isLastNameFilled} = this.state
    this.setState({lastname: event.target.value})
    if (lastname === '') {
      this.setState(prevState => ({
        isLastNameFilled: !prevState.isLastNameFilled,
      }))
    }
  }

  render() {
    const {
      firstname,
      isFirstNameFilled,
      isLastNameFilled,
      lastname,
    } = this.state
    return (
      <div className="bg">
        <h1>Registration Form</h1>
        <form className="register-card" onSubmit={this.onSubmitForm}>
          <div className="align-row">
            <label htmlFor="first">FIRST NAME</label>
            <input
              onBlur={this.onBlurFirstName}
              type="text"
              placeholder="First Name"
              id="first"
              value={firstname}
            />
            {isLastNameFilled ? '' : <p className="dfklj">required</p>}
          </div>
          <div className="align-row">
            <label htmlFor="last">LAST NAME</label>
            <input
              onBlur={this.onBlurLastName}
              type="text"
              placeholder="Last Name"
              id="last"
              value={lastname}
            />
            {isLastNameFilled ? '' : <p className="dfklj">required</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
