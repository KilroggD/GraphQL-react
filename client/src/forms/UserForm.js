import React from 'react';

class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            department: '',
            country: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        return this.props.submitHandler(this.state);
    }

    render() {
        return (
            <form className="user__form" onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                </label>
                <label>
                Department:
                    <select name="department" value={this.state.department || ''} onChange={this.handleChange}>
                        <option value=''>Select department</option>
                        <option value="Development">Development</option>
                        <option value="Support">Support</option>
                        <option value="Legal">Legal</option>
                    </select>
                </label>
                <label>
                    Country
                    <select name="country" value={this.state.country || ''} onChange={this.handleChange}>
                        <option value=''>Select country</option>
                        <option value="Ireland">Ireland</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                    </select>
                </label>
                <label>
                    <input type="submit" value="Submit" />
                </label>
            </form>
        );
    }

}
export default UserForm;
