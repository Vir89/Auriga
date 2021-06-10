import React from 'react';

class Alta extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };



    render() {
        return <div>
        <form>
            <input name="firstName" placeholder="First Name" value={this.state.firstName} onChange={e => this.change(e)} />
            <br />
            <input name="lastName"placeholder="Last Name" value={this.state.lastName} onChange={e => this.change(e)} />
            <br />
            <input name="userName" placeholder="User Name" value={this.state.usertName} onChange={e => this.change(e)} />
            <br />
            <input name="email" placeholder="email" value={this.state.email} onChange={e => this.change(e)} />
            <br />
            <input name="password" placeholder="Password" value={this.state.password} onChange={e => this.change(e)} />
            <br />
            <button onClick={e => this.onSubmit(e)}>Submit</button>
       
       
        </form>
        </div>

    }
}

export {Alta}