<template>
    <z-choose-area @send-data="sendData"></z-choose-area>
</template>

<script lang='ts'>
import {
    defineComponent,
} from 'vue';
import zChooseArea from '@/components/chooseArea/src/index.vue'
interface Data {
    name: string;
    code: string
}
interface paramsType {
    provinceData: Data;
    cityData: Data
    areaData: Data
}
export default defineComponent({
    components: { zChooseArea },
    setup() {
        function sendData(params: paramsType) {
            console.log(params);
        }
        return {
            sendData
        }
    }
})
</script>

