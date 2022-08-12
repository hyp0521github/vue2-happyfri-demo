<template>
	<section>
		<!-- 头部 -->
		<header class="top_tips">
			<div class="num_tip" v-if="fatherComponent == 'home'">{{ level }}</div>
			<div class="num_tip" v-if="fatherComponent == 'item'">
				题目{{ itemNum }}
			</div>
		</header>
		<!-- home页面 -->
		<div class="home-container" v-if="fatherComponent == 'home'">
			<div class="home-logo"></div>
			<router-link
				class="home-button"
				@click.native="startBtn"
				to="/item"
			></router-link>
		</div>
		<!-- item页面 -->
		<div class="item-container" v-if="fatherComponent == 'item'">
			<div class="item-subject">
				<header>
					{{ itemDetail[itemNum - 1].topic_name }}
				</header>
				<ul>
					<li
						class="item_list"
						v-for="(item, idx) in itemDetail[itemNum - 1].topic_answer"
						:key="item.topic_answer_id"
					>
						<span
							class="option_style"
							:class="{ active: active === idx }"
							@click="optionBtn(idx, item.is_standard_answer)"
							>{{ chooseType(idx) }}</span
						>
						<span class="option_detail">{{ item.answer_name }}</span>
					</li>
				</ul>
			</div>
			<div class="item-button" @click="nextItem" v-if="itemNum < 5"></div>
			<div class="item-button submit" @click="submitBtn" v-else></div>
		</div>
	</section>
</template>

<script>
import { mapState } from "vuex"
import { mapActions } from "vuex"

export default {
	props: ["fatherComponent"],
	data() {
		return {
			active: -1, // 控制选项的样式
			standard_answer_id: null, // 存储用户选择了哪个选项
			startTime: null, // 最开始的时间
		}
	},

	computed: {
		...mapState(["level", "itemNum", "itemDetail", "totalTime", "timer"]),
	},

	methods: {
		...mapActions(["addNum", "recordDate", "clearTimer", "initItemComponent"]),
		// 转换变成A，B，C，D选项
		chooseType(type) {
			switch (type) {
				case 0:
					return "A"
				case 1:
					return "B"
				case 2:
					return "C"
				case 3:
					return "D"
			}
		},
		// 点击下一题
		nextItem() {
			if (this.active < 0) {
				alert("你还没有选择选项")
			} else {
				this.addNum(this.standard_answer_id)
				this.active = -1
			}
		},
		// 提交按钮
		submitBtn() {
			if (this.active < 0) {
				alert("你还没有选择选项")
			} else {
				this.addNum(this.standard_answer_id) // 提交答案id
				clearInterval(this.timer) // 清除定时器
				this.clearTimer()
				this.active = -1 // 清空选项
				this.$router.push("/score") // 跳转页面
			}
		},
		// 点击选项变色
		optionBtn(index, id) {
			this.active = index
			this.standard_answer_id = id
		},
		// 点击开始做题
		startBtn() {
			this.startTime = new Date()
			this.recordDate(this.startTime)
		},
	},
	created() {
		// 如果是item页面
		if (this.fatherComponent == "home") {
			this.initItemComponent() // 初始化
		}
	},
}
</script>

<style lang="less" scoped>
#module {
	.bgZ {
		background-size: 100% 100%;
	}
}
@subjectColor: #00e;
.top_tips {
	position: absolute;
	top: -1.3rem;
	right: 1.6rem;
	width: 3.25em;
	height: 7.25em;
	background: url("../images/WechatIMG2.png") no-repeat;
	#module.bgZ();
	.num_tip {
		position: absolute;
		left: 0.48rem;
		bottom: 1.1rem;
		height: 0.7rem;
		width: 2.5rem;
		font-size: 0.6rem;
		font-family: "黑体";
		font-weight: 600;
		color: #a57c50;
		text-align: center;
	}
}
.home-container {
	.home-logo {
		margin: 4.125rem 0 0 1.9625rem;
		width: 13.0375rem;
		height: 11.525rem;
		background: url("../images/1-2.png") no-repeat;
		#module.bgZ();
	}
	.home-button {
		display: block;
		margin-left: 5.9rem;
		width: 4.375rem;
		height: 2.1125rem;
		background: url("../images/1-4.png") no-repeat;
		#module.bgZ();
	}
}
.item-container {
	.item-subject {
		margin: 6.5rem 0 0 4.15rem;
		font-size: 0.55rem;
		.item_list {
			position: relative;
			padding-top: 20px;
			color: @subjectColor;
			span {
				vertical-align: middle;
			}
			.option_style {
				position: absolute;
				top: 0.3125rem;
				left: -1.025rem;
				width: 0.725rem;
				height: 0.725rem;
				color: @subjectColor;
				font-size: 0.5rem;
				border: 1px solid #fff;
				border-radius: 50%;
				font-weight: 400;
				text-align: center;
				line-height: 0.725rem;
			}
			.option_style.active {
				background-color: yellow;
			}
			.option_detail {
				color: @subjectColor;
			}
		}
	}
	.item-button {
		.home-container.home-button();
		margin-top: 200px;
		background: url("../images/2-2.png") no-repeat;
		#module.bgZ();
	}
	.item-button.submit {
		background: url("../images/3-1.png") no-repeat;
		#module.bgZ();
	}
}
</style>
