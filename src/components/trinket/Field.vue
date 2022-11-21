<script setup>
const props = defineProps({
    ftitle: String,
    content: Object
});
</script>


<template>
    <div class="field" v-if="props.content">
        <div>
            <ul class="tree-view">
                <details>
                    <summary>{{ props.ftitle }}</summary>
                    <li v-for="(val) in props.content">
                        {{ val }}
                    </li>
                </details>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.field {
    box-sizing: border-box;
    padding: 6px 8px;
    margin-bottom: 5px;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf
}

.field:last-child {
    margin-bottom: 0px;
}

.line {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.line button {
    height: max-content;
}

h4 {
    font-size: 14px;
    margin-bottom: 3px;
}

ul {
    margin-left: 8px;
    padding-left: 8px
}

li {
    margin-left: 18px;
    margin-bottom: 5px;

    font-size: 12px;
}

li:first-of-type{
    margin-top: 5px;
}

ul.tree-view {
    background: unset;
    box-shadow: unset;
}
ul.tree-view details > summary::before{
    width: 12px;
    height: 12px;
}

</style>