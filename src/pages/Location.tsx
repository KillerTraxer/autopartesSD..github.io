import { Icon } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

function Location() {
    const navigate = useNavigate();

    return (
        <section>
            <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center">
                <div className='flex cursor-pointer w-fit justify-end items-start self-start' onClick={() => navigate("/")}>
                    <Icon component={ArrowBackIcon} sx={{ width: "20px" }} />
                    <p className='font-medium ml-1'>Volver</p>
                </div>
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-10 justify-center items-center flex flex-col">
                    <h2 className="mb-0 text-4xl tracking-tight font-extrabold text-gray-900">Visitanos!</h2>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14577.179767750911!2d-104.654602!3d24.0206623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7e16bd9cb75%3A0x7eb376b24114fa7c!2sAutopartes%20de%20Santiago!5e0!3m2!1ses-419!2smx!4v1723660925452!5m2!1ses-419!2smx" width="600" height="450" loading="lazy"></iframe>
            </div>
        </section>
    )
}

export default Location