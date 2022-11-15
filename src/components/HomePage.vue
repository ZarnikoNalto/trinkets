<script setup>
import Trinket from './Trinket.vue'
import { rareToColor, _RARITY } from '../shared_scripts/rarityCalculations.js'

</script>

<template>
    
    <Trinket 
        display-name = "MLP Trinket"
        description = "Самое лучшее и магически сильное ожерелье, дарующее своему пользователю уйму радужных возможностей!"
        :rarity = "_RARITY.legendary"
        icon="https://media.discordapp.net/attachments/1033849013407055953/1042111744660742204/unknown.png"
        :skill_req = "{
            REBORIA: 5,
            THEURGY: 4,
            CUTEST: 10
        }"
        :attr_req = "{
            DETERMINATION: 5,
            PERCEPTION: 2
        }"
        :buffs = "{
            extra_income_precision: 10,
            extra_focus_price: 5,
        }"
        :abilities = "['Полёт - Позволяет летать', 'Радуга - Позволяет блевать радугой']"
        :resists = '["Свет - Неуязвимость к тьме", "Я - Не придумал ещё резист"]'
        :applied_statuses = '["Красота - Делает пользователя невероятной красоты!", "Общение - Позволяет пользователю общаться с природой."]'
    />

</template>

<style scoped>

</style>