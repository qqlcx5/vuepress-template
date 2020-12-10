const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', '..','..', 'utils/modules/readFileList'); // docs文件路径
const readFileList = require(utilsRoot); // 路径模块
const docsRoot = path.join(__dirname,'..', '..');
const 总标题 = readFileList(docsRoot + '/总标题');

const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间',
  nav: [
      {
        text: '总标题',
        link: '/总标题/01.标题1/01.标题1-1',
      },
      {
        text: '配置',
        link: '/配置/配置1',
      },
  ],
  
  sidebar: {
    '/总标题/': 总标题,
  },
};

module.exports = themeConfig;
