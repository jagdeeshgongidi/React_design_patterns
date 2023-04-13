
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




//modal


const App = () => {

  return (
    <>
      {/* <RegularList items={people} resourceName="user" itemComponent={SmallPeopleListItem} />
      <Modal>
        <ProductInfo product={products[0]} />
      </Modal> */}

      <ResourceLoader resourceName="user" resourceUrl="api/users/1">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceName="product" resourceUrl="api/products/1">
        <ProductInfo />
      </ResourceLoader>

    </>
  )
}



export default App