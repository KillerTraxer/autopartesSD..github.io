import { useNavigate, useSearchParams } from "react-router-dom"
import usePurchasesStore from "../store/purchasesStore";
import { useEffect } from "react";

function Success() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    //@ts-ignore
    const { addPurchase } = usePurchasesStore();

    useEffect(() => {
        const collectionId = searchParams.get('collection_id');
        const collectionStatus = searchParams.get('collection_status');
        const paymentId = searchParams.get('payment_id');
        const status = searchParams.get('status');
        const externalReference = searchParams.get('external_reference');
        const paymentType = searchParams.get('payment_type');
        const merchantOrderId = searchParams.get('merchant_order_id');
        const preferenceId = searchParams.get('preference_id');
        const siteId = searchParams.get('site_id');
        const processingMode = searchParams.get('processing_mode');
        const merchantAccountId = searchParams.get('merchant_account_id');

        //@ts-ignore
        function createPurchaseObject(collectionId, collectionStatus, paymentId, status, externalReference, paymentType, merchantOrderId, preferenceId, siteId, processingMode, merchantAccountId) {
            const currentDate = new Date();

            const formattedDate = currentDate.toISOString();
            
            return {
                collectionId,
                collectionStatus,
                paymentId,
                status,
                externalReference,
                paymentType,
                merchantOrderId,
                preferenceId,
                siteId,
                processingMode,
                merchantAccountId,
                date: formattedDate,
            };
        }

        const purchase = createPurchaseObject(collectionId, collectionStatus, paymentId, status, externalReference, paymentType, merchantOrderId, preferenceId, siteId, processingMode, merchantAccountId);

        addPurchase(purchase);
    }, []);

    return (
        <section>
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 justify-center items-center flex flex-col">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Compra efectuada com sucesso</h2>
                    <p className="font-light text-gray-500 lg:mb-8 sm:text-xl">A sua compra foi efectuada com sucesso.</p>
                    <button
                        className="flex py-2.5 px-5 mt-0 font-medium w-fit text-center items-center self-center justify-center focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-[#be0f34] text-white border-gray-600 hover:text-white hover:bg-[#ad142f]"
                        onClick={() => navigate("/purchases")}
                    >
                        Ver as compras
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Success