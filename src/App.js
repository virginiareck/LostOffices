import React from 'react';
import LogoLost from './components/LogoLost';
import HeaderLost from './components/HeaderLost';
import ButtonLost from './components/ButtonLost';
import FooterLost from './components/FooterLost';
import LinkLost from './components/LinkLost';
import HighlightLost from './components/HighlightLost';

function App() {
  return (
    <>
      <HeaderLost>
        <LogoLost />
        <ButtonLost>Novo vídeo</ButtonLost>
      </HeaderLost>

      <FooterLost>
        <LogoLost />
        <p>Site feito na <HighlightLost>#ImersãoReact</HighlightLost> da <LinkLost href="https://alura.com.br"> Alura</LinkLost>
        </p>
      </FooterLost>

    </>
    
  );
}

export default App;
