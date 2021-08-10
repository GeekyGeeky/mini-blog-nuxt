export default function ({ $axios, store }) {
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
        console.log('headers ' + config.headers)
        if (store.getters.isLoggedIn)
            config.headers['authorization'] = `Bearer ${store.state.userToken}`;
    });

    // $axios.onError(error => {
    //   const code = parseInt(error.response && error.response.status)
    //   if (code === 400) {
    //     redirect('/400')
    //   }
    // })
}