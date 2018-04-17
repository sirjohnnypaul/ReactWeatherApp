import React from "react";
//Imporvements 2.0
const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="city"/>
      <input type="text" name="country" placeholder="country"/>
      <button>Get Weather</button>
  </form>
);
//Version 1.0
// class Form extends React.Component {
//   render() {
//     return (
//       <form onSubmit={this.props.getWeather}>
//         <input type="text" name="city" placeholder="city"/>
//           <input type="text" name="country" placeholder="country"/>
//           <button>Get Weather</button>
//       </form>
//     );
//   }
// };

export default Form;
