<template>
    <!-- 省 -->
    <el-select v-model="province" placeholder="请选择省">
        <el-option v-for="item in provinceOptions" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <!-- 市 -->
    <el-select v-model="city" placeholder="请选择城市" :disabled="cityDisable">
        <el-option v-for="item in cityOptions" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <!-- 区 -->
    <el-select v-model="area" :disabled="areaDisable" placeholder="请选择区域">
        <el-option v-for="item in areasOptions" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
</template>

<script lang='ts'>
import {
    defineComponent,
    ref,
    watch
} from 'vue';
import allAreas from './lib/pca-code.json'
interface AreaItem {
    name: string;
    code: string;
    children?: AreaItem[]
}
interface Data {
    name: string;
    code: string
}
export default defineComponent({
    emits: ['sendData'],
    setup(_, { emit }) {
        let provinceOptions = ref<AreaItem[]>(allAreas)
        let cityOptions = ref<AreaItem[]>([])
        let areasOptions = ref<AreaItem[]>([])

        let province = ref<string>('')
        let city = ref<string>('')
        let area = ref<string>('')

        let cityDisable = ref<boolean>(true)
        let areaDisable = ref<boolean>(true)
        watch(province, (val) => {
            if (!val) {
                cityDisable.value = true
            }
            if (val) {
                let cites = provinceOptions.value.find(item => item.code === val)!.children!
                cityOptions.value = cites
                cityDisable.value = false
            }
            city.value = ''
            area.value = ''
        })
        watch(city, (val) => {
            if (!val) {
                areaDisable.value = true
            }
            if (val) {
                let areas = cityOptions.value.find(item => item.code === val)!.children!
                areasOptions.value = areas
                areaDisable.value = false
            }
            area.value = ''
        })
        watch(area, (val) => {
            let provinceData: Data = {
                name: province.value && provinceOptions.value.find(item => item.code === province.value)!.name,
                code: province.value
            }
            let cityData: Data = {
                name: city.value && cityOptions.value.find(item => item.code === city.value)!.name,
                code: city.value
            }
            let areaData: Data = {
                name: val && areasOptions.value.find(item => item.code === val)!.name,
                code: val
            }
            emit('sendData', {
                provinceData,
                cityData,
                areaData
            })
        })
        return {
            provinceOptions,
            cityOptions,
            areasOptions,
            province,
            city,
            area,
            cityDisable,
            areaDisable
        }
    },
})
</script>

<style lang="scss" scoped>

</style>