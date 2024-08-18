import { Container } from '@mui/material';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulos';
import Rodape from './components/Rodape';
import Tabela from './tabela';
import useDadosConsulta from './useDadosConsulta';
import Grafico from './Grafico';
import useDadosProfissional from './useDadosProfissional';
import Avaliacao from './components/Avaliacao';
import Subtitulo from './components/Subtitulo';

function App() {
  const {dados: consultas, erro: consultasErro} = useDadosConsulta();
  const {dados: profissionais, erro: profissionaisErro} = useDadosProfissional();

  if (consultasErro || profissionais) {
    console.log("Ocorreu um erro na requisição");
    
  }
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Area Administrativa</Titulo>
        <Tabela consultas={consultas} />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais}/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
