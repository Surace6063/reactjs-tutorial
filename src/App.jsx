import AdminProfile from "./components/AdminProfile"
import Counter from "./components/Counter"
import Product from "./components/Product"
import RegisterForm from "./components/RegisterForm"
import State from "./components/State"
import UserProfile from "./components/UserProfile"
import { Toaster } from "react-hot-toast"

const App = () => {
  const productInfo = {
    id: 101,
    name: "Iphone 17 pro max",
    price: 1100,
    isAvaliable: false
  }

  // productInfo.id

  return (
    <div>
      <Toaster />
       {/* <UserProfile fullName="John Doe" age={25} address="ktm"  />
       <UserProfile fullName="Hari Sharma" age={26} address="btk" />
       <UserProfile fullName="Alice Thapa" age={24} address="ktm" />

       <hr />
       <AdminProfile />
       <AdminProfile /> */}


       {/* <Product productInfo={productInfo} /> */}

       {/* <Counter /> */}
       {/* <State /> */}

       <RegisterForm />
    </div>
  )
}

export default App







































// const App = () => {
//   const username = "Suresh Thapa"
//   const a = 10
//   const b = 20
//   const hobbies = ["coding", "treking", "swimming", "gaming"]
//   const fruits = ["apple", "banana", "orange", "mango"]

//   // conditional rendering
//   const age = 17
//   const isLoggedIn = true

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold text-teal-500">This is react app.</h1>
//       <p className="text-gray-600">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
//         blanditiis.
//       </p>

//       <p>My name is {username}.</p>

//       <p>
//         The sum of {a} and {b} is {a + b}.
//       </p>

//       <ul>
//         {hobbies.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       {/* conditional rendering */}
//       {/* condition ? true-statement : false-statement */}

//       {age >= 18 ? (
//         <>
//           <p>You can vote.</p>
//           <p>Please wait in line.</p>
//         </>
//       ) : (
//         <>
//           <p>you cannot vote.</p>
//           <p>you must be atleast 18 years old to vote.</p>
//         </>
//       )}

//       {/* condition && true-staement */}
//       {isLoggedIn && (
//         <>
//           <button className="bg-pink-700 text-white px-6 py-2 rounded-md mr-2">
//             logout
//           </button>
//           <span>suresh thapa</span>
//         </>
//       )}
//     </div>
//   )
// }

// export default App
