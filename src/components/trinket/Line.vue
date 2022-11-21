<script setup>
import { defineProps } from 'vue';
import { rarity_color } from '../../shared_scripts/rarityCalculations.js'
 


const data = defineProps({
    ftitle: String,
    items: Array,
    color: String
})
</script>

<template>

    <div class="holder flex-between border-window align-center">
        <h4 class="fs_18px" :style="rarity_color(data.color)"> {{ data.ftitle }} </h4>
        <a href="#" class="field border-bump link fs_14px" v-for="item in data.items">{{ item }}</a>
    </div>

</template>

<style scoped>

.flex-between {
    display: flex;
    justify-content: space-between;
}

.border-window {
    background: #fff;
    box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;

    padding: 4px 9px;
}

.align-center {
    align-items: center;
}

.field {
    box-sizing: border-box;
    padding: 6px 8px;

    line-height: 0.85;
}

.border-bump {
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
}

a.link {
    display: block;
    width: max-content;
    max-width: 100px;

    color: unset;
    transition: unset;

    line-break: anywhere;
    background-color: #c0c0c0;
}

a.link:hover {
    background-color: #c0c0c0;
}

a.link:hover h4 {
    color: #222;
}

.fs_14px {
    font-size: 14px;
}

.fs_18px{
    font-size: 18px;
}

</style>