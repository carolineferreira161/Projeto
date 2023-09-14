import React from 'react';

export default function Home() {
  return (

    <div className="bg-black text-white min-h-screen">
      <header className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 text-white p-4 flex items-center">
        <img
          src="/t.png"
          width={30}
          className="mr-8"
        />
        <h1 className="text-3xl font-bold">Seu nome</h1>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Sobre Mim</h2>
          <p className="mt-2">
            Olá, sou [Seu Nome]. Sou um [Sua Profissão] com experiência em [Suas Habilidades]. Estou apaixonado por [Seu Interesse Principal].
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Meu Trabalho</h2>
          {/* Aqui você pode listar projetos do seu portfólio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Exemplo de cartão de projeto */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold">Projeto 1</h3>
              <p className="mt-2">Descrição do projeto 1.</p>
              <a href="#" className="text-blue-500 mt-2">Ver mais</a>
            </div>
            {/* Repita para outros projetos */}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Entre em Contato</h2>
          <p className="mt-2">
            Você pode entrar em contato comigo através do meu email: <a href="mailto:seuemail@example.com">seuemail@example.com</a>.
          </p>
        </section>
      </main>

      <footer className="bg-gray-500 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Meu Portfólio
      </footer>

    </div>
  )
}
