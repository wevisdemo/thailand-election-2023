<template>
    <div class="card">
        <div class="number-candidate ">
            <p class="text-white typo-h3" style="font-weight: 700;">
                {{ candidate.number }}
            </p>
        </div>
        <div class="detail">
            <div class="header">
                <IconsProfile v-if="!candidate.imageCandidate" class="image-candidate"/>
                <div v-else class="image-candidate">
                    <img src="candidate.imageCandidate">
                </div>
                <div v-if="candidate.party" class="image-party">
                    <!-- <img src="candidate.imageParty"> -->
                </div>
                <div>
                    <div class="name typo-h5">
                        {{ candidate.name }}
                    </div>
                    <div v-if="candidate.partyGroup" class="inline-block">
                        <div class="history">
                                <span class="flex flex-row">
                                    <CheckMark/> 
                                    <CheckMark class="pl-0" v-if="candidate.numberPartyGroup == '2'"/>
                                </span>
                                {{ candidate.partyGroup }}
                            
                        </div>
                    </div>
                </div>
            </div>

            <slot name="infomation"></slot>

        </div>

    </div>
</template>

<script>
import CheckMark from '@/components/icons/CheckMark.vue';

    export default{
    props: {
        candidate: {
            type: Object,
            default: {}
        }
    },
    components: { CheckMark }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    border-top: 1px dashed var(--color-black);
}

.number-candidate {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 80px;
    height: 50px;
    background-color: var(--color-black);
    border-radius: 0px 0px 5px 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.card > .detail > .header {
    display: flex;
    flex-direction: column;
}


@media (min-width: 770px) {
    .number-candidate {
        width: 100px;
        height: 70px;
    }
    .card > .detail > .header {
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 20px;
    }
}

.card > .detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 18px 25px;
    gap: 10px;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
}
.image-candidate {
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    margin-left: 0px;
    margin-top: 0px;
    border: 1px solid var(--color-black);
    border-radius: 50px;
    flex: none;
    order: 0;
    flex-grow: 0;
    background: var(--color-gray-2);
}

.image-party {
    box-sizing: border-box;
    position: absolute;
    width: 30px;
    height: 30px;
    margin-left: 40px;
    margin-top: 20px;
    border: 1px solid var(--color-gray-2);
    border-radius: 50px;
    background: var(--color-white);
}

.name {
    font-weight: 700;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.history {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 5px;
    background: var(--color-highlight-1);
    gap: 4px;
    border-radius: 5px;
    flex: none;
    order: 2;
    flex-grow: 0;
}

</style>