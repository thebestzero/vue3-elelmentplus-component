<template>
    <el-button type="primary" @click="handleClick">
        <slot></slot>
    </el-button>
    <div class="m-choose-icon-dialog-body-height">
        <el-dialog v-model="dialogVisible" :title="title">
            <div class="container">
                <div class="item" v-for="(item, index) in Object.keys(ElementPlusIconsVue)" key="index"
                    @click="clickItem(item)">
                    <div class="icon">
                        <component :is='`el-icon${toLine(item)}`'></component>
                    </div>
                    <div class="text">{{ item }}</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script lang='ts'>
import {
    defineComponent,
    ref,
    watch
} from 'vue';
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { toLine } from '@/utils';
import { useCopy } from '@/hooks/useCopy';
export default defineComponent({
    components: {},
    props: {
        visible: Boolean,
        title: String
    },

    emits: ["update:visible"],
    setup(props, { emit }) {
        let dialogVisible = ref<boolean>(props.visible)
        function handleClick() {
            emit('update:visible', !props.visible)
        }
        function clickItem(item: string) {
            let text: string = `el-icon${toLine(item)}`
            useCopy(text)
            dialogVisible.value = false
        }
        watch(() => props.visible, (val) => {
            dialogVisible.value = val
        })
        // 监听组件内部的dialogVisible变化
        watch(() => dialogVisible.value, val => {
            emit('update:visible', val)
        })
        return {
            dialogVisible,
            handleClick,
            ElementPlusIconsVue,
            toLine,
            clickItem
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .item {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        cursor: pointer;
        height: 70px;

        .text {
            font-size: 12px;
        }

        .icon {
            flex: 1;
        }
    }

}

svg {
    width: 2em;
    height: 2em;
}
</style>