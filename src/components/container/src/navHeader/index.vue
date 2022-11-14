<template>
    <div class="header" @click="toggle">
        <el-icon-expand v-if="collapse"></el-icon-expand>
        <el-icon-fold v-else></el-icon-fold>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
} from 'vue'

export default defineComponent({
    emits: ['update:collapse'],
    props: {
        collapse: Boolean
    },
    setup(props, { emit }) {
        function toggle() {
            emit('update:collapse', !props.collapse)
        }
        return {
            toggle
        }
    }
})

</script>

<style lang="scss" scoped>
.header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
}

svg {
    width: 1em;
    height: 1em;
}
</style>