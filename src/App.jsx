import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { formatDistance, subDays, sub } from 'date-fns';

function App() {
  const [count, setCount] = useState(0);
  const [sorted, setSorted] = useState([]);

  const [inventory, setInventory] = useState([
    {
      name: 'asparagus',
      type: 'vegetables',
      quantity: 5,
      date: sub(new Date(), {
        days: 45,
      }),
    },
    {
      name: 'bananas',
      type: 'fruit',
      quantity: 0,
      date: sub(new Date(), {
        days: 3,
      }),
    },
    {
      name: 'goat',
      type: 'meat',
      quantity: 23,
      date: sub(new Date(), {
        days: 5,
      }),
    },
    {
      name: 'cherries',
      type: 'fruit',
      quantity: 5,
      date: sub(new Date(), {
        days: 15,
      }),
    },
    {
      name: 'fish',
      type: 'meat',
      quantity: 22,
      date: sub(new Date(), {
        days: 2,
      }),
    },
  ]);

  let sortByDate = inventory.sort(function (a, b) {
    return b.date.getTime() - a.date.getTime();
  });

  const result = Object.groupBy(sortByDate, ({ type }) => type);
  let keys = Object.keys(result);

  // get keys
  // create an empty group {key1:[],key2:[]}
  // forEach key
  // get the array of the key
  // map through the array
  // sort the array
  // return the array
  // assign the array to the key as value

  let temp = {};
  keys.forEach(function (key) {
    temp[key] = [];
  });

  keys.forEach(function (key) {
    let arr = result[key]; // get array of key
    let sorted = arr.sort(function (a, b) {
      b.date.getTime() - a.date.getTime();
    });

    temp[key] = sorted;
  });

  console.log(temp);

  let elements = keys.map(function (key, index) {
    return temp[key].map(function (item, index) {
      return (
        <div
          key={index.toString()}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <p> {item.type} </p>
          <p> {item.name} </p>
          <p> {item.date.toString()} </p>
        </div>
      );
    });
  });

  return (
    <>
      <div>
        <h2> {elements} </h2>{' '}
      </div>
    </>
  );
}

export default App;
