<template>

    <section>
        <p v-if="isOccluded === false" :class="cellClass" :data-tense-type="tenseType" v-html="sentenceHTMLContent"></p>
        <p v-else :class="cellClass" :data-tense-type="tenseType" @click="checkAnswer()">
            <img :src="require('../assets/img/clouds/' + randomImage())" :data-tense-type="tenseType" width="100%" />
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
    }
}

</script>
<style>
@import 'normalize.css/normalize.css';
</style>
<style src="@/assets/styles.css">
