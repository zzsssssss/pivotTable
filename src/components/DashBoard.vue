<template>
	<div>
		<GridLayout
		v-model:layout="layout"
		:col-num="12"
		:row-height="30"
		:is-draggable="true"
		:is-resizable="true"
		vertical-compact
		use-css-transforms
	>
		<!-- <GridItem
			v-for="item in layout"
			:key="item.id"
			:x="item.x"
			:y="item.y"
			:w="item.w"
			:h="item.h"
			:i="item.id"
		>
			{{ item.i }}
		</GridItem> -->
		<!-- <template #item="{ item }">
      {{ item.i }}
			<pivot-table />
		</template> -->
		<GridItem
			v-for="item in layout"
			:key="item.i"
			:x="item.x"
			:y="item.y"
			:w="item.w"
			:h="item.h"
			:i="item.i"
		
		>
			<pivot-table />
		</GridItem>
	</GridLayout>
	</div>
	
</template>
<script setup>
import { reactive } from "vue";
import PivotTable from "./PivotTable.vue";

const layout = reactive([
	{
		id: "a7798f10a5e28a543c4tbe69f99a69",
		title: "透视表层级",
		group: "table",
		type: "pivot-sheet",
		x: 0,
		y: 0,
		w: 2,
		h: 2,
		static: false,
		option: {
			analysisId: "TJf8f8630dd19143028da1bb2758d644",
		},
		interact: {
			isLinked: true,
			enableAuto: true,
			config: [],
		},
		moved: false,
		i: "a7798f10a5e28a543c4tbe69f99a69",
	},
	// {
	// 	id: "d5f3b469631bc6e42e6v9a48500b62",
	// 	title: "降序排序",
	// 	group: "chart",
	// 	type: "pivot-chart",
	// 	x: 2,
	// 	y: 0,
	// 	w: 2,
	// 	h: 4,
	// 	static: false,
	// 	parentId: "",
	// 	option: {
	// 		analysisId: "TJ41d524e264334ce98ae7f3647642f8",
	// 		autoRefresh: 0,
	// 		refreshSecond: 1,
	// 	},
	// 	interact: {
	// 		isLinked: true,
	// 		enableAuto: true,
	// 		config: [],
	// 	},
	// 	moved: false,
	//   i: "d5f3b469631bc6e42e6v9a48500b62",
	// },
]);
</script>
