import React from 'react'
import { Notifications } from './component/Basics/Notifications';

const App = () => {
  return (
    <div>
      <div>
        <MyNewComponent />
      </div>
      <div>
      Welcome to My First React App
      </div>
      <p>React is really awesome!!</p>
      <h1>{5+5}</h1>
      <div>
        <Notifications />
      </div>
      </div>
  )
}

const MyNewComponent = () => {
  return <h1>Avinash Kumar Gaurav </h1>;

};

export default App