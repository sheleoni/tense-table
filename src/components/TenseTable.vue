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
      <p>Your Score:
        {{score}}
      </p>
    </section>

    <!-- Past Tense  -->
    <h2 class="past">Past</h2>

    <h3 class="simple">Simple</h3>
    <p class="past-simple">
      {{ sentences.past.simple }}
      I <em class="verb">played</em>.
    </p>

    <h3 class="continuous">Continuous/ Progressive</h3>
    <p class="past-continuous">
      {{ sentences.past.continuous }}
      I was <em class="verb">playing</em>.
    </p>

    <h3 class="perfect">Perfect</h3>
    <p class="past-perfect">
      {{ sentences.past.perfect }}
      I had <em class="verb">played</em>.
    </p>

    <h3 class="perfect-continuous">Perfect Continuous/ Perfect Progressive</h3>
    <p class="past-perfect-continuous">
      {{ sentences.past.perfectContinuous }}
      I had been <em class="verb">playing.</em>
    </p>

    <!-- Present Tense -->
    <h2 class="present">Present</h2>

    <h3 class="repeated-heading">Simple</h3>
    <p class="present-simple">
      {{ sentences.present.simple}}
      I <em class="verb">play</em>.
    </p>

    <h3 class="repeated-heading">Continuous/ Progressive</h3>
    <p class="present-continuous">
      {{ sentences.present.continuous }}
      I am <em class="verb">playing</em>.
    </p>

    <h3 class="repeated-heading">Perfect</h3>
    <p class="present-perfect">
      {{ sentences.present.perfect }}
      I have <em class="verb">played</em>.
    </p>

    <h3 class="repeated-heading">Perfect Continuous/ Perfect Progressive</h3>
    <p class="present-perfect-continuous">
      {{ sentences.present.perfectContinuous}}
      I have been <em class="verb">playing</em>.
    </p>

    <!-- Future Tense -->
    <h2 class="future">Future</h2>

    <h3 class="repeated-heading">Simple</h3>
    <p class="future-simple">
      {{ sentences.future.simple }}
      I will <em class="verb">play</em>.
    </p>

    <h3 class="repeated-heading">Continuous/ Progressive</h3>
    <p class="future-continuous">
      {{ sentences.future.continuous }}
      I will be <em class="verb">playing</em>.
    </p>

    <h3 class="repeated-heading">Perfect</h3>
    <p class="future-perfect">
      {{ sentences.future.perfect }}
      I will have <em class="verb">played</em>.
    </p>

    <h3 class="repeated-heading">Perfect Continuous/ Perfect Progressive</h3>
    <p class="future-perfect-continuous">
      {{ sentences.future.perfectContinuous }}
      I will have been <em class="verb">playing</em>.
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
      score: 0,
      sentences: {
        past: {
          simple: `I played.`,
          continuous: `I was playing.`,
          perfect: `I had played.`,
          perfectContinuous: `I had been playing.`,
        },
        present: {
          simple: `I play.`,
          continuous: `I am playing.`,
          perfect: `I have played.`,
          perfectContinuous: `I have been playing.`,
        },
        future: {
          simple: `I will play.`,
          continuous: `I will be playing.`,
          perfect: `I will have played.`,
          perfectContinuous: `I will have been playing.`,
        }
      },
    }
  }
}

</script>

<style>
/* @import ("src/assets/styles.css"); */
</style>