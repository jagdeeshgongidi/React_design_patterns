
// import './App.css'
// import { SplitScreen } from './Components/splitScreen/SplitScreen'

import Modal from "./Components/Layout/Modal"
import { NumberedListItem } from "./Components/Layout/NumberedListItem"
import { RegularList } from "./Components/Layout/RegularList"
import SmallPeopleListItem from "./Components/Layout/people/SmallPeopleListItem"
import SmallProductListItem from "./Components/Layout/products/SmallProductListItem"

import ProductInfo from "./Components/Layout/products/ProductInfo"
import CurrentUserLoader from "./Components/container/CurrentUserLoader"


import UserInfo from "./Components/Layout/people/UserInfo"
import UserLoader from "./Components/container/UserLoader"
import ResourceLoader from "./Components/container/ResourceLoader"
import DataSource from "./Components/container/DataSource"
import axios from "axios"
// const LeftHandComponent=({name})=>{
//   return <h1>{name}</h1>
// }


// const RightHandComponent=({message})=>{
//   return <h1>{message}</h1>
// }


// function App() {


//   return (
//     <div className="">
//       <SplitScreen
//       leftWeight={1}
//       rightWeight={3}
//       >
//           <RightHandComponent message={'Hi,how ru doing'} />
//           <LeftHandComponent name={"Jaggu"} />
//       </SplitScreen>


//       {/* instead of passing as a components we are passing as a children */}
//     </div>
//   )
// }

// export default App

//Lists 






const people = [
  {
    id: 1,
    name: "Jagadeesh",
    age: 21,
    hairColor: "black",
    hobbies: ["coding", 'singing', 'reading']
  },
  {
    id: 2,
    name: "June",
    age: 21,
    hairColor: "black",
    hobbies: ["coding", 'singing', 'reading']
  },
  {
    id: 3,
    name: "John",
    age: 21,
    hairColor: "black",
    hobbies: ["coding", 'singing', 'reading']
  },

]

const products = [

  {
    id: 1,
    name: "laptop",
    price: '$200',
    description: "A 15 inch portable screen with computing functionality",
    rating: 5

  },
  {
    id: 2,
    name: "fan",
    price: '$50',
    description: "A motor with 3 wings that sweeps air ",
    rating: 3.5

  },
  {
    id: 3,
    name: "Phone",
    price: '$100',
    description: "A small device that can cause so many problems",
    rating: 1

  },
]







// const App = () => {
//   return (
//     <div>
//       <RegularList items={people} resourceName="person" itemComponent={SmallPeopleListItem} />
//       <NumberedListItem items={people} resourceName="person" itemComponent={LargePeopleListItem} />

//       <NumberedListItem items={products} resourceName="product" itemComponent={LargeProductLIstItem} />

//       <RegularList items={products} resourceName="product" itemComponent={SmallProductListItem} />
//     </div>
//   )
// }




// //modal
// const getServerData = url => async () => {
//   const response = await axios.get(url)
//   return response.data
// }
// const getLocalData = key => () => {
//   console.log(key)
//   return localStorage.getItem(key)
// }


// const Text = ({ message }) => {
//   console.log("text", message)
//   return <h1>{message}</h1>
// }


// const App = () => {

//   return (
//     <>
//       {/* <RegularList items={people} resourceName="user" itemComponent={SmallPeopleListItem} />
//       <Modal>
//         <ProductInfo product={products[0]} />
//       </Modal> */}
//       {/* 
//       <ResourceLoader resourceName="user" resourceUrl="api/users/1">
//         <UserInfo />
//       </ResourceLoader>
//       <ResourceLoader resourceName="product" resourceUrl="api/products/1">
//         <ProductInfo />
//       </ResourceLoader> */}



//       <DataSource getDataFunc={getServerData("/api/users/1")} resourceName='user'>
//         <UserInfo />
//       </DataSource>

//       <DataSource getDataFunc={getLocalData("message")} resourceName='message'>
//         <Text />
//       </DataSource>

//     </>
//   )
// }



// export default App



// import UnControlledForm from "./Components/uncontrolledcomponents/UnControlledForm";
// import ControlledForm from "./Components/controlledcomponents/ControlledForm";
// import UnControlledModel from "./Components/uncontrolledcomponents/UnControlledModel"
// import ControlledModel from "./Components/controlledcomponents/ControlledModel"
// import React, { useState } from "react";
// const App = () => {
//   const [shouldShowModal, setShowShouldShowModal] = useState(false)
//   const toggleModel = () => {
//     setShowShouldShowModal(!shouldShowModal)
//   }

//   return (
//     <>
//       <button onClick={toggleModel}>{shouldShowModal ? "hide model" : "Show model"}</button>
//       <ControlledModel onRequestClose={toggleModel} shouldShow={shouldShowModal} >
//         <h1>HI welcome to design patterns </h1>
//       </ControlledModel >
//     </>
//   )
// }
// export default App
import React, { useState } from "react";


const Heading1 = ({ handleNext }) => {
  const [name, setName] = useState("")
  return (
    <>
      <h1>First step</h1>
      <input type="text" value={name} placeholder="enter name" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => handleNext({ name })}>Next</button>
    </>
  )
}

const Heading2 = ({ handleNext }) => {
  const [age, setAge] = useState(0)
  return (
    <>
      <h1>second step</h1>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={() => handleNext({ age })}>Next</button>
    </>
  )
}


const Heading3 = ({ handleNext }) => {
  const [hairColor, setHairColor] = useState("")


  return (
    <>
      <h1>third step</h1>
      <input type="text" placeholder="haircolor.." value={hairColor} onChange={(e) => setHairColor(e.target.value)} />
      <button onClick={() => handleNext({ hairColor })}>Next</button >
    </>
  )
}








import UnControlledOnBoardingFlow from "./Components/uncontrolledcomponents/UnControlledOnBoardingFlow"
const App = () => {
  const onFinish = (data) => {
    alert("onBoarding is Completed")
    console.log(data)
  }

  return (
    <>

      <UnControlledOnBoardingFlow OnFinish={onFinish}>
        <Heading1 />
        <Heading2 />
        <Heading3 />

      </UnControlledOnBoardingFlow>


    </>
  )
}

export default App  