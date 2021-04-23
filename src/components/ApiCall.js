
// import React, { Component } from 'react'

// export default class ApiCall extends Component {
//     constructor(){
//      super()
//      this.state={
//        character:{}

//      }
//     }

//     componentDidMount(){
//         fetch("https://swapi.dev/api/people/1")
//           .then((response) => response.json())
//           .then((data) => {
//             this.setState({
//               character: data,
//             });
//           });


//     }
    
    
    
//     render() {
//         return (
//             <div>
//                 {this.state.character.name}
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'

export default class ApiCall extends Component {
    constructor(){
     super()
     this.state={
       character:{}

     }
    }

    componentDidMount(){
        fetch("https://official-joke-api.appspot.com/random_joke")
          .then((response) => response.json())

          .then((data) => {
            this.setState({
              character: data,
            });
          });


    }
    
    
    
    render() {
        return (
            <div>
                {this.state.character.setup}
            
            </div>
        )
    }
}
