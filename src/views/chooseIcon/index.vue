<template>
    <e-choose-icon v-model:visible="visible" title="选择图标">
        选择图标
    </e-choose-icon>
</template>

<script lang='ts'>
import eChooseIcon from '@/components/chooseIcon/src/index.vue'
import { ref, defineComponent } from 'vue'
export default defineComponent({
    components: {
        eChooseIcon
    },
    setup() {
        let visible = ref(false)
        return {
            visible
        }
    }
})
</script>
