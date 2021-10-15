import { useEffect, useState } from "react";

function BuscaCep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  console.log(cep);

  const changeCep = (cep) => {
    setEndereco(null);
    if (cep.length > 7) {
      console.log('state mudou');
      setCep(cep);
    }
  }

  useEffect(async () => {
    console.log('chamou o useEffect');
    if (cep === '') return;
    try {
      const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await request.json();
      setEndereco(dados);
    } catch (error) {
      console.log(error);
    }
  }, [cep]);

  return (
    <div>
      <input type="text" maxLength={8} onChange={(ev) => changeCep(ev.target.value)} placeholder="Digite seu CEP" />
      {
        endereco && (
          <div>
            <p>Logradouro: {endereco.logradouro}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>Cidade/UF: {endereco.localidade}/{endereco.uf}</p>
          </div>
        )
      }

    </div>
  );
}

export default BuscaCep;