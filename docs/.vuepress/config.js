const EASYARR = [
    '',
    './1.two-sum/1.two-sum',
    './7.reverse-integer/7.reverse-integer',
    './9.palindrome-number/9.palindrome-number',
    './20.valid-parentheses/20.valid-parentheses',
    './204.count-primes/204.count-primes'
]

const MEDIUMARR = [
    '',
]

const HARDARR = [
    '',
]

module.exports = {
	base: '/leetcode/',

	title: 'LeetCode',
	description: 'LeetCode题解',

	head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  locales: {
    '/': {
	    lang: 'zh-CN',
	    title: 'LeetCode',
	    description: 'LeetCode题解',
    }
  },

  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-92630037-1' // UA-00000000-0
    }],
    ['@vuepress/back-to-top'],
    ['@vuepress/active-header-links']
  ],

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    docsRepo: 'mounui/leetcode',
    docsDir: 'docs',
    lastUpdated: '上次更新',
    editLinks: true,
    markdown: {
      html: true,
    },
    locales: {
      '/': {
        lang: 'zh-CN',
        selectText: 'Languages',
        editLinkText: '在 GitHub 上编辑此页',
        title: 'LeetCode',
        description: 'LeetCode题解',
        nav: [
          { text: '简单', link: '/easy/' },
          { text: '中等', link: '/medium/' },
          { text: '困难', link: '/hard/' },
        ],
        sidebar: {
          '/easy/': [
              {
                title: '简单题目',
                collapsable: false,
                children: EASYARR
              }
          ],
          '/medium/': [
            {
              title: '中等题目',
              collapsable: false,
              children: MEDIUMARR
            }
          ],
          '/hard/': [
            {
              title: '困难题目',
              collapsable: false,
              children: HARDARR
            }
          ]
        }
      }
    }
  }
}