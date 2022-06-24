// import React, { useState } from "react";

// export default function Pure() {
//   const [click, setClick] = useState(true);
//   return (
//     <>
//       {console.log("rendered")}
//       <button
//         onClick={() => {
//           console.log("hello kajal");
//           setClick(!click);
//         }}
//       >
//         click me
//       </button>
//     </>
//   );
// }

import React from "react";

export default class PureComponents extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }

  render() {
    console.log("rendered");
    console.log(this.state.flag);
    return (
      <div>
        <button onClick={() => this.setState({ flag: true })}>click me</button>
      </div>
    );
  }
}

// import React from "react";

// export default class PureComponents extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       flag: true
//     };
//   }

//   render() {
//     console.log("rendered");
//     console.log(this.state.flag);
//     return (
//       <div>
//         <button
//           onClick={() =>
//             this.setState({flag:true}
//             )
//           }
//         >
//           click me
//         </button>
//       </div>
//     );
//   }
// }
