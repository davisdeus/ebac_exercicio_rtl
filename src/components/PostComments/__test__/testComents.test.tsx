import { render, screen, fireEvent } from "@testing-library/react";
import PostComments  from "../../PostComments/index";
import "@testing-library/jest-dom/extend-expect"

describe('Componente PostComments', () => {
  it('adicionando 2 comentarios', () => {
    render(
      <PostComments />
    )

     // Simula a adição de um comentário
    const textareaComent = screen.getByRole('textbox');
    fireEvent.change(textareaComent, { target: { value: 'Comentario novo' } });

    // Verifica se o comentario está sendo digitado corretamente
    expect(textareaComent).toHaveValue('Comentario novo')

    const buttonComent = screen.getByRole('button', { name: /comentar/i });
    fireEvent.click(buttonComent)
    
    fireEvent.change(textareaComent, {
      target: {value: 'Outro comentario'},
    })

    // Verifica se o sengundo comentario está sendo digitado corretamente
    expect(textareaComent).toHaveValue('Outro comentario')

    fireEvent.click(buttonComent);
    
    //conferir se um comentario foi adicionado
    expect(screen.getByText( 'Outro comentario')).toBeInTheDocument()
    
    //conferir se outro comentario foi adicionado
    expect(screen.getAllByTestId("post-comment")).toHaveLength(2);

  })
});
