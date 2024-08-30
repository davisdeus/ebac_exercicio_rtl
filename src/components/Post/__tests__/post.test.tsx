import { render, screen } from "@testing-library/react";
import Post from "../index";


describe('Teste do componente Post', () => {
  it('Renderiza o componente Post com imagem e texto', () => {
    render(
      <Post
        imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg" >
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    );
    
    // Verifica se a imagem está presente
    const imagem = screen.getByRole('img');
    expect(imagem).toHaveAttribute('src',
    'https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg');
  
     // Verifica se o texto está presente
    const texto = screen.getByAltText('Olha só que legal minha miniatura do Batmóvel.');
    expect(texto).toBeInTheDocument();
  

    // Verifica se o elemento com data-testid está presente
    const dataTestId = screen.getByTestId('Olha só que legal minha miniatura do Batmóvel.');
    expect(dataTestId).toBeInTheDocument();
})
})
