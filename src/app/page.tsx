import React from 'react';

export default function Home() {
  return (
    <div>
      <header className="header">

        <nav className='navbar'>
          <a href="https://www.linkedin.com/in/caroline-ferreira-ribeiro-5bba08192/">
            <img src="/t.png" width={30} className="image"/>
          </a>
          <h1 className="font-bold">Seu nome</h1>
        </nav>

        <nav className='navbar'>
          <a href="" className="active">portifólio</a>
          <a href="https://www.linkedin.com/in/caroline-ferreira-ribeiro-5bba08192/">contato</a>
          <a href="https://www.linkedin.com/in/caroline-ferreira-ribeiro-5bba08192/">
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



      <footer>
        &copy; {new Date().getFullYear()} Meu Portfólio
      </footer>
    </div>
  )
}
