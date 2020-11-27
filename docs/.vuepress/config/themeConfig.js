const path = require('path');
const rootpath = path.dirname(__dirname);

const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间', //最后更新时间
  nav: [
    {
      text: '面试',
      link: '/interview/',
    },
    {
      text: 'JavaScript',
      link: '/javascript/',
    },
    {
      text: 'Vuejs',
      link: '/vue/',
    },
  ],
  
  sidebar: {
    
  },
};

module.exports = themeConfig;
