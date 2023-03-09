import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/cbeb3334-f89c-4966-b1d8-8d928da74fdd"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contato</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Mensagem"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <button
                  type="button"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-gray-500 to-blue-500 drop-shadow-md hover:stroke-white"
               >
                  Enviar
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;