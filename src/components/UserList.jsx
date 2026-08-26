import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const UserList = () => {
    const {data:users,isLoading,error} = useQuery({
       queryKey: ["users"],
       queryFn: async () => {
        const response = await axios.get("http://localhost:3000/users")
        return response.data
       }
    })

    if(isLoading) return <p>loading...</p>
    if(error) return <p>Error fetching data!</p>

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="font-bold text-xl mt-4">
        User List
      </h3>

      <div className="mt-4">
         {
            users?.map(user => (
                <div key={user.id} className="text-lg font-semibold border border-gray-300 p-4 rounded-md mb-4">
                   <p>Email: {user.email}</p>
                   <p>Passowrd: {user.password}</p>

                   <button className="text-red-600 mt-3 underline">
                    delete
                   </button>
                </div> 
            ))
         }
      </div>
    </div>
  )
}
export default UserList