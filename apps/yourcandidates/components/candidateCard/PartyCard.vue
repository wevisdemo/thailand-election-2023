<template>
    <TemplateCard :key="party.number" :candidate="{...party}">
        <template v-slot:infomation>
            <div class="candidate-section">
                <p style="color: var(--color-gray-3)"> แคนเดตนายก </p>
                <div class="party-list"
                v-for="primeCandidate in party.partyList">
                    <div class="image-prime-candidate">

                    </div>
                    <p> {{ primeCandidate.name }} </p>
                </div>
            </div>
            <button class="party-list-button">
                <IconsPlus/>
                <p> ดูบัญชีรายชื่อ </p>
            </button>
        </template>
    </TemplateCard>     
</template>

<script>
import TemplateCard from '@/components/candidateCard/TemplateCard.vue'
export default{
    props: {
        party: {
            type: Object,
            default: {}
        }
    },
    components: {
        TemplateCard
    }
}
</script>

<style scoped>
.candidate-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.party-list{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;
}

.image-prime-candidate{
    box-sizing: border-box;
    background: var(--color-gray-2);
    border: 1px solid var(--color-black);
    border-radius: 50px;
    width: 30px;
    height: 30px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.party-list-button{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 10px;
    gap: 5px;
    background: var(--color-gray-2);
    border: 1px solid var(--color-gray-2);
    border-radius: 100px;
}
</style>