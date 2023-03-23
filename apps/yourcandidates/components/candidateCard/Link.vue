<template>
   <a  :href="link" target="_blank" class="link-box">
        <div class="sub-box">
            <IconsPolicy v-show="type==='policy'"/>
            <IconsPromise v-show="type==='promise'"/>
            <IconsLaw v-show="type==='law'"/>
            <IconsOthers v-show="type==='others'"/>
            <IconsWebsite v-show="type==='website'"/>
            <IconsStar v-show="type==='portfolio'"/>
            <IconsSearchGoogle v-show="type==='google'"/>
            <p style="font-weight: 700;"> {{ infoType[type] }}  </p>
        </div>
        <IconsNewTab/>
    </a>
</template>

<script>
export default{
    props: {
        type: null,
        link: null
    },
    data() {
        return {
            infoType: {
                policy: 'มีนโยบายอะไรมาขายบ้าง',
                promise: 'นโยบายที่เคยขายไว้ ทำได้จริงแค่ไหน',
                law: 'เคยเสนอร่างกฏหมายอะไรบ้าง',
                others: 'ข้อมูลอื่นๆ',
                website: 'เว็บไซต์/เพจพรรค',
                portfolio: 'เคยโหวตอะไรในสภาบ้าง',
                google: 'ส่องประวัติใน google'
            }

        }
    },
    methods: {
        getInfo() {
            return infoType
        }
    },
}
</script>

<style scoped>
.link-box {
    border-bottom: 1px solid var(--color-gray-1);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2px 0px;
    gap: 5px;
    max-width: 290px;
    max-height: 32px;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
}
.sub-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;
}
</style>