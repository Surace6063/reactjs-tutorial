const UserProfile = ({fullName,age,address}) => {
  return (
    <div className="border border-pink-500 rounded-md p-4 shadow-md m-4 w-fit">
        <p>Name: {fullName}</p>
        <p>Age: {age}</p>
        <p>Address: {address}</p>
        <p>ID: 101</p>
    </div>
  )
}
export default UserProfile