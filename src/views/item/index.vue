<template>
	<div class="item-page">
		<ItemComponent fatherComponent="item"></ItemComponent>
	</div>
</template>

<script>
import ItemComponent from "../../components/itemcomponent.vue"

export default {
	name: "VueHappyfriDemoIndex",

	data() {
		return {}
	},

	components: {
		ItemComponent,
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="less" scoped></style>
