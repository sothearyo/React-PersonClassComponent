// ----------------The following creates a PersonCard using Functional Components -------------
import React, { useState } from 'react';

const PersonCard = props => {
    const [state, setState] = useState({
        age: props.age
    });
    const increaseAge = () => {
        setState({
            age: state.age + 1
        });
    }
    return (
        <div id="PersonCard">
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {state.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ increaseAge }>
                Birthday Button for {props.firstName} {props.lastName}
            </button>
        </div>
    );
}
export default PersonCard;

// ----------------The following creates a PersonCard using Class Components -------------
// import React, { Component } from 'react';

// class PersonCard extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             age: this.props.age
//         }
//     }
//     increaseAge = () => {
//         this.setState({age: this.state.age + 1});
//     }

//     render() {
//         return (
//         <div id="PersonCard">
//             <h1>{this.props.lastName}, {this.props.firstName}</h1>
//             <p>Age: {this.state.age}</p>
//             <p>Hair Color: {this.props.hairColor}</p>
//             <button onClick={ () => {this.increaseAge()}}>
//                 Birthday Button for {this.props.firstName} {this.props.lastName}
//             </button>
//         </div>
//         );
//     }
// }

// export default PersonCard;