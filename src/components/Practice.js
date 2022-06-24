// import React from "react";

// export default class Practice extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       flag: {
//         user: "kajal",
//         friends: ["jyoti", "taniya", "shivang"],
//       },
//     };
//   }
//   onButtonClick() {}

//   render() {
//     console.log("rendered");
//     console.log(this.state.flag);
//     return (
//       <div>
//         <button
//           onClick={() =>
//             this.setState(this.state.flag, () =>
//               this.state.flag.friends.push("ajay")
//             )
//           }
//         >
//           click me
//         </button>
//       </div>
//     );
//   }
// }


import React from "react";

export default class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: {
        user: "kajal",
        friends: ["jyoti", "taniya", "shivang"],
      },
    };
  }
  onButtonClick() {}

  render() {
    console.log("rendered");
    console.log(this.state.flag);
    return (
      <div>
        <button onClick={()=>{this.setState({flag: {user:this.state.flag.user,friends:[...this.state.flag.friends,'sds']}})}}>
          click me
        </button>
      </div>
    );
  }
}
