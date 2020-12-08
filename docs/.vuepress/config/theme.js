const path = require('path'); // 路径模块
const docsRoot = path.join(__dirname, '..', 'utils/modules/readFileList'); // docs文件路径

const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间',
  nav: [{
      text: 'test',
      link: '/test/',
    },
  ],
  
  sidebar: {
    
  },
};

module.exports = themeConfig;
