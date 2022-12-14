const events = [
    {
      id: 2,
      name: 'Tracker',
      type: 'Robotics',
      image_url: '1.png',
      rule_url: 'https://drive.google.com/file/d/1h8pev2Dfhq9XnWvpBShfC4chO5egTR0R/view?usp=sharing',
      writeup:
        'Accuracy is as important as speed when it comes to line follower robots. Following a single line with a few curves and loops seems to be an easy job but not every robot stands up to the constraints that a single line imposes. The discipline of your automatons are set to be tested when they enter the tracker arena on 9th-10th April with hundreds of others that will race against time to bustle from start to finish in the minimum possible time. A perfect blend of speed and accuracy is the demand of the hour.',
      created_at: '2018-09-01 10:08:05',
      updated_at: '2018-09-01 10:08:05',
      category: 'Robotics & Automation',
    },
    {
      id: 3,
      name: 'X-Race',
      type: 'Robotics',
      image_url: '8.png',
      rule_url: 'https://drive.google.com/file/d/1fASxNcwh9S5csF7dXq3id9AqgNll_aTw/view?usp=sharing',
      writeup:
        'It is time to build a bot, less like a bot but more like an SUV. Be prepared for the dirt, the hills, the pots, the caves, the tarmac and obstacles you will better prefer to avoid. Here we invite zealots from all parts of the country to bustle their bots on the X-Race arena, at Innovacion 2022, the biggest techfest in Kolkata. The twitchy terrains are ready to test your speed and agility and to provide a groovy experience to the speed fanatic in you. We make your dream to off-road come true at the biggest techfest in Kolkata, Innovacion 2022! So pull out your tools from mothballs and get to work.',
      created_at: null,
      updated_at: null,
      category: 'Robotics',
    },
    {
      id: 4,
      name: 'Robofooties',
      type: 'Robotics',
      image_url: '4.png',
      rule_url: 'https://drive.google.com/file/d/1YzLiPfCHWj2hZ5eQGxTc7zq6zUjtHe80/view?usp=sharing',
      writeup:
        "The tension was palpable in the audience as two robots played a soccer match. Move, supporters of one team shouted. He, the other robot is blocking us, alleged the others. Robofooties that's what the game was called. Turn on the heat as its time to witness the biggest Robofootball Competition in the town, at Innovacion 2022. The two-rounds event is an ultimate showcase of love of robotics and football where each team battles to be the best at the biggest techfest in Kolkata, Innovacion 2022.",
      created_at: null,
      updated_at: null,
      category: 'Robotics',
    },
    {
      id: 5,
      name: 'Algorithmist',
      type: 'Coding',
      image_url: '9.png',
      rule_url: 'https://drive.google.com/file/d/1ojohfcZU_Cx_6W7YcQZj0KooFjlhBamK/view?usp=sharing',
      writeup:
        'Feel the heat when you hit and code? Get your hands dirty with some codes at the biggest techfest in Kolkata, Innovacion 2022. Show us if you have it in you to make it to the top amongst other contenders in an online coding event at the biggest techfest in town. Compete with the best of the best and prove your mettle at the biggest techfest in Kolkata, Innovacion 2022.',
      created_at: null,
      updated_at: null,
      category: 'Coding',
    },
    {
      id: 6,
      name: 'Game Dev Expo',
      type: 'Coding',
      image_url: 'x1.png',
      rule_url: 'https://drive.google.com/file/d/1faQjwztAX8beTl-dmc6Yf5_9sjEV9bBS/view?usp=sharing',
      writeup:
        'Innovacion-2022 is releasing a new chapter of Gaming Expo,which is aimed at creating an excellent platform for all stakeholders in the Indian and international gaming market to showcase new trends and technologies in the gaming arena. Game dev is an utopia for  developers to gain valuable insights and also to exhibit their games with other professionals and gaming bugs. Its time to get that much visibility and credibility that your game deserves. Exhibit at Game Dev to build a presence in your target market.\n',
      created_at: null,
      updated_at: null,
      category: 'Game Development',
    },
    {
      id: 7,
      name: 'MAD CAD',
      type: '	CAD',
      image_url: 'cad.png',
      rule_url: 'https://drive.google.com/file/d/1PxrFaNQR7WMfOhi5_5Wqdjw7jzkuI9LB/view?usp=sharing',
      writeup:
        "MAD CAD is an event by Innovaci????n that challenges you to create and design something new, on the topic given right on the stage. This gives an unique occasion to prove your skills and test your creativity by participating in this remarkable event.Indoor engineers are immensely important for us because their efforts provide critical support to us and thus without their pioneering and innovative efforts, our work wouldnt be possible.So be dilligent and accomplish the task. Bring the engineer out \n",
      created_at: null,
      updated_at: null,
      category: '3D Modelling - CAD',
    },
    {
      id: 9,
      name: 'Electroslides',
      type: 'Electronics',
      image_url: '2.png',
      rule_url: 'rules.html',
      writeup:
        'IEM Innovacion 2022 is going to organise an international paper-presentation event ELECTROSLIDES - 2022 & will start it&#39;s maiden run in the fold of Innovacion 2022. The said event will accept participants from different institutions and industries across the globe in the field of Electrical Engineering and it&#39;s periphery. A team consisting of a maximum up to 4 members will present their research paper , in front of eminent experts in relevant fields.',
      created_at: null,
      updated_at: null,
      category: 'Poster Presentation',
    },
    {
      id: 12,
      name: 'Gaming Event',
      type: 'Gaming',
      image_url: '7.png',
      rule_url: 'rules.html',
      writeup:
        'Innovacion brings out the beast out of the gamers with a wide range of gaming competitions and much more.\nThis year explore the world of competitive gaming and e-sports with a twist of technology and innovation.',
      created_at: null,
      updated_at: null,
      category: 'Gaming',
    },
    {
      id: 13,
      name: 'Science Model Exhibition',
      type: 'Exhibition',
      image_url: '12.png',
      rule_url: 'rules.html',
      writeup:
        'Be ready for the best robotics exhibition of the town. The biggest techfest of Kolkata, IEM Innovacion 2022 and IEM Innovation & Entrepreneurship Development Cell (IEDC) brings to you the an exhibition of modern technology like no other.\n\nThis exhibition provides a platform to put forth your out-of-the-box ideas and gives a chance to demonstrate its prototype in front of leading state industrialists who may just fund your brilliant concepts. It provides you with an exposure towards latest technologies and helps the engineering fraternity in the better evolution of ideas. So get your brains storming and seatbelts fastened to showcase your ideas in the biggest techfest of Kolkata, Innovacion 2022. So buckle up! \nGET > SET > INNOVATE\n\n',
      created_at: null,
      updated_at: null,
      category: 'Exhibition',
    },
    {
      id: 14,
      name: 'Innovare',
      type: 'Exhibition',
      image_url: '13.png',
      rule_url: 'rules.html',
      writeup:
        "No dream is enough until you have lived every moment of it. Everyday. They say that the best things are done by hand. Presenting Innovare, the model making competition of the biggest techfest of Kolkata, Innovacion 2022.\nIt's the hub of ideas and the congregation of implemented dream projects . A platform where ideas meet implementation. A competition where students from both schools and colleges are invited to showcase their models and compete with their respective peer groups.\nThis winter Innovate like never before at Innovacion 2022, the biggest techfest of Kolkata.",
      created_at: null,
      updated_at: null,
      category: 'Project Exhibition',
    },
    {
      id: 15,
      name: 'Eureka -  Pitch for Start up Funding',
      type: 'B-Plan',
      image_url: '5.png',
      rule_url: 'rules.html',
      writeup:
        'The IEM Entrepreneurship Cell,has the vision to encourage students of the institute to consider self-employment as a viable career option and to guide and inspire them in the field of Innovations, Inventions and entrepreneurship. This year IEM E-Cell in association with Innovacion, the biggest techfest of Kolkata is here with Eureka, a B-Plan Event for budding entrepreneurs to showcase their unique talent in front of the best of the industry. \nSo get ready to harness your business schemes, present it to eminent dignitaries from various fields at Innovacion 2022, the biggest techfest of Kolkata and make it a viable career opportunity.\n\n',
      created_at: null,
      updated_at: null,
      category: 'Entrepreneurship',
    },
    {
      id: 16,
      name: 'Mathemagic',
      type: 'Maths',
      image_url: '14.png',
      rule_url: 'https://drive.google.com/file/d/1w-vao457TF07UKIxir0YemoivS5dxTv2/view?usp=sharing',
      writeup:
        'Mathemagic, one of the paramount events of Innovacion 2022, the biggest techfest of Kolkata  is for those crazy about mathematics and the patterns hidden in the cold, yet beautiful landscape of mathematics. Would you believe me, if I told you that infinite sums can add up to finite numbers? Would you believe me, if I informed you that you can use a parabola to find prime numbers?\nShould you believe me, if I showed you that natural shapes are present in one single fractal? How about, the existence of a few irrational numbers which determine life as we know it?\n\t Let us blow your mind, this January, at Mathemagic, only at Innovacion 2022,the biggest techfest in Kolkata. Participate in groups of minimum 2 and maximum 3 people and stand a chance to win exciting prizes.\n',
      created_at: null,
      updated_at: null,
      category: 'Mathematics',
    },
    {
      id: 17,
      name: 'Aperture',
      type: 'Photography',
      image_url: '15.png',
      rule_url: 'https://drive.google.com/file/d/1VVfdObaFGYXiB5kG9znhRyPRUPErau3o/view?usp=sharing',
      writeup:
        'If your camera lens has a story to share, this is the best place for it to air. With the stage all set and the countdown pacing down the order its about time Aperture, INNOVACION make its move. With the motive all clear, the 2022 edition of APERTURE, INNOVACION sure looks to surpass its previous records with its extensive outreach and format up-gradations. As INNOVACION again makes its way back into the town with it 2022 edition and sets the IEM and UEM campus  with activity, each and every individual from the institute have found their interests and involved themselves in the biggest techno-management event of the city in some way or the other.  It is always a feast for every anxious photographer to capture those short-lived moments and take a share out of the ever-flowing river of time.\n',
      created_at: null,
      updated_at: null,
      category: 'Photography',
    },
    {
      id: 18,
      name: 'Scrapyard Wars',
      type: 'Fun Games',
      image_url: '16.png',
      rule_url: 'https://drive.google.com/file/d/1nWMnQp4x73qLsRcK0Zpn8Y9MQQyCRgCh/view?usp=sharing',
      writeup:
        'If you think you have it in you to think out of the box, then Scrapyard Wars is definitely the\nwhetstone for your skills. An event which gives you ample scope to test your creativity while\nyou race against time to build things out of scrap materials.',
      created_at: null,
      updated_at: null,
      category: 'Creativity',
    },
    {
      id: 19,
      name: 'Quiz Crusade',
      type: 'Quiz',
      image_url: '17.png',
      rule_url: 'https://drive.google.com/file/d/1K5xbUP-I7NowJDrc6BGyJTRGCXRYSa_7/view?usp=sharing',
      writeup:
        'Gear up folks for the biggest tech fest in Kolkata. Prepare for the ultimate battle royale of the best of\nthe best, right here at IEM Innovacion, 2022!\nWhile people brainstorm during the entire fest, the main workout session of the brain, the ultimate\nchallenge of the real neural interface, comes this year, bigger, better, and so much tougher.\nConfigure your brain to master the ultimate test, get those neurons firing and come down to IEM for\na challenge that is riveting and will keep you on the edge of the seat from the beginning till the end,\nand leave you asking for more. Come and experience quizzing like never before, at Innovacion 2022,\nThe Quiz Crusade , 2022.',
      created_at: null,
      updated_at: null,
      category: 'Quiz',
    },
    {
      id: 22,
      name: 'The Bull Master',
      type: 'Management',
      image_url: '18.png',
      rule_url: 'https://drive.google.com/file/d/17Jj8a9L5KeDLfBNfWir1DRFI7aRzWwcP/view?usp=sharing',
      writeup:
        'One of the funny things about stock market is that every time one person buys, another sells, and both think they are astute -William Feather \n\nWant to learn the trade of stock markets without losing a single pice? Well, we have just the right thing for you!\n\nLearn how the stock market works, understand the basics of the stock market through experiential learning of economic and financial concepts and stand a chance to win exciting prizes, only at The Bull Master - The Stock Market Challenge of Innovacion 2022.\n',
      created_at: null,
      updated_at: null,
      category: 'Stock Market',
    },
    {
      id: 23,
      name: 'Intelligex-ML Hackathon',
      type: 'Coding',
      image_url: '19.png',
      rule_url: 'rules.html',
      writeup:
        'Human beings can be complicated??????? so let????????s make machines capable of understanding and imitating human behaviour! Machine Learning is the inevitable technology of the future which has enabled humans to train computer programs to make intelligent real-life decisions with minimal human interactions. Innovaci????n 2022 brings to you the opportunity to dive deeper and test your skills in this budding new era of ML-inspired technology with the ML Hackathon. Challenge yourself to push your limits and solve some formidable Machine Learning problems in a healthy competitive environment. Train your model  the best possible way and stand a chance to win some amazing prizes!',
      created_at: '2020-03-11 19:15:18',
      updated_at: '2020-03-11 19:15:18',
      category: 'Hackathon',
    },
    {
      id: 27,
      name: 'Cyberthon - Capture the Flag',
      type: 'Cybersecurity',
      image_url: '6.png',
      rule_url: 'rules.html',
      writeup:
        'Are you ready to go on a journey to solve the issues tormenting the world? Then come let us unite in the thrilling passionate and flabbergasting Innovaci????n 2022 , the biggest techno-management fest in Kolkata as Innovaci????n introduces the brand new event CyberThon, the Ethical Hacking Hackathon.Gear up and leave your mark in this scintillating knowledge-based challenge to create a safer digital world. Participate and compete in security-themed challenges to get the highest score possible and stand a chance to win exciting and cool prizes in the biggest techno-management fest of Kolkata, Innovaci????n 2022. So grab your coding hoodie,get brainstorming and battle it out at Innovaci????n 2022',
      created_at: '2020-03-11 19:15:18',
      updated_at: '2020-03-11 19:15:18',
      category: 'Cyber Security',
    },
    {
      id: 28,
      name: 'IEM Innovacion International Science Olympiad (IIISO)',
      type: 'Olympiad',
      image_url: '22.png',
      rule_url: 'rules.html',
      writeup:
        'IEM Innovacion 2022 invites intellectuals from all around the globe to participate in the IEM Innovacion International Science Olympiad (IIISO), to test and showcase their analytical, logical, and critical thinking skills and talents in various fields of science including physics, chemistry, and biology on an international level. \nCompete only with the best of the best and prove your mettle on this unique platform provided by IEM Innovacion 2022.',
      created_at: '2020-03-11 19:15:18',
      updated_at: '2020-03-11 19:15:18',
      category: 'Olympiad',
    },
    {
      id: 29,
      name: 'Trail The Teaser',
      type: 'Video Editing',
      image_url: '23.png',
      rule_url: 'https://drive.google.com/file/d/10pWhQ-5DCEB7ceuUrXkZPe0EUQtm2q8H/view?usp=sharing',
      writeup:
        'Driving a huge engagement with the audience, in this fast-paced world nowadays, is not someone????????s cup of tea. Keen observation from your audience????????s perspective is quite an underrated skill. Engross your audience. IEM, in collaboration with UEM giving you all, the golden opportunity in their Annual techno - management fest in Kolkata, INNOVACION 2022, to transcend your skills; grab the chance to showcase how your teaser fascinates and intrigues the audience. Get set, innovate! Test your creativity out here. Keep up the hype!  Put forward your creative skills and out-of-the-box ideas to engage your audience through a single teaser!',
      created_at: '2020-03-11 19:15:18',
      updated_at: '2020-03-11 19:15:18',
      category: 'Vfx & Animation',
    },
    {
      id: 30,
      name: 'Appstrix',
      type: 'Coding',
      image_url: '24.png',
      rule_url: 'rules.html',
      writeup:
        "If Application Development is you passion, then this is the event for you! \nThis event that allows you to showcase your app development skills in a competitive environment. Get judged by eminent personalities in the field! \nYour work will be judged by various parameters such as the uniqueness of the app, the interface and it's usefulness in everyday life.\nInnovaci????n 2022 brings you the incredible opportunity to challenge your app development skills and compete with fellow developers to create astonishing applications ! Brace yourselves to be a part of this amazing hackathon by making an unforgettable app and of course stand a chance to win some exciting prizes in this mind-blowing tech-fest!",
      created_at: null,
      updated_at: null,
      category: 'Hackathon',
    },
    {
      id: 31,
      name: '404 not found',
      type: 'Coding',
      image_url: '25.png',
      rule_url: 'https://drive.google.com/file/d/1WDLYfjjU1FWb_a5Zm7y7MEAVZ_e7fZne/view?usp=sharing',
      writeup:
        'A web app developer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away! Are you ready to build the newest revolutionary web application that would solve some notorious problems? Innovaci????n 2022 brings you the incredible opportunity to challenge your web app development skills and compete with fellow developers to create a game-changing web app! Brace yourselves to be a part of this amazing hackathon by making an unforgettable web app and of course stand a chance to win some exciting prizes in this mind-blowing tech-fest!',
      created_at: null,
      updated_at: null,
      category: 'Hackathon',
    },
  ];
  



function showProjectsData() {
    const itemsDiv = document.querySelector('#eve');
    let content = events.map((data) => {
      return `
      <div class="col-lg-4 col-md-6 ">
        <div class="spekaer-box-style" style="--speaker-color: #5dbf7c">
        <figure class="speaker-image">
        <a href="../speaker/ava-charlotte-5/index.html">
        <img width="800" height="800" src="../wp-content/uploads/2020/02/eventimg/${data.image_url}" class="attachment-full size-full" alt="${data.name}" loading="lazy"  /> <span class="speaker-hover-btn">Read More</span>
         </a>
        </figure>
        <div class="speaker-footer-content">
        <h2 class="speaker-title">
        <a href="../speaker/ava-charlotte-5/index.html">${data.name}</a>
        </h2>
        <p>${data.category}</p>
        <div class="text-right">
        <div class="details-btn-wraper">
        <span class="round-icon-btn"><i class="xs-icon xs-icon-plus"></i></span>
        <ul class="speakers-social-lists">
        <li>
        <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
        </li>
        <li>
        <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
        <a href="https://linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
        </li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        `;
        
    });
    content = content.join(' ');
    itemsDiv.innerHTML = content;
    }

showProjectsData();
  
  
  
  
  
  
  
  