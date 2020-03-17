import React from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch,connect  } from 'react-redux';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import { ListItemIcon } from '@material-ui/core';
import { increase ,decrease} from './Action'
// import './App.css';

// const list = [
//   { name: "Ramesh", userid: 1 },
//   { name: "Suresh", userid: 2 },
//   { name: "Ram", userid: 3 },
//   { name: "Apeksha", userid: 4 },
//   { name: "Hari" , userid: 5},
//   { name: "Pranita", userid: 6 },
//   { name: "Akshada", userid: 7 },
//   { name: "Ankita", userid: 8 },
//   { name: "Sapna", userid: 9 },
//   { name: "Rahul", userid: 10 }
// ]

// function App() {
//   const count = useSelector(state => state.counter);
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     dispatch(increase(1))
//   }
 
//   return (
//     <div className="App">
//       <paper>
//         <h1>Voters List ({count})</h1>

//         <div>
//           {list.map(i => {
//             return (
//               <div>
//                   <Checkbox onClick={handleClick} />
//                   {i.name}
//               </div>

//             )
//           })}

//         </div>
//         <button> Vote counter</button>
//       </paper>
//     </div>
//   );
// }

// export default App;
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list1: [],
      list: [
        { name: "Ramesh", userid: 1 },
        { name: "Suresh", userid: 2 },
        { name: "Ram", userid: 3 },
        { name: "Apeksha", userid: 4 },
        { name: "Hari", userid: 5 },
        { name: "Pranita", userid: 6 },
        { name: "Akshada", userid: 7 },
        { name: "Ankita", userid: 8 },
        { name: "Sapna", userid: 9 },
        { name: "Rahul", userid: 10 }
      ]
    }
  }
  handleClick = () => {
    this.props.dispatch(increase(1))
  }
  handledecrease = () => {
    this.props.dispatch(decrease(1))
  }
  handleuser = () => {
  this.setState({
              
  });
  }
  render() {
    return (
      <div className="App">
        <paper>
          <h1>Voters List ({this.props.counterno})</h1>

          <div>
            {this.state.list.map((i, index) =>

              <div>
                <Checkbox onClick={this.handleClick} />
                {i.name}
                {i.userid}
              </div>
            )}

          </div>
          <button onClick={this.handledecrease}> Vote counter</button>
        </paper>
      </div>
    )
  }
}
function useselect(state) {
  return {
    counterno: state.counter
  }
}
export default connect(useselect)(App);