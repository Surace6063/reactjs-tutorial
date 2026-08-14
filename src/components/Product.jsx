const Product = ({productInfo}) => {
  return (
    <div className="border p-4 rounded-md w-fit m-4">
        <p>ID: {productInfo.id}</p>
        <p>Name: {productInfo.name}</p>
        <p>Price: ${productInfo.price}</p>
    </div>
  )
}
export default Product