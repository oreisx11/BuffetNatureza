document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Captura os valores dos campos com validação básica
  const nomeCompleto = document.getElementById('nomeCompleto')?.value.trim() || '';
  const email = document.getElementById('email')?.value.trim() || '';
  const dataEvento = document.getElementById('dataEvento')?.value.trim() || '';
  const numeroConvidados = document.getElementById('numeroConvidados')?.value.trim() || '';
  const mensagem = document.getElementById('mensagem')?.value.trim() || '';

  // Verifica se há pelo menos um campo preenchido
  if (!nomeCompleto && !email && !dataEvento && !numeroConvidados && !mensagem) {
    alert('Por favor, preencha pelo menos um campo.');
    return;
  }

  // Formata a mensagem com codificação de URL
  const mensagemFormatada = encodeURIComponent(
    `Novo contato da Buffet Natureza Viva - ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}:%0A` +
    `Nome: ${nomeCompleto}%0A` +
    `E-mail: ${email}%0A` +
    `Data do Evento: ${dataEvento}%0A` +
    `Número de Convidados: ${numeroConvidados}%0A` +
    `Mensagem: ${mensagem}`
  );

  // Número do WhatsApp (sem espaços, + ou parênteses)
  const numeroWhatsApp = '5511970629125';

  // Cria o link para o WhatsApp
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;

  // Redireciona para o WhatsApp em uma nova aba
  window.open(url, '_blank');
});