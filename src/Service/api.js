export async function ViaCep(cep) {
  return fetch (`http://viacep.com.br/ws/${cep}/json/`,{
    headers: {
      Accept: "application/json"
    }
  });
}