import React from "react";

class Customer extends React.Component {
  /*   constructor(props) {
    super(props)
  } */

  render() {
    return (
      <>
        <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
        <CustomerInfo birthday={this.props.birthday} job={this.props.job}/>
      </>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.image} alt="profile" />
        <h2>
          {this.props.name}({this.props.id})
        </h2>
      </>
    );
  }
}

class CustomerInfo extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.birthday}</p>
        <p>{this.props.job}</p>
      </>
    );
  }
}

export default Customer;
