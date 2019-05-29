import React from 'react'

class Form extends React.Component {
    state = {
        id: '',
        name: '',
        age: '',
        email: '',
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        console.log(this.state)
    }
    render() {
        return (
            <form>
                <br />
                <input
                    placeholder="ID"
                    value={this.state.id}
                    onChange={e =>
                        this.setState({ id: e.target.value })} />
                <br />

                <input
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e =>
                        this.setState({ name: e.target.value })} />
                <br />

                <input
                    placeholder="Age"
                    value={this.state.age}
                    onChange={e =>
                        this.setState({ age: e.target.value })} />
                <br />

                <input placeholder="Email"
                    value={this.state.email}
                    onChange={e =>
                        this.setState({ email: e.target.value })} />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
                <br />
            </form>
        )
    }
}

export default Form;