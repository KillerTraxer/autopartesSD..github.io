import { Icon } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({

        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const isEmpty = Object.values(formData).some((field) => !field);

        if (isEmpty) {
            alert("Por favor, complete todos los campos para enviar el formulario.");
            return;
        }
        alert('Enviado, pronto te contactaremos!')
        e.target.reset();
    };

    return (
        <section>
            <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center">
                <div className='flex cursor-pointer w-fit justify-end items-start self-start' onClick={() => navigate("/")}>
                    <Icon component={ArrowBackIcon} sx={{ width: "20px" }} />
                    <p className='font-medium ml-1'>Volver</p>
                </div>
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-10 justify-center items-center flex flex-col">
                    <h2 className="mb-0 text-4xl tracking-tight font-extrabold text-gray-900">Contactanos!</h2>
                </div>

                <form onSubmit={handleSubmit} className="w-full mb-10">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre:</label>
                        <input type="text"
                            id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo electrónico:</label>
                        <input type="email" id="email" name="email"
                            value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Teléfono:</label>
                        <input type="tel"
                            id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="border border-gray-300 rounded-md   
 p-2 w-full h-32" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact