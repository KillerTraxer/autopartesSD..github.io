import { Icon } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import usePurchasesStore from '../store/purchasesStore';

function Purchases() {
    const navigate = useNavigate();
    //@ts-ignore
    const { purchases } = usePurchasesStore();

    return (
        <section>
            <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center">
                <div className='flex cursor-pointer w-fit justify-end items-start self-start' onClick={() => navigate("/")}>
                    <Icon component={ArrowBackIcon} sx={{ width: "20px" }} />
                    <p className='font-medium ml-1'>Voltar à</p>
                </div>
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-10 justify-center items-center flex flex-col">
                    <h2 className="mb-0 text-4xl tracking-tight font-extrabold text-gray-900">Lista de compras</h2>
                </div>

                {purchases.length > 0 ? (
                    purchases.map((purchase: any, index: any) => {
                        const [datePart, timePart] = purchase.date_created.split('T');
                        const [hours, minutes] = timePart.split(':').slice(0, 2);
                        const formattedDate = `${datePart} ${hours}:${minutes}`;

                        return (
                            <div key={index} className="items-center rounded-lg shadow sm:flex bg-[#0e3465] border-gray-700 relative mb-5 w-[50%]">
                                <div className="p-8">
                                    <h3 className="text-xl font-bold tracking-tight text-white w-full overflow-hidden text-ellipsis text-nowrap">
                                        Compra efectuada em {formattedDate}
                                    </h3>
                                    <p className="mt-3 mb-2 font-light text-gray-200">Preço: ${purchase.transaction_amount} USD</p>
                                    <p className="mt-3 mb-2 font-light text-gray-200">Estado: {purchase.status === "pending" ? "pendente" : "aprovado"}</p>
                                    <p className="mt-3 mb-0 font-light text-gray-200">Método de pagamento: {purchase.payment_method_id}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="font-light text-gray-500 lg:mb-8 sm:text-xl">Sem compras</p>
                )}
            </div>
        </section>
    )
}

export default Purchases