import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import thrash from '../../assets/images/icons/thrash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Thyago Nunes</strong>
              <small>Instagram</small>
            </div>
            <span>devthyagonunes@gmail.com</span>
            <span>(81) 99477-9774</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={thrash} alt="Thrash" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Thyago Nunes</strong>
              <small>Instagram</small>
            </div>
            <span>devthyagonunes@gmail.com</span>
            <span>(81) 99477-9774</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={thrash} alt="Thrash" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Thyago Nunes</strong>
              <small>Instagram</small>
            </div>
            <span>devthyagonunes@gmail.com</span>
            <span>(81) 99477-9774</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={thrash} alt="Thrash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
