// Migrate to Vue 2

const tenseTable = new Vue({
    el: '#tense-table',
    data() {
        return {
            bigTitle: "Tense Tabooool",
            sentenceList: [
                // future tense
                {
                    sentence: `I will play.`,
                    tenseTime: 'future',
                    tenseType: 'simple',
                },
                {
                    sentence: `I will be playing.`,
                    tenseTime: 'future',
                    tenseType: 'continuous',
                },
                // present tense

                // past tense

            ]
        }
    }

})