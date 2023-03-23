<template>
    <TemplateCard :key="party.number" :candidate="{...party}">
        <template v-slot:infomation>
            <div class="info">
                <div class="candidate-section">
                    <p style="color: var(--color-gray-3)"> แคนเดตนายก </p>
                    <div class="party-list"
                    v-for="primeCandidate in party.partyList">
                        <IconsProfile v-show="primeCandidate.image === ''" style="width: 30px; height: 30px;"/>
                        <div v-show="primeCandidate.image !== ''" class="image-prime-candidate">
                        </div>
                        <p> {{ primeCandidate.name }} </p>
                    </div>
                </div>
                <button class="party-list-button">
                    <IconsPlus/>
                    <p> ดูบัญชีรายชื่อ </p>
                </button>
            </div>
        </template>

        <template v-slot:linkList>
            <div>
                <Link v-for="i in linkInfo" 
                v-if="party[i]"
                :type="i"
                :link= party[i]
                :key="i"
                />
            </div>
        </template>

    </TemplateCard>     
</template>

<script>
import TemplateCard from '@/components/candidateCard/TemplateCard.vue'
import Link from '@/components/candidateCard/Link.vue';
export default{
    setup() {
        const linkInfo = ['policy', 'promise', 'law', 'others']
        return {linkInfo}
    },
    props: {
        party: {
            type: Object,
            default: {}
        }
    },
    components: {
        TemplateCard,
        Link
    },
}
</script>

<style scoped>
.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    flex: none;
    order: 0;
    flex-grow: 1;
}
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