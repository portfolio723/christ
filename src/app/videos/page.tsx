
'use client';

import Image from 'next/image';
import { PlayCircle, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SocialMedia } from '@/components/page/social-media';
import { Hero } from '@/components/page/hero';
import Link from 'next/link';

const featuredVideos = [
  {
    id: 'video-1',
    title:
      'By the way, Breaking is not the end but the opening for a life with 𝐆𝐎𝐃 👑',
    description: `Our wing breaks. 💔
And we are left standing in the silence that follows. 
We don't even try. We’re almost afraid to look too closely and 
𝐪𝐮𝐢𝐞𝐭𝐥𝐲 𝐚𝐜𝐜𝐞𝐩𝐭: 𝐨𝐮𝐫 𝐥𝐢𝐟𝐞 𝐡𝐚𝐬 𝐞𝐧𝐝𝐞𝐝 𝐡𝐞𝐫𝐞.
 
A broken wing is one thing, but a collapsed spirit? 
That is everything. ✨
 
𝗢𝘂𝗿 𝗙𝗮𝘁𝗵𝗲𝗿 👑 sees the breaking. 
He sees the snapped trust, the fallen hope, the places where we’ve come undone. 
And He does not look away. 👁️
 
He restores what we cannot. 
He mends not only the wing —but the weariness behind it.
𝐇𝐞 𝐫𝐞𝐩𝐚𝐢𝐫𝐬 𝐭𝐡𝐞 𝐰𝐢𝐥𝐥 𝐰𝐞 𝐭𝐡𝐨𝐮𝐠𝐡𝐭 𝐰𝐚𝐬 𝐠𝐨𝐧𝐞, 𝐭𝐡𝐞 𝐬𝐭𝐫𝐞𝐧𝐠𝐭𝐡 𝐭𝐡𝐚𝐭 𝐟𝐚𝐢𝐥𝐞𝐝 𝐮𝐬 𝐰𝐡𝐞𝐧 𝐰𝐞 𝐧𝐞𝐞𝐝𝐞𝐝 𝐢𝐭 𝐦𝐨𝐬𝐭.
 
Why? 🤔
 
𝗕𝗲𝗰𝗮𝘂𝘀𝗲 𝗮 𝗯𝗿𝗼𝗸𝗲𝗻 𝘄𝗶𝗻𝗴 𝗰𝗮𝗻 𝗵𝗲𝗮𝗹 𝗶𝗻 𝘁𝗶𝗺𝗲 
𝗕𝘂𝘁 𝗮 𝗰𝗼𝗹𝗹𝗮𝗽𝘀𝗲𝗱 𝘀𝗽𝗶𝗿𝗶𝘁 𝗰𝗮𝗻𝗻𝗼𝘁 𝗳𝗹𝘆, 𝗲𝘃𝗲𝗻 𝘄𝗶𝘁𝗵 𝗽𝗲𝗿𝗳𝗲𝗰𝘁 𝗳𝗲𝗮𝘁𝗵𝗲𝗿𝘀.🪶
 
So he starts within. 🌱
 
That is why He mends our inward fractures first.
He comes close to the heart that has forgotten its own song 🎶And He reminds us: 
You will rise again. ☀️
 
Then, from the very fractures where you fell apart, 
He gives you a new sky... 🌌
a horizon your former flight could never reach. 
He fills you with a courage you never knew, and a strength that lifts you higher than you ever dreamed. 🦅
 
We all know what it is to be broken. We convince ourselves that shattered wings can never be restored—that our story has reached its end. 
 
But 𝐆𝐎𝐃... 🙌
He is already writing a different story. 📖
He knows how to reconstruct 🏘 
What has been beyond repair. 
 
It begins the moment you dare to place the pieces in His hands. 🤍`,
    thumbnail: '/vd1.jpeg',
    thumbnailHint: 'open bible',
    videoSrc: '/vd1.mp4',
    href: '/videos/breaking-is-not-the-end',
    category: 'Fracture meets Grace',
  },
  {
    id: 'video-2',
    title: 'We will lose control in the presence of HIS love ❤️‍🔥',
    description: `Don't ask who loved you.. 
Don't think that person should love me. 
Don't expect how much they should love you🤔 
Don't insist that they should love you this much 😑 
 
Taste the love of the Father for once...🤤❤️ 
 
I bet, 
You 🫵🏻 felt like there was no need to turn to look at the world, and you don't even want to ask, "Do you love me?" 🤷‍♀️ 
 
నిన్ను ఎవరు ప్రేమించారో అడగకు.. ఆ వ్యక్తి నన్ను ప్రేమించాలి అనుకోకు.
వాళ్ళు నిన్ను ఎంత ప్రేమించాలి అని ఆశించకు🤔 
వాళ్ళు నిన్ను ఇంతగా ప్రేమించాలి అని పట్టుబట్టకు 😑 
 
ఒక్కసారి తండ్రి ప్రేమను రుచి చూడు...🤤❤️ 
 
నేను పందెం వేస్తున్నాను, నువ్వు 🫵🏻 ప్రపంచము  వైపు చూడటానికి కూడా అవసరం లేదని భావింస్తావు  మరియు "నువ్వు నన్ను ప్రేమిస్తున్నావా?" అని అడగాలని కూడా అనుకోవు 🤷‍♀️`,
    thumbnail: '/vd2.jpeg',
    thumbnailHint: 'light through clouds',
    videoSrc: '/vd2.mp4',
    href: '/videos/his-love',
    category: 'The sweetest habit',
  },
  {
    id: 'video-3',
    title:
      'Fasting is not something we do to God. It is something God does in us.🛐✨',
    description: ` 
Have you heard, beloved?

Fasting is a sacred step.

We fast for many reasons

for breakthroughs,✨

for healing,🌿

for needs only heaven can meet.🌄
 
But there is another fast, one called by God, appointed in God's calendar,🗓️

born in God's season.🌱

This is the fast of true intimacy with Him.💞
 
In this fast, the Holy Spirit 🕊️ Himself performs surgery on our spirit. He allows us to face every old temptation to train us, to kill the cocktail emotions of flesh and spirit mixed up🚫🍸
 
In this fast…

We walk right up to the edge of the sharp swords.⚔️

We entered, almost fell into the cyclone of temptation🌪️, and He will pull us out.🙌

Again, He pulls us in,🙌🙌

Again, He pulls us out.🙌🙌🙌
 
Again and again, this ring cycle continues, day after day.
 
It stumbles us. It makes us tremble.

Our own flesh rises on us like a wave,🌊

lifts us to the top of the hill⛰️…

only to push us off.

And He allows it.

He allows the beating.

He allows the rattling.

He allows us to feel broken, exposed almost condemned.
 
Why?

Is he playing some kind of game with us?🎭
 
No, beloved.

Listen closely:

He isn’t playing games

He’s building warriors⚔️🔥
 
Yes, we are warriors, 🛡️

Yet we almost forget.

Our anger rages like a sunburn toward Him☀️🔥

because He allows us to go through it all.

Our hearts cry out,💔

Yet our hearts forget:
 
From where does this strength come?

Is it our own?

Is this unshakable perseverance ours?

Born from our own discipline 💪,

our own courage?
 
No, dear.❤️
 
It is His grace.✨🕊️

We must call upon His grace.

He secretly holds us in it.
 
Every time He allows us to face the edge,

He cuts away the part of us

Every time He pulls us out,

He teaches our hands to hold His 👑🙌

He’s not letting us fall 

He’s teaching us how to rise.

Not letting us drown 

but showing us our eyes stay fixed on Him.💖

This isn’t punishment.

It’s holy training ⚒️🕊️

and the "TRAINING GROUND NAME IS FASTING"🔥

where human weakness 

Finally blends and meets GODLY strength. ✨
 
Do not fear the trap — Go boldly

Cause He allows the trap only to pull us out 💪✨
 
So, stay anointed, warrior. 🕊️⚔️

Until next time...`,
    thumbnail: '/vd3.jpeg',
    thumbnailHint: 'praying hands',
    videoSrc: '/vd3.mp4',
    href: '/videos/fasting',
    category: 'In His Grip & Grace',
  },
];

const newVideos = [
    {
    id: 'video-4',
    title: "Don't confuse feeling His nearness. If we truly 𝗜𝗡 𝗛𝗜𝗠 more than 𝗪𝗜𝗧𝗛 𝗛𝗜𝗠 even in failure too, success.",
    description: "Yes, beloved 💙\n \nI’ll never tire of reminding to you... 😇\n\nOur 𝐆𝐎𝐃 is always with us in all our ways. Yes, he is.🫠\n \nBut the exciting question is...this time I'm not asking you the question; I'm telling you, Honestly, ask yourself, AM I WITH 𝐆𝐎𝐃 as he is with me always in all my ways?? or not!!?🤔\n \nI trust you’ve asked yourself😅\n\nNow it’s my turn to do the same 🫣\n \nSee Lovelies 😊,\n \nWhen you see a great tree 🌳 from afar, you recognize it as a tree  yet it appears small. Move closer, step by step, we are so small in front of that big tree while standing in front of the tree🌳.\n \nLikewise, we might think \"𝐆𝐎𝐃 is with me; I can move freely. He knows all and watches over me. And while this is true, we must also examine ourselves🧐,\n \nHow deeply do I truly know Him? \n\nWhat intimacy do i share?\n\nHow closely am I walking with Him in my decisions?\n\nDoes my path delight Him?\n\nHas He clearly confirmed my way, or do I simply assume His presence, as always?!!! 💭💭💭💭💭\n \nDo you feel familier?? fall in puzzled? 😐\n \nLook, my dear 🙂\n \nHe is no earthly lover who abandons us selfishly.\n\nNo faithless husband who discards a covenant lightly 🫠🫠\n \n𝐇𝐄 𝐈𝐒 𝐎𝐔𝐑 𝐅𝐀𝐓𝐇𝐄𝐑 👑🥰 𝐀𝐍𝐃 𝐘𝐎𝐔 𝐀𝐑𝐄 𝐇𝐈𝐒 𝐃𝐀𝐔𝐆𝐇𝐓𝐄𝐑 👸𝐀𝐍𝐃 𝐒𝐎𝐍🤴.𝐇𝐄 𝐋𝐎𝐕𝐄𝐒 𝐘𝐎𝐔 𝐌𝐎𝐑𝐄 𝐓𝐇𝐀𝐍 𝐇𝐈𝐌𝐒𝐄𝐋𝐅 💝. \n\nHe longs for your presence above all else 💖. \n\nHE waits to reveal himself to you ❣.  \n \nSo tear off the veil, Leave doubt behind, Don’t nest in comfortable lies that you know Him fully...Go...Sit with Him...\n\nSpend time knowing Him deeper... 💞\n \nFor when His love truly covers us,even failure whispers near our ears.\n\nDo i will won over you?🤭and the very failure will speak to you ,Better i stay far from you child of GOD.😎😜\n \nsounds proud right!?🤗 🤩\n \nAlthough God is with us, what matters is that how much we are with him in all matters!!!🎯\n \nJust think, Who, after all, should know a Father’s heart better than His own son or daughter?",
    thumbnail: '/vd4.jpeg',
    thumbnailHint: 'path light',
    videoSrc: '/vd4.mp4',
    href: '/videos/feeling-nearness',
    category: 'In Him',
  },
  {
    id: 'video-5',
    title: "That's all. His love is💕!!! Bubbling🫧🤍...That's all we can't see!!! ♥‿♥",
    description: "Experience the unseen, bubbling love of God that surrounds and fills us. A short reflection on His ever-present affection.",
    thumbnail: '/vd5.jpeg',
    thumbnailHint: 'love concept',
    videoSrc: '/vd5.mp4',
    href: '/videos/bubbling-love',
    category: 'Bubbling Love',
  },
   {
    id: 'video-6',
    title: "𝐆𝐎𝐃'𝐬 habituality never stops loving you ❤️🌷🌸",
    description: `Why so much love?! 🤔It is on you!!! 🤷‍♀️

Remember, Beloved: Love is not God; 𝐆𝐎𝐃 𝐢𝐬 𝐥𝐨𝐯𝐞💗ྀི 𝐘𝐞𝐬, 𝐡𝐞 𝐢𝐬...𝐨𝐧𝐥𝐲 𝐡𝐞 𝐢𝐬.
 
Even if there are millions of oceans 🌊 combined, there will be an end to it, but there will be no end to the love of 𝐆𝐎𝐃 💙
 
The scale 📏 thinks that my actual measurement is worthless to measure 𝐇𝐢𝐬 love 🤷‍♀️
 
Now, what about the weighing scale⚖️? I'll burst under the weight of 𝐇𝐢𝐬 love, it thinks 🫣🤭
 
Who else should we compare? If every device He created is afraid!?😨
 
Think, beloved, for the things created by 𝐆𝐎𝐃 himself did not measure his love for you.

𝐋𝐨𝐨𝐤, 𝐇𝐨𝐰 𝐦𝐮𝐜𝐡 𝐦𝐨𝐫𝐞, 𝐓𝐡𝐞 𝐎𝐧𝐞 𝐰𝐡𝐨 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐥𝐨𝐯𝐞𝐬 𝐲𝐨𝐮 🥰🥳
 
Um, how about people who love us? 🤷‍♀️

Those who loves you cannot step in and save you if you are travelling alone anything happens... 😌
 
Be amazed! When you are alone in your hostel room walking on the terrace, you feel isolated at work, even in a relationship, you feel one-sided even though your loved ones are close by, 🥺🥀❤️‍🩹
 
At that times 𝐇𝐄 𝐢𝐬 𝐭𝐡𝐞 𝐨𝐧𝐥𝐲 𝐥𝐨𝐯𝐞 𝐟𝐞𝐧𝐜𝐞 𝐭𝐨 𝐲𝐨𝐮 🫠🤌🏻💗𓈈 

Can you not say no, right? 👈🏻🤷‍♀️
 
Going by this no one will even be able to reach him🎯 at least, not if they compete with 𝐇𝐢𝐦 in loving you 👎🤚🏻
 
Finally, what about 𝐲𝐨𝐮 and 𝐈?

Try not to make 𝐇𝐢𝐦 a one-sided lover 🤨 🫣

This sounds strange, doesn't it? 🥴
 
Exactly Beloved, we also fail to love 𝐇𝐢𝐦 with all of our souls 🕊️ all of our strength💪🏻 and all of our might 💪💪💪
 
Should we do anything else then? 🤔🤔
 
Yes, Beloved, there is a way➡ Think about these instructions 📝

Let us accept 𝐇𝐢𝐬 𝐥𝐨𝐯𝐞 with all of our heart ❤️ soul 🕊️ and strength 💪🏻

And listen to what 𝐇𝐞 has to say 🗣️🧏🏻‍♀️

which means accepting 𝐇𝐢𝐬 𝐰𝐢𝐥𝐥 in all our lives. Do as 𝐇𝐞 says 🗣️ and realize that accepting 𝐇𝐢𝐬 love entails loving him back 🫶‪‪❤︎‬
 
Enjoy being under 𝐇𝐢𝐬 mighty wings 𓆩❤︎𓆪

All of that is enough.that's all Beloved! So, what do you say? 🤔💭
 
Did you feel a light heart?😊😊
 
ఎందుకింత ప్రేమ?! 🤔 అది నీ మీద !!! 🤷‍♀️

గుర్తుంచుకో ప్రియా: ప్రేమ దేవుడు కాదు;దేవుడే ప్రేమ 💗ྀི అవును ఆయనే ...ఆయన మాత్రమే.
 
లక్షలాది మహాసముద్రాలు 🌊 కలిసినా, దానికి ఒక ముగింపు ఉంటుంది, కానీ యేసయ్యా  ప్రేమకు అంతం ఉండదు 💙
 
ఆయన నిజమైన ప్రేమను కొలత కొలవడానికి పనికిరానిదని స్కేల్ 📏 భావిస్తుంది  🤷‍♀️
 
ఇప్పుడు, తూకం సంగతి ఏమిటో ? నేను ఆతని ప్రేమ బరువు కింద పగిలిపోతాను ఏమో,అని అది 🫣🤭 ఆలోచిస్తుంది
 
మనం ఇంకెవరితో పోల్చాలి? ఆయన సృష్టించిన ప్రతి పరికరం భయపడితే!?😨
 
ప్రియతమ, ఆలోచించు, దేవుడే సృష్టించిన వస్తువులు  అతనే  స్వయంగా సృజించినవి శైతం ఆతనికి నీ పట్ల వున్నా  ప్రేమను కొలవలేక పోతున్నాయి .

చూడు, ఎంతగా నీ సృష్టికర్త నిన్ను ప్రేమిస్తున్నాడో  🥰🥳
 
ఉమ్, మనల్ని ప్రేమించే వ్యక్తుల సంగతేంటి? 🤷‍♀️

మీరు ఒంటరిగా ప్రయాణిస్తుంటే మిమ్మల్ని ప్రేమించే వారు వొచ్చి జోక్యం చేసుకుని ప్రయాణం మధ్యలో  మిమ్మల్ని రక్షించలేరు ఏదైనా జరిగితే బహుశా ... 😌
 
ఆశ్చర్యపోకండి!
 
మీరు మీ హాస్టల్లో ఒంటరిగా టెర్రస్ మీద నడుస్తున్నప్పుడు, మీరు పని భారం లో , ఇంటి నుండి దూరంగా మీ ఆఫీసులకు వొచ్చినప్పుడు  ఒంటరిగా వాళ్ళం అనిపిస్తుంది, ఆలాగే మన సంబంధాలలో కూడా ఒంటరివాళ్లమే , మన ప్రియమైనవారు దగ్గరగా ఉన్నప్పటికీ మనం ఏకపక్షంగా ఉన్నట్లు అనిపిస్తది 🥺🥀❤️‍🩹
 
ఆయా సమయాల్లో మన యేసయ్య మాత్రమే తన ప్రేమ కంచతో  మనకి దగ్గరగా మనం ఒంటరి వాళ్ళం కాము అని గుర్తుచేస్తుంటాడు 🫠🤌🏻💗𓈈

నువ్వు  కాదఅని చెప్పగలవా , అవునా? 👈🏻🤷‍♀️
 
దీన్ని బట్టి చూస్తే ఎవరూ అతన్ని ప్రేమను మించి మనలని చేరుకోలేరు🎯, కనీసం  నిన్ను ప్రేమించే వాళ్ళు  సైతం ఆయన ప్రేమ పోటీ లో ఓడిపోవాల్సిందే  👎🤚🏻
 
చివరగా, మరి నీ సంగతి నా సంగతి ఏమిటి?

ఆతనిని  ఏకపక్ష ప్రేమికుడిగా 🤨 🫣 చేయకుండా ఉండటానికి ప్రయత్నిద్దాం 

ఇది వింతగా అనిపిస్తుంది, కాదా? 🥴
 
ఖచ్చితంగా ప్రియతమా , మనం కూడా మన ఆత్మతో 🕊️ మన శక్తితో 💪🏻 మరియు మన బలం తో  💪💪💪 ప్రేమించడంలో విఫలమవుతాము
 
అప్పుడు మనం ఇంకేమైనా చేయాలా? 🤔🤔
 
అవును, ప్రియులారా, ఒక మార్గం ఉంది➡ ఈ సూచనల గురించి ఆలోచించండి 📝

మన హృదయం ఆంతటితో  🕊️ ఆత్మతో మరియు బలంతో 💪🏻

ప్రభు  చెప్పే మాట  వినండి 🗣️🧏🏻‍♀️

అంటే మన జీవితమంతా ఆయన చిత్తాని అంగీకరించడం. యేసయ్య  చెప్పినట్లు చేయండి 🗣️ మరియు ఆయన ప్రేమను అంగీకరించండి  అంతే ... అవి అన్ని చేస్తే అతన్ని తిరిగి ప్రేమించడమే అని గ్రహించండి 🫶❤︎

అంటే  ఆతని ప్రేమను ఆంగీకరించడం అంటే ఆతనిని తిరిగి ప్రేమించడమే .
 
ఆయన  బలమైన రెక్కల క్రింద ఆనందించండి  𓆩❤︎𓆪
 
ఇదంతా చాలు. అంతే ప్రియా! మరి, మీరు ఏమంటారు? 🤔💭
 
నీ హృదయం తేలికైనదిగా అనిపించిందా?😊😊`,
    thumbnail: '/vd6.jpeg',
    thumbnailHint: 'love concept',
    videoSrc: '/vd6.mp4',
    href: '/videos/gods-habituality',
    category: 'Habitual Love',
  },
]

export default function VideoMinistryPage() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white">
      {/* Hero Section from former home page */}
      <Hero />

      {/* Featured Video Gallery */}
      <section
        id="featured-videos"
        className="w-full py-16 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredVideos.map((video) => (
              <Link key={video.id} href={video.href} className="group flex">
                <Card
                  className="w-full flex flex-col bg-card border-border hover:border-primary transition-shadow duration-300 shadow-md hover:shadow-primary/20 rounded-xl overflow-hidden"
                >
                  <CardHeader className="p-0 relative aspect-video">
                    {video.thumbnail && (
                      <Image
                        src={video.thumbnail}
                        alt={`Thumbnail for the video titled "${video.title}"`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={video.thumbnailHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
                      </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                     <div className="flex items-center gap-4 text-xs text-white/60 mb-3">
                       <Badge variant="outline" className="border-primary/50 text-primary">{video.category}</Badge>
                    </div>
                    <h3 className="font-headline text-lg md:text-xl font-bold text-white mb-2 flex-grow">
                      {video.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Series & Playlists Section */}
      <section
        id="series"
        className="w-full py-16 md:py-28 bg-card/50 border-y border-border"
      >
        <div className="container mx-auto px-4 md:px-6">
           <h3 className="text-3xl font-headline font-bold text-center mb-12">
            More Spiritual Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {newVideos.map((video) => (
              <Link key={video.id} href={video.href} className="group flex">
                <Card
                  className="w-full flex flex-col bg-card border-border hover:border-primary transition-shadow duration-300 shadow-md hover:shadow-primary/20 rounded-xl overflow-hidden"
                >
                  <CardHeader className="p-0 relative aspect-video">
                    {video.thumbnail && (
                      <Image
                        src={video.thumbnail}
                        alt={`Thumbnail for the video titled "${video.title}"`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={video.thumbnailHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
                      </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                     <div className="flex items-center gap-4 text-xs text-white/60 mb-3">
                       <Badge variant="outline" className="border-primary/50 text-primary">{video.category}</Badge>
                    </div>
                    <h3 className="font-headline text-lg md:text-xl font-bold text-white mb-2 flex-grow">
                      {video.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 md:py-28 text-center border-t border-border">
        <Image
          src="/fd.jpeg"
          alt="Abstract background with flowing lights, inviting users to subscribe to the YouTube channel."
          fill
          className="object-cover"
          data-ai-hint="spiritual abstract"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
            Never Miss a New Video
          </h2>
          <p className="font-cookie text-2xl md:text-3xl text-white/80 max-w-xl mx-auto mb-8">
            A warm welcome always to our YOUTube Home, and give all your ears
            for whatever and whenever the soothing god&apos;s spirit says.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold"
            asChild
          >
            <a
              href="https://www.youtube.com/@GodsspiritSays"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="mr-2" />
              Subscribe on YouTube
            </a>
          </Button>
        </div>
      </section>

      {/* Mission Restatement */}
      <section
        id="videos-mission"
        className="relative w-full py-20 md:py-32 bg-background text-white"
      >
        <video
          src="/vv.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            His Love... A Letter to Your Heart
          </h3>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-white text-left space-y-4 font-oleo-script text-xl md:text-2xl p-6 md:p-8 bg-card/10 backdrop-blur-sm relative rounded-lg">
              <div className="font-arizonia text-2xl md:text-3xl space-y-4">
                <br />
                <p>
                  My dear, Let me tell you something your soul needs to remember.
                </p>
                <p>What is the love of God?</p>
                <p>What would he have done?</p>
                <br />
                <p>Listen...</p>
                <br />
                <p>You were His first thought.</p>
                <p>
                  Before oceans,before mountains, before light, He saw you.
                </p>
                <p>And He loved you.</p>
                <br />
                <p>
                  You were the joy set before Him, the treasure He longed for.
                </p>
                <br />
                <p>do you know what he did?</p>
                <br />
                <p>The Father, He gave His most precious Son—for you.</p>
                <br />
                <p>because His heart could not bear eternity without you.</p>
                <p>
                  It was the ultimate act of a Father&apos;s heart crying out,
                  &quot;I must have my child back.&quot;
                </p>
                <br />
                <br />
                <p>Then Jesus...oh, Jesus&apos; love</p>
                <p>He saw you across time and chose the cross.</p>
                <p>
                  He willingly embraced the cross... not just for the world, but
                  for you.
                </p>
                <p>
                  is a mighty, roaring flood that could not be contained by
                  heaven&apos;s gates. It shattered the grave. It broke
                  hell&apos;s chains. He didn&apos;t just die for you.He
                  devoured death for you.
                </p>
                <p>His heart thundered:</p>
                <p>
                  I will have my child. I will fight for my child. I will give
                  everything to my child.
                </p>
                <br />
                <p>And now the Holy Spirit...</p>
                <p>
                  The Spirit&apos;s love is so intimate, so tender, that He
                  doesn&apos;t just walk beside you. He has made your heart His
                  Home. He breathes inside your prayers. He sings over you in
                  the night. He is the quiet, unshakable presence that
                  whispers,
                </p>
                <p>&quot;You are never, ever alone.&quot;</p>
                <br />
                <p>People say love is God.</p>
                <p>No.</p>
                <p>&quot;God is love&quot;.It is his nature.</p>
                <p>Every heartbeat of heaven beats for you.</p>
                <br />
                <p>
                  And sometimes...sometimes, in the quiet moments when I feel
                  the weight of this love… that love wraps around my broken
                  places...It burns with one eternal question, the only one
                  I&apos;ll need to ask when I finally see Him face to face:
                </p>
                <br />
                <br />
                <p>how unworthy I am...</p>
                <p>
                  &quot;Jesus... why? Why did You love me with a love this
                  fierce? This relent? This mighty?&quot;
                </p>
                <br />
                <p>I may never understand it fully.</p>
                <p>But I will spend my life embraced by it.</p>
                <p>And so will you.</p>
                <br />
                <br />
                <p>And you...you are His.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialMedia />
    </main>
  );
}
