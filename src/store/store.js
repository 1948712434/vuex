import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
	count:0
};

const mutations = {
	add(state){
		state.count++;
	}
}

const getters = {
	first:function(state){
		return state.count + 10;
	}
}

var vuexStore = new Vuex.Store({
	state,
	mutations,
	getters
})


export default vuexStore
