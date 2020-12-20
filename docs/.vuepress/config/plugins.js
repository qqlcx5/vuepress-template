const plugins = [
    ['@vuepress/pwa', {
        serviceWorker: true, //用于缓存页面的内容以供离线使用
        updatePopup: true
    }],
    ['@vuepress/last-updated',{
        transformer: (timestamp) => {
        const dayjs = require('dayjs')
        return dayjs(timestamp,).format('YYYY-MM-DD HH:mm')
        }
    }],
]

module.exports = plugins;