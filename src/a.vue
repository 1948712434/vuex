<template>
	<div class="demo" >
		<p>store.js文件中的count {{$store.state.count}}</p>
		<p>单文件组件中的count {{count}}</p>
		<button @click="$store.commit('add');onChangeCount()">点击改变store.js文件中的count</button>
		<p>点击了按钮以后绑定了store.js的count的单文件组件中的单文件组件中的count反生改变</p>
	</div>
	
</template>

<script>
	import store from "./store/store.js";
	
	export default{
		data(){
			return{
				count:10,
				first:0
			}
		},
		
		methods:{
			onChangeCount:function(){
				this.first = this.$store.getters.first;
				this.count = this.$store.state.count;
				console.log(this.count);
				console.log(this.first);
			}
		}
	}
</script>

<style>
</style>