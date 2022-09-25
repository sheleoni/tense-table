<template>

  <!-- /// Tense Table Start /// -->
  <section id="tense-table">
    <!-- Timeline -->
    <section id="timeline-heading">
      <div id="line"></div>
      <p id="timeline-past" alt="A cross (❌) on the timeline indicating the past.">❌</p>
      <p id="timeline-present" alt="A cross (❌) on the timeline indicating the present.">❌</p>
      <p id="timeline-future" alt="An arrowhead on the timeline indicating the future.">
        <span class="arrow right"></span> <!-- show right arrow in desktop view-->
        <span class="arrow up"></span> <!-- show right arrow in smartphone view-->
      </p>
    </section>

    <!-- Score Area -->
    <section id="score-area">
      <template v-if="isGameStarted">
        <p>Your Score:
          {{score}}
        </p>
      </template>
      <template v-else>
        <button @click="startGame()">Start Game!</button>
      </template>

    </section>

    <!-- /// Past Tense /// -->
    <h2 class="past">Past</h2>

    <h3 class="simple">Simple</h3>

    <!-- Past Simple -->
    <p v-if="isOccluded === false" class="past-simple" v-html="sentences.past.simple"></p>
    <p v-else class="past-simple">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>

    <!-- Past Continuous -->
    <h3 class="continuous">Continuous/ Progressive</h3>

    <p v-if="isOccluded === false" class="past-continuous" v-html="sentences.past.continuous"></p>
    <p v-else class="past-continuous">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>

    <!-- Past Perfect -->
    <h3 class="perfect">Perfect</h3>
    <p v-if="isOccluded === false" class="past-perfect" v-html="sentences.past.perfect"></p>
    <p v-else class="past-perfect">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>


    <!-- Past Perfect Continuous -->
    <h3 class="perfect-continuous">Perfect Continuous/ Perfect Progressive</h3>
    <p v-if="isOccluded === false" class="past-perfect-continuous" v-html="sentences.past.perfectContinuous"></p>
    <p v-else class="past-perfect-continuous">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>


    <!-- /// Present Tense /// -->
    <h2 class="present">Present</h2>

    <!-- Present Simple -->
    <h3 class="repeated-heading">Simple</h3>
    <p v-if="isOccluded === false" class="present-simple" v-html="sentences.present.simple"></p>
    <p v-else class="present-simple">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>


    <!-- Present Continuous -->
    <h3 class="repeated-heading">Continuous/ Progressive</h3>
    <p v-if="isOccluded === false" class="present-continuous" v-html="sentences.present.continuous"></p>
    <p v-else class="present-continuous">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>


    <!-- Present Perfect -->
    <h3 class="repeated-heading">Perfect</h3>
    <p v-if="isOccluded === false" class="present-perfect" v-html="sentences.present.perfect"></p>
    <p v-else class="present-perfect">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>


    <!-- Present Perfect Continuous -->
    <h3 class="repeated-heading">Perfect Continuous/ Perfect Progressive</h3>
    <p v-if="isOccluded === false" class="present-perfect-continuous" v-html="sentences.present.perfectContinuous"></p>
    <p v-else class="present-perfect-continuous">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>



    <!-- /// Future Tense /// -->
    <h2 class="future">Future</h2>

    <!-- Future Simple -->
    <h3 class="repeated-heading">Simple</h3>
    <p v-if="isOccluded === false" class="future-simple" v-html="sentences.future.simple"></p>
    <p v-else class="future-simple">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>


    <!-- Future Continuous -->
    <h3 class="repeated-heading">Continuous/ Progressive</h3>
    <p v-if="isOccluded === false" class="future-continuous" v-html="sentences.future.continuous"></p>
    <p v-else class="future-continuous">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>


    <!-- Future Perfect -->
    <h3 class="repeated-heading">Perfect</h3>
    <p v-if="isOccluded === false" class="future-perfect" v-html="sentences.future.perfect"></p>
    <p v-else class="future-perfect">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>


    <!-- Future Perfect Continuous -->
    <h3 class="repeated-heading">Perfect Continuous/ Perfect Progressive</h3>
    <p v-if="isOccluded === false" class="future-perfect-continuous" v-html="sentences.future.perfectContinuous"></p>
    <p v-else class="future-perfect-continuous">
      <img :src="require('../assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth" />
    </p>


  </section>

</template>

<script>
export default {
  name: 'TenseTable',
  props: {
    msg: String
  },
  data() {
    return {
      playGame: `<button> Start Game </button>`,
      isGameStarted: false,
      isOccluded: false,
      occluderImages: [`Yellow_Cloud.png`, `Yellow_Cloud2.png`],
      occluderImageWidth: `100%`,
      score: 0,
      sentences: {
        past: {
          simple: `I <em class="verb">played</em>.`,
          continuous: `I was <em class="verb">playing</em>.`,
          perfect: `I had <em class="verb">played</em>.`,
          perfectContinuous: `I had been <em class="verb">playing.</em>`,
        },
        present: {
          simple: `I <em class="verb">play</em>.`,
          continuous: `I am <em class="verb">playing</em>.`,
          perfect: `I have <em class="verb">played</em>.`,
          perfectContinuous: `I have been <em class= "verb" >playing</em>.`,
        },
        future: {
          simple: `I will <em class="verb">play</em>.`,
          continuous: `I will be <em class="verb">playing</em>.`,
          perfect: `I will have <em class="verb">played</em>.`,
          perfectContinuous: `I will have been <em class="verb">playing</em>.`,
        }
      },

    }
  },
  methods: {
    startGame() {
      this.isGameStarted = true;
      this.occludeSentences();
    },
    occludeSentences() {
      this.isOccluded = true;
      console.log(this.isOccluded);
    },
    randomOccluderImage() {
      const images = this.occluderImages;
      const randomImage = images[Math.floor(Math.random() * images.length)];
      console.log(randomImage);
      return randomImage;
    }

  }
}

</script>
