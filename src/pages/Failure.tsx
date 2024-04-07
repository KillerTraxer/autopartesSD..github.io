import { useNavigate } from "react-router-dom"

function Failure() {
    const navigate = useNavigate();
    
    return (
        <section>
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 justify-center items-center flex flex-col">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Pago no aprobado</h2>
                    <p className="font-light text-gray-500 lg:mb-8 sm:text-xl">No se realizo ninguna compra</p>
                    <button
                        className="flex py-2.5 px-5 mt-0 font-medium w-fit text-center items-center self-center justify-center focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                        onClick={() => navigate("/")}
                    >
                        Voler a inicio
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Failure