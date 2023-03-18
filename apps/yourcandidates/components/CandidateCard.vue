<template>
    <div class="card">
        <div class="number-candidate ">
            <p class="text-white typo-h3" style="font-weight: 700;">
                {{ candidate.number }}
            </p>
        </div>
        <div class="detail">
            <div class="header">
                <div class="image-candidate">
                    <!-- <img src="candidate.imageCandidate"> -->
                    <div class="image-party">
                        <!-- <img src="candidate.imageParty"> -->
                    </div>
                </div>
                <div>
                    <div class="name typo-h5">
                        {{ candidate.name }}
                    </div>
                    <div class="history">
                        //////////////
                    </div>
                </div>
            </div>

            <table class="table-container">
                <tbody>
                    <tr> 
                        <td style="color: var(--color-gray-3)">สังกัด</td>
                        <td class="pl-2">{{ candidate.party }}</td>
                    </tr>
                    <tr> 
                        <td style="color: var(--color-gray-3)">อายุ</td>
                        <td class="pl-2">{{ candidate.age }}</td>
                    </tr>
                    <tr> 
                        <td style="color: var(--color-gray-3)">การศึกษา</td>
                        <td class="pl-2">{{ candidate.education }}</td>
                    </tr>
                    <tr> 
                        <td style="color: var(--color-gray-3)">อาชีพเดิม</td>
                        <td class="pl-2">{{ candidate.occupation }}</td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>

<script>
    export default{
        props: {
            candidate: {
                type: Object,
                default: {}
            }
        },
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
}

.image-party {
    box-sizing: border-box;
    position: absolute;
    width: 30px;
    height: 30px;
    margin-left: 40px;
    margin-top: 20px;
    border: 1px solid var(--color-white);
    border-radius: 50px;
}

.name {
    font-weight: 700;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.history {
    order: 2;
}

.table-container {
    order: 2;
}

</style>