<template>
    <el-menu class="el-menu-vertical-demo" :collapse="collapse" default-active="1">
        <el-menu-item index="1">
            <el-icon>
                <el-icon-menu />
            </el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon>
                <el-icon-menu />
            </el-icon>
            <span>图标选择器</span>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon>
                <el-icon-menu />
            </el-icon>
            <span>item three</span>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <el-icon-menu />
            </el-icon>
            <span>item four</span>
        </el-menu-item>
    </el-menu>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        collapse: Boolean
    }
})

</script>
  
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
  