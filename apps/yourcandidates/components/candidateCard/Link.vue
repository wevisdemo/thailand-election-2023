<template>
	<a  :href="link" target="_blank" class="link-box">
		<div class="sub-box">
			<div style="display: inline-block;">
				<IconsPolicy v-show="type==='Policy'"/>
				<IconsPromise v-show="type==='Promise'"/>
				<IconsLaw v-show="type==='Law'"/>
				<IconsOthers v-show="type==='Others'"/>
				<IconsWebsite v-show="type==='Website'"/>
				<IconsStar v-show="type==='portfolio'"/>
				<IconsSearchGoogle v-show="type==='google'"/>
			</div>
			<div><b>{{ infoType[type] }} </b></div>
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
				Policy: 'มีนโยบายอะไรมาขายบ้าง',
				Promise: 'นโยบายที่เคยขายไว้ ทำได้จริงแค่ไหน',
				Law: 'เคยเสนอร่างกฏหมายอะไรบ้าง',
				Others: 'ข้อมูลอื่นๆ',
				Website: 'เว็บไซต์/เพจพรรค',
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
	border-bottom: 1px solid var(--color-gray-2);
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 2px 0px;
	gap: 5px;
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