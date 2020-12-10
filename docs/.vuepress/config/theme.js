const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', '..','..', 'utils/modules/readFileList'); // docs文件路径
const readFileList = require(utilsRoot); // 路径模块

const chalk = require('chalk') // 命令行打印美化
const log = console.log

// const filePath = path.join(__dirname, '..', '..', '总标题/01.标题'); // 要批量修改的文件路径
// const files = readFileList(filePath); // 读取所有md文件数据
// log(chalk.red('--------'))
// log(chalk.green(JSON.stringify(files)))

const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间',
  nav: [{
      text: '总标题',
      link: '/总标题/01.标题/01.标题1-1',
    },
  ],
  
  sidebar: {
    '/总标题/': [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
            ['01.标题/01.标题1-1','标题1-1'],
            ['01.标题/02.标题1-2','标题1-2'],
        ],
      },
      {
        title: 'Group 2',
        collapsable: false,
        children: [
            ['02.标题/01.标题2-1','标题2-1'],
            ['02.标题/02.标题2-2','标题2-2'],
            ['02.标题/03.标题2-3','标题2-3'],
            ['02.标题/04.标题2-4','标题2-4'],
        ],
      },
    ],
  },
};

module.exports = themeConfig;
