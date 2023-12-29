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
  catalogLink: 'https://njlibrary.basischina.com/',

  categories: {
    'Award Winners': {
      descRequired: true
    },
    'Book Lists': {
      descRequired: true
    },
    'What Kids Are Reading': {
      descRequired: false
    }
  } as Record<string, { descRequired: boolean }>,

  interestLevels: ['LG', 'MG', 'MG+', 'UG'],

  config: {
    useUnavailable: true
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
      name: 'LexileGrade',
      display: false,
      path: 'lexile',
      component: () => import('@/pages/LexilePage.vue')
    }
  ],
  homePage: 'Home',

  messages: {
    en: {
      'general.button.search': 'Search',

      ...prefixed('page.library', {
        ...prefixed('search', {
          text1: "Let's explore the more than ",
          bold1: '10,000 English books',
          text2: ' we have, right here, in our school library! Search our books by ',
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

        ...prefixed('rec', {
          pretext1: 'If you are a BINJ ',
          prebold1: 'student',
          pretext2: ' or ',
          prebold2: 'teacher',
          pretext3: ' and want to recommend a book, ',
          formlink: 'please fill out the form here (log in with your school email)',
          preprint: '! Alternatively, you can ',
          printlink: 'print out a recommendation form',
          postprint: ' and hand it to a library teacher, or pick up a form at the library. ',
          reclink: 'Click here to view recommended books.'
        }),

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
          author: '― Mr. Daniel Hovland, Head of School'
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

        ...prefixed('rec', {
          pretext1: '如果你是一名南京贝赛思的',
          prebold1: '学生',
          pretext2: '或',
          prebold2: '老师',
          pretext3: '，并且你想推荐一本图书，请',
          formlink: '点击链接填写表单（需要用您的学校邮箱登录）',
          preprint: '！你也可以',
          printlink: '打印一份推荐单',
          postprint: '并交给图书馆老师，或者在图书馆填写推荐单。',
          reclink: '点击这里查看大家推荐的图书。'
        }),

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
          author: '― 校长 Daniel Hovland 先生'
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
            "后来图书馆向所有学生开放了它的线上检索系统，大家可以在上面查询所有的馆藏图书。遗憾的是它并没有一个友好的图书推荐机制，对于大多数人来说它不够好用。",
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

      ...prefixed('page.lexile', {
        line1:
          '上表是年级和蓝思值的对照表，该表数据来自于2010年到2019年全美三百万中小学生的蓝思测量值。百分比表示这个学生的阅读能力超过了多少比例的同龄学生，50%的蓝思值对应的是同龄学生的蓝思值中位数。',
        line2: '请点击左边的年级链接、或者表里的蓝思值链接去选择对应的图书。'
      })
    }
  } as Record<string, Record<string, string>>
}
