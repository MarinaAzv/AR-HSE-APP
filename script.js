// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);


//interaction
  document.addEventListener('DOMContentLoaded', function() {
        const questions = [
          { question: 'Qual é a <strong>luva térmica?</strong>', correctButton: 'l1' },
          { question: 'Qual é a <strong>luva de corte?</strong>', correctButton: 'l2' },
          { question: 'Qual é a <strong>luva química?</strong>', correctButton: 'l3' },
          { question: 'Qual é a <strong>luva de alta tensão?</strong>', correctButton: 'l4' }
        ];
        const feedbackMessages = {
          l1: 'A luva deve conter um pictograma de <strong>fogo</strong> e o código <strong>EN407</strong>. Utilizada em: impressoras 3D, termoformadoras, forjas, prensas de metal, máquina de solda, estufas, entre outros.',
          l2: 'A luva deve conter um pictograma que se assemelha a uma <strong>"mão fazendo joia"</strong> e o código <strong>442CP</strong>. Utilizada em: estiletes, espátulas, serras em geral, facas, máquina de corte a laser, entre outros.',
          l3: 'A luva deve conter um <strong>pictograma</strong> que se assemelha a um <strong>Erlenmeyer</strong>. Utilizada em: laboratórios, limpeza industrial, manipulação de pesticidas, entre outros.',
          l4: 'A luva é feita de <strong>borracha preta</strong>. Essas luvas são projetadas para oferecer isolamento elétrico e proteção contra a corrente elétrica, evitando acidentes graves.'
        };

        let currentQuestionIndex = 0;

        function showQuestion() {
          if (currentQuestionIndex < questions.length) {
            document.getElementById('question-text').innerHTML = questions[currentQuestionIndex].question;
            document.getElementById('feedback-text').textContent = '';
          } else {
            document.getElementById('question-text').textContent = 'Parabéns, você concluiu todas as perguntas!';
            document.getElementById('feedback-text').textContent = '';
            launchConfetti();// Chamando a função para lançar confetes
          }
        }

        function handleButtonClick(event) {
          const buttonId = event.target.id;
          if (buttonId === questions[currentQuestionIndex].correctButton) {
            document.getElementById('feedback-text').textContent = 'Correto!';
            document.getElementById('feedback-text').className = 'correct';
            currentQuestionIndex++;
            setTimeout(showQuestion, 2000);
          } else {
            document.getElementById('feedback-text').innerHTML = 'Errado! ' + feedbackMessages[questions[currentQuestionIndex].correctButton];
            document.getElementById('feedback-text').className = 'incorrect';
          }
        }

        document.querySelectorAll('.glove-btn').forEach(button => {
          button.addEventListener('click', handleButtonClick);
        });

        showQuestion();
    
    
      function launchConfetti() {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    
    
      });