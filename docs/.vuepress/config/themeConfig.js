const path = require('path');
const rootpath = path.dirname(__dirname);

const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间',
  nav: [{
      text: 'JavaScript',
      link: '/javascript/',
    },
  ],
  
  sidebar: {
    
  },
};

module.exports = themeConfig;
