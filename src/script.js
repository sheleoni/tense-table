// Migrate to Vue 2

const tenseTable = new Vue({
    el: 'tense-table',
    data() {
        return {
            bigTitle:
                sentenceList: [
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
            ]
        }
    }

})