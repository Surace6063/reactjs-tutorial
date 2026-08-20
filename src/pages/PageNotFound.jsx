import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
    const navigate = useNavigate()

    const goBackToHome = () => {
        navigate("/")
    }

    return (
        <div className="m-4 space-y-2 text-center">
            <h1>404 Page not found </h1>
            <button onClick={goBackToHome} className="btn">
                Go back to home page
            </button>
        </div>
    )
}

export default PageNotFound