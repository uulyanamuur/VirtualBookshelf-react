import React from "react";
import {Container} from "react-bootstrap";

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { titlePolk: '', password: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ titlePolk: event.target.value })
  }

  handleSubmit(event) {
      this.props.updateData(this.state.titlePolk)
    event.preventDefault()
  }

  render() {
    return (
    <div className='Container'>
      <Container>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Логин</label>
                        <input
                            type='text'
                            className='form-control'
                            name='title'
                            value={this.state.titlePolk}
                            onChange={this.handleChange}
                            width='50px'
                            />
                    </div>
                    <div className='form-group'>
                        <label>Пароль</label>
                        <input
                            type='text'
                            className='form-control'
                            name='description'
                            value={this.state.password}
                            />
                    </div>
                    <br/>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Войти</button>
                    </div>
                </form>
      </Container>
      </div>
    )
  }
}

export default LoginForm