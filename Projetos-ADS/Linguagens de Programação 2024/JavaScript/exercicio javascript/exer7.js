
let nomeBeneficiario;
let valorConta;
let dataVencimento;

// Neste bloco, temos as funções gets para ler os valores de entrada:
nomeBeneficiario = gets();
valorConta = parseFloat(gets());
dataVencimento = gets();

// Formata a mensagem de confirmação concatenando as informações fornecidas pelo usuário
const mensagemConfirmacao = `Pagamento Agendado! Valor: R$ ${valorConta}, vencimento ${dataVencimento}.`;

// Imprime a mensagem de confirmação
print(mensagemConfirmacao);
