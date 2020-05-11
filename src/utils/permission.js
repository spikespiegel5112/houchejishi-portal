import router from '../router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    showSpinner: false
})


router.beforeEach(async (to, from, next) => {
    console.log(to)
    console.log(from)
    NProgress.start()
    next()
})

router.afterEach((to, from) => {
    console.log('from', from)
    console.log('finsh', to)
    NProgress.done()
})

router.onError(error => {
    console.log('router.onError', error)
})
