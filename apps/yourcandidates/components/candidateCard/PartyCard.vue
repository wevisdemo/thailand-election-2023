<template>
    <div>

        <partyList :partyList="party.partyList" :open="openPopupPartyList" :nameParty="party.name">
            <template v-slot:close>
                <div class="absolute right-4 top-0">
                    <button class="fixed" @click="closePopup()"><IconsClose /></button>
                </div>
            </template>

        </partyList>

        <TemplateCard :key="party.number" :candidate="{...party}">
            <template v-slot:infomation>
                <div class="info">
                    <div class="candidate-section">
                        <p style="color: var(--color-gray-3)"> แคนเดตนายก </p>
                        <div class="candidate-list"
                        v-for="candidate in party.candidate" :key="candidate.name">
                            <IconsProfile v-show="candidate.image === ''" style="width: 30px; height: 30px;"/>
                            <div v-show="candidate.image !== ''" class="image-prime-candidate">
                            </div>
                            <p> {{ candidate.name }} </p>
                        </div>
                    </div>
                    <button class="party-list-button" @click="popupPartylist()">
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
    </div>
</template>

<script>
import TemplateCard from '@/components/candidateCard/TemplateCard.vue'
import Link from '@/components/candidateCard/Link.vue';
import PartyList from '@/components/candidateCard/PartyList.vue';
export default{
    setup() {
        const linkInfo = ['policy', 'promise', 'law', 'others']
        return {linkInfo}
    },
    data() {
        return {
            openPopupPartyList: false
        }
    },
    props: {
        party: {
            type: Object,
            default: {}
        }
    },
    components: {
        TemplateCard,
        Link,
        PartyList
    },
    methods: {
        popupPartylist() {
            this.openPopupPartyList = true
        },
        closePopup() {
            this.openPopupPartyList = false
        },
    }
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
.candidate-list{
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