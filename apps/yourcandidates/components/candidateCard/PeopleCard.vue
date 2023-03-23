<template>
    <TemplateCard :key="people.number" :candidate="{...people}">
        <template v-slot:infomation>
            <table class="table-container">
                <tbody>
                    <tr> 
                        <td style="color: var(--color-gray-3)">สังกัด</td>
                        <td class="pl-2">{{ people.party }}</td>
                    </tr>
                    <tr> 
                        <td style="color: var(--color-gray-3)">อายุ</td>
                        <td class="pl-2">{{ people.age }}</td>
                    </tr>
                    <tr> 
                        <td style="color: var(--color-gray-3)">การศึกษา</td>
                        <td class="pl-2">{{ people.education }}</td>
                    </tr>
                    <tr> 
                        <td style="color: var(--color-gray-3)">อาชีพเดิม</td>
                        <td class="pl-2">{{ people.occupation }}</td>
                    </tr>
                </tbody>
            </table>
        </template>
    </TemplateCard>     
</template>

<script>
import TemplateCard from '@/components/candidateCard/TemplateCard.vue'
export default{
    props: {
        people: {
            type: Object,
            default: {}
        }
    },
    components: {
        TemplateCard
    }
}
</script>