import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários', () => {
        render(<PostComment/>);
        const btnSubmit = screen.getByTestId('btn-submit');
        const txtArea = screen.getByTestId('txt-area');

        // Alteração do estado e inserção do primeiro comentário
        fireEvent.change(txtArea, {target: {value: "Primeiro comentário"}});
        fireEvent.click(btnSubmit);

        // Alteração do estado e inserção do segundo comentário
        fireEvent.change(txtArea, {target: {value: "Segundo comentário"}});
        fireEvent.click(btnSubmit);

        // Validação das inserções
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});