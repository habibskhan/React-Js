import _ from "lodash";
import { images } from "../sources";

export const categories = [
    {
      id: 1,
      title: "IMAGINE AWARD",
      desc: "IMAGINE finalists are pre-launch companies that are in the process of finalizing their businesses and brands. Please click through the image carousel for each finalist to view their full company video",
      slug: "imagine",
      templateColor: "#ff6b20",
    //   arrowColor: imagineArrow,
    },
    {
      id: 2,
      title: "GROW AWARD",
      // desc: "GROW finalists are pre-launch companies that are in the process of finalizing their businesses and brands. Please click through the image carousel for each finalist to view their full company video",
      desc: "GROW finalists are in-market companies that are currently trading. Please click through the image carousel for each finalist to view their full company video.",
      slug: "grow",
      templateColor: "#9fa6d4",
    //   arrowColor: growArrow,
    },
    {
      id: 3,
      title: "BREAKTHROUGH AWARD",
      mbtitle: "BREAKTHROUGH AWARD",
      // desc: "BREAKTHROUGH finalists are pre-launch companies that are in the process of finalizing their businesses and brands. Please click through the image carousel for each finalist to view their full company video",
      desc: "Innovation in active ingredients that address key issue areas for the Indian consumer.",
      slug: "breakthrough",
      templateColor: "#29afce",
    //   arrowColor: breakArrow,
    },
    {
      id: 4,
      title: "CREATE AWARD",
      desc: "CREATE finalists include the next generation of creative talent with submissions focusing on the theme of Experiential Beauty in India.",
      slug: "create",
      templateColor: "#fdbc00",
    //   arrowColor: createArrow,
    },
  ];

export const datas = [
  {
    id: 1,
    category_id: 1,
    category: "imagine",

    name: "Giti Datt",
    InnerName: "Giti Datt",
    slug: "giti-datt",
    img: images.imagine1.image,
    alt: images.imagine1.alt,
    heroImg: images.imaginefinalist1.image,
    // mbimg: images.mbimagine1.image,
    desg: "Founder",
    company: "Havah",
    desc: `Havah draws from India’s rich heritage of perfumery, art and philosophy, to develop a unique perspective on the power of fragrance in contemporary life. Crafted for the curious and connoisseurs alike, our perfumes are an immersive sensory experience, designed to evoke emotions and make moods. Embedded in community, Havah both honours the deep, embodied knowledge of attar artisans whilst experimenting with innovation and evolution and marrying the best of precious, natural aromatics with modern sensibilities and ethical practices. In essence, Havah conceptualises a distinctly modern, Indian aesthetic of perfumery, building upon our rich legacy in new ways.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=GyTcKyc5WQA",
    web: "",
    insta: "https://www.instagram.com/gitidatt/?hl=de",
  },
  {
    id: 2,
    category_id: 1,
    category: "imagine",
    // name: "Dr. Sonia",
    name: "Dr. Sonia Badreshia",
    InnerName: "Dr. Sonia Badreshia",
    slug: "dr-sonia-badreshia",
    img: images.imagine2.image,
    alt: images.imagine2.alt,
    heroImg: images.imaginefinalist2.image,
    // mbimg: images.mbimagine1.image,
    desg: "Founder",
    company: "Dr Sonia MD",
    desc: `Dr. Sonia Badreshia, a renowned board-certified South Asian dermatologist based in California, is the visionary founder behind DR SONIA MD, a pioneering brand focused on skincare for South Asians and people of color. With a wealth of expertise as a medical author and international speaker on anti-aging, acne, lasers and skin of color treatments, and through a collaboration with her husband plastic surgeon Vivek Bansal, Dr. Badreshia identified a crucial gap in the market and developed her own line.  Dr Sonia MD is her protocol for problematic skin featuring proprietary medical grade formulations tailored for skin of color by skin of color, with the highest FDA-approved active concentrations, and a powerhouse combination of ingredients for outcome-driven results, partnered with your own virtual skin care expert.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=uvq7ckHAmXQ",
    web: "https://www.instagram.com/drsoniamd/?hl=en",
    insta: "https://www.instagram.com/drsoniamd/?hl=en",
  },
  {
    id: 3,
    category_id: 1,
    category: "imagine",
    name: "Aditi Mundra & Riya Ranka",
    InnerName: "Aditi Mundra <br/> And Riya Ranka",
    slug: "aditi-mundra-&-riya-ranka",
    img: images.imagine3.image,
    alt: images.imagine3.alt,
    heroImg: images.imaginefinalist3.image,
    // mbimg: images.mbimagine1.image,
    desg: "Co-Founder",
    company: "Ādikriyā",
    desc: `Co-founders Aditi and Riya blended their shared passion for self-care into Ādikriyā, a brand that champions wellness for all through products and experiences that are inspired from the Indian sciences of Ayurveda and Yoga.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=_fhlbXYtBYU",
    web: "https://www.adikriya.in/",
    insta: "https://www.instagram.com/adikriya.in/",
  },
  {
    id: 4,
    category_id: 1,
    category: "imagine",
    name: "Aman Dahele",
    InnerName: "Aman Dahele",
    slug: "aman-dahele",
    img: images.imagine4.image,
    alt: images.imagine4.alt,
    heroImg: images.imaginefinalist4.image,
    // mbimg: images.mbimagine1.image,
    desg: "Founder",
    company: "AMANAURA",
    desc: `AMANAURA fuses Ayurvedic heritage with modern skincare, embodying "Aman" (peace) and "Aura" (light). Our goal is dual: enhance beauty while nurturing serenity. Tailoring to South Asian skin, we embrace a 360-degree approach. Blending Ayurvedic supplements with topicals, we redefine skincare. Inclusive trials ensure regional representation, fostering skin health through evidence-based insights. We educate consumers about our formulas, empowering informed choices.`,
    // info: imagineURL,
    watch: "https://youtu.be/fAx-DcMvI-E?si=DHLhfGeTyGCqWJnt",
    web: "",
    insta: "https://instagram.com/amanaura.skin?igshid=MzRlODBiNWFlZA==",
  },
  {
    id: 5,
    category_id: 1,
    category: "imagine",
    name: "Hetali Kamdar",
    InnerName: "Hetali Kamdar",
    slug: "hetali-kamdar",
    img: images.imagine5.image,
    alt: images.imagine5.alt,
    heroImg: images.imaginefinalist5.image,
    // mbimg: images.mbimagine1.image,
    desg: "Founder",
    company: "Baboski",
    desc: `BABOSKI stands as India's premier luxury bath and body products brand, meticulously curated using top-tier ingredients, including natural extracts and EncapShield SPF technology. Pioneering innovative sun care solutions, we proudly introduce India's first Bathe On Sunscreen range, seamlessly integrating into your daily routine. Our aim is to provide the range on Bathe -On Sunscreen with fragrances that elevate everyday rituals into sublime sensory experiences. Beyond our commitment to quality, we aspire to champion mental health awareness. BABOSKI's dedication lies in enhancing well-being and confidence, empowering individuals to embrace holistic self-care and beauty in every facet of life.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=8m8fforSn0U",
    web: "http://www.baboski.com/",
    insta: "https://www.instagram.com/baboski.official/",
  },


  {
    id: 6,
    category_id: 2,
    category: "grow",
    name: "Anousha Chauhan & Shreyansh Chauhan",
    InnerName: "Anousha Chauhan <br/> And Shreyansh Chauhan",
    slug: "anousha-chauhan-&-shreyansh-chauhan",
    img: images.grow1.image,
    alt: images.grow1.alt,
    heroImg: images.growfinalist1.image,
    // mbimg: images.mbgrow1.image,
    // desg: "Director <br/> Director",
    desg: "Founders",
    company: "Beautywise",
    desc: `Anousha and Shreyansh Chauhan, brother-sister entrepreneurs driving the aspirations of 
    Beautywise, a dermatology-led professional beauty supplementation brand with the revolutionary 
    Dual-action technology (Powered by V-FillTM) that enables to combine oil soluble and water soluble 
    ingredients in one innovative capsule for enhanced bio- availability and better efficacy. <br/> <br/>
    Our mission is to empower everyone to embrace their unique beauty from within, by incorporating sustainable, 
    evidence-based beauty supplements for long lasting results. <br/> <br/>
    At Beautywise, we've forged strong partnerships with industry leaders. Our footprint extends Pan India
     in the retail landscape, with presence in over 500 pharmacies and Dermatology clinics . Our journey 
     online has been nothing short of remarkable, in a short duration we have made an impressive impact 
     online , and are one of the top selling brands on Nykaa and Amazon.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=-qjS-rYKvZk",
    web: "https://beautywise.in/",
    insta: "https://www.instagram.com/beautywiseskinfood/",
  },
  {
    id: 7,
    category_id: 2,
    category: "grow",
    name: "Meher Jadwani",
    InnerName: "Meher Jadwani",
    slug: "meher-jadwani",
    img: images.grow2.image,
    alt: images.grow2.alt,
    heroImg: images.growfinalist2.image,
    // mbimg: images.mbgrow1.image,
    desg: "Founder",
    company: "Dearist",
    desc: `Dearist is a company for those who care as much about quality products as they do about carefully curated knowledge. The product line comprises five elevated essentials that are devoid of fragrance, colour, silicone, and paraben to help create a transformative skin-fast experience.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=TwH8U9uHrws",
    web: "https://www.thedearist.com",
    insta: "https://www.instagram.com/thedearist/",
  },
  {
    id: 8,
    category_id: 2,
    category: "grow",
    // name: "Jean Christophe Bonnafous",
    name: "Jean-Christophe Bonnafous",
    InnerName: "Jean-Christophe Bonnafous",
    slug: "jean-christophe-bonnafous",
    img: images.grow3.image,
    alt: images.grow3.alt,
    heroImg: images.growfinalist3.image,
    // mbimg: images.mbgrow1.image,
    desg: "Founder",
    company: "Call of the Valley",
    desc: `After a decade-long career as flutist and disciple of the revered classical flutist Pandit Hariprasad Chaurasia, Jean-Christophe Bonnafous launched the Mumbai-based perfumery Call of the Valley in 2019. Inspired by the idea of simple beauty with a focus on ingredients that are sustainably sourced from across India to ensure maximum potency, Jean-Christophe’s vision for the company is to bring single-ingredient simplicity back to beauty and highlight traditional Indian wellness practices and the centuries-old art of Indian perfumery on a global stage.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=j7tlw1ofcZA",
    web: "https://callofthevalley.co.in/",
    insta: "https://www.instagram.com/callofthevalleyofficial/",
  },
  {
    id: 9,
    category_id: 2,
    category: "grow",
    name: "Sanshi Aggarwal",
    InnerName: "Sanshi Aggarwal",
    slug: "sanshi-aggarwal",
    img: images.grow4.image,
    alt: images.grow4.alt,
    heroImg: images.growfinalist4.image,
    // mbimg: images.mbgrow1.image,
    desg: "CEO",
    company: "Flossy Cosmetics",
    desc: `Flossy Cosmetics is a community-driven brand that champions exceptional skin-first formulas to create makeup that prioritizes self-love and self-expression.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=hu_n5Sn_oJ8",
    web: "https://flossycosmetics.com/",
    insta: "https://www.instagram.com/flossycosmetics.in/",
  },
  {
    id: 10,
    category_id: 2,
    category: "grow",
    name: "Khayl Reis Lalani & Karim Lalani",
    InnerName: "Khayl Reis Lalani <br/> And Karim Lalani",
    slug: "khayl-reis-lalani-&-karim-lalani",
    img: images.grow5.image,
    alt: images.grow5.alt,
    heroImg: images.growfinalist5.image,
    // mbimg: images.mbgrow1.image,
    desg: "CEO and Co-Founder, <br/> Co-Founder & President",
    company: "Glutaweis Cosmetics Private Limited",
    desc: `Glutaweis is the world's first Swiss Epigenetic skincare brand that is powered by Glutathione. Glutaweis offers a Swiss-engineered, one-of-a-kind formulation from Montreux that combines master-antioxidant Glutathione and 16 natural yet powerful key ingredients. Each of these ingredients are selected for their in-vivo and in-vitro clinical study results and perfectly synergised across 3 products, safe for all skin types, and offer skin health and radiance. With a three step all-encompassing skin routine, the Glutathione Radiance Range recovers, repairs and rejuvenates skin, delivering visible results such as a 65% reduction in dark spots and 2 shades brighter skin with continued use.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=_oHvUB5H_Us",
    web: "https://www.glutaweis.com",
    insta: "https://www.instagram.com/glutaweis/",
  },
  {
    id: 11,
    category_id: 2,
    category: "grow",
    name: "Shenai Bridglall",
    InnerName: "Shenai Bridglall",
    slug: "shenai-bridglall",
    img: images.grow6.image,
    alt: images.grow6.alt,
    heroImg: images.growfinalist6.image,
    // mbimg: images.mbgrow1.image,
    desg: "Founder",
    company: "MEGAGLOW",
    desc: `MEGAGLOW is a South-Asian African skincare brand that is backed by science with people of color in mind and formulated with patented complex, Actiglow™, proven to reduce discoloration within 12 weeks when used daily.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=GE4XNqIhh3k",
    web: "https://megaglow.com/",
    insta:
      "https://www.instagram.com/megaglowofficial/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    id: 12,
    category_id: 2,
    category: "grow",
    name: "Dr. Chytra Anand & Meera Iyer",
    InnerName: "Dr. Chytra Anand <br/> And Meera Iyer",
    slug: "dr-chytra-anand-&-meera-iyer",
    img: images.grow7.image,
    alt: images.grow7.alt,
    heroImg: images.growfinalist7.image,
    // mbimg: images.mbgrow1.image,
    desg: "Founder, Co-Founder & CEO",
    company: "SkinQ",
    desc: `SkinQ is a pioneering skincare brand specializing in the creation of safe and effective dermo-cosmetics designed specifically for skin of color. With a steadfast commitment to innovation, SkinQ has emerged as a trailblazer in the skincare industry, introducing unique formulations that are backed by clinically proven dermatologist expertise. As the first company to develop and offer Made Safe certified products for skin of color, SkinQ holds a distinguished position in the dermocosmetics market, answering a previously unmet need for specialized and safe skincare solutions. Their formulations are meticulously crafted by renowned dermatologist Dr Chytra Anand, a skin of colour expert who understand the unique needs and nuances of skin of color while the business is headed by Meera Iyer.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=KR9NqZ4ddn4",
    web: "http://www.skinq.com",
    insta: "https://www.instagram.com/myskinq/",
  },
  {
    id: 13,
    category_id: 2,
    category: "grow",
    name: "Sanchaya Soundhar",
    InnerName: "Sanchaya Soundhar",
    slug: "sanchaya-soundhar",
    img: images.grow8.image,
    alt: images.grow8.alt,
    heroImg: images.growfinalist8.image,
    // mbimg: images.mbgrow1.image,
    desg: "Founder",
    company: "vēr वेर",
    desc: `vēr वेर is founded on the principles of intentional living and the belief in natural, transformative wellness with minimal maintenance. Their mission is clear: to innovate and curate thoughtful formulations enriched with potent, plant-based ingredients. This philosophy of 'less is more' permeates their skincare products, which are crafted to deeply nourish, enhance, and rejuvenate the skin. With a profound appreciation for intentional practices, vēr वेर embraces the philosophy of slow and artful living. Their self-care essentials, simple and rooted in nature, comprise a collection designed to cultivate intention through the ritual of Ayurveda. Inspired by South Asia's rich cultural heritage, where beauty and wellness rituals have long played an integral role in connecting divinity with nature, vēr वेर pays homage to this legacy while promoting authenticity and inclusivity. They aspire to build a community around representation and integrity that is grounded in personal rituals, honors the past, represents the present and informs the future. vēr वेर is a gesture of love, an ode to authenticity and an appreciation for tradition, culture and heritage.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=vFkSFLZAQTQ",
    web: "http://www.vertheritual.com/",
    insta: "https://www.instagram.com/ver.theritual/",
  },


  {
    id: 21,
    category_id: 4,
    category: "create",
    name: "Diya Ahuja",
    InnerName: "Diya Ahuja",
    slug: "diya-ahuja",
    img: images.create1.image,
    alt: images.create1.alt,
    heroImg: images.createfinalist1.image,
    // mbimg: images.mbcreate1.image,
    desg: "Creative Director/Stylist",
    company: "",
    desc: `Diya Ahuja is a creative director and fashion stylist with a Bachelor's degree in Fashion Media Communication from Pearl Academy. She is passionate about blending colors, textures, and styles to create captivating fashion experiences. With a keen eye for aesthetics, Diya aims to craft beautiful visual narratives in every project she undertakes.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=hH5P0thrEeI",
    web: "",
    insta: "https://instagram.com/diyaahujaa?igshid=NzZhOTFlYzFmZQ==",
  },
  {
    id: 22,
    category_id: 4,
    category: "create",
    name: "Shivani Joshi, James Lalthanzuala & Nishanth Radhakrishnan",
    InnerName:
      "Shivani Joshi, <br/> James Lalthanzuala And <br/> Nishanth Radhakrishnan",
    slug: "shivani-joshi-&-james-lalthanzuala-&-nishanth-radhakrishnan",
    img: images.create2.image,
    alt: images.create2.alt,
    heroImg: images.createfinalist2.image,
    // mbimg: images.mbcreate1.image,
    desg: "Beauty Artist, Fashion Stylist, <br/> Fashion and Documentary Photographer",
    company: "",
    desc: `Shivani Joshi is a freelance beauty artist with over 7 years of experience in the industry. She specializes in makeup, hair, body art and headgears. Her creative approach blends modern trends with timeless elegance and she draws inspiration from the rich tapestry of culture, diversity and the vibrant street fashion of India. Embracing uniqueness and celebrating individuality are at the core of her work and she continuously seeks to unveil the extraordinary  in each person through her work.  <br><br>Born and brought up in Aizawl, Mizoram,India, James’ work revolves around the idea that style is not just limited to clothes; it extends to all aspects of life. He has created a brand for himself through his innovative take on style, attracting a host of clients namely Lakme Fashion Week, Atmos, Marriot Hotels, as well as Indian labels like Manish Arora, Raw Mango, Ekaya and Divyam Mehta.
    With a keen and meticulous eye, he often source local flea markets in search of thrifted gems that could be turned into a fun headpiece or accessory to be used for a shoot. While having an acute interest in Tokyo street fashion and the upcoming London design scene, he also finds inspiration in ideas of form and shape, creating interesting cut & paste looks through the mixing of pattern and texture. <br><br>For the past five years, NIshanth has been navigating the world of fashion and documentary photography. His work has found a place in publications like TIME, Vogue Arabia, Esquire, Dazed, and iD to name a few. While these collaborations have been instrumental in his growth, he constantly seeks to learn and evolve in this ever-changing creative landscape.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=StH30iINvDQ",
    web: "",
    insta: "https://www.instagram.com/nishanth.radhakrishnan/?hl=en",
  },
  {
    id: 23,
    category_id: 4,
    category: "create",
    name: "Doyel Joshi & Neil Balser",
    InnerName: "Doyel Joshi <br/> And Neil Balser",
    slug: "doyel-joshi-&-neil-balser",
    img: images.create3.image,
    alt: images.create3.alt,
    heroImg: images.createfinalist3.image,
    // mbimg: images.mbcreate1.image,
    desg: "Artists / Founders",
    company: "Howareyoufeeling.studio",
    desc: `Doyel is Marwadi and Neil is German and Indian-Bengali. We met in New York at Parsons-The-New-School. Doyel studied Fashion-Design that evolved to a gravitation towards visual storytelling and creative direction. She worked with brands between New York and Berlin. 
    Neil did a Hybrid-Degree with a focus on sound and performance in Maastricht as well as Parsons. Experimental work in sound was the initial focus point with brands in fashion, film and theatre. 
    For both the disciplines acted as part of a spectrum of exploration in the arts to understand the inner world and unfold it across different forms of expression.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=KmEsLaoZDxo",
    web: "https://www.howareyoufeeling.studio",
    insta: "https://www.instagram.com/howareyoufeeling.studio/",
  },
  {
    id: 24,
    category_id: 4,
    category: "create",
    name: "Priya Minhas",
    InnerName: "Priya Minhas",
    slug: "priya-minhas",
    img: images.create4.image,
    alt: images.create4.alt,
    heroImg: images.createfinalist4.image,
    // mbimg: images.mbcreate1.image,
    desg: "Director",
    company: "",
    // desc: `At its core, HONEY & MUD is a film about reconciling the sweeter, softer, taller, younger, meaner, brighter versions of ourselves we may have hidden, forgotten or not yet met. It’s about the women who each of us have been and wish to be and the memories and hopes that live guarded in our chests or at the pits of our stomach. It’s about our relationship to pleasure we seek or are denied. It is also a modern and unique way to explore some of the traditions, superstitions and rituals that surround Indian beauty culture.`,
    desc: `Priya Minhas is a South Asian Director from London who has created culturally impactful live performances, music videos, and short-form documentaries with the most exciting names in music. 
    <br/> <br/> Priya is passionate about telling stories that emerge from the margins and exploring diasporic identities. In 2020, she was one of six directors selected for The Salon, a mentorship program for South Asian talent in Hollywood. In 2021, she won the audience choice award for "Best Music Video" at the South Asian Film Festival of America. She was also a contributing writer to The Good Immigrant, USA, an award-winning anthology exploring race.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=dTW3q0eYxes",
    web: "https://www.priyaminhas.com",
    insta: "https://www.instagram.com/pri_diddy/",
  },
  {
    id: 25,
    category_id: 4,
    category: "create",
    name: "Henry DaCosta",
    InnerName: "Henry DaCosta",
    slug: "henry-daCosta",
    img: images.create5.image,
    alt: images.create5.alt,
    heroImg: images.createfinalist5.image,
    // mbimg: images.mbcreate1.image,
    desg: "Director",
    company: "",
    desc: `Henry DaCosta's existing portfolio predominantly features music videos and commercial projects but he also aspires to branch out into the fashion realm, specifically collaborating with South Asian brands and creatives.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=q1w14Vl-8dE",
    web: "https://www.henry-dacosta.com",
    insta: "https://www.instagram.com/__henrydacosta__/?hl=en",
  },
  {
    id: 26,
    category_id: 4,
    category: "create",
    name: "Furmaan Ahmed",
    InnerName: "Furmaan Ahmed",
    slug: "furmaan-ahmed",
    img: images.create6.image,
    alt: images.create6.alt,
    heroImg: images.createfinalist6.image,
    // mbimg: images.mbcreate1.image,
    desg: "Photographer and Art Director/Set Designer",
    company: "",
    desc: `At the heart of Furmaan Ahmed's work is change. Whether it is a new world, extraordinary characters or fantasy, his work compells the viewer to think about the world around us in new ways. Heritage, folklore and tradition inform his work as I believe there is so much power in what has come before us.`,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=/Am8hxItfHeA",
    web: "",
    insta: "https://www.instagram.com/furmaan.ahmed/",
  },
  {
    id: 27,
    category_id: 4,
    category: "create",
    name: "Sachin Gogna",
    InnerName: "Sachin Gogna",
    slug: "sachin-gogna",
    img: images.create7.image,
    alt: images.create7.alt,
    heroImg: images.createfinalist7.image,
    // mbimg: images.mbcreate1.image,
    desg: "Fashion and Celebrity Stylist",
    company: "",
    desc: `Sachin Gogna is a British Punjabi Fashion and Celebrity stylist rooted in the vibrant heart of East London. Armed with a Graphic and Communication Design degree from the University of Leeds, his creative path began here which was heavily inspired by futuristic forms. He envisiosn a future where technology and the human body coalesce, employing adventurous styling weaved with modern techniques like CGI to create captivating fashion stories. His ultimate dream? Unveiling a fashion brand that flawlessly fuses cyberpunk vibes with everyday wear, pushing the limits of style. `,
    // info: imagineURL,
    watch: "https://www.youtube.com/watch?v=SzdfxO-9x0A",
    web: "",
    insta: "https://www.instagram.com/snxtchin/?hl=en",
  },
];

export const findAll = (category_slug = null) => {
  if (category_slug) {
    // return _.find(datas, { 'category': category_slug });
    return _.filter(datas, { category: category_slug });
  } else {
    return datas;
  }
};

export const findBySlug = (slug) => {
  let data = _.find(datas, { slug: slug });
  let category = findCategoryBySlug(data.category);
  return { ...data, categoryData: category };
};
export const findCategoryBySlug = (slug) => {
  return _.find(categories, { slug: slug });
};
