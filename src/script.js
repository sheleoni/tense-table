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
                {
                    sentence: `I will have played.`,
                    tenseTime: 'future',
                    tenseType: 'perfect',
                },
                {
                    sentence: `I will have been playing.`,
                    tenseTime: 'future',
                    tenseType: 'perfect continuous',
                },
                // present tense
                {
                    sentence: `I play.`,
                    tenseTime: 'present',
                    tenseType: 'simple',
                },
                {
                    sentence: `I am playing.`,
                    tenseTime: 'present',
                    tenseType: 'continuous',
                },
                {
                    sentence: `I have played.`,
                    tenseTime: 'present',
                    tenseType: 'perfect',
                },
                {
                    sentence: `I have been playing.`,
                    tenseTime: 'present',
                    tenseType: 'perfect continuous',
                },

                // past tense
                {
                    sentence: `I played.`,
                    tenseTime: 'past',
                    tenseType: 'simple',
                },
                {
                    sentence: `I was playing.`,
                    tenseTime: 'past',
                    tenseType: 'continuous',
                },
                {
                    sentence: `I had played.`,
                    tenseTime: 'past',
                    tenseType: 'perfect',
                },
                {
                    sentence: `I had been playing.`,
                    tenseTime: 'past',
                    tenseType: 'perfect continuous',
                },
            ]
        }
    }

})