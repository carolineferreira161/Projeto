import React from 'react';

export default function Home() {
  return (
    <div>
      <header className="header">

        <nav className='navbar'>
          <a href="https://www.linkedin.com/in/caroline-ferreira-ribeiro-5bba08192/">
            <img src="/t.png" width={30} className="image"/>
          </a>
          <h1 className="font-bold">Matheus Gonçalves</h1>
        </nav>

        <nav className='navbar'>
          <a href="" className="active">portfólio</a>
          <a href="https://www.linkedin.com/in/g0nc/overlay/contact-info/">contato</a>
          <a href="https://www.linkedin.com/in/g0nc/overlay/contact-info/">
            <img
              src="linkedin_branco.png"
              title="Linkedin"
              className="image"
            />
          </a>
          <a href="https://www.instagram.com/carol_ferreiraribeiro/">
            <img
              src="instagram_branco2.png"
              className="image"
              title="Instagram"
            />
          </a>
        </nav>
      </header>
     
    <section className='home' id='home'>
      <div className='home-content'>
       <h1>Olá, sou Matheus Gonçalves</h1>
        <div className='text-animate'>
          <h3>Engenheiro de Vendas</h3>
        </div> 
        <p> Regulamento geral sobre a proteção de dados (RGPD) Tecnologia da informação Gestão de vulnerabilidade</p>
      </div>
    </section>


      <footer>
        &copy; {new Date().getFullYear()} Meu Portfólio
      </footer>
    </div>
  )
}
