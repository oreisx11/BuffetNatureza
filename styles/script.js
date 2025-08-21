

const slides = document.querySelectorAll('.carousel-slide');
let current = 0;

function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(showNextSlide, 3000); 


document.getElementById('whatsappForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pegar os valores do formulário
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const email = document.getElementById('email').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Formatar o número de telefone (remover caracteres não numéricos)
            const numeroWhatsapp = telefone.replace(/\D/g, '');
            
            // Criar a mensagem que será enviada
            const texto = `Olá, meu nome é ${nome}.\n\n` +
                          `Assunto: ${assunto}\n` +
                          (email ? `E-mail: ${email}\n` : '') +
                          `Mensagem: ${mensagem}`;
            
            // Codificar a mensagem para URL
            const textoCodificado = encodeURIComponent(texto);
            
            // Criar o link do WhatsApp
            const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${textoCodificado}`;
            
            // Abrir o WhatsApp em uma nova aba
            window.open(urlWhatsapp, '_blank');
        });


