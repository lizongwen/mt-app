import { SET_APPNAME } from '~/store/mutation-types'
const app = {
	namespaced: true,
	state: () => ({
		appName: '系统名称'
	}),
	getters: {
		appName: state => state.appName,
	},
	mutations: {
		[SET_APPNAME](state, name) {
			state.appName = name
		}
	},
	actions: {
		[SET_APPNAME]({ commit }, name) {
			commit('setAppName', name)
		}
	}
}
export default app