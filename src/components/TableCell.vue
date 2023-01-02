<template>

    <section :data-tense-type="tenseType" :class="cellClass">
        <p v-if="isOccluded === false" v-html="sentenceHTMLContent" :data-tense-type="tenseType"></p>
        <p v-else @click="checkAnswer()" :data-tense-type="tenseType">
            <img :src="require('../assets/img/clouds/' + randomImage())" width="100%" :data-tense-type="tenseType" />
        </p>
    </section>

</template>

<script>

export default {
    name: 'TableCell',
    components: {},
    props: {
        sentenceHTMLContent: String,
        isOccluded: Boolean,
        cellClass: String,
        tenseType: String,
        randomImage: Function,
        imageWidth: String,
        checkAnswer: Function,
    }
}

</script>
<style>
@import 'normalize.css/normalize.css';
</style>
<style src="@/assets/styles.css">
