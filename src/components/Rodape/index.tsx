import styled from 'styled-components';
import facebook from './assets/facebook.png';

const RodapeEstilizado = styled.footer`
heigth: 100%;
color: white;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center;
`
const ListaEstilizada = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
`
const ItemEstilizado = styled.li`
list-style-type: none;
`
function Rodape() {
    return(
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href='#'>
                        <img src={facebook} alt="logo do facebook" />
                    </a>
                </ItemEstilizado>
            </ListaEstilizada>
            <p>2024 Desenvolvido por Gabriel | Projeto ficticio</p>
        </RodapeEstilizado>
    )

}

export default Rodape;