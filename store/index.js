
export const state = () => ({
    userToken: null
});

export const getters = {
    isLoggedIn: state => state.userToken != null
}

export const mutations = {
    setUserToken: (state, token) => {
        state.userToken = token;
    },
    removeUserToken: (state) => {
        state.userToken = null;
    }
}

export const actions = {
    nuxtServerInit({ commit }, { app }) {
        console.log('initialized once');
        // get saved token in cookie
        const usertoken = app.$cookies.get('__data');
        if (usertoken) {
            commit('setUserToken', usertoken);
        }
    },
    async loginUser({ commit }) {
        try {
            const result = await this.$axios.$get('/login');
            console.log(result);
            if (result.status) {
                this.$cookies.set('__data', result.token, {
                    maxAge: -1
                });
                commit('setUserToken', result.token);
            }
            return result.status;
        } catch (e) {
            console.log(e);
            throw e;
        }

    }
}

