
<template>

    <!-- /// Tense Table Start /// -->
    <section id="app">


        <!-- Game area: sentence display -->
        <section id="gameDisplay">
            <template v-if="isGameStarted">
                <p v-html="shuffledSentenceList[currentDisplayNumber]" />
                <p id="answer">{{ getAnswerTenseType() }} {{ answerTenseType }}</p>
                <button id="next-question" @click="showNextSentence()">Next Sentence</button>
            </template>
        </section>

        <section id="tense-table">
            <!-- Timeline Visuals -->
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
                        {{ score }}
                    </p>
                </template>
                <template v-else>
                    <button @click="startGame()">Start Game!</button>
                </template>

            </section>

            <!-- Table Cells -->
            <!-- /// Past Tense /// -->
            <h2 class="past">Past</h2>

            <h3 class="simple">Simple</h3>
            <!-- Past Simple -->

            <TableCell :sentenceHTMLContent="sentences.past.simple" :isOccluded="isOccluded['past-simple']"
                cellClass="past-simple" tenseType="past-simple" :randomImage="randomOccluderImage"
                :imageWidth="occluderImageWidth" />


            <p v-if="isOccluded['past-simple'] === false" class="past-simple" data-tense-type="past-simple"
                v-html="sentences.past.simple">
            </p>
            <p v-else class="past-simple" data-tense-type="past-simple" @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + cellImageURL['past-simple'])" :width="occluderImageWidth"
                    data-tense-type="past-simple" />
            </p>

            <!-- Past Continuous -->
            <!-- Continuous / Progressive Header Toggler -->
            <h3 class="continuous" @click="switchContinuousProgressive()">
                <template v-if="isContinuous">Continuous</template>
                <template v-else>Progressive</template>
            </h3>

            <p v-if="isOccluded['past-continuous'] === false" class="past-continuous" data-tense-type="past-continuous"
                v-html="sentences.past.continuous"></p>
            <p v-else class="past-continuous" data-tense-type="past-continuous" @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + cellImageURL['past-continuous'])"
                    :width="occluderImageWidth" data-tense-type="past-continuous" />
            </p>

            <!-- Past Perfect -->
            <h3 class="perfect">Perfect</h3>

            <p v-if="isOccluded['past-perfect'] === false" class="past-perfect" data-tense-type="past-perfect"
                v-html="sentences.past.perfect"></p>
            <p v-else class="past-perfect" data-tense-type="past-perfect" @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + cellImageURL['past-perfect'])" :width="occluderImageWidth"
                    data-tense-type="past-perfect" />
            </p>

            <!-- Continuous / Progressive Header Toggler -->
            <h3 class="perfect-continuous" @click="switchContinuousProgressive()">
                <template v-if="isContinuous">Perfect Continuous</template>
                <template v-else>Perfect Progressive</template>
            </h3>

            <!-- Past Perfect Continuous -->
            <p v-if="isOccluded['past-perfect-continuous'] === false" class="past-perfect-continuous"
                data-tense-type="past-perfect-continuous" v-html="sentences.past.perfectContinuous"></p>
            <p v-else class="past-perfect-continuous" data-tense-type="past-perfect-continuous" @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + randomOccluderImage())"
                    data-tense-type="past-perfect-continuous" :width="occluderImageWidth" />
            </p>


            <!-- /// Present Tense /// -->
            <h2 class="present">Present</h2>

            <!-- Present Simple -->
            <h3 class="repeated-heading">Simple</h3>
            <p v-if="isOccluded['present-simple'] === false" class="present-simple" data-tense-type="present-simple"
                v-html="sentences.present.simple"></p>
            <p v-else class="present-simple" data-tense-type="present-simple" @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + randomOccluderImage())" data-tense-type="present-simple"
                    :width="occluderImageWidth" />
            </p>


            <!-- Present Continuous -->
            <h3 class="repeated-heading">Continuous/ Progressive</h3>
            <p v-if="isOccluded['present-continuous'] === false" class="present-continuous"
                data-tense-type="present-continuous" v-html="sentences.present.continuous"></p>
            <p v-else class="present-continuous" data-tense-type="present-continuous" @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + randomOccluderImage())" data-tense-type="present-continuous"
                    :width="occluderImageWidth" />
            </p>


            <!-- Present Perfect -->
            <h3 class="repeated-heading">Perfect</h3>

            <p v-if="isOccluded['present-perfect'] === false" class="present-perfect" data-tense-type="present-perfect"
                v-html="sentences.present.perfect"></p>
            <p v-else class="present-perfect" data-tense-type="present-perfect" @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + randomOccluderImage())" data-tense-type="present-perfect"
                    :width="occluderImageWidth" />
            </p>


            <!-- Present Perfect Continuous -->
            <h3 class="repeated-heading">Perfect Continuous/ Perfect Progressive</h3>

            <p v-if="isOccluded['present-perfect-continuous'] === false" class="present-perfect-continuous"
                data-tense-type="present-perfect-continuous" v-html="sentences.present.perfectContinuous">
            </p>
            <p v-else class="present-perfect-continuous" data-tense-type="present-perfect-continuous"
                @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + randomOccluderImage())"
                    data-tense-type="present-perfect-continuous" :width="occluderImageWidth" />
            </p>



            <!-- /// Future Tense /// -->
            <h2 class="future">Future</h2>

            <!-- Future Simple -->
            <h3 class="repeated-heading">Simple</h3>

            <p v-if="isOccluded['future-simple'] === false" class="future-simple" data-tense-type="future-simple"
                v-html="sentences.future.simple"></p>
            <p v-else class=" future-simple" data-tense-type="future-simple" @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth"
                    data-tense-type="future-simple" />
            </p>


            <!-- Future Continuous -->
            <h3 class="repeated-heading">Continuous/ Progressive</h3>
            <p v-if="isOccluded['future-continuous'] === false" class="future-continuous"
                data-tense-type="future-continuous" v-html="sentences.future.continuous">
            </p>
            <p v-else class="future-continuous" data-tense-type="future-continuous" @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + randomOccluderImage())" data-tense-type="future-continuous"
                    :width="occluderImageWidth" />
            </p>


            <!-- Future Perfect -->
            <h3 class="repeated-heading">Perfect</h3>
            <p v-if="isOccluded['future-perfect'] === false" class="future-perfect" data-tense-type="future-perfect"
                v-html="sentences.future.perfect"></p>
            <p v-else class="future-perfect" data-tense-type="future-perfect" @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + randomOccluderImage())" data-tense-type="future-perfect"
                    :width="occluderImageWidth" />
            </p>


            <!-- Future Perfect Continuous -->
            <h3 class="repeated-heading">Perfect Continuous/ Perfect Progressive</h3>
            <p v-if="isOccluded['future-perfect-continuous'] === false" class="future-perfect-continuous"
                data-tense-type="future-perfect-continuous" v-html="sentences.future.perfectContinuous"></p>
            <p v-else class="future-perfect-continuous" data-tense-type="future-perfect-continuous"
                @click="checkAnswer()">
                <img :src="require('@/assets/img/clouds/' + randomOccluderImage())" :width="occluderImageWidth"
                    data-tense-type="future-perfect-continuous" />
            </p>


        </section>
    </section>

</template>
  
<script>

import TableCell from '@/components/TableCell.vue';


export default {
    name: 'TenseTable',
    components: {
        TableCell
    },
    props: {
        msg: String
    },
    data() {
        return {
            answerTenseType: '',
            selectedTenseType: '',
            playGame: `<button> Start Game </button>`,
            isGameStarted: false,
            isContinuous: true,
            currentDisplayNumber: 0,
            occluderImages: [`Yellow_Cloud.png`, `Yellow_Cloud2.png`],
            occluderImageWidth: `100%`,
            score: 0,
            // sentence list
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
                },
            },
            // occlusion for each cell
            isOccluded: {
                'past-simple': false,
                'past-continuous': false,
                'past-perfect': false,
                'past-perfect-continuous': false,
                'present-simple': false,
                'present-continuous': false,
                'present-perfect': false,
                'present-perfect-continuous': false,
                'future-simple': false,
                'future-continuous': false,
                'future-perfect': false,
                'future-perfect-continuous': false,
            },
            cellImageURL: {
                'past-simple': '',
                'past-continuous': '',
                'past-perfect': '',
                'past-perfect-continuous': '',
                'present-simple': '',
                'present-continuous': '',
                'present-perfect': '',
                'present-perfect-continuous': '',
                'future-simple': '',
                'future-continuous': '',
                'future-perfect': '',
                'future-perfect-continuous': '',
            },
            shuffledSentenceList: [],
        }
    },
    methods: {
        switchContinuousProgressive() {
            this.isContinuous = !this.isContinuous;
        },
        startGame() {
            this.isGameStarted = true;
            this.occludeAllSentences();
            this.shuffleSentences();
        },
        shuffleSentences() {
            let list = this.sentenceList;
            let i = list.length;
            while (--i > 0) {
                let temp = Math.floor(Math.random() * (i + 1));
                [list[temp], list[i]] = [list[i], list[temp]];
            }
            this.shuffledSentenceList = list;
        },
        getAnswerTenseType() {
            // find the corret tense type for the current displayed item in Game mode
            let currentSentence = this.shuffledSentenceList[this.currentDisplayNumber];
            switch (currentSentence) {
                // Past Tense Cases
                case this.sentences.past.simple:
                    console.log("This is past simple tense!");
                    this.answerTenseType = "past-simple";
                    break;
                case this.sentences.past.continuous:
                    console.log("This is past continuous tense!");
                    this.answerTenseType = "past-continuous";
                    break;
                case this.sentences.past.perfect:
                    console.log("This is past perfect tense!");
                    this.answerTenseType = "past-perfect";
                    break;
                case this.sentences.past.perfectContinuous:
                    console.log("This is past perfect continuous tense!");
                    this.answerTenseType = "past-perfect-continuous";
                    break;
                // Present Tense Cases
                case this.sentences.present.simple:
                    console.log("This is present simple tense!");
                    this.answerTenseType = "present-simple";
                    break;
                case this.sentences.present.continuous:
                    console.log("This is present continuous tense!");
                    this.answerTenseType = "present-continuous";
                    break;
                case this.sentences.present.perfect:
                    console.log("This is present perfect tense!");
                    this.answerTenseType = "present-perfect";
                    break;
                case this.sentences.present.perfectContinuous:
                    console.log("This is present perfect continuous tense!");
                    this.answerTenseType = "present-perfect-continuous";
                    break;
                // Future Tense Cases
                case this.sentences.future.simple:
                    console.log("This is future simple tense!");
                    this.answerTenseType = "future-simple";
                    break;
                case this.sentences.future.continuous:
                    console.log("This is future continuous tense!");
                    this.answerTenseType = "future-continuous";
                    break;
                case this.sentences.future.perfect:
                    console.log("This is future perfect tense!");
                    this.answerTenseType = "future-perfect";
                    break;
                case this.sentences.future.perfectContinuous:
                    console.log("This is future perfect continuous tense!");
                    this.answerTenseType = "future-perfect-continuous";
                    break;
                default:
                    console.log("Give me a sentence!");
            }
        },
        checkAnswer() {
            this.getCellTenseType();
            if (this.selectedTenseType === this.answerTenseType) {
                console.log("correct!");
                this.score = this.score + 1;
                const sentenceObject = JSON.parse(JSON.stringify(this.isOccluded));
                console.log("The sentence object is:");
                console.log(sentenceObject);

                console.log(this.isOccluded);

                console.log("(this.isOccluded === sentenceObject);");
                console.log(this.isOccluded === sentenceObject);

                console.log(this.isOccluded.futureContinuous);
                this.$set(this.isOccluded, this.answerTenseType, false);

            } else {
                console.log("nah!");
            }
        },
        getCellTenseType() {
            this.selectedTenseType = event.target.getAttribute("data-tense-type");
            console.log(this.selectedTenseType);
            console.log(typeof (this.selectedTenseType));

        },
        showNextSentence() {
            this.currentDisplayNumber = this.currentDisplayNumber + 1;
        },
        occludeAllSentences() {
            const obj = this.isOccluded;
            Object.keys(obj).forEach(key => {
                obj[key] = true;
            });
        },
        randomOccluderImage() {
            const images = this.occluderImages;
            const randomImage = images[Math.floor(Math.random() * images.length)];
            return randomImage;
        }

    },
    mounted() {
        for (var item in this.cellImageURL) {
            const images = this.occluderImages;
            const randomImage = images[Math.floor(Math.random() * images.length)];
            this.cellImageURL[item] = randomImage;
        }
    },
    computed: {
        sentenceList: function () {
            // flattens the 2-dimensional object "sentences" to a 1 dimensional array (from sentences.past.simple to sentenceList[0].)
            const sentenceObject = JSON.parse(JSON.stringify(this.sentences));
            const sentenceList = [];
            for (let tenseType in sentenceObject) {
                for (let sentenceType in sentenceObject[tenseType]) {
                    let sentence = sentenceObject[tenseType][sentenceType];
                    sentenceList.push(sentence);
                }
            }
            return sentenceList;
        },
        answer: function () {
            return this.shuffledSentenceList[this.currentDisplayNumber]
        }
    }
}

</script>
  