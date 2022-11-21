<script setup>
import { rarity_text_shadow } from '../shared_scripts/rarityCalculations.js';
import { ref, onMounted } from 'vue';
import Field from './trinket/Field.vue';
import Line from './trinket/Line.vue';

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

function objToArr(obj) {
    const result = [];
    for (let key in obj) {
        result.push(`${key}: ${obj[key]}`);
    }
    return result;
}

// onMounted(() => {
//     debugger;
//     document.querySelectorAll('.link').forEach((item)=>{
//         item.style.color = `var(${trinket.rarity_color})`;
//     })
// });

</script>

<template>
    <div class="window trinket">
        <div class="title-bar">
            <h3 class="title-bar-text displayName">
                {{ trinket.displayName }}
            </h3>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>

        <div class="window-body trinket-body">
            <div class="">
                <div class="diplayNameHolder">

                    <i class="ra icon" :class="trinket.icon === undefined ? 'ra-crown-of-thorns' : `${trinket.icon}`"
                        :style="rarity_text_shadow(trinket.rarity)" />

                    <h3 class="title-bar-text displayName">
                        {{ trinket.displayName }}
                    </h3>
                </div>

                <div class="field description border-bump line" v-if="trinket.description">
                    <h4>Описание:</h4>
                    <p>
                        {{ trinket.description }}
                    </p>
                </div>

                <div class="requirments line">
                    <ul class="tree-view skill_req" v-if="trinket.skill_req">
                        <li>
                            Скиллы
                        </li>
                        <ul>
                            <li class="sub-line" v-for="(val) in objToArr(trinket.skill_req)">
                                {{ val }}
                            </li>
                        </ul>
                    </ul>

                    <ul class="tree-view attr_req" v-if="trinket.skill_req">
                        <li>
                            Аттрибуты
                        </li>
                        <ul>
                            <li class="sub-line" v-for="(val) in objToArr(trinket.attr_req)">
                                {{ val }}
                            </li>
                        </ul>
                    </ul>
                </div>

                <div class="links line">
                    <Line ftitle="Абилки" :items="trinket.abilities" :color="trinket.rarity"/>
                    <Line ftitle="Резисты" :items="trinket.resists" :color="trinket.rarity"/>
                    <Line ftitle="Статусы" :items="trinket.applied_statuses" :color="trinket.rarity"/>
                    <Line ftitle="Баффы" :items="trinket.buffs" :color="trinket.rarity"/>
                </div>

            </div>

        </div>
    </div>
</template>



<style scoped>
/* @import url('../assets/98.css'); */

.window {
    color: #222;
    -webkit-font-smoothing: none;
    /* font-family: "Pixelated MS Sans Serif", Arial; */
    font-size: 12px
}

.trinket {
    width: 600px;
}

.displayName {
    font-size: 18px;
}

.diplayNameHolder{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.diplayNameHolder .displayName {
    display: block;
    font-family: 'Press Start 2P', cursive;
    width: max-content;

    margin-bottom: 20px;
    margin-top: 20px;

    color: #222;
}

.flex-center {
    display: flex;
    place-items: center;
    justify-content: center;
}

h4 {
    font-size: 14px;
}

.links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.trinket-body {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1rem;

    padding: 0 1rem;
}

.icon{
    font-size: 36px;
    display: block;
    text-align: center;
}

.title-bar-controls {
    margin-right: 5px;
}

.requirments {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;

    margin-bottom: 5px;
}

.requirments ul {
    margin-left: 0;
    /* margin-right: 5px; */
}

li {
    margin-bottom: 5px;
}

.icon {
    margin-bottom: 5px;
}

.h_100 {
    height: 100%;
}

.fs_12px {
    font-size: 12px;
}

.fs_14px {
    font-size: 14px;
}

.field {
    box-sizing: border-box;
    padding: 6px 8px;

    line-height: 0.85;
}

.line {
    margin-bottom: 5px;
}

.align-center {
    align-items: center;
}

.flex-between {
    display: flex;
    justify-content: space-between;
}

.border-bump {
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
}

.border-window {
    background: #fff;
    box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;

    padding: 4px 9px;
}
</style>