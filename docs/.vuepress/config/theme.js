const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', '..','..', 'utils/modules'); // docs文件路径
const docsRoot = path.join(__dirname,'..', '..');
const readFile = require(utilsRoot + '/readFile'); // 路径模块
const simpleReadFile = require(utilsRoot + '/simpleReadFile'); // 路径模块

const 总标题 = readFile(docsRoot + '/总标题');
const 配置 = simpleReadFile('配置标题', docsRoot + '/配置');
console.log('配置配置配置配置配置');
console.log(JSON.stringify(配置));

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
    '/配置/': 配置,
  },
};

module.exports = themeConfig;
