<script setup>
import { rareToColor } from '../shared_scripts/rarityCalculations.js';
import { ref } from 'vue';

const trinket = defineProps({
    displayName: String,
    description: String,
    icon: String,
    skill_req: Object,
    attr_req: Object,
    rarity: String,
    buffs: Object,
    abilities: Array,
    resists: Array,
    applied_statuses: Array
})

const abilitiesFlag = ref(false);
const resistFlag = ref(false);
const statFlag = ref(false);
const buffFlag = ref(false);

</script>

<template>
    <div class="window trinket">
        <div class="title-bar">
            <h4 class="title-bar-text displayName">
                {{ trinket.displayName }}
            </h4>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>

        <div class="window-body trinket-body">
            <div class="left_pad">
                <div class="field description" v-if="trinket.description">
                    <h4>Описание:</h4>
                    <p>
                        {{ trinket.description }}
                    </p>
                </div>

                <div class="field abilities" v-if="trinket.abilities">
                    <div class="title-bar-controls line">
                        <h4>
                            Абилки
                        </h4>
                        <button :aria-label="abilitiesFlag?'Restore':'Maximize'" @click="abilitiesFlag = !abilitiesFlag"></button>
                    </div>
                    <div v-if="abilitiesFlag">
                        <ul>
                            <li v-for="(val) in trinket.abilities">
                                {{ val }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="field resists" v-if="trinket.resists">
                    <div class="title-bar-controls line">
                        <h4>
                            Резисты
                        </h4>
                        <button :aria-label="resistFlag?'Restore':'Maximize'" @click="resistFlag = !resistFlag"></button>
                    </div>
                    <div v-if="resistFlag">    
                        <ul>
                            <li v-for="(val) in trinket.resists">
                                {{ val }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="field applied_statuses" v-if="trinket.applied_statuses">
                    <div class="title-bar-controls line">
                        <h4>
                            Статусы
                        </h4>
                        <button :aria-label="statFlag?'Restore':'Maximize'" @click="statFlag = !statFlag"></button>
                    </div>
                    <div v-if="statFlag">
                        <ul>
                            <li v-for="(val) in trinket.applied_statuses">
                                {{ val }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="field buffs" v-if="trinket.buffs">
                    <div class="title-bar-controls line">
                        <h4>
                            Баффы
                        </h4>
                        <button :aria-label="buffFlag?'Restore':'Maximize'" @click="buffFlag = !buffFlag"></button>
                    </div>
                    <div v-if="buffFlag">
                        <ul>
                            <li v-for="(val, skill) in trinket.buffs">
                                {{ skill }}: {{ val }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="right_pad">
                <div class="icon">
                    <img class="trinket-img" :src="trinket.icon" :style="rareToColor(trinket.rarity)"
                        v-if="trinket.icon" />
                </div>

                <div class="requirments">
                    <div class="field skill_req" v-if="trinket.skill_req">
                        <h4>
                            Скиллы
                        </h4>
                        <ul>
                            <li v-for="(val, skill) in trinket.skill_req">
                                {{ skill }}: {{ val }}
                            </li>
                        </ul>
                    </div>

                    <div class="field attr_req" v-if="trinket.attr_req">
                        <h4>
                            Аттрибуты
                        </h4>
                        <ul>
                            <li v-for="(val, skill) in trinket.attr_req">
                                {{ skill }}: {{ val }}
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>



<style scoped>
@import url('../assets/98.css');

.window {
    color: #222;
    -webkit-font-smoothing: none;
    font-family: "Pixelated MS Sans Serif", Arial;
    font-size: 11px
}

.trinket {
    width: 50vw;
}

h4 {
    font-size: 1.5em;
}

.trinket-body {
    display: grid;
    grid-template-columns: 2.5fr 1.6fr;
    column-gap: 1rem;

    padding: 0 1rem;
}

.trinket-img {
    --img-size: 100%;
    width: var(--img-size);
    /*height: var(--img-size);    */

    box-sizing: border-box;
    border-width: 5px;
    border-style: solid;
}

.title-bar-controls {
    margin-right: 5px;
}

.field {
    box-sizing: border-box;
    padding: 2px 5px;
    margin-bottom: 5px;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf
}

.field:last-child {
    margin-bottom: 0px;
}

.requirments {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    column-gap: 2px;
}

.requirments ul {
    margin-left: 8px;
    padding-left: 8px
}

.skill_req {
    height: 100%;
}

.attr_req {
    height: 100%;
}

.line{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.line button{
    height: max-content;
}
</style>