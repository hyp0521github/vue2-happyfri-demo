<template>
	<section class="score-page">
		<div class="score-logo">
			<div class="middle">
				<h1 class="score">{{ `${score}分!` }}</h1>
				<p class="text">{{ showIsTips() }}</p>
			</div>
		</div>
		<!-- 点击分享 -->
		<div class="share_btn" @click="shareBtn">
			<img src="../../images/4-3.png" alt="分享" />
		</div>
		<div class="share_dialog" v-if="isShowDialod" @click="share_dialog">
			<img src="../../images/5-2.png" alt="分享链接" />
		</div>
	</section>
</template>

<script>
import { mapState } from "vuex"

export default {
	name: "VueHappyfriDemoIndex",

	data() {
		return {
			rightAnswer: [1, 1, 1, 1, 1], //正确答案
			score: 0, // 分数
			// 分数提示
			scoreTips: [
				"你说，是不是把知识都还给小学老师了？",
				"还不错，但还需要继续加油哦！",
				"不要嘚瑟还有进步的空间！",
				"智商离爆表只差一步了！",
				"你也太聪明啦，葡萄之家欢迎你！",
			],
			isShowDialod: false, // 分享弹框按钮
		}
	},
	created() {
		this.calculate()
	},

	computed: {
		...mapState(["store_answer_id"]),
	},

	methods: {
		// 计算分数
		calculate() {
			this.store_answer_id.forEach((item, index) => {
				if (item == this.rightAnswer[index]) {
					this.score += 20
				}
			})
		},
		// 分数提示
		showIsTips() {
			let tips = this.scoreTips[this.score / 20 - 1]
			if (this.score === 0) {
				tips = "你也太失败了吧"
			}
			return tips
		},
		// 分享按钮
		shareBtn() {
			this.isShowDialod = !this.isShowDialod
		},
		share_dialog() {
			this.isShowDialod = !this.isShowDialod
		},
	},
}
</script>

<style lang="less" scoped>
@bgZ: 100% 100%;
.score-page {
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: url("../../images/4-1.jpg") no-repeat;
	background-size: @bgZ;
	.score-logo {
		position: relative;
		margin-top: 200px;
		width: 921px;
		height: 824px;
		background: url("../../images/4-2.png") no-repeat;
		background-size: @bgZ;
		.middle {
			position: absolute;
			top: 394px;
			left: 95px;
			width: 800px;
			.score {
				font-family: Tahoma, Helvetica, Arial;
				color: #a51d31;
				text-align: center;
				font-weight: 900;
				-webkit-text-stroke: 0.05rem #412318;
			}
			.text {
				margin-top: 30px;
				font-size: 0.65rem;
				color: #3e2415;
				text-align: center;
			}
		}
	}
	.share_btn {
		position: absolute;
		top: 150%;
		left: 35%;
		img {
			width: 6.025rem;
			height: 2.4rem;
			-webkit-text-stroke: 0.05rem #412318;
		}
	}
	.share_dialog {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		img {
			margin-top: 100px;
			margin-left: 170px;
			width: 1135px;
			height: 1042px;
		}
	}
}
</style>
