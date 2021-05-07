export default {
    PAGES: {
        PAGE_1: {
            ID: 'page-1',
            WRAPPER_ID: 'first-page-wrapper',
            SLUG: '/page-1',
            TITLE: 'Page 1',
            META_DESCRIPTION: 'Page 1',
        },
        PAGE_2: {
            ID: 'page-2',
            WRAPPER_ID: 'second-page-wrapper',
            SLUG: '/assigment-2',
            TITLE: 'Page 2',
            META_DESCRIPTION: 'Page 2',
        },
        LANDING_PAGE: {
            ID: 'landing-page',
            WRAPPER_ID: 'landing-page-wrapper',
            SLUG: '/',
            TITLE: 'Index',
            META_DESCRIPTION: 'Development landingpage',
        }
    },
    get ALL_PAGES() {
        return Object.values(this.PAGES);
    }
}
