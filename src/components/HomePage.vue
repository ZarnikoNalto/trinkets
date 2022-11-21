<script setup>
import Trinket from './Trinket.vue'
import { rareToBorderColor, _RARITY } from '../shared_scripts/rarityCalculations.js'

</script>

<template>
    
    <Trinket 
        display-name = "MLP Trinket"
        description = "Самое лучшее и магически сильное ожерелье, дарующее своему пользователю уйму радужных возможностей!"
        :rarity = "_RARITY.mystic"
        icon="ra-alien-fire"
        :skill_req = "{
            REBORIA: 5,
            THEURGY: 4,
            CUTEST: 10
        }"
        :attr_req = "{
            DETERMINATION: 5,
            PERCEPTION: 2
        }"
        :buffs = '["Усиление привлекательности", "Бонус к отношениям"]'
        :abilities = "['Полёт', 'Радуга', 'Золото']"
        :resists = '["Свет", "Тьма"]'
        :applied_statuses = '["Красота", "Общение"]'
    />

</template>

<style scoped>

</style>