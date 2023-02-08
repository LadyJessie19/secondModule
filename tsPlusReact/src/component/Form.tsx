import React, { ChangeEvent } from "react";

type State = {
  cep: string;
  rua: string;
  num: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
};

class UserForm extends React.Component<{}, State> {
  state = {
    cep: "",
    rua: "",
    num: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  };

  showInputValue = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <h1>SEJA BEM VINDO(A)</h1>
        <label htmlFor="cep">Digite seu CEP:</label>
        <br />
        <input
          id="cep"
          type="text"
          value={this.state.cep}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.setState({ cep: event.target.value })
          }
        />
        <br />

        <label htmlFor="rua">Digite sua rua:</label>
        <br />
        <input
          id="rua"
          type="text"
          value={this.state.rua}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.setState({ rua: event.target.value })
          }
        />
        <br />

        <label htmlFor="num">Digite o numero:</label>
        <br />
        <input
          id="num"
          type="text"
          value={this.state.num}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.setState({ num: event.target.value })
          }
        />
        <br />

        <label htmlFor="complemento">Digite o complemento:</label>
        <br />
        <input
          id="complemento"
          type="text"
          value={this.state.complemento}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.setState({ complemento: event.target.value })
          }
        />
        <br />

        <label htmlFor="bairro">Digite seu bairro:</label>
        <br />
        <input
          id="bairro"
          type="text"
          value={this.state.bairro}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.setState({ bairro: event.target.value })
          }
        />
        <br />

        <label htmlFor="cidade">Digite sua cidade:</label>
        <br />
        <input
          id="cidade"
          type="text"
          value={this.state.cidade}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.setState({ cidade: event.target.value })
          }
        />
        <br />

        <label htmlFor="estado">Digite seu estado:</label>
        <br />
        <input
          id="estado"
          type="text"
          value={this.state.estado}/>
        
        <br />
        <select id="estado" name="estado" onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({ estado: event.target.value })}>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
          <option value="EX">Estrangeiro</option>
        </select>

        <button onClick={this.showInputValue}>Enviar</button>
      </form>
    );
  }
}

export default UserForm;
//<pre>{JSON.stringify(this.state, null, 2)}</pre>