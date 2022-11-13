<template>
    <el-container>
        <el-aside width="auto">
            <navSide :collapse="isCollapse"></navSide>
        </el-aside>
        <el-container>
            <el-header>
                <navHeader v-model:collapse="isCollapse"></navHeader>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import navSide from './navSide/index.vue'
import navHeader from './navHeader/index.vue'
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "Contianer",
    components: {
        navSide,
        navHeader
    },
    setup() {
        let isCollapse = ref<boolean>(true)

        return {
            isCollapse,
        }
    }
})
</script>

<style lang="scss" scoped>
.el-header {
    padding: 0;
    border-bottom: 1px solid #eee;
}
</style>