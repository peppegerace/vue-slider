const {createApp} = Vue;

createApp ({
  data() {
    return {
      gameData: [
        {
          title: 'Marvel\'s Spiderman Miles Morales',
          description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
          title: 'Ratchet & Clank: Rift Apart',
          description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
          title: 'Fortnite',
          description: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
        },
        {
          title: 'Stray',
          description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
        },
        {
          title: 'Marvel\'s Avengers',
          description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        },
      ],
      posters:[
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp'
      ],
      counter: 0,
      
    }
  },

  methods:{
    nextPrev(isNext) {
      // incremento o decremento il counter per scorrere le immagini
      isNext ? this.counter++ : this.counter--;

      // controllo di validità del counter
      if(this.counter === this.posters.length) {
        this.counter = 0;
      } else if (this.counter < 0) {
        this.counter = this.posters.length -1;
      }
    }
  },

  mounted() {
    setInterval(() => {
      this.nextPrev(true);
    }, 5000);
  }
}).mount('#app')