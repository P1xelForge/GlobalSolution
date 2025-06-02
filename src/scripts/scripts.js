const imagens = [
      '/src/assets/enchentes1.jpeg',
      '/src/assets/enchentes2.jpeg',
      '/src/assets/enchentes3.jpeg'
    ];

    let index = 0;
    const slideshow = document.querySelector('.slideshow-container');

    function trocarImagem() {
      slideshow.style.backgroundImage = `url('${imagens[index]}')`;
      index = (index + 1) % imagens.length;
    }

    trocarImagem();
    setInterval(trocarImagem, 5000);