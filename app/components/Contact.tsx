"use client";

import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erros, setErros] = useState({ nome: "", email: "", mensagem: "" });

  function validar() {
    const novosErros = { nome: "", email: "", mensagem: "" };
    let valido = true;

    if (!nome) {
      novosErros.nome = "Nome é obrigatório";
      valido = false;
    } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nome)) {
      novosErros.nome = "Nome deve conter apenas letras";
      valido = false;
    }

    if (!email) {
      novosErros.email = "Email é obrigatório";
      valido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      novosErros.email = "Email inválido";
      valido = false;
    }

    if (!mensagem) {
      novosErros.mensagem = "Mensagem é obrigatória";
      valido = false;
    }

    setErros(novosErros);
    return valido;
  }

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (validar()) {
    console.log("Email enviado:", { nome, email, mensagem });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (res.ok) {
        toast.success("Email enviado com sucesso!");
        setNome("");
        setEmail("");
        setMensagem("");
      } else {
        toast.error("Erro ao enviar email!");
      }
    } catch (error) {
      toast.error("Erro ao enviar email!");
    }
  } else {
    toast.error("Preencha os campos corretamente!");
  }
}

  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-start px-8 md:px-20 py-16 bg-[#FDEDB0] gap-8 md:gap-70">
        
        {/* informacoes */}
        <div className="flex flex-col gap-4 md:justify-between md:h-96">
          <div className="flex items-center gap-4">
            <Image src="/Clock.png" alt="Horário" width={50} height={50} />
            <div>
              <p className="font-bold text-black">SEG - QUI  10:00 - 23:00</p>
              <p className="font-bold text-black">SEX - DOM  18:00 - 23:00</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image src="/Location pin.png" alt="Localização" width={30} height={30} />
              <p className="text-black">Rua Flores Cordovil, 106</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/WhatsApp.png" alt="WhatsApp" width={30} height={30} />
              <p className="text-black">(95) 99460-9947</p>
            </div>
          </div>
        </div>

        {/* formulario */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="w-12 h-1 bg-[#6B1D1D] mb-4"></div>
          <h2 className="font-bold text-[#6B1D1D] text-xl mb-6">Fale conosco</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:w-96">
            <div>
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                  if (/^[a-zA-ZÀ-ÿ\s]+$/.test(e.target.value)) {
                    setErros((prev) => ({ ...prev, nome: "" }));
                  }
                }}
                className="p-3 rounded border border-gray-200 bg-white w-full"
              />
              {erros.nome && <p className="text-red-500 text-sm mt-1">{erros.nome}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                    setErros((prev) => ({ ...prev, email: "" }));
                  }
                }}
                className="p-3 rounded border border-gray-200 bg-white w-full"
              />
              {erros.email && <p className="text-red-500 text-sm mt-1">{erros.email}</p>}
            </div>

            <div>
              <textarea
                placeholder="Mensagem..."
                value={mensagem}
                onChange={(e) => {
                  setMensagem(e.target.value);
                  if (e.target.value) {
                    setErros((prev) => ({ ...prev, mensagem: "" }));
                  }
                }}
                className="p-3 rounded border border-gray-200 bg-white h-32 w-full"
              />
              {erros.mensagem && <p className="text-red-500 text-sm mt-1">{erros.mensagem}</p>}
            </div>

            <button
              type="submit"
              className="bg-[#F5A623] text-[#6B1D1D] font-bold px-6 py-2 rounded border-2 border-[#6B1D1D] self-center"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}