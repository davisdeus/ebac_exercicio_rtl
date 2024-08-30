import { render, screen, fireEvent } from "@testing-library/react";
import PostComments  from "../../PostComments/index";
import "@testing-library/jest-dom/extend-expect"

describe('Componente PostComments', () => {
  it('adicionando 2 comentarios', () => {
    render(
      <PostComments  />
    )

     // Simula a adição de um comentário
    const textareaComent = screen.getByRole('textbox');
    const buttonComent = screen.getByRole('button', { name: /comentar/i });
    
    fireEvent.change(textareaComent, { target: { value: 'Comentario novo' } });
    fireEvent.click(buttonComent)

     // Verifica se o comentário foi adicionado
    const novoComentario = screen.getByTestId('Comentario novo ')
    expect(novoComentario).toBeInTheDocument()
  })
})