<template>
	<div id="#app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: "VueHappyfriDemoApp",

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="less" scoped>
@ColorA: red;
@SizeA: 12px + 12px;
@min768: ~"(background-color: pink)";
.box {
	.box1 {
		color: @ColorA;
		font-size: @SizeA;
	}
	.box2 {
		// 复合样式
		.box1();
		#module.style();
	}
}
#style-left() {
	color1: red;
}
@s: #style-left[color1];
#module {
	.style {
		background-color: pink;
	}
	color: #style-left[color1];
	color: @s;
}
</style>
