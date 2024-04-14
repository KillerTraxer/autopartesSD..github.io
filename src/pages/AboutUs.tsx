import { Icon } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AboutUsImage from "../assets/aboutUs.jpg";

function AboutUs() {
    const navigate = useNavigate();

    return (
        <section>
            <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center">
                <div className='flex cursor-pointer w-fit justify-end items-start self-start' onClick={() => navigate("/")}>
                    <Icon component={ArrowBackIcon} sx={{ width: "20px" }} />
                    <p className='font-medium ml-1'>Voltar à</p>
                </div>

                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-10 justify-center items-center flex flex-col">
                    <h2 className="mb-0 text-4xl tracking-tight font-extrabold text-gray-900">Sobre nós</h2>
                </div>

                <img className="w-full block" src={AboutUsImage} alt={"Sobre nós"} />

            </div>
        </section>
    )
}

export default AboutUs