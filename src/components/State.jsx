import { useState } from "react"

const State = () => {
  const [username, setUsername] = useState("John Doe")
  const [isOn, setIsOn] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [fruits,setFruits] = useState(['apple','mango','orange'])
  const [user,setUser] = useState({
    id: 101,
    email: "zoro@gmail.com",
    password: "123456"
  })
  const [product,setProduct] = useState(null)

  const [email,setEmail] = useState("")

  return (
    <div className="p-8">
      <p>My name is {username}.</p>
      <button onClick={() => setUsername("Suresh Thapa")} className="btn">
        change username
      </button>

      <hr className="my-4" />

      <p className="font-bold text-xl">
        {isOn ? "Switch is on" : "Switch is off"}
      </p>

      <button onClick={() => setIsOn(!isOn)} className="btn">
        {isOn ? "Switch off" : "Switch on"}
      </button>

      <hr className="my-4" />
      <div>
        {isLoggedIn && (
          <>
            <button onClick={() => setIsLoggedIn(false)} className="btn">
              Logout
            </button>
            <span>{username}</span>
          </>
        )}
      </div>

      {!isLoggedIn && (
        <button onClick={() => setIsLoggedIn(true)} className="btn">
          login
        </button>
      )}


      <div className="mt-6">
        <label htmlFor="username">Email</label>
        <input type="text" name="username" id="username" className="border border-gray-400 ml-2 rounded-md" onChange={(e) => setEmail(e.target.value) } 
        value={email} />

        <p className="mt-3">
           My email is {email}.
        </p>
      </div>
    </div>
  )
}
export default State
