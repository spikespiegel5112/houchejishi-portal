import router from '../router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    showSpinner: false
})


router.beforeEach(async (to, from, next) => {
    console.log(from + to)
    NProgress.start()
    next()
})

router.afterEach(() => {
    // console.log(to)
    // console.log(from)
    NProgress.done()
})

router.onError(error => {
    console.log('router.onError', error)
})
