import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import usePurchasesStore from "../store/purchasesStore";

function Pending() {
    const navigate = useNavigate();
    const location = useLocation();
    //@ts-ignore
    const { addPurchase } = usePurchasesStore();

    const payment = location?.state ? location?.state.payment : {};

    const relevantPaymentInfo = {
        id: payment.id,
        date_created: payment.date_created,
        payment_method_id: payment.payment_method_id,
        status: payment.status,
        payer: payment.payer,
        transaction_amount: payment.transaction_amount,
    };

    useEffect(() => {
        if (Object.keys(payment).length > 0) {
            addPurchase(relevantPaymentInfo);
        }
    }, [addPurchase, relevantPaymentInfo]);

    return (
        <section>
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 justify-center items-center flex flex-col">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Pagamento pendente</h2>
                    <p className="font-light text-gray-500 lg:mb-8 sm:text-xl">Efectue o pagamento da sua compra em dinheiro.</p>
                    <button
                        className="flex py-2.5 px-5 mt-0 font-medium w-fit text-center items-center self-center justify-center focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-[#be0f34] text-white border-gray-600 hover:text-white hover:bg-[#ad142f]"
                        onClick={() => navigate("/")}
                    >
                        Voltar ao topo
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Pending