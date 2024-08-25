import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError() as { status: number; statusText: string; message: string };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="mb-2 text-4xl font-bold text-red-700">Oops!</h1>
            <p className="my-5 text-2xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg">{error.status + ' ' + error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;
