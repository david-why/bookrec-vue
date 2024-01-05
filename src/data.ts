function prefixed(prefix: string, messages: Record<string, string>) {
  if (!prefix.endsWith('.')) {
    prefix = prefix + '.'
  }
  const result: Record<string, string> = {}
  for (const key in messages) {
    result[prefix + key] = messages[key]
  }
  return result
}

export default {
  title: 'BASIS International School Nanjing Library',
  catalogLink: 'https://njlibrary.basischina.com/common/welcome.jsp?site=100',

  categories: ['Award Winners', 'Book Lists', 'What Kids Are Reading'],

  interestLevels: ['LG', 'MG', 'MG+', 'UG'],

  config: {
    useUnavailable: false
  },

  pages: [
    {
      name: 'Home',
      display: true,
      path: 'library',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      name: 'About us',
      display: true,
      path: 'about',
      component: () => import('@/pages/AboutPage.vue')
    },
    {
      name: 'Help',
      display: true,
      path: 'help',
      component: () => import('@/pages/HelpPage.vue')
    },
    {
      name: 'LexileGrade',
      display: false,
      path: 'lexile',
      component: () => import('@/pages/LexilePage.vue')
    }
  ],
  homePage: 'Home',

  issues: [
    "Nighthawk's Choice-List 1. What Kids Are Reading - Primary School",
    "Nighthawk's Choice-List 1. What Kids Are Reading - Middle School",
    "Nighthawk's Choice-List 1. What Kids Are Reading - High School"
  ],

  messages: {
    en: {
      'general.button.search': 'Search',

      ...prefixed('page.library', {
        ...prefixed('search', {
          text1: "Welcome to the BASIS International School Nanjing Library! Let's explore the ",
          bold1: 'more than 10,000 English books',
          text2: ' we have, right here! Search our books by ',
          bold2: 'title, author, ISBN',
          text3: ', etc. ',
          link: 'You can also click here to visit the official catalog of our school library.',
          placeholder: 'Title/Author/ISBN'
        }),

        ...prefixed('lexile', {
          title: 'Lexile / Grade',
          text1: 'You can also let us recommend popular books with your ',
          bold1: 'Lexile measure or grade level',
          text2: '!',
          lexile: 'Lexile',
          or: 'or',
          grade: 'Grade',
          link: 'Click here to see the Lexile-grade table, which shows the relationship between Lexile and grade.'
        }),

        ...prefixed('booklist', {
          title: 'Book Lists',
          text1: 'We collected many ',
          bold1: 'famous book lists',
          text2:
            ' from various organizations from the United States. Click on the links to check them out!',
          list1: "New York Times Editor's Choice",
          list2: 'Junior Library Guild Selection',
          list3: 'New York Public Library 100 Best Titles',
          link: 'See all of our collected book lists here!'
        }),

        ...prefixed('award', {
          title: 'Award Winners',
          text1: 'We also listed books that won various ',
          bold1: 'book awards',
          text2: '. Click on the links to check them out!',
          list1: 'American Library Association: Best Books for Young Adults',
          list2: 'Golden Kite Award/Honor Books',
          list3: 'School Library Journal: Best Books',
          link: 'See all of our collected book awards here!'
        }),

        ...prefixed('wkar', {
          title: 'What Kids Are Reading',
          text1: '',
          bold1: 'What Kids Are Reading',
          text2:
            ' is an annual survey conducted by Renaissance Learning. It tells us what books American students in each grade like to read.',
          link: 'Click here to check out their lists!'
        }),

        ...prefixed('reclist', {
          title: "Nighthawk's Choice",
          text1: 'We are proud to present the ',
          bold1: "Nighthawk's Choice",
          text2: ' book lists, which are book lists created by our students. Click on the links to check them out!',
          link: "See all of the Nighthawk's Choice book lists here!"
        }),

        'qrcode.hidden': 'Click here and scan the QR code to visit this site on your mobile device',
        'qrcode.text': 'Please scan the QR code to visit this site on your mobile device'
      }),

      ...prefixed('page.about', {
        ...prefixed('quote', {
          line1:
            "I learned a long time ago that the best way to help children succeed as students and readers, was to give them books; books that they were interested in and loved to read. That's because reading about what we love and are interested in provides the best pathway to grow and learn while also captivating our imagination and enthusiasm for learning and life.",
          line2:
            'The young reader who designed this site also knows that to be true from his own experience as a reader. He wanted to share a pathway for others to find books they would enjoy and keep them reading, so he thoughtfully created this way for students to explore the great books in your BASIS Nanjing library.',
          line3:
            'When you use this site, I hope it leads you down many pathways to explore books that captivate you and help you learn, grow, and most of all, find a love of reading.',
          line4: 'Read on and you will read well!',
          author: '― Mr. Daniel Hovland'
        }),

        ...prefixed('library', {
          title: 'About our library',
          line1:
            "Welcome to the BASIS International School Nanjing library! Here, we have more than 20,000 books ― from children's books, to young adult novels, to rocket science, we have it all. Of those books, around 13,000 are in English. We welcome every BASIS student to come and check out books from our library! ",
          line2:
            'The library is located on the third floor of building E (cafeteria building). The rich online and offline resources in the library will give students sufficient information for learning and inquiry. We encourage students to participate in our many reading-related events and activities, such as book-based competitions, volunteering, festival-themed activities, book fairs, book sales, and much more!'
        }),

        ...prefixed('creator', {
          title: 'About the site creator',
          line1:
            'Hi! I am David Wang. I created this website to help my classmates in BASIS International School Nanjing pick books.',
          ...prefixed('line2', {
            text1: 'Since childhood, I have always loved reading. From picture-books like ',
            italic1: 'No, David!',
            text2: ' for kindergarteners, to novels like ',
            italic2: 'Harry Potter',
            text3: ' for primary schoolers, to middle- and high-school recommended books such as ',
            italic3: 'Pride and Prejudice',
            text4: ', our family bookshelves are always full of books.'
          }),
          ...prefixed('line3', {
            text1: 'I also love programming. I self-studied the ',
            link1: 'Python',
            text2:
              ' programming language in elementary school and learned C++ and competitive programming in middle school. I periodically post blogs related to programming (and other things too!) on my ',
            link2: 'personal blog',
            text3: ', please feel free to take a look!'
          }),
          line4:
            'I enjoyed my time as a volunteer at the community library in elementary school, as well as at the school library in middle school. During these periods, I learned about which kinds of books students in different grade levels like to read.',
          line5:
            "Later, the library opened its online search system to all students, where everyone can search for all the books in the collection. Sadly it doesn't have a friendly book recommendation mechanism, and it (sorry, library!) looks real bad.",
          line6:
            'So, I began to consider using my programming skills to develop a website for school teachers and students to recommend books. This is where this website came from.',
          line7:
            'In addition to the online system of the school library, I also found more book information from the Internet, such as the "hot"-ness, rating, categories and tags, book lists, awards . etc. With this data, I can recommend books based on each student\'s English reading ability and reading preferences.',
          line8:
            'The database of this website is updated about every six months. If you find any errors on this website, please let me know, and if you have good suggestions, feel free to contact me, too!',
          ...prefixed('line9', {
            text1: 'Finally, head over to our library, ',
            link1: 'find a good book',
            text2: ', and start reading!'
          })
        })
      }),

      ...prefixed('page.help', {
        ...prefixed('purpose', {
          text: 'The purpose of this website is to:',
          item1: 'Help students choose books in the school library',
          item2: 'Help students develop reading habits',
          item3: 'Promote the school library usage'
        }),

        ...prefixed('how', {
          title: 'How to choose a book',
          text1: 'You can choose books in five ways on the ',
          bold: 'homepage of this website',
          text2: ':',
          item1: 'Find books by book title, author, ISBN or tags.',
          item2:
            'Find books based on your grade or Lexile measure. You can find your Lexile measure with online tests or the MAP test.',
          item3: 'Check out book lists published by well-known institutions.',
          item4: 'Check out various award winners.',
          item5:
            'Find a book from What Kids Are Reading, an annual survey conducted by Renaissance Learning.'
        }),

        ...prefixed('lists', {
          title: 'Book lists',
          text: 'The last three methods above will provide you with a list of book lists, as shown in the first figure to the right.',
          item1:
            'Each card is a book list. You can click on the title of each book list to open it and view the books inside.',
          item2:
            'Some brief information of each book list is displayed under the title. You can click on it to expand to view more information.',
          ...prefixed('item3', {
            text1:
              'There are two tags on the upper right corner of each book list. The first tag shows the range of the Lexile measures of all the books in this book list, for example ',
            text2:
              '. The second tag shows the range of interest and grade levels of the books, for example ',
            text3:
              '. You can use these tags to approximate the difficulty level of books in the book list.'
          }),
          item4:
            'The number of books displayed in the book list only counts the books avaliable in the library on each book list.'
        }),

        ...prefixed('books', {
          title: 'List of books',
          text: 'When you open a book list, or search for books by keywords, you will see a list of books, as shown in the second figure to the right.',
          ...prefixed('item1', {
            text1: 'You will see many book cards ',
            bold: 'sorted by decreasing popularity',
            text2:
              '. If there are too many books displayed, you can use the filter menu to further select books. The filter is at the top of the page below the title and, by default, shows the total number of books. Clicking on the filter will display a number of tags, as well as the number of books in each category. You can narrow down the number of books by clicking a tag. This operation can be repeated until the desired filter is achieved. At any time you can click "CLEAR FILTERS" at the top of the filter menu to clear filters and show all books.'
          }),
          item2:
            'Each card corresponds to a book, showing its title, author, and description. Click the card to see more book information, such as book reviews, number of reviewers, ISBN book numbers, etc.',
          ...prefixed('item3', {
            text1: 'In the list, most books have a Lexile measure shown above its title, like ',
            text2: ' or ',
            text3:
              ' (Lexile measures starting with "BR" means Beginning Reader, or below 0). If a book has a Lexile measure close to your own, it means the book is just right for you, in terms of difficulty; it won\'t be too easy or too hard.'
          }),
          ...prefixed('item4', {
            text1:
              'In addition to a Lexile measure, most books also have an interest level and grade level. For example, ',
            text2:
              ' means that this book is (usually) the most interesting for a Middle Grade (Grades 4-8) student, and the text is likely understandable by a Grade 4 student in the middle of the school year. Other interest levels include ',
            text3: ' (Lower Grades, Grades K-3), ',
            text4: ' (Middle Grades+ or Young Adult, Grades 6+), and ',
            text5: ' (Upper Grades, Grades 9+).'
          }),
          ...prefixed('item5', {
            text1:
              'Each book also has the location in the library where you can find it, for example ',
            text2: ' or ',
            text3: '. If there is a red line on this label, such as ',
            text4: ', it means it has been checked out by someone. Check for this book later!'
          })
        }),

        ...prefixed('computer', {
          title: 'Access on computer',
          text: 'When you are accessing with a browser on a computer, please note:',
          ...prefixed('item1', {
            text1:
              'Usually the computer screen is relatively wide, so when you use a browser to access this website on the computer, the book list cards or book cards may be displayed in multiple columns. You can press ',
            text2: ' or ',
            text3: ' to adjust the font size.'
          }),
          ...prefixed('item2', {
            text1: 'You can press ',
            text2:
              ' to print the current page at any time, but please note that since our list of books is gradually loaded on demand, if you print without scrolling to the bottom of the page, an incomplete list may be printed.'
          }),
          ...prefixed('item3', {
            text1: 'If you are using Chrome or Edge browser, you may find the "',
            text2:
              'Install" button on the right side of the address bar. Click this button to install this website on your computer desktop so you can find it easily.'
          })
        }),

        ...prefixed('mobile', {
          title: 'Access on mobile',
          item1:
            'This website has been optimized for mobile devices. You can use your mobile phone to scan this QR code to visit this website.',
          item2:
            'If you are using an Android phone, when you visit this website with a Chrome or Firefox browser, you may see a prompt to install this website pops up at the bottom of the page. You can click this prompt to install this website on the home screen of your phone.',
          ...prefixed('item3', {
            text1:
              'If you are using an iPhone or iPad, when you visit this website with the Safari browser, you can click the "',
            text2:
              'Share" button at the top of the browser, then click "Add to home screen" to install this website on the home screen of your device.'
          })
        }),

        ...prefixed('feedback', {
          title: 'Feedback',
          text1: 'If you find errors on this website, or have any suggestions, please ',
          link: 'contact the author of this website',
          text2: '. Thank you!'
        })
      }),

      ...prefixed('page.lexile', {
        line1:
          'The table shows the relationship between grade levels and Lexile measures. It is based on research from 2010 to 2019 on about 3 million American students. The percentile number shows the percentage of students which someone has surpassed. A percentile value of 50% is the median Lexile measure of the grade.',
        line2: 'You can click on the grades and Lexile measures to find books based on that value.'
      })
    },

    zh: {
      'general.button.search': '搜索',

      ...prefixed('page.library', {
        ...prefixed('search', {
          text1: '欢迎来到南京贝赛思学校图书馆，让我们一起从图书馆里的',
          bold1: '10,000多本英文书',
          text2: '中选书吧！在这里，您可以输入',
          bold2: '书名、作者或者ISBN书号',
          text3: '来搜索馆藏图书。',
          link: '您也可以点击这里访问学校图书馆的官方检索系统。',
          placeholder: '图书书名、作者、ISBN'
        }),

        ...prefixed('lexile', {
          title: '蓝思值 / 年级',
          text1: '您也可以依据',
          bold1: '蓝思（Lexile）阅读能力值或者年级',
          text2: '来选择图书：',
          lexile: '蓝思值',
          or: '或',
          grade: '年级',
          link: '点击这里前往“年级和蓝思值对照表”，按照年级或者蓝思值来挑选图书。'
        }),

        ...prefixed('booklist', {
          title: '知名书单',
          text1: '我们收集了很多知名机构发布的推荐书单，这里选出了几个：',
          bold1: '',
          text2: '',
          list1: '《纽约时报》编辑推荐图书',
          list2: '美国青少年图书馆协会推荐图书',
          list3: '纽约公共图书馆百佳儿童图书',
          link: '点击这里查看所有推荐书单。'
        }),

        ...prefixed('award', {
          title: '获奖图书',
          text1: '图书馆里还有很多在国际上获奖的图书！这里选出了几个知名奖项：',
          bold1: '',
          text2: '',
          list1: '美国图书馆协会最佳青少年图书奖',
          list2: '金风筝奖提名和获奖图书',
          list3: '学校图书馆学报最佳图书奖',
          link: '点击这里查看我们收集的所有奖项。'
        }),

        ...prefixed('wkar', {
          title: '同年龄人最喜欢读的书',
          text1:
            '“What Kids Are Reading”是Renaissance Learning公司的年度调查报告。它告诉我们每个年级的美国学生都喜欢阅读哪些书。',
          bold1: '',
          text2: '',
          link: '点击这里去看看吧。'
        }),

        ...prefixed('reclist', {
          title: "夜鹰之选",
          text1: '我们学校的同学为大家制作了',
          bold1: "《夜鹰之选》",
          text2: '书单，点击下面的链接查看：',
          link: "点击这里查看所有《夜鹰之选》的书单。"
        }),

        'qrcode.hidden': '手机访问本站请点击这里并扫描二维码',
        'qrcode.text': '手机访问本站请扫描二维码'
      }),

      ...prefixed('page.about', {
        ...prefixed('quote', {
          line1:
            '我很久以前就知道，帮助孩子成长的最佳方式就是给他们书籍——他们感兴趣并乐于阅读的书籍。这是因为读书提供了学习和成长的最佳途径，同时也激发了我们对生活的想象力以及热情。',
          line2:
            '设计这个网站的年轻人从他的阅读经历中体会到这一事实。他想分享一条途径，让其他同学找到各自喜欢的书籍并阅读。因此他精心设计了这个网站，让大家在我们贝赛思的图书馆里找寻好书。',
          line3:
            '当你使用这个网站时，我希望它能引导你去探索那些令人着迷的书籍，帮助你学习和成长；最重要的是，希望你找到对阅读的热爱。',
          line4: '坚持阅读，越读越好！',
          author: '― Daniel Hovland 先生'
        }),

        ...prefixed('library', {
          title: '关于图书馆',
          line1:
            '欢迎来到南京贝赛思学校图书馆。在这里，我们有两万余本的藏书，从天文地理到诗歌小说，应有尽有，其中有一万三千多本是英文图书。我们欢迎每位学生前来借书！',
          line2:
            '图书馆位于E楼第三层，馆内分为藏书区、儿童阅读区、豆袋椅区、独立阅读区等。馆内有大量的线上和线下资源提供给学生查询和学习。我们鼓励每一位学生积极参与学校的各项读书相关活动，例如阅读类竞赛、学生义工计划、节日主题活动，图书集市、义卖等等。'
        }),

        ...prefixed('creator', {
          title: '关于本站作者',
          line1:
            '大家好，我是汪昊阳，本网站的创造者。创造本网站的目的是为了帮助南京贝赛思的同学们在学校图书馆里挑选合适的图书。',
          ...prefixed('line2', {
            text1:
              '我从童年起就很喜欢阅读。打从记事起，我的身边总是环绕着很多图书，我家的书柜里也堆满各种书籍。从全是图画的《大卫不可以》，到全套的《小屁孩日记》。后来到了小学高年级，我开始阅读大量的英文小说，例如《哈里波特》、《基地系列》等。进入初中后，我从学校推荐的书单里选择了一些经典文学书来阅读，例如《杀死一只知更鸟》、《动物庄园》、《傲慢与偏见》等。',
            italic1: '',
            text2: '',
            italic2: '',
            text3: '',
            italic3: '',
            text4: ''
          }),
          ...prefixed('line3', {
            text1: '我也喜欢编程。小学的时候我自学了',
            link1: 'Python语言',
            text2: '，进入初中后我还系统的学习了一下C/C++和编程竞赛算法。现在我会不定期地在',
            link2: '自己的博客网站',
            text3: '发表编程相关的博客，欢迎大家访问。'
          }),
          line4:
            '上小学时我是金陵图书馆的小义工，2020年进入贝赛思学习后，我在学校图书馆继续做义工。在这里我学习到了图书分类的原理，并进一步了解到图书馆里拥有哪些书。',
          line5:
            '后来图书馆向所有学生开放了它的线上检索系统，大家可以在上面查询所有的馆藏图书。遗憾的是它并没有一个友好的图书推荐机制，对于大多数人来说它不够好用。',
          line6:
            '这时我开始考虑使用我之前学到的编程经验，为学校师生开发一个网站，来给每一位在校学生推荐图书。这就是本网站的由来。',
          line7:
            '除了学校图书馆的线上系统，我还从互联网上抓取了更多的图书信息，例如每本书的畅销程度、好评度、图书分类、推荐和获奖信息等等。通过合理地组织这些数据，我可以根据每位学生的英文阅读能力和阅读偏好，推荐不同的图书。',
          line8:
            '本网站的数据库大约每半年更新一次，因此网站上的图书信息可能会有些滞后，如果发现本网站上有错误，请告知我，如果有好的建议，也请联系我，谢谢。',
          ...prefixed('line9', {
            text1: '最后，请前往我们的图书馆，',
            link1: '挑选一本好书',
            text2: '，开始阅读吧！'
          })
        })
      }),

      ...prefixed('page.help', {
        ...prefixed('purpose', {
          text: '在这个网站，我们希望：',
          item1: '帮助同学们在学校图书馆选书',
          item2: '帮助同学们培养阅读习惯',
          item3: '提高图书馆的图书使用率'
        }),

        ...prefixed('how', {
          title: '如何选书',
          text1: '您可以在',
          bold: '网站首页',
          text2: '里使用五种方式来选书：',
          item1: '通过书名、作者、ISBN书号或者分类标签来查找图书；',
          item2:
            '贝赛思的学生每年会进行MAP（Measurement of Academic Progress）测试。通过测试，您将得知您的英文阅读能力指标，同时还会测试出您的蓝思（Lexile）阅读能力值。您可以依据蓝思值或者年级来选择图书；',
          item3: '查看知名机构发布的推荐书单；',
          item4: '根据图书获得奖项来查找图书；',
          item5: '查看欧美同年龄人最喜欢读的书，这是由Renaissance Learning公司提供的年度调查报告。'
        }),

        ...prefixed('lists', {
          title: '书单列表',
          text: '上面的后三种方式会提供给您书单列表，如图所示：',
          item1: '每个卡片都是一个书单，点击书单的标题可以打开这个书单，查看里面的图书；',
          item2: '标题下显示的是书单的简介信息，点击可以展开查看更多信息；',
          ...prefixed('item3', {
            text1:
              '每个书单的右上角有两个标签，第一个标签显示的是这个书单里所有图书的蓝思值范围，例如',
            text2: '；第二个标签是图书的兴趣值和年级值的范围，例如',
            text3: '。您可以根据这两个标签来判断书单里图书的难易程度；'
          }),
          item4: '书单卡片里显示的图书数量只统计了在图书馆里的馆藏图书，可能并不完整。'
        }),

        ...prefixed('books', {
          title: '图书列表',
          text: '当您打开一个书单，或者搜索图书，您将看到图书列表，如图所示：',
          ...prefixed('item1', {
            text1: '您可能看到很多张图书卡片，它们是按照图书的',
            bold: '热门程度由高到低排序',
            text2:
              '的。如果显示的图书太多，您还可以使用过滤器下拉菜单来进一步的挑选图书。过滤器在页面标题的下方，默认显示的是图书总数。点击过滤器后会显示很多分类标签，以及每个分类下的图书数量。您可以通过点击分类标签来缩小图书数量。这个操作可以重复进行，直到只剩最后一本图书。任何时候您都可以点击过滤器里顶部的“CLEAR FILTERS”来恢复显示所有图书；'
          }),
          item2:
            '每张卡片对应一本馆藏图书，显示了书名、作者、图书简介。点击卡片可以看到更多图书信息，例如图书评价、评价人数、ISBN书号等；',
          ...prefixed('item3', {
            text1: '大多数图书的顶部都标注了本书的蓝思值，例如',
            text2: '或者',
            text3:
              '（BR开头的蓝思值表示学龄前图书）。如果一本书的蓝思值和您的蓝思阅读能力值相差不远，那它就非常适合您阅读：既不会太难，也不是全无挑战；'
          }),
          ...prefixed('item4', {
            text1: '除了蓝思值，大多数图书的顶部还标注了它的兴趣值和年级值，例如',
            text2:
              '表示一本适合四到八年级阅读、文字难度在四年级中期的图书。兴趣值告诉您这本书最适合什么年龄的人阅读，分别是：',
            text3: '表示三年级以下、',
            text4: '表示六年级以上、',
            text5:
              '表示九年级以上。年级值表示这本书的文字难度最适合哪个年级的学生阅读，它和蓝思值基本是对应的，例如年级值1.0表示它适合一年级新生阅读，它对应的蓝思值是50L；年级值9.0对应的蓝思值是1200L；'
          }),
          ...prefixed('item5', {
            text1: '每本图书的右上角标注了图书的馆藏位置，例如',
            text2: '或者',
            text3: '，您可以根据这个信息在图书馆里找到这本书。如果这个标签上有红色的划线，例如',
            text4: '，那就表示已经被借走了。'
          })
        }),

        ...prefixed('computer', {
          title: '在电脑上访问',
          text: '在电脑上使用浏览器访问时，请注意：',
          ...prefixed('item1', {
            text1:
              '通常电脑屏幕比较宽，因此在电脑上使用浏览器访问本网站的时候，书单卡片或者图书卡片有可能显示成多列。您可以按下',
            text2: '或者',
            text3: '来调节字体大小，以达到最好的显示效果；'
          }),
          ...prefixed('item2', {
            text1: '您随时可以按下',
            text2:
              '来打印当前页面。不过要注意一下，由于我们的图书列表是按需逐步加载的，如果您没有滚动到页面底部就打印，有可能打印出不完整的图书列表；'
          }),
          ...prefixed('item3', {
            text1: '如果您使用的是Chrome或者Edge浏览器，您可能会在浏览器上方的地址栏右侧发现“',
            text2: '安装”按钮。点击这个按钮可以把本网站安装到电脑上，成为一个应用，方便再次使用。'
          })
        }),

        ...prefixed('mobile', {
          title: '在手机上访问',
          item1: '本网站针对手机访问进行了显示优化，您可以用手机扫描图中二维码访问本站；',
          item2:
            '如果您使用的是Android手机，当用Chrome或者Firefox浏览器访问本网站的时候，可能会看到页面下方弹出一个安装本网站的提示，您可以点击这个提示，将本网站安装到您的手机桌面上，方便再次使用；',
          ...prefixed('item3', {
            text1:
              '如果您使用的是iPhone或者iPad，当使用Safari浏览器访问本网站的时候，可以点击浏览器上方的“',
            text2: '分享”按钮，然后轻点“添加到主屏幕”，将本网站安装到手机主屏幕上。'
          })
        }),

        ...prefixed('feedback', {
          title: '问题反馈',
          text1: '如果您发现本网站上有错误，或者有好的建议，请',
          link: '联系本站作者',
          text2: '，谢谢。'
        })
      }),

      ...prefixed('page.lexile', {
        line1:
          '上表是年级和蓝思值的对照表，该表数据来自于2010年到2019年全美三百万中小学生的蓝思测量值。百分比表示这个学生的阅读能力超过了多少比例的同龄学生，50%的蓝思值对应的是同龄学生的蓝思值中位数。',
        line2: '请点击左边的年级链接、或者表里的蓝思值链接去选择对应的图书。'
      })
    }
  } as Record<string, Record<string, string>>
}
