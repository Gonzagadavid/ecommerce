import axios from "axios";
import { FormEvent, useCallback, useEffect, useState } from "react";

const useAddress = () => {
  const [cep, setStateCep] = useState('');
  const [address, setAddress] = useState({});

  const getAddress = useCallback(async() => {
    if (cep.length < 8) return undefined;
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const { erro, ibge, gia, siafi, ddd, complemento, ...addressData } = data;
    if (erro) setAddress({});
    setAddress(addressData);
  }, [cep]);

  useEffect(() => {
    getAddress();
  }, [getAddress]);

  const setCep = (event: FormEvent<Element>) => {
    const { value } = event.target as HTMLInputElement;
    if (/\D/.test(value) || value.length > 8) return undefined;

    setStateCep(value);
  };

  return { setCep, address, cep };
};

export default useAddress;
