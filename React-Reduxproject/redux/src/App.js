import React from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import { ListItemIcon } from '@material-ui/core';
import { increase } from './Action'
// import './App.css';

const list = [
  { name: "Ramesh", userid: 1 },
  { name: "Suresh", userid: 2 },
  { name: "Ram", userid: 3 },
  { name: "Apeksha", userid: 4 },
  { name: "Hari" , userid: 5},
  { name: "Pranita", userid: 6 },
  { name: "Akshada", userid: 7 },
  { name: "Ankita", userid: 8 },
  { name: "Sapna", userid: 9 },
  { name: "Rahul", userid: 10 }
]

function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increase(1))
  }

  return (
    <div className="App">
      <paper>
        <h1>Voters List ({count})</h1>

        <div>
          {list.map(i => {
            return (
              <div>
                  <Checkbox onClick={handleClick} />
                  {i.name}
              </div>

            )
          })}

        </div>
        {/* <button> Vote counter</button> */}
      </paper>
    </div>
  );
}

export default App;
