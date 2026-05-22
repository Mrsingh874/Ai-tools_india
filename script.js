/* ============================================================
   AI TOOLS INDIA — script.js
   Features: Tools Data, Filtering, Sorting, Search, Modal,
             Dark/Light Mode, Back-to-Top, Toast, Animations
   ============================================================ */

'use strict';

/* ============================================================
   DATA — 12 AI TOOLS for Indian Users
   ============================================================ */
const tools = [
  {
    id: 1,
    name: "ChatGPT",
    emoji: "🤖",
    emojiColor: "#10a37f",
    category: "Writing",
    rating: 4.8,
    ratingCount: "2.1k reviews",
    priceLabel: "Free / ₹1,670/mo",
    hasFree: true,
    featured: true,
    shortReview: "World ka sabse popular AI chatbot! Content writing, coding help, aur conversations ke liye best choice hai. Free tier mein bhi bohot kuch milta hai.",
    fullReview: "ChatGPT ek versatile AI assistant hai jo OpenAI ne banaya hai. Ye content writing, coding debugging, email drafting, aur creative writing mein exceptional performance deta hai. GPT-4o model ke saath, yeh images bhi samajh sakta hai. Indian users ke liye great news — Hindi mein bhi kafi achhi tarah se respond karta hai, halaanki English mein performance better hoti hai. Free tier mein GPT-3.5 milta hai jo beginners ke liye perfect hai. Plus subscription (₹1,670/month approximately) mein GPT-4o, DALL-E image generation, aur faster responses milti hain.",
    pros: [
      "Free tier available hai",
      "Hindi mein bhi kaam karta hai",
      "Most versatile AI tool",
      "Huge community support",
      "Regular updates aate rehte hain",
      "Mobile app bhi hai (Android/iOS)"
    ],
    cons: [
      "Free tier mein speed slow hoti hai",
      "Kabhi kabhi hallucinations hoti hain",
      "Knowledge cutoff 2024 tak hai",
      "Plus plan thoda costly hai INR mein",
      "Server overload pe down ho jaata hai"
    ],
    indiaNote: "India mein ChatGPT bohot popular hai — students, freelancers, aur content creators sab use karte hain. GST ke saath pricing thodi zyada pad sakti hai. UPI se directly payment nahi hoti, international card chahiye.",
    affiliateLink: "https://chat.openai.com",
  },
  {
    id: 2,
    name: "Google Gemini",
    emoji: "✨",
    emojiColor: "#4285F4",
    category: "Writing",
    rating: 4.6,
    ratingCount: "1.8k reviews",
    priceLabel: "Free / ₹1,670/mo",
    hasFree: true,
    featured: false,
    shortReview: "Google ka powerful AI jo Gmail, Docs aur Search ke saath integrate hota hai. India mein best free option — koi payment card nahi chahiye!",
    fullReview: "Google Gemini ek powerful AI assistant hai jo directly Google account ke saath kaam karta hai — matlab India mein bina international card ke bhi free mein use kar sakte hain! Gemini 1.5 Pro model remarkably capable hai — long documents, images, aur complex reasoning handle karta hai. Gmail, Google Docs, aur Google Search ke saath deep integration iske sabse bade advantages hain. Hindi language support ChatGPT se thoda better hai — responses more natural feel hoti hain. Gemini Advanced (₹1,670/month, jo Google One subscription ka part hai) mein Gemini Ultra access milta hai.",
    pros: [
      "Bilkul free — Indian card se bhi",
      "Google apps ke saath integration",
      "Hindi mein excellent performance",
      "Long context window (1M tokens)",
      "Image understanding bhi",
      "UPI se payment accept karta hai (One plan)"
    ],
    cons: [
      "Creative writing mein ChatGPT se peeche",
      "Coding tasks mein thoda weaker",
      "Kai baar overly cautious responses deta hai",
      "UI kabhi kabhi confusing lagti hai",
      "Offline mode nahi hai"
    ],
    indiaNote: "India ke liye Gemini BEST free option hai kyunki Google Pay/UPI se Gemini Advanced subscribe kar sakte hain. Plus yeh Google ki Indian servers use karta hai toh speed bhi achhi hai.",
    affiliateLink: "https://gemini.google.com",
  },
  {
    id: 3,
    name: "Claude (Anthropic)",
    emoji: "🧠",
    emojiColor: "#d97706",
    category: "Writing",
    rating: 4.7,
    ratingCount: "1.2k reviews",
    priceLabel: "Free / ₹1,670/mo",
    hasFree: true,
    featured: false,
    shortReview: "Long documents aur nuanced writing ke liye ChatGPT ka best competitor! 200K token context window — puri book ek saath analyze kar sakte hain.",
    fullReview: "Anthropic ka Claude ek exceptional AI assistant hai jo particularly long-form content, complex analysis, aur nuanced writing mein shine karta hai. Claude ka 200,000 token context window matlab hai aap ek poori novel ya lengthy research paper paste kar sakte hain aur conversation kar sakte hain. Writing quality mein Claude ko bahut se professional writers prefer karte hain — responses more natural aur less generic feel hoti hain. Claude ka free tier limited hai lekin Pro plan (₹1,670/month approximately) mein Claude Opus 4 access milta hai. Hindi support moderate hai — better than average but not as good as Gemini.",
    pros: [
      "Best long-form writing quality",
      "Huge 200K context window",
      "Honest aur safe responses",
      "Code debugging mein excellent",
      "Less hallucination than ChatGPT",
      "Document analysis superb hai"
    ],
    cons: [
      "Free tier bohot limited hai",
      "Hindi support average level ka hai",
      "India mein payment issues hote hain",
      "Image generation nahi karta",
      "ChatGPT jaisi community nahi hai"
    ],
    indiaNote: "Claude India mein underrated hai! Writers aur researchers ke liye gold standard hai. Payment ke liye international card chahiye — Indian UPI abhi support nahi karta. Agar long articles ya reports likhni ho toh must-try!",
    affiliateLink: "https://claude.ai",
  },
  {
    id: 4,
    name: "Midjourney",
    emoji: "🎨",
    emojiColor: "#7c3aed",
    category: "Image Generation",
    rating: 4.9,
    ratingCount: "3.4k reviews",
    priceLabel: "₹830/mo (Basic)",
    hasFree: false,
    featured: true,
    shortReview: "Duniya ki sabse best AI image generator! Iske images itne realistic hote hain ki log real samajhte hain. Graphic designers aur artists ki pehli pasand.",
    fullReview: "Midjourney ek industry-leading AI image generator hai jo breathtakingly beautiful, artistic images create karta hai. V6 model ke saath realistic portraits, stunning landscapes, aur professional-grade artwork generate kar sakte hain. India mein graphic designers, YouTube thumbnail creators, aur social media managers is tool ke bade fan hain. Interface Discord-based hai jo pehle confusing lagta hai lekin ek baar seekh lene ke baad intuitive ho jaata hai. Basic plan mein ~200 images per month milti hain jo casual users ke liye enough hai. Quality ke mamle mein koi competitor close nahi aata abhi tak.",
    pros: [
      "Unmatched image quality",
      "V6 model hyper-realistic results deta hai",
      "Artistic styles ka huge variety",
      "Consistent character styles maintain hote hain",
      "Active community for inspiration",
      "Commercial use license milta hai"
    ],
    cons: [
      "Koi free tier nahi hai",
      "Discord pe use karna seekhna padta hai",
      "International card needed",
      "Explicit content restrictions hain",
      "Text rendering abhi perfect nahi"
    ],
    indiaNote: "Freelance designers aur content creators ke liye Midjourney ek game-changer hai. Basic plan ₹830/month (≈$10) hai. Agar aap YouTube thumbnails, Instagram posts, ya digital art sell karte hain, yeh tool months mein apna paisa recover kar leta hai!",
    affiliateLink: "https://www.midjourney.com",
  },
  {
    id: 5,
    name: "Canva AI",
    emoji: "🖌️",
    emojiColor: "#00C4CC",
    category: "Image Generation",
    rating: 4.5,
    ratingCount: "2.8k reviews",
    priceLabel: "Free / ₹4,000/yr",
    hasFree: true,
    featured: false,
    shortReview: "Design beginners ka best friend! Magic Design, AI image generation, aur text effects — sab kuch ek jagah. UPI se payment bhi ho jaati hai!",
    fullReview: "Canva AI India mein ek household name ban chuka hai aur good reason se! Magic Studio features — Magic Design, Magic Eraser, Magic Expand, Text to Image — ne design creation ko genuinely easy bana diya hai non-designers ke liye bhi. Pro plan ₹4,000/year (approximately ₹333/month) bohot reasonable hai, aur Indian credit/debit cards aur UPI se payment accept hoti hai. Free plan bhi surprisingly feature-rich hai — thousands of templates, basic AI features, aur 5GB storage milta hai. Small business owners, teachers, aur students ke liye ideal choice hai.",
    pros: [
      "Free tier excellent hai",
      "UPI aur Indian cards accept",
      "Beginner ke liye easiest tool",
      "Hindi templates available",
      "Thousands of ready templates",
      "Team collaboration feature"
    ],
    cons: [
      "Image quality Midjourney se kafi kam",
      "Pro features limited hain",
      "AI image generation average quality",
      "Heavy browser use karta hai",
      "Export options limited (free mein)"
    ],
    indiaNote: "India mein sabse zyada use hone wala design tool! Teachers ke liye Canva for Education bilkul free hai. Small business owners ke liye Pro plan (UPI se pay karo) ek solid investment hai. WhatsApp posts, Instagram stories, presentation — sab kuch 5 minute mein ready!",
    affiliateLink: "https://www.canva.com",
  },
  {
    id: 6,
    name: "GitHub Copilot",
    emoji: "💻",
    emojiColor: "#6e40c9",
    category: "Coding",
    rating: 4.8,
    ratingCount: "1.5k reviews",
    priceLabel: "Free / ₹830/mo",
    hasFree: true,
    featured: false,
    shortReview: "Developers ke liye AI pair programmer! VS Code mein directly code likhte waqt suggestions deta hai. Students ke liye bilkul FREE hai!",
    fullReview: "GitHub Copilot Microsoft aur OpenAI ka joint product hai jo developers ke liye ek game-changing AI pair programmer hai. VS Code, JetBrains IDEs, aur Neovim mein seamlessly integrate hota hai. Real-time code suggestions, entire functions generate karna, bugs explain karna, aur test cases likhna — sab kuch directly IDE mein. India ke engineering students ke liye extra special khabar — GitHub Copilot students ko bilkul FREE milta hai (GitHub Student Developer Pack ke through)! Individual plan ₹830/month (≈$10) hai jo professional developers ke liye worth every rupee hai.",
    pros: [
      "Students ko FREE milta hai",
      "VS Code integration seamless hai",
      "Multiple languages support",
      "Code explanation feature",
      "Test generation excellent",
      "Context-aware suggestions"
    ],
    cons: [
      "Outdated code patterns suggest karta hai kabhi",
      "Privacy concerns (code training data)",
      "Complex algorithms mein weak",
      "Internet connection required",
      "Free tier limited hai (non-students)"
    ],
    indiaNote: "IIT, NIT ya kisi bhi college ke students GitHub Education ke through Copilot FREE mein le sakte hain! Apna .edu email use karo. Working professionals ke liye ₹830/month productivity mein massive boost deta hai — daily 2-3 hours bachte hain coding mein.",
    affiliateLink: "https://github.com/features/copilot",
  },
  {
    id: 7,
    name: "Cursor AI",
    emoji: "⚡",
    emojiColor: "#0ea5e9",
    category: "Coding",
    rating: 4.7,
    ratingCount: "890 reviews",
    priceLabel: "Free / ₹1,670/mo",
    hasFree: true,
    featured: false,
    shortReview: "VS Code ka AI-powered fork! Puri codebase ke saath chat karo, bugs fix karo, features add karo — sab kuch natural language mein. Power users ka favorite.",
    fullReview: "Cursor ek revolutionary AI-first code editor hai jo VS Code ke upar build hai — matlab tumhare sare VS Code extensions aur shortcuts kaam karte rahenge! Composer feature se tum ek hi chat mein multiple files edit kar sakte ho. Codebase indexing se AI tumhari poori project samajhta hai aur relevant changes suggest karta hai. Tab Tab Tab feature se code completion itna smart hai ki lagta hai AI pehle se jaanta hai aap kya type karne wale ho. Free tier mein 2000 completions milti hain jo try karne ke liye enough hain. Pro plan ₹1,670/month mein unlimited usage milti hai.",
    pros: [
      "VS Code ka familiar interface",
      "Codebase-wide understanding",
      "Multi-file editing ek saath",
      "Fast aur accurate completions",
      "Extensions VS Code ki compatible",
      "Free tier generous hai"
    ],
    cons: [
      "Pro plan thoda expensive hai",
      "Heavy on RAM (8GB+ recommended)",
      "Indian payment sometimes issues",
      "Beginners ke liye overwhelming",
      "Slow on older machines"
    ],
    indiaNote: "India ke freelance developers aur startup founders ke liye Cursor ek must-try hai. Jo kaam pehle 2 din mein hota tha, woh 4-5 ghante mein ho jaata hai. Free tier se shuru karo — convince ho jaoge. Uske baad Pro lete waqt client billing mein include kar do!",
    affiliateLink: "https://cursor.com",
  },
  {
    id: 8,
    name: "Perplexity AI",
    emoji: "🔬",
    emojiColor: "#20b2aa",
    category: "Research",
    rating: 4.7,
    ratingCount: "1.1k reviews",
    priceLabel: "Free / ₹1,670/mo",
    hasFree: true,
    featured: false,
    shortReview: "AI-powered search engine! Real-time internet access ke saath citations bhi deta hai. Research students aur journalists ka go-to tool hai.",
    fullReview: "Perplexity AI ek next-generation AI search engine hai jo Google aur ChatGPT ka combination feel deta hai. Har answer ke saath sources aur citations automatically provide hoti hain — koi hallucination risk nahi! Real-time web access hai toh current news, stock prices, ya recent research bhi accurately bata sakta hai. Pro plan mein GPT-4o, Claude, aur Sonar (Perplexity's own model) mein switch kar sakte hain. Academic research, fact-checking, aur market research ke liye excellent tool hai. Free plan mein 5 Pro searches per day milti hain — daily use ke liye often enough.",
    pros: [
      "Real-time web access",
      "Sources aur citations har answer mein",
      "Multiple AI models Pro mein",
      "Follow-up questions intuitive hain",
      "No hallucinations (source-based)",
      "File upload feature"
    ],
    cons: [
      "Creative tasks ke liye nahi hai",
      "Free tier mein Pro searches limited",
      "UI simple — beginners ko underwhelming lagta",
      "Image generation nahi",
      "Hindi search results limited hain"
    ],
    indiaNote: "Journalism students, researchers, aur professionals ke liye Perplexity gold hai. UPSC preparation, competitive research, aur market analysis ke liye India mein tezi se popular ho raha hai. Free version daily research ke liye enough hai!",
    affiliateLink: "https://www.perplexity.ai",
  },
  {
    id: 9,
    name: "ElevenLabs",
    emoji: "🎙️",
    emojiColor: "#7c3aed",
    category: "Audio",
    rating: 4.6,
    ratingCount: "760 reviews",
    priceLabel: "Free / ₹1,840/mo",
    hasFree: true,
    featured: false,
    shortReview: "Sabse realistic AI voice generator! Hindi mein bhi human-like voice milti hai. Podcasters, YouTubers, aur content creators ka favorite tool.",
    fullReview: "ElevenLabs currently world ka best AI text-to-speech tool hai — aur yeh claim verified hai! Voice quality itni realistic hai ki log real human voice se distinguish nahi kar paate. 29+ languages support karta hai jismein Hindi bhi hai, aur quality remarkable hai. Voice cloning feature se aap 1 minute ki voice sample se khud ki awaaz clone kar sakte hain — YouTube creators ke liye bohot kaam aata hai. Free tier mein 10,000 characters/month milte hain jo testing ke liye enough hai. Creator plan (₹1,840/month approximately) mein 100,000 characters milte hain — regular YouTubers ke liye suitable.",
    pros: [
      "Best-in-class voice quality",
      "Hindi voice excellent hai",
      "Voice cloning feature",
      "29+ languages support",
      "Multiple voice styles",
      "API access available"
    ],
    cons: [
      "Free tier limited hai (10K chars)",
      "Indian payment sometimes fails",
      "Voice cloning misuse potential",
      "Batch processing slow hoti hai",
      "Hindi accent thoda western feel karta hai"
    ],
    indiaNote: "Indian YouTubers aur podcasters ke liye ElevenLabs ek investment worth karney wala hai. Hindi voiceovers jo pehle expensive voice artists se karwane padte the, ab ₹1,840/month mein unlimited milte hain. Audio books, explainer videos, aur ads ke liye perfect!",
    affiliateLink: "https://elevenlabs.io",
  },
  {
    id: 10,
    name: "Notion AI",
    emoji: "📋",
    emojiColor: "#000000",
    category: "Productivity",
    rating: 4.4,
    ratingCount: "940 reviews",
    priceLabel: "₹830/mo add-on",
    hasFree: false,
    featured: false,
    shortReview: "Notion users ke liye AI superpower! Notes likhna, summaries banana, action items extract karna — sab kuch apne existing Notion workspace mein.",
    fullReview: "Notion AI existing Notion users ke liye ek excellent add-on hai jo productivity ko significantly boost karta hai. Meeting notes se automatic action items extract karna, documents ka summary banana, aur writer's block ke time content suggestions dena — ye sab Notion AI ke strengths hain. Q&A feature se aap apne entire Notion workspace se information search kar sakte hain — apna personal AI search engine! Add-on ₹830/month per seat hai jo Notion Plus subscription ke upar add hota hai. Startups aur remote teams ke liye bohot useful tool hai. Note: Notion AI standalone tool nahi hai — Notion use karte ho tabhi kaam aata hai.",
    pros: [
      "Existing Notion workflow mein seamless",
      "Meeting summaries excellent hain",
      "Q&A over your workspace",
      "Action item extraction automatic",
      "Multiple languages support",
      "Team collaboration smooth"
    ],
    cons: [
      "Sirf Notion users ke liye useful",
      "Add-on ki alag cost extra padti hai",
      "Standalone use nahi ho sakta",
      "Context window limited hai",
      "Hindi support weak hai"
    ],
    indiaNote: "Indian startups aur remote teams jo pehle se Notion use karte hain, unke liye Notion AI add-on consider karne layak hai. ₹830/month per person thoda costly lagta hai lekin meeting time waste significantly reduce ho jaata hai.",
    affiliateLink: "https://www.notion.so/product/ai",
  },
  {
    id: 11,
    name: "Grammarly",
    emoji: "✅",
    emojiColor: "#15c39a",
    category: "Writing",
    rating: 4.5,
    ratingCount: "2.3k reviews",
    priceLabel: "Free / ₹1,250/mo",
    hasFree: true,
    featured: false,
    shortReview: "English writing improve karne ka sabse trusted tool! Grammar, tone, clarity — sab kuch real-time check karta hai. Competitive exams ke students ke liye must-have.",
    fullReview: "Grammarly ek AI-powered writing assistant hai jo years se professional writers aur students ka trusted companion raha hai. Browser extension, desktop app, aur Microsoft Word plugin ke through har jagah kaam karta hai. Free tier mein basic grammar, spelling, aur punctuation corrections milti hain jo daily use ke liye quite useful hain. Premium plan mein advanced suggestions — clarity improvements, engagement score, delivery tone — milte hain. GrammarlyGO (AI writing assistant) Premium users ke liye available hai. India mein students ke liye — IELTS, TOEFL, aur corporate emails ke liye extremely valuable tool hai.",
    pros: [
      "Free tier genuinely useful",
      "Browser extension convenient",
      "Real-time suggestions",
      "Tone detector helpful",
      "Plagiarism checker (Premium)",
      "MS Word integration"
    ],
    cons: [
      "Sirf English ke liye — Hindi nahi",
      "Premium thoda overpriced lagta hai",
      "Kabhi kabhi over-suggests corrections",
      "Privacy concerns (cloud processing)",
      "Heavy on browser performance"
    ],
    indiaNote: "India mein English learners aur professionals ke liye Grammarly ek essential tool hai. Job applications, business emails, aur academic writing ke liye free version bhi bahut kaam aata hai. Premium plan ₹1,250/month mein milta hai — annually loge toh aur sasta padega!",
    affiliateLink: "https://www.grammarly.com",
  },
  {
    id: 12,
    name: "Suno AI",
    emoji: "🎵",
    emojiColor: "#f59e0b",
    category: "Audio",
    rating: 4.3,
    ratingCount: "540 reviews",
    priceLabel: "Free / ₹830/mo",
    hasFree: true,
    featured: false,
    shortReview: "Text se poora song bana do — lyrics, music, aur vocals sab! India mein music creators ke liye ek revolutionary tool. Hindi songs bhi ban jaate hain!",
    fullReview: "Suno AI ek fascinating tool hai jo text prompts se complete songs generate karta hai — including lyrics, instruments, aur vocals. Results surprisingly good hain — radio-quality songs minutes mein ready ho jaate hain. Hindi music ke liye bhi decently kaam karta hai, although Bollywood-style music ke results mixed hain. Free plan mein 50 credits/day milte hain (roughly 10 songs) jo casual experimentation ke liye great hai. Pro plan ₹830/month mein commercial use license milta hai. Jingle creators, YouTubers jinhein background music chahiye, aur aspiring musicians ke liye excellent tool hai. Full professional studio replacement nahi hai but starting point ke liye amazing.",
    pros: [
      "Free tier generous hai (10 songs/day)",
      "Hindi songs bhi ban jaate hain",
      "Professional quality output",
      "Multiple genres support",
      "Custom lyrics input kar sakte ho",
      "Quick generation (under 1 minute)"
    ],
    cons: [
      "Perfect Bollywood style nahi banta abhi",
      "Commercial use sirf Pro mein",
      "Voice control limited hai",
      "Repetitive patterns kabhi kabhi",
      "Copyright issues abhi unclear hain"
    ],
    indiaNote: "YouTube creators jo background music ke liye royalty-free songs chahte hain, unke liye Suno AI ek hidden gem hai! Free mein daily 10 songs bana sakte ho. Hindi devotional songs, folk music, ya modern Bollywood-style — sab try karo. India mein yeh tool abhi underrated hai!",
    affiliateLink: "https://suno.com",
  }
,
  {
    id: 13,
    name: "Jasper AI",
    emoji: "✍️",
    emojiColor: "#f59e0b",
    category: "Writing",
    rating: 4.7,
    ratingCount: "4.5k reviews",
    priceLabel: "Paid / ₹3,200/mo",
    hasFree: false,
    featured: false,
    shortReview: "Jasper AI ek bohot popular tool hai. Marketing copy aur emails likhne ka smart tarika. Time bachata hai aur creativity badhata hai.",
    fullReview: "Jasper AI Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Easy to use", "Good templates", "Grammar check"],
    cons: ["Occasional formatting issues"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://jasper.ai"
  },
  {
    id: 14,
    name: "Copy.ai",
    emoji: "✍️",
    emojiColor: "#10b981",
    category: "Writing",
    rating: 4.6,
    ratingCount: "3.2k reviews",
    priceLabel: "Free / ₹2,900/mo",
    hasFree: true,
    featured: false,
    shortReview: "Copy.ai ek bohot popular tool hai. Content writing aur copywriting ke liye zabardast tool. Seconds mein high-quality text generate karein.",
    fullReview: "Copy.ai Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Saves time", "Affordable", "Hindi support"],
    cons: ["Occasional formatting issues"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://copy.ai"
  },
  {
    id: 15,
    name: "Writesonic",
    emoji: "✍️",
    emojiColor: "#3b82f6",
    category: "Writing",
    rating: 4.5,
    ratingCount: "2.8k reviews",
    priceLabel: "Free / ₹1,200/mo",
    hasFree: true,
    featured: false,
    shortReview: "Writesonic ek bohot popular tool hai. Content writing aur copywriting ke liye zabardast tool. Seconds mein high-quality text generate karein.",
    fullReview: "Writesonic Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Fast generation", "SEO friendly", "Multiple tones"],
    cons: ["Sometimes repetitive", "Needs human editing"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://writesonic.com"
  },
  {
    id: 16,
    name: "Rytr",
    emoji: "✍️",
    emojiColor: "#ef4444",
    category: "Writing",
    rating: 4.6,
    ratingCount: "5.1k reviews",
    priceLabel: "Free / ₹750/mo",
    hasFree: true,
    featured: false,
    shortReview: "Rytr ek bohot popular tool hai. SEO friendly articles aur blogs likhne ke liye best AI assistant. Hindi support bhi available hai.",
    fullReview: "Rytr Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Fast generation", "SEO friendly", "Multiple tones"],
    cons: ["Pro version is costly", "Limited free words"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://rytr.me"
  },
  {
    id: 17,
    name: "QuillBot",
    emoji: "✍️",
    emojiColor: "#22c55e",
    category: "Writing",
    rating: 4.8,
    ratingCount: "8.9k reviews",
    priceLabel: "Free / ₹800/mo",
    hasFree: true,
    featured: true,
    shortReview: "QuillBot ek bohot popular tool hai. Content writing aur copywriting ke liye zabardast tool. Seconds mein high-quality text generate karein.",
    fullReview: "QuillBot Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Fast generation", "SEO friendly", "Multiple tones"],
    cons: ["Sometimes repetitive", "Needs human editing"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://quillbot.com"
  },
  {
    id: 18,
    name: "Wordtune",
    emoji: "✍️",
    emojiColor: "#8b5cf6",
    category: "Writing",
    rating: 4.7,
    ratingCount: "3.4k reviews",
    priceLabel: "Free / ₹1,200/mo",
    hasFree: true,
    featured: false,
    shortReview: "Wordtune ek bohot popular tool hai. Content writing aur copywriting ke liye zabardast tool. Seconds mein high-quality text generate karein.",
    fullReview: "Wordtune Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Fast generation", "SEO friendly", "Multiple tones"],
    cons: ["Sometimes repetitive", "Needs human editing"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://wordtune.com"
  },
  {
    id: 19,
    name: "Sudowrite",
    emoji: "✍️",
    emojiColor: "#a855f7",
    category: "Writing",
    rating: 4.5,
    ratingCount: "1.2k reviews",
    priceLabel: "Paid / ₹1,500/mo",
    hasFree: false,
    featured: false,
    shortReview: "Sudowrite ek bohot popular tool hai. Marketing copy aur emails likhne ka smart tarika. Time bachata hai aur creativity badhata hai.",
    fullReview: "Sudowrite Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Saves time", "Affordable", "Hindi support"],
    cons: ["Occasional formatting issues"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://sudowrite.com"
  },
  {
    id: 20,
    name: "Anyword",
    emoji: "✍️",
    emojiColor: "#14b8a6",
    category: "Writing",
    rating: 4.4,
    ratingCount: "900 reviews",
    priceLabel: "Paid / ₹3,000/mo",
    hasFree: false,
    featured: false,
    shortReview: "Anyword ek bohot popular tool hai. Marketing copy aur emails likhne ka smart tarika. Time bachata hai aur creativity badhata hai.",
    fullReview: "Anyword Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Easy to use", "Good templates", "Grammar check"],
    cons: ["Pro version is costly", "Limited free words"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://anyword.com"
  },
  {
    id: 21,
    name: "Frase",
    emoji: "✍️",
    emojiColor: "#f97316",
    category: "Writing",
    rating: 4.6,
    ratingCount: "1.5k reviews",
    priceLabel: "Paid / ₹1,200/mo",
    hasFree: false,
    featured: false,
    shortReview: "Frase ek bohot popular tool hai. Marketing copy aur emails likhne ka smart tarika. Time bachata hai aur creativity badhata hai.",
    fullReview: "Frase Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Saves time", "Affordable", "Hindi support"],
    cons: ["Sometimes repetitive", "Needs human editing"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://frase.io"
  },
  {
    id: 22,
    name: "INK",
    emoji: "✍️",
    emojiColor: "#6366f1",
    category: "Writing",
    rating: 4.3,
    ratingCount: "600 reviews",
    priceLabel: "Paid / ₹2,500/mo",
    hasFree: false,
    featured: false,
    shortReview: "INK ek bohot popular tool hai. Content writing aur copywriting ke liye zabardast tool. Seconds mein high-quality text generate karein.",
    fullReview: "INK Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Saves time", "Affordable", "Hindi support"],
    cons: ["Pro version is costly", "Limited free words"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://inkforall.com"
  },
  {
    id: 23,
    name: "TextCortex",
    emoji: "✍️",
    emojiColor: "#ec4899",
    category: "Writing",
    rating: 4.5,
    ratingCount: "1.1k reviews",
    priceLabel: "Free / ₹1,000/mo",
    hasFree: true,
    featured: false,
    shortReview: "TextCortex ek bohot popular tool hai. Content writing aur copywriting ke liye zabardast tool. Seconds mein high-quality text generate karein.",
    fullReview: "TextCortex Writing category mein ek standout AI solution hai. Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Fast generation", "SEO friendly", "Multiple tones"],
    cons: ["Sometimes repetitive", "Needs human editing"],
    indiaNote: "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain.",
    affiliateLink: "https://textcortex.com"
  },
  {
    id: 24,
    name: "DALL-E 3",
    emoji: "🎨",
    emojiColor: "#000000",
    category: "Image Generation",
    rating: 4.7,
    ratingCount: "5.5k reviews",
    priceLabel: "Paid (with ChatGPT Plus)",
    hasFree: false,
    featured: true,
    shortReview: "DALL-E 3 ek bohot popular tool hai. Creative artwork aur social media graphics banane ka sabse aasan AI tool.",
    fullReview: "DALL-E 3 Image Generation category mein ek standout AI solution hai. Is AI image generator se aap apni imagination ko reality mein badal sakte hain. Bas text prompt likhein aur seconds mein professional-quality images paayen. Graphic designers, YouTubers (for thumbnails), aur digital artists ke liye yeh tool bohot time aur mehnat bachata hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Realistic details", "Customizable", "Good lighting"],
    cons: ["Faces can look distorted sometimes"],
    indiaNote: "Indian YouTubers aur graphic designers ise thumbnails aur digital art ke liye kaafi use kar rahe hain. Freelance work ke liye great tool.",
    affiliateLink: "https://openai.com/dall-e-3"
  },
  {
    id: 25,
    name: "Leonardo AI",
    emoji: "🎨",
    emojiColor: "#ec4899",
    category: "Image Generation",
    rating: 4.8,
    ratingCount: "4.2k reviews",
    priceLabel: "Free / ₹1,000/mo",
    hasFree: true,
    featured: true,
    shortReview: "Leonardo AI ek bohot popular tool hai. High-quality image generation aur editing ke liye AI power ka use karein.",
    fullReview: "Leonardo AI Image Generation category mein ek standout AI solution hai. Is AI image generator se aap apni imagination ko reality mein badal sakte hain. Bas text prompt likhein aur seconds mein professional-quality images paayen. Graphic designers, YouTubers (for thumbnails), aur digital artists ke liye yeh tool bohot time aur mehnat bachata hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Realistic details", "Customizable", "Good lighting"],
    cons: ["Struggles with text in images", "Complex prompts needed"],
    indiaNote: "Indian YouTubers aur graphic designers ise thumbnails aur digital art ke liye kaafi use kar rahe hain. Freelance work ke liye great tool.",
    affiliateLink: "https://leonardo.ai"
  },
  {
    id: 26,
    name: "Stable Diffusion",
    emoji: "🎨",
    emojiColor: "#8b5cf6",
    category: "Image Generation",
    rating: 4.6,
    ratingCount: "6.1k reviews",
    priceLabel: "Free (Open Source)",
    hasFree: true,
    featured: false,
    shortReview: "Stable Diffusion ek bohot popular tool hai. Text prompts se stunning aur realistic images generate karein. Designers ke liye ek game-changer.",
    fullReview: "Stable Diffusion Image Generation category mein ek standout AI solution hai. Is AI image generator se aap apni imagination ko reality mein badal sakte hain. Bas text prompt likhein aur seconds mein professional-quality images paayen. Graphic designers, YouTubers (for thumbnails), aur digital artists ke liye yeh tool bohot time aur mehnat bachata hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Vast styles", "Easy prompts", "Community gallery"],
    cons: ["Struggles with text in images", "Complex prompts needed"],
    indiaNote: "Indian YouTubers aur graphic designers ise thumbnails aur digital art ke liye kaafi use kar rahe hain. Freelance work ke liye great tool.",
    affiliateLink: "https://stability.ai"
  },
  {
    id: 27,
    name: "Adobe Firefly",
    emoji: "🎨",
    emojiColor: "#ef4444",
    category: "Image Generation",
    rating: 4.7,
    ratingCount: "3.8k reviews",
    priceLabel: "Free / Premium",
    hasFree: true,
    featured: false,
    shortReview: "Adobe Firefly ek bohot popular tool hai. Text prompts se stunning aur realistic images generate karein. Designers ke liye ek game-changer.",
    fullReview: "Adobe Firefly Image Generation category mein ek standout AI solution hai. Is AI image generator se aap apni imagination ko reality mein badal sakte hain. Bas text prompt likhein aur seconds mein professional-quality images paayen. Graphic designers, YouTubers (for thumbnails), aur digital artists ke liye yeh tool bohot time aur mehnat bachata hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Realistic details", "Customizable", "Good lighting"],
    cons: ["No free tier sometimes", "Credit system"],
    indiaNote: "Indian YouTubers aur graphic designers ise thumbnails aur digital art ke liye kaafi use kar rahe hain. Freelance work ke liye great tool.",
    affiliateLink: "https://firefly.adobe.com"
  },
  {
    id: 28,
    name: "Craiyon",
    emoji: "🎨",
    emojiColor: "#f59e0b",
    category: "Image Generation",
    rating: 4.1,
    ratingCount: "2.5k reviews",
    priceLabel: "Free / ₹400/mo",
    hasFree: true,
    featured: false,
    shortReview: "Craiyon ek bohot popular tool hai. Creative artwork aur social media graphics banane ka sabse aasan AI tool.",
    fullReview: "Craiyon Image Generation category mein ek standout AI solution hai. Is AI image generator se aap apni imagination ko reality mein badal sakte hain. Bas text prompt likhein aur seconds mein professional-quality images paayen. Graphic designers, YouTubers (for thumbnails), aur digital artists ke liye yeh tool bohot time aur mehnat bachata hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Vast styles", "Easy prompts", "Community gallery"],
    cons: ["Faces can look distorted sometimes"],
    indiaNote: "Indian YouTubers aur graphic designers ise thumbnails aur digital art ke liye kaafi use kar rahe hain. Freelance work ke liye great tool.",
    affiliateLink: "https://craiyon.com"
  },
  {
    id: 29,
    name: "NightCafe",
    emoji: "🎨",
    emojiColor: "#10b981",
    category: "Image Generation",
    rating: 4.4,
    ratingCount: "1.9k reviews",
    priceLabel: "Free / ₹500/mo",
    hasFree: true,
    featured: false,
    shortReview: "NightCafe ek bohot popular tool hai. Text prompts se stunning aur realistic images generate karein. Designers ke liye ek game-changer.",
    fullReview: "NightCafe Image Generation category mein ek standout AI solution hai. Is AI image generator se aap apni imagination ko reality mein badal sakte hain. Bas text prompt likhein aur seconds mein professional-quality images paayen. Graphic designers, YouTubers (for thumbnails), aur digital artists ke liye yeh tool bohot time aur mehnat bachata hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Vast styles", "Easy prompts", "Community gallery"],
    cons: ["Faces can look distorted sometimes"],
    indiaNote: "Indian YouTubers aur graphic designers ise thumbnails aur digital art ke liye kaafi use kar rahe hain. Freelance work ke liye great tool.",
    affiliateLink: "https://nightcafe.studio"
  },
  {
    id: 30,
    name: "Playground AI",
    emoji: "🎨",
    emojiColor: "#3b82f6",
    category: "Image Generation",
    rating: 4.6,
    ratingCount: "2.1k reviews",
    priceLabel: "Free / ₹1,200/mo",
    hasFree: true,
    featured: false,
    shortReview: "Playground AI ek bohot popular tool hai. Text prompts se stunning aur realistic images generate karein. Designers ke liye ek game-changer.",
    fullReview: "Playground AI Image Generation category mein ek standout AI solution hai. Is AI image generator se aap apni imagination ko reality mein badal sakte hain. Bas text prompt likhein aur seconds mein professional-quality images paayen. Graphic designers, YouTubers (for thumbnails), aur digital artists ke liye yeh tool bohot time aur mehnat bachata hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Realistic details", "Customizable", "Good lighting"],
    cons: ["No free tier sometimes", "Credit system"],
    indiaNote: "Indian YouTubers aur graphic designers ise thumbnails aur digital art ke liye kaafi use kar rahe hain. Freelance work ke liye great tool.",
    affiliateLink: "https://playgroundai.com"
  },
  {
    id: 31,
    name: "Lexica",
    emoji: "🎨",
    emojiColor: "#6366f1",
    category: "Image Generation",
    rating: 4.5,
    ratingCount: "1.3k reviews",
    priceLabel: "Free / ₹800/mo",
    hasFree: true,
    featured: false,
    shortReview: "Lexica ek bohot popular tool hai. High-quality image generation aur editing ke liye AI power ka use karein.",
    fullReview: "Lexica Image Generation category mein ek standout AI solution hai. Is AI image generator se aap apni imagination ko reality mein badal sakte hain. Bas text prompt likhein aur seconds mein professional-quality images paayen. Graphic designers, YouTubers (for thumbnails), aur digital artists ke liye yeh tool bohot time aur mehnat bachata hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Realistic details", "Customizable", "Good lighting"],
    cons: ["Struggles with text in images", "Complex prompts needed"],
    indiaNote: "Indian YouTubers aur graphic designers ise thumbnails aur digital art ke liye kaafi use kar rahe hain. Freelance work ke liye great tool.",
    affiliateLink: "https://lexica.art"
  },
  {
    id: 32,
    name: "DreamStudio",
    emoji: "🎨",
    emojiColor: "#14b8a6",
    category: "Image Generation",
    rating: 4.4,
    ratingCount: "1.6k reviews",
    priceLabel: "Paid (Credits)",
    hasFree: false,
    featured: false,
    shortReview: "DreamStudio ek bohot popular tool hai. High-quality image generation aur editing ke liye AI power ka use karein.",
    fullReview: "DreamStudio Image Generation category mein ek standout AI solution hai. Is AI image generator se aap apni imagination ko reality mein badal sakte hain. Bas text prompt likhein aur seconds mein professional-quality images paayen. Graphic designers, YouTubers (for thumbnails), aur digital artists ke liye yeh tool bohot time aur mehnat bachata hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["High resolution", "Fast rendering", "Commercial use"],
    cons: ["No free tier sometimes", "Credit system"],
    indiaNote: "Indian YouTubers aur graphic designers ise thumbnails aur digital art ke liye kaafi use kar rahe hain. Freelance work ke liye great tool.",
    affiliateLink: "https://dreamstudio.ai"
  },
  {
    id: 33,
    name: "Tabnine",
    emoji: "💻",
    emojiColor: "#3b82f6",
    category: "Coding",
    rating: 4.5,
    ratingCount: "2.4k reviews",
    priceLabel: "Free / ₹1,000/mo",
    hasFree: true,
    featured: false,
    shortReview: "Tabnine ek bohot popular tool hai. Multiple programming languages support karta hai aur IDE mein directly integrate hota hai.",
    fullReview: "Tabnine Coding category mein ek standout AI solution hai. Yeh AI coding assistant developers ke liye ek virtual pair programmer ki tarah kaam karta hai. IDE mein integrate hokar yeh real-time code suggestions, bug fixes, aur code documentation provide karta hai. Isse coding speed badhti hai aur repetitive tasks automate ho jaate hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Increases productivity", "Good for beginners", "Snippet library"],
    cons: ["Context limit can be short", "Premium is pricey"],
    indiaNote: "Indian software developers aur IT students ke beech yeh kafi trending hai. Projects aur assignments jaldi poore karne mein madad karta hai.",
    affiliateLink: "https://tabnine.com"
  },
  {
    id: 34,
    name: "Codeium",
    emoji: "💻",
    emojiColor: "#10b981",
    category: "Coding",
    rating: 4.8,
    ratingCount: "3.1k reviews",
    priceLabel: "Free for Individuals",
    hasFree: true,
    featured: true,
    shortReview: "Codeium ek bohot popular tool hai. Developers ke liye smart AI coding assistant. Faster coding aur debugging ke liye best.",
    fullReview: "Codeium Coding category mein ek standout AI solution hai. Yeh AI coding assistant developers ke liye ek virtual pair programmer ki tarah kaam karta hai. IDE mein integrate hokar yeh real-time code suggestions, bug fixes, aur code documentation provide karta hai. Isse coding speed badhti hai aur repetitive tasks automate ho jaate hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Finds bugs quickly", "Explains code well", "Free tier available"],
    cons: ["Context limit can be short", "Premium is pricey"],
    indiaNote: "Indian software developers aur IT students ke beech yeh kafi trending hai. Projects aur assignments jaldi poore karne mein madad karta hai.",
    affiliateLink: "https://codeium.com"
  },
  {
    id: 35,
    name: "Amazon CodeWhisperer",
    emoji: "💻",
    emojiColor: "#f59e0b",
    category: "Coding",
    rating: 4.4,
    ratingCount: "1.8k reviews",
    priceLabel: "Free for Individuals",
    hasFree: true,
    featured: false,
    shortReview: "Amazon CodeWhisperer ek bohot popular tool hai. Developers ke liye smart AI coding assistant. Faster coding aur debugging ke liye best.",
    fullReview: "Amazon CodeWhisperer Coding category mein ek standout AI solution hai. Yeh AI coding assistant developers ke liye ek virtual pair programmer ki tarah kaam karta hai. IDE mein integrate hokar yeh real-time code suggestions, bug fixes, aur code documentation provide karta hai. Isse coding speed badhti hai aur repetitive tasks automate ho jaate hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Increases productivity", "Good for beginners", "Snippet library"],
    cons: ["Context limit can be short", "Premium is pricey"],
    indiaNote: "Indian software developers aur IT students ke beech yeh kafi trending hai. Projects aur assignments jaldi poore karne mein madad karta hai.",
    affiliateLink: "https://aws.amazon.com/codewhisperer"
  },
  {
    id: 36,
    name: "Sourcegraph Cody",
    emoji: "💻",
    emojiColor: "#ec4899",
    category: "Coding",
    rating: 4.6,
    ratingCount: "1.2k reviews",
    priceLabel: "Free / ₹800/mo",
    hasFree: true,
    featured: false,
    shortReview: "Sourcegraph Cody ek bohot popular tool hai. Multiple programming languages support karta hai aur IDE mein directly integrate hota hai.",
    fullReview: "Sourcegraph Cody Coding category mein ek standout AI solution hai. Yeh AI coding assistant developers ke liye ek virtual pair programmer ki tarah kaam karta hai. IDE mein integrate hokar yeh real-time code suggestions, bug fixes, aur code documentation provide karta hai. Isse coding speed badhti hai aur repetitive tasks automate ho jaate hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Supports many languages", "IDE integration", "Fast suggestions"],
    cons: ["Privacy concerns for enterprise code"],
    indiaNote: "Indian software developers aur IT students ke beech yeh kafi trending hai. Projects aur assignments jaldi poore karne mein madad karta hai.",
    affiliateLink: "https://sourcegraph.com/cody"
  },
  {
    id: 37,
    name: "Mutable AI",
    emoji: "💻",
    emojiColor: "#8b5cf6",
    category: "Coding",
    rating: 4.3,
    ratingCount: "500 reviews",
    priceLabel: "Free / ₹1,500/mo",
    hasFree: true,
    featured: false,
    shortReview: "Mutable AI ek bohot popular tool hai. Developers ke liye smart AI coding assistant. Faster coding aur debugging ke liye best.",
    fullReview: "Mutable AI Coding category mein ek standout AI solution hai. Yeh AI coding assistant developers ke liye ek virtual pair programmer ki tarah kaam karta hai. IDE mein integrate hokar yeh real-time code suggestions, bug fixes, aur code documentation provide karta hai. Isse coding speed badhti hai aur repetitive tasks automate ho jaate hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Supports many languages", "IDE integration", "Fast suggestions"],
    cons: ["Privacy concerns for enterprise code"],
    indiaNote: "Indian software developers aur IT students ke beech yeh kafi trending hai. Projects aur assignments jaldi poore karne mein madad karta hai.",
    affiliateLink: "https://mutable.ai"
  },
  {
    id: 38,
    name: "Blackbox AI",
    emoji: "💻",
    emojiColor: "#000000",
    category: "Coding",
    rating: 4.5,
    ratingCount: "2.2k reviews",
    priceLabel: "Free / ₹800/mo",
    hasFree: true,
    featured: false,
    shortReview: "Blackbox AI ek bohot popular tool hai. Multiple programming languages support karta hai aur IDE mein directly integrate hota hai.",
    fullReview: "Blackbox AI Coding category mein ek standout AI solution hai. Yeh AI coding assistant developers ke liye ek virtual pair programmer ki tarah kaam karta hai. IDE mein integrate hokar yeh real-time code suggestions, bug fixes, aur code documentation provide karta hai. Isse coding speed badhti hai aur repetitive tasks automate ho jaate hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Finds bugs quickly", "Explains code well", "Free tier available"],
    cons: ["Privacy concerns for enterprise code"],
    indiaNote: "Indian software developers aur IT students ke beech yeh kafi trending hai. Projects aur assignments jaldi poore karne mein madad karta hai.",
    affiliateLink: "https://blackbox.ai"
  },
  {
    id: 39,
    name: "Replit Ghostwriter",
    emoji: "💻",
    emojiColor: "#f97316",
    category: "Coding",
    rating: 4.7,
    ratingCount: "3.5k reviews",
    priceLabel: "Free / ₹1,200/mo",
    hasFree: true,
    featured: false,
    shortReview: "Replit Ghostwriter ek bohot popular tool hai. Developers ke liye smart AI coding assistant. Faster coding aur debugging ke liye best.",
    fullReview: "Replit Ghostwriter Coding category mein ek standout AI solution hai. Yeh AI coding assistant developers ke liye ek virtual pair programmer ki tarah kaam karta hai. IDE mein integrate hokar yeh real-time code suggestions, bug fixes, aur code documentation provide karta hai. Isse coding speed badhti hai aur repetitive tasks automate ho jaate hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Increases productivity", "Good for beginners", "Snippet library"],
    cons: ["Privacy concerns for enterprise code"],
    indiaNote: "Indian software developers aur IT students ke beech yeh kafi trending hai. Projects aur assignments jaldi poore karne mein madad karta hai.",
    affiliateLink: "https://replit.com"
  },
  {
    id: 40,
    name: "Consensus",
    emoji: "🔬",
    emojiColor: "#3b82f6",
    category: "Research",
    rating: 4.8,
    ratingCount: "1.5k reviews",
    priceLabel: "Free / ₹1,200/mo",
    hasFree: true,
    featured: true,
    shortReview: "Consensus ek bohot popular tool hai. Research papers aur PDFs ko summarize aur analyze karne ka best AI tool.",
    fullReview: "Consensus Research category mein ek standout AI solution hai. Research aur study karne walon ke liye yeh AI tool ek vardan hai. Yeh lambe PDF documents, research papers aur articles ko padh kar unki summary, key points aur citations nikal deta hai. Students, researchers, aur professionals isse apna ghanton ka time bacha sakte hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Highlights key data", "User-friendly interface", "Fast processing"],
    cons: ["Only supports text-heavy PDFs"],
    indiaNote: "UPSC aspirants, PhD scholars aur college students India mein iska use apne notes aur research preparation ke liye heavily kar rahe hain.",
    affiliateLink: "https://consensus.app"
  },
  {
    id: 41,
    name: "Elicit",
    emoji: "🔬",
    emojiColor: "#8b5cf6",
    category: "Research",
    rating: 4.7,
    ratingCount: "2.1k reviews",
    priceLabel: "Free / ₹1,000/mo",
    hasFree: true,
    featured: false,
    shortReview: "Elicit ek bohot popular tool hai. Research papers aur PDFs ko summarize aur analyze karne ka best AI tool.",
    fullReview: "Elicit Research category mein ek standout AI solution hai. Research aur study karne walon ke liye yeh AI tool ek vardan hai. Yeh lambe PDF documents, research papers aur articles ko padh kar unki summary, key points aur citations nikal deta hai. Students, researchers, aur professionals isse apna ghanton ka time bacha sakte hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Finds relevant papers", "Good for literature review", "Citation help"],
    cons: ["Sometimes hallucinates facts", "Requires subscription for large files"],
    indiaNote: "UPSC aspirants, PhD scholars aur college students India mein iska use apne notes aur research preparation ke liye heavily kar rahe hain.",
    affiliateLink: "https://elicit.org"
  },
  {
    id: 42,
    name: "ChatPDF",
    emoji: "🔬",
    emojiColor: "#ef4444",
    category: "Research",
    rating: 4.9,
    ratingCount: "4.5k reviews",
    priceLabel: "Free / ₹400/mo",
    hasFree: true,
    featured: true,
    shortReview: "ChatPDF ek bohot popular tool hai. Documents se automatically insights aur citations nikalne ke liye perfect.",
    fullReview: "ChatPDF Research category mein ek standout AI solution hai. Research aur study karne walon ke liye yeh AI tool ek vardan hai. Yeh lambe PDF documents, research papers aur articles ko padh kar unki summary, key points aur citations nikal deta hai. Students, researchers, aur professionals isse apna ghanton ka time bacha sakte hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Finds relevant papers", "Good for literature review", "Citation help"],
    cons: ["Only supports text-heavy PDFs"],
    indiaNote: "UPSC aspirants, PhD scholars aur college students India mein iska use apne notes aur research preparation ke liye heavily kar rahe hain.",
    affiliateLink: "https://chatpdf.com"
  },
  {
    id: 43,
    name: "SciSpace",
    emoji: "🔬",
    emojiColor: "#10b981",
    category: "Research",
    rating: 4.6,
    ratingCount: "1.8k reviews",
    priceLabel: "Free / ₹1,500/mo",
    hasFree: true,
    featured: false,
    shortReview: "SciSpace ek bohot popular tool hai. Research papers aur PDFs ko summarize aur analyze karne ka best AI tool.",
    fullReview: "SciSpace Research category mein ek standout AI solution hai. Research aur study karne walon ke liye yeh AI tool ek vardan hai. Yeh lambe PDF documents, research papers aur articles ko padh kar unki summary, key points aur citations nikal deta hai. Students, researchers, aur professionals isse apna ghanton ka time bacha sakte hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Finds relevant papers", "Good for literature review", "Citation help"],
    cons: ["Can miss nuanced details", "Limited pages in free tier"],
    indiaNote: "UPSC aspirants, PhD scholars aur college students India mein iska use apne notes aur research preparation ke liye heavily kar rahe hain.",
    affiliateLink: "https://typeset.io"
  },
  {
    id: 44,
    name: "Scholarcy",
    emoji: "🔬",
    emojiColor: "#f59e0b",
    category: "Research",
    rating: 4.5,
    ratingCount: "900 reviews",
    priceLabel: "Free / ₹800/mo",
    hasFree: true,
    featured: false,
    shortReview: "Scholarcy ek bohot popular tool hai. Academic research aur data gathering ko super fast aur easy banata hai.",
    fullReview: "Scholarcy Research category mein ek standout AI solution hai. Research aur study karne walon ke liye yeh AI tool ek vardan hai. Yeh lambe PDF documents, research papers aur articles ko padh kar unki summary, key points aur citations nikal deta hai. Students, researchers, aur professionals isse apna ghanton ka time bacha sakte hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Accurate summaries", "Easy PDF upload", "Saves reading time"],
    cons: ["Only supports text-heavy PDFs"],
    indiaNote: "UPSC aspirants, PhD scholars aur college students India mein iska use apne notes aur research preparation ke liye heavily kar rahe hain.",
    affiliateLink: "https://scholarcy.com"
  },
  {
    id: 45,
    name: "Genei",
    emoji: "🔬",
    emojiColor: "#6366f1",
    category: "Research",
    rating: 4.4,
    ratingCount: "600 reviews",
    priceLabel: "Paid / ₹1,000/mo",
    hasFree: false,
    featured: false,
    shortReview: "Genei ek bohot popular tool hai. Research papers aur PDFs ko summarize aur analyze karne ka best AI tool.",
    fullReview: "Genei Research category mein ek standout AI solution hai. Research aur study karne walon ke liye yeh AI tool ek vardan hai. Yeh lambe PDF documents, research papers aur articles ko padh kar unki summary, key points aur citations nikal deta hai. Students, researchers, aur professionals isse apna ghanton ka time bacha sakte hain. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Highlights key data", "User-friendly interface", "Fast processing"],
    cons: ["Can miss nuanced details", "Limited pages in free tier"],
    indiaNote: "UPSC aspirants, PhD scholars aur college students India mein iska use apne notes aur research preparation ke liye heavily kar rahe hain.",
    affiliateLink: "https://genei.io"
  },
  {
    id: 46,
    name: "Murf.ai",
    emoji: "🎙️",
    emojiColor: "#ec4899",
    category: "Audio",
    rating: 4.7,
    ratingCount: "2.8k reviews",
    priceLabel: "Free / ₹1,500/mo",
    hasFree: true,
    featured: false,
    shortReview: "Murf.ai ek bohot popular tool hai. Apni scripts ko professional voiceovers mein badlein. Multiple languages supported.",
    fullReview: "Murf.ai Audio category mein ek standout AI solution hai. Yeh AI audio tool text-to-speech, voice cloning, aur audio enhancement ke liye best in class hai. Iski generated voices itni natural hoti hain ki unhe human voice se alag karna mushkil hai. YouTube creators, audiobook narrators, aur podcasters ke liye yeh ek perfect aur cost-effective solution hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Natural sounding voices", "Multiple languages", "Voice cloning"],
    cons: ["Pronunciation errors sometimes", "Requires fast internet"],
    indiaNote: "Indian content creators (YouTube/Reels) bina mic ke professional voiceovers bana rahe hain. Hindi language support bohot achha hai.",
    affiliateLink: "https://murf.ai"
  },
  {
    id: 47,
    name: "Descript",
    emoji: "🎙️",
    emojiColor: "#3b82f6",
    category: "Audio",
    rating: 4.8,
    ratingCount: "3.9k reviews",
    priceLabel: "Free / ₹1,200/mo",
    hasFree: true,
    featured: true,
    shortReview: "Descript ek bohot popular tool hai. Podcasters aur video creators ke liye AI voiceovers aur audio cleanup tool.",
    fullReview: "Descript Audio category mein ek standout AI solution hai. Yeh AI audio tool text-to-speech, voice cloning, aur audio enhancement ke liye best in class hai. Iski generated voices itni natural hoti hain ki unhe human voice se alag karna mushkil hai. YouTube creators, audiobook narrators, aur podcasters ke liye yeh ek perfect aur cost-effective solution hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Natural sounding voices", "Multiple languages", "Voice cloning"],
    cons: ["Pronunciation errors sometimes", "Requires fast internet"],
    indiaNote: "Indian content creators (YouTube/Reels) bina mic ke professional voiceovers bana rahe hain. Hindi language support bohot achha hai.",
    affiliateLink: "https://descript.com"
  },
  {
    id: 48,
    name: "Lovo.ai",
    emoji: "🎙️",
    emojiColor: "#8b5cf6",
    category: "Audio",
    rating: 4.6,
    ratingCount: "1.4k reviews",
    priceLabel: "Free / ₹1,600/mo",
    hasFree: true,
    featured: false,
    shortReview: "Lovo.ai ek bohot popular tool hai. Podcasters aur video creators ke liye AI voiceovers aur audio cleanup tool.",
    fullReview: "Lovo.ai Audio category mein ek standout AI solution hai. Yeh AI audio tool text-to-speech, voice cloning, aur audio enhancement ke liye best in class hai. Iski generated voices itni natural hoti hain ki unhe human voice se alag karna mushkil hai. YouTube creators, audiobook narrators, aur podcasters ke liye yeh ek perfect aur cost-effective solution hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Natural sounding voices", "Multiple languages", "Voice cloning"],
    cons: ["Pronunciation errors sometimes", "Requires fast internet"],
    indiaNote: "Indian content creators (YouTube/Reels) bina mic ke professional voiceovers bana rahe hain. Hindi language support bohot achha hai.",
    affiliateLink: "https://lovo.ai"
  },
  {
    id: 49,
    name: "Speechify",
    emoji: "🎙️",
    emojiColor: "#10b981",
    category: "Audio",
    rating: 4.7,
    ratingCount: "5.2k reviews",
    priceLabel: "Free / ₹1,200/mo",
    hasFree: true,
    featured: false,
    shortReview: "Speechify ek bohot popular tool hai. Text-to-speech aur audio editing ke liye amazing AI tool. Human-like voice generation.",
    fullReview: "Speechify Audio category mein ek standout AI solution hai. Yeh AI audio tool text-to-speech, voice cloning, aur audio enhancement ke liye best in class hai. Iski generated voices itni natural hoti hain ki unhe human voice se alag karna mushkil hai. YouTube creators, audiobook narrators, aur podcasters ke liye yeh ek perfect aur cost-effective solution hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Removes background noise", "Easy timeline editing", "Export options"],
    cons: ["Heavy accents might sound robotic"],
    indiaNote: "Indian content creators (YouTube/Reels) bina mic ke professional voiceovers bana rahe hain. Hindi language support bohot achha hai.",
    affiliateLink: "https://speechify.com"
  },
  {
    id: 50,
    name: "Play.ht",
    emoji: "🎙️",
    emojiColor: "#f59e0b",
    category: "Audio",
    rating: 4.5,
    ratingCount: "1.8k reviews",
    priceLabel: "Free / ₹1,500/mo",
    hasFree: true,
    featured: false,
    shortReview: "Play.ht ek bohot popular tool hai. Text-to-speech aur audio editing ke liye amazing AI tool. Human-like voice generation.",
    fullReview: "Play.ht Audio category mein ek standout AI solution hai. Yeh AI audio tool text-to-speech, voice cloning, aur audio enhancement ke liye best in class hai. Iski generated voices itni natural hoti hain ki unhe human voice se alag karna mushkil hai. YouTube creators, audiobook narrators, aur podcasters ke liye yeh ek perfect aur cost-effective solution hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Natural sounding voices", "Multiple languages", "Voice cloning"],
    cons: ["Pronunciation errors sometimes", "Requires fast internet"],
    indiaNote: "Indian content creators (YouTube/Reels) bina mic ke professional voiceovers bana rahe hain. Hindi language support bohot achha hai.",
    affiliateLink: "https://play.ht"
  },
  {
    id: 51,
    name: "Altered",
    emoji: "🎙️",
    emojiColor: "#ef4444",
    category: "Audio",
    rating: 4.3,
    ratingCount: "500 reviews",
    priceLabel: "Free / ₹2,000/mo",
    hasFree: true,
    featured: false,
    shortReview: "Altered ek bohot popular tool hai. Apni scripts ko professional voiceovers mein badlein. Multiple languages supported.",
    fullReview: "Altered Audio category mein ek standout AI solution hai. Yeh AI audio tool text-to-speech, voice cloning, aur audio enhancement ke liye best in class hai. Iski generated voices itni natural hoti hain ki unhe human voice se alag karna mushkil hai. YouTube creators, audiobook narrators, aur podcasters ke liye yeh ek perfect aur cost-effective solution hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["High quality audio", "Affordable", "Fast generation"],
    cons: ["Pronunciation errors sometimes", "Requires fast internet"],
    indiaNote: "Indian content creators (YouTube/Reels) bina mic ke professional voiceovers bana rahe hain. Hindi language support bohot achha hai.",
    affiliateLink: "https://altered.ai"
  },
  {
    id: 52,
    name: "Podcastle",
    emoji: "🎙️",
    emojiColor: "#6366f1",
    category: "Audio",
    rating: 4.6,
    ratingCount: "1.1k reviews",
    priceLabel: "Free / ₹1,000/mo",
    hasFree: true,
    featured: false,
    shortReview: "Podcastle ek bohot popular tool hai. Text-to-speech aur audio editing ke liye amazing AI tool. Human-like voice generation.",
    fullReview: "Podcastle Audio category mein ek standout AI solution hai. Yeh AI audio tool text-to-speech, voice cloning, aur audio enhancement ke liye best in class hai. Iski generated voices itni natural hoti hain ki unhe human voice se alag karna mushkil hai. YouTube creators, audiobook narrators, aur podcasters ke liye yeh ek perfect aur cost-effective solution hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["High quality audio", "Affordable", "Fast generation"],
    cons: ["Emotion control can be tricky", "Free tier is very limited"],
    indiaNote: "Indian content creators (YouTube/Reels) bina mic ke professional voiceovers bana rahe hain. Hindi language support bohot achha hai.",
    affiliateLink: "https://podcastle.ai"
  },
  {
    id: 53,
    name: "Taskade",
    emoji: "📋",
    emojiColor: "#10b981",
    category: "Productivity",
    rating: 4.7,
    ratingCount: "2.5k reviews",
    priceLabel: "Free / ₹400/mo",
    hasFree: true,
    featured: false,
    shortReview: "Taskade ek bohot popular tool hai. Apne workflow ko automate karein aur AI ke saath apni productivity double karein.",
    fullReview: "Taskade Productivity category mein ek standout AI solution hai. Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Automates daily tasks", "Great team collaboration", "Integration with apps"],
    cons: ["Accuracy drops with heavy accents", "Requires continuous internet"],
    indiaNote: "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain.",
    affiliateLink: "https://taskade.com"
  },
  {
    id: 54,
    name: "Mem",
    emoji: "📋",
    emojiColor: "#f59e0b",
    category: "Productivity",
    rating: 4.5,
    ratingCount: "1.2k reviews",
    priceLabel: "Paid / ₹800/mo",
    hasFree: false,
    featured: false,
    shortReview: "Mem ek bohot popular tool hai. Apne workflow ko automate karein aur AI ke saath apni productivity double karein.",
    fullReview: "Mem Productivity category mein ek standout AI solution hai. Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Automates daily tasks", "Great team collaboration", "Integration with apps"],
    cons: ["Sometimes creates generic slides"],
    indiaNote: "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain.",
    affiliateLink: "https://mem.ai"
  },
  {
    id: 55,
    name: "Fireflies.ai",
    emoji: "📋",
    emojiColor: "#ef4444",
    category: "Productivity",
    rating: 4.8,
    ratingCount: "3.4k reviews",
    priceLabel: "Free / ₹1,500/mo",
    hasFree: true,
    featured: true,
    shortReview: "Fireflies.ai ek bohot popular tool hai. Apne workflow ko automate karein aur AI ke saath apni productivity double karein.",
    fullReview: "Fireflies.ai Productivity category mein ek standout AI solution hai. Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Generates quick slides", "Transcribes accurately", "Beautiful UI"],
    cons: ["Sometimes creates generic slides"],
    indiaNote: "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain.",
    affiliateLink: "https://fireflies.ai"
  },
  {
    id: 56,
    name: "Otter.ai",
    emoji: "📋",
    emojiColor: "#3b82f6",
    category: "Productivity",
    rating: 4.7,
    ratingCount: "4.8k reviews",
    priceLabel: "Free / ₹1,200/mo",
    hasFree: true,
    featured: false,
    shortReview: "Otter.ai ek bohot popular tool hai. Apne workflow ko automate karein aur AI ke saath apni productivity double karein.",
    fullReview: "Otter.ai Productivity category mein ek standout AI solution hai. Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Automates daily tasks", "Great team collaboration", "Integration with apps"],
    cons: ["Sometimes creates generic slides"],
    indiaNote: "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain.",
    affiliateLink: "https://otter.ai"
  },
  {
    id: 57,
    name: "Beautiful.ai",
    emoji: "📋",
    emojiColor: "#ec4899",
    category: "Productivity",
    rating: 4.6,
    ratingCount: "2.1k reviews",
    priceLabel: "Paid / ₹1,000/mo",
    hasFree: false,
    featured: false,
    shortReview: "Beautiful.ai ek bohot popular tool hai. Apne workflow ko automate karein aur AI ke saath apni productivity double karein.",
    fullReview: "Beautiful.ai Productivity category mein ek standout AI solution hai. Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Generates quick slides", "Transcribes accurately", "Beautiful UI"],
    cons: ["Accuracy drops with heavy accents", "Requires continuous internet"],
    indiaNote: "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain.",
    affiliateLink: "https://beautiful.ai"
  },
  {
    id: 58,
    name: "Tome",
    emoji: "📋",
    emojiColor: "#8b5cf6",
    category: "Productivity",
    rating: 4.5,
    ratingCount: "1.9k reviews",
    priceLabel: "Free / ₹1,200/mo",
    hasFree: true,
    featured: false,
    shortReview: "Tome ek bohot popular tool hai. Apne workflow ko automate karein aur AI ke saath apni productivity double karein.",
    fullReview: "Tome Productivity category mein ek standout AI solution hai. Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Generates quick slides", "Transcribes accurately", "Beautiful UI"],
    cons: ["Sometimes creates generic slides"],
    indiaNote: "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain.",
    affiliateLink: "https://tome.app"
  },
  {
    id: 59,
    name: "Gamma",
    emoji: "📋",
    emojiColor: "#14b8a6",
    category: "Productivity",
    rating: 4.8,
    ratingCount: "3.5k reviews",
    priceLabel: "Free / ₹1,500/mo",
    hasFree: true,
    featured: true,
    shortReview: "Gamma ek bohot popular tool hai. Notes lene aur team collaboration ko smart aur efficient banane wala AI assistant.",
    fullReview: "Gamma Productivity category mein ek standout AI solution hai. Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Automates daily tasks", "Great team collaboration", "Integration with apps"],
    cons: ["Learning curve for beginners", "Can be expensive for teams"],
    indiaNote: "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain.",
    affiliateLink: "https://gamma.app"
  },
  {
    id: 60,
    name: "Synthesia",
    emoji: "📋",
    emojiColor: "#6366f1",
    category: "Productivity",
    rating: 4.7,
    ratingCount: "4.1k reviews",
    priceLabel: "Paid / ₹2,500/mo",
    hasFree: false,
    featured: false,
    shortReview: "Synthesia ek bohot popular tool hai. Apne workflow ko automate karein aur AI ke saath apni productivity double karein.",
    fullReview: "Synthesia Productivity category mein ek standout AI solution hai. Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Automates daily tasks", "Great team collaboration", "Integration with apps"],
    cons: ["Sometimes creates generic slides"],
    indiaNote: "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain.",
    affiliateLink: "https://synthesia.io"
  },
  {
    id: 61,
    name: "HeyGen",
    emoji: "📋",
    emojiColor: "#8b5cf6",
    category: "Productivity",
    rating: 4.8,
    ratingCount: "2.9k reviews",
    priceLabel: "Free / ₹2,000/mo",
    hasFree: true,
    featured: false,
    shortReview: "HeyGen ek bohot popular tool hai. Meeting summaries, task management aur presentations banane ka all-in-one AI tool.",
    fullReview: "HeyGen Productivity category mein ek standout AI solution hai. Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Generates quick slides", "Transcribes accurately", "Beautiful UI"],
    cons: ["Accuracy drops with heavy accents", "Requires continuous internet"],
    indiaNote: "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain.",
    affiliateLink: "https://heygen.com"
  },
  {
    id: 62,
    name: "Zapier AI",
    emoji: "📋",
    emojiColor: "#f97316",
    category: "Productivity",
    rating: 4.9,
    ratingCount: "6.5k reviews",
    priceLabel: "Free / ₹1,500/mo",
    hasFree: true,
    featured: true,
    shortReview: "Zapier AI ek bohot popular tool hai. Notes lene aur team collaboration ko smart aur efficient banane wala AI assistant.",
    fullReview: "Zapier AI Productivity category mein ek standout AI solution hai. Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai. Iska user interface kaafi clean hai aur iski processing speed exceptional hai.",
    pros: ["Saves hours of work", "Smart reminders", "Customizable workflows"],
    cons: ["Sometimes creates generic slides"],
    indiaNote: "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain.",
    affiliateLink: "https://zapier.com"
  }
];

/* ============================================================
   STATE
   ============================================================ */
let state = {
  activeCategory: 'All',
  searchQuery: '',
  sortBy: 'rating',
  priceFilter: 'All',
  filteredTools: [...tools],
  currentModalTool: null,
  theme: 'dark',
};

/* ============================================================
   DOM REFS
   ============================================================ */
const DOM = {
  themeToggle:    () => document.getElementById('theme-toggle'),
  themeIcon:      () => document.getElementById('theme-icon'),
  hamburger:      () => document.getElementById('hamburger'),
  mobileNav:      () => document.getElementById('mobile-nav'),
  searchInput:    () => document.getElementById('search-input'),
  searchClear:    () => document.getElementById('search-clear'),
  categoryFilter: () => document.getElementById('category-filter'),
  sortFilter:     () => document.getElementById('sort-filter'),
  priceFilter:    () => document.getElementById('price-filter'),
  toolsGrid:      () => document.getElementById('tools-grid'),
  noResults:      () => document.getElementById('no-results'),
  resultsCount:   () => document.getElementById('results-count'),
  totalCount:     () => document.getElementById('total-tools-count'),
  pills:          () => document.querySelectorAll('.pill'),
  modalOverlay:   () => document.getElementById('modal-overlay'),
  modalClose:     () => document.getElementById('modal-close'),
  modalCloseBtn:  () => document.getElementById('modal-close-btn'),
  modalEmoji:     () => document.getElementById('modal-emoji'),
  modalName:      () => document.getElementById('modal-tool-name'),
  modalCatBadge:  () => document.getElementById('modal-category-badge'),
  modalStars:     () => document.getElementById('modal-stars'),
  modalRatingNum: () => document.getElementById('modal-rating-num'),
  modalPriceTag:  () => document.getElementById('modal-price-tag'),
  modalReview:    () => document.getElementById('modal-review-text'),
  modalProsList:  () => document.getElementById('modal-pros-list'),
  modalConsList:  () => document.getElementById('modal-cons-list'),
  modalIndiaText: () => document.getElementById('modal-india-text'),
  modalAffBtn:    () => document.getElementById('modal-affiliate-btn'),
  resetFilters:   () => document.getElementById('reset-filters'),
  backToTop:      () => document.getElementById('back-to-top'),
  toast:          () => document.getElementById('toast'),
};

/* ============================================================
   HELPERS
   ============================================================ */

/** Generate star HTML based on rating (0-5) */
function generateStars(rating, size = 'sm') {
  const fullStars  = Math.floor(rating);
  const halfStar   = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  let html = '';
  for (let i = 0; i < fullStars; i++)  html += '<span class="star star-full">★</span>';
  if (halfStar)                          html += '<span class="star star-half">★</span>';
  for (let i = 0; i < emptyStars; i++) html += '<span class="star star-empty">★</span>';
  return html;
}

/** Get category CSS class */
function getCatClass(category) {
  const map = {
    'Writing': 'cat-Writing',
    'Image Generation': 'cat-Image',
    'Coding': 'cat-Coding',
    'Research': 'cat-Research',
    'Audio': 'cat-Audio',
    'Productivity': 'cat-Productivity',
  };
  return map[category] || 'cat-Writing';
}

/** Get category emoji */
function getCatEmoji(category) {
  const map = {
    'Writing': '✍️',
    'Image Generation': '🎨',
    'Coding': '💻',
    'Research': '🔬',
    'Audio': '🎙️',
    'Productivity': '📋',
  };
  return map[category] || '✨';
}

/** Show toast notification */
function showToast(message, duration = 2500) {
  const toast = DOM.toast();
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/** Debounce helper */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/* ============================================================
   FILTERING & SORTING
   ============================================================ */
function applyFiltersAndSort() {
  let result = [...tools];

  // Category filter
  if (state.activeCategory !== 'All') {
    result = result.filter(t => t.category === state.activeCategory);
  }

  // Price filter
  if (state.priceFilter === 'Free') {
    result = result.filter(t => t.hasFree);
  } else if (state.priceFilter === 'Paid') {
    result = result.filter(t => !t.hasFree);
  }

  // Search filter
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase().trim();
    result = result.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.shortReview.toLowerCase().includes(q) ||
      t.fullReview.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (state.sortBy) {
    case 'rating':
      result.sort((a, b) => b.rating - a.rating);
      break;
    case 'name-asc':
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      result.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'price-free':
      result.sort((a, b) => (b.hasFree ? 1 : 0) - (a.hasFree ? 1 : 0));
      break;
  }

  state.filteredTools = result;
  renderTools();
  updateResultsCount();

  // Update live search feedback inside the hero section for instant top visibility
  const feedbackEl = document.getElementById('search-feedback');
  if (feedbackEl) {
    const count = result.length;
    const total = tools.length;
    if (state.searchQuery.trim()) {
      feedbackEl.innerHTML = `🔍 Found <span style="color:#fbbf24">${count}</span> tool${count === 1 ? '' : 's'} matching "${state.searchQuery.trim()}"`;
    } else {
      feedbackEl.textContent = `Showing all ${total} tools`;
    }
  }
}

/* ============================================================
   RENDER — TOOL CARDS
   ============================================================ */
function renderTools() {
  const grid = DOM.toolsGrid();
  const noResults = DOM.noResults();

  if (state.filteredTools.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');

  grid.innerHTML = state.filteredTools.map((tool, idx) => `
    <article
      class="tool-card"
      data-tool-id="${tool.id}"
      style="animation-delay: ${idx * 60}ms"
      aria-label="${tool.name} - ${tool.category} AI tool"
    >
      ${tool.featured ? '<div class="featured-badge">⭐ Featured</div>' : ''}

      <div class="card-top">
        <div class="card-emoji" style="background: ${tool.emojiColor}22; border: 1px solid ${tool.emojiColor}44;">
          <span>${tool.emoji}</span>
        </div>
        <div class="card-meta">
          <div class="card-name">${tool.name}</div>
          <span class="card-category-tag ${getCatClass(tool.category)}">
            ${getCatEmoji(tool.category)} ${tool.category}
          </span>
        </div>
      </div>

      <div class="card-rating-row">
        <div class="stars-display">${generateStars(tool.rating)}</div>
        <span class="rating-num">${tool.rating}</span>
        <span class="rating-count">(${tool.ratingCount})</span>
      </div>

      <div class="card-price">
        <span class="price-badge ${tool.hasFree ? 'price-free' : 'price-paid'}">
          ${tool.hasFree ? '🆓 Free Available' : '💳 Paid'}
        </span>
        <span class="price-text">${tool.priceLabel}</span>
      </div>

      <p class="card-review">${tool.shortReview}</p>

      <div class="card-actions">
        <button
          class="btn-read-more"
          data-tool-id="${tool.id}"
          id="read-more-${tool.id}"
          aria-label="Read full review of ${tool.name}"
        >
          📖 Read Review
        </button>
        <a
          href="${tool.affiliateLink}"
          class="btn-try-tool"
          target="_blank"
          rel="noopener noreferrer sponsored"
          id="try-tool-${tool.id}"
          aria-label="Try ${tool.name}"
          onclick="event.stopPropagation();"
        >
          Try Now 🚀
        </a>
      </div>
    </article>
  `).join('');

  // Attach card click listeners
  document.querySelectorAll('.btn-read-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const toolId = parseInt(btn.dataset.toolId);
      openModal(toolId);
    });
  });

  // Clicking card body also opens modal
  document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicking affiliate link
      if (e.target.closest('.btn-try-tool')) return;
      const toolId = parseInt(card.dataset.toolId);
      openModal(toolId);
    });
  });

  // Re-observe newly rendered cards
  initCardObserver();
}

function updateResultsCount() {
  const count = state.filteredTools.length;
  const total = tools.length;
  DOM.resultsCount().textContent =
    count === total
      ? `Showing all ${total} tools`
      : `Showing ${count} of ${total} tools`;
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(toolId) {
  const tool = tools.find(t => t.id === toolId);
  if (!tool) return;
  state.currentModalTool = tool;

  // Populate modal
  DOM.modalEmoji().textContent     = tool.emoji;
  DOM.modalName().textContent      = tool.name;
  DOM.modalCatBadge().textContent  = `${getCatEmoji(tool.category)} ${tool.category}`;
  DOM.modalCatBadge().className    = `modal-category-badge ${getCatClass(tool.category)}`;
  DOM.modalStars().innerHTML       = generateStars(tool.rating, 'lg');
  DOM.modalRatingNum().textContent = `${tool.rating} / 5`;
  DOM.modalPriceTag().textContent  = `💰 ${tool.priceLabel}`;
  DOM.modalReview().textContent    = tool.fullReview;
  DOM.modalIndiaText().textContent = tool.indiaNote;
  DOM.modalAffBtn().href           = tool.affiliateLink;
  DOM.modalAffBtn().textContent    = `🔗 Try ${tool.name} Now`;

  // Pros list
  DOM.modalProsList().innerHTML = tool.pros.map(p => `<li>${p}</li>`).join('');
  // Cons list
  DOM.modalConsList().innerHTML = tool.cons.map(c => `<li>${c}</li>`).join('');

  // Open overlay
  DOM.modalOverlay().classList.add('open');
  document.body.style.overflow = 'hidden';

  // Focus trap start
  setTimeout(() => DOM.modalClose().focus(), 100);
}

function closeModal() {
  DOM.modalOverlay().classList.remove('open');
  document.body.style.overflow = '';
  state.currentModalTool = null;
}

/* ============================================================
   THEME
   ============================================================ */
function initTheme() {
  const savedTheme = localStorage.getItem('ati-theme') || 'dark';
  setTheme(savedTheme);
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ati-theme', theme);
  DOM.themeIcon().textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  showToast(newTheme === 'light' ? '☀️ Light mode on!' : '🌙 Dark mode on!');
}

/* ============================================================
   CATEGORY PILLS
   ============================================================ */
function initPills() {
  DOM.pills().forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.dataset.category;
      state.activeCategory = cat;

      // Update pill active state
      DOM.pills().forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      // Sync dropdown
      DOM.categoryFilter().value = cat;

      applyFiltersAndSort();
    });
  });
}

/* ============================================================
   SCROLL BEHAVIORS
   ============================================================ */
function initScroll() {
  const header   = document.getElementById('site-header');
  const backToTop = DOM.backToTop();

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky header shadow
    if (scrollY > 10) {
      header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
    } else {
      header.style.boxShadow = 'none';
    }

    // Back to top
    if (scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   MOBILE NAV
   ============================================================ */
function initMobileNav() {
  const hamburger = DOM.hamburger();
  const mobileNav = DOM.mobileNav();

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
  });

  // Close on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
    });
  });
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */
function initEventListeners() {

  // Theme toggle
  DOM.themeToggle().addEventListener('click', toggleTheme);

  // Search input - Instant search for super snappy feel!
  DOM.searchInput().addEventListener('input', (e) => {
    const val = e.target.value;
    DOM.searchClear().classList.toggle('visible', val.length > 0);
    state.searchQuery = val;
    applyFiltersAndSort();

    // Auto-scroll down smoothly so user sees the tools grid filtering live
    if (val.trim().length > 0 && window.scrollY < 200) {
      const target = document.getElementById('categories');
      if (target) {
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  });

  DOM.searchClear().addEventListener('click', () => {
    DOM.searchInput().value = '';
    DOM.searchClear().classList.remove('visible');
    state.searchQuery = '';
    applyFiltersAndSort();
    DOM.searchInput().focus();
  });

  // Category dropdown
  DOM.categoryFilter().addEventListener('change', (e) => {
    state.activeCategory = e.target.value;
    // Sync pills
    DOM.pills().forEach(p => {
      p.classList.toggle('active', p.dataset.category === e.target.value);
    });
    applyFiltersAndSort();
  });

  // Sort dropdown
  DOM.sortFilter().addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFiltersAndSort();
  });

  // Price dropdown
  DOM.priceFilter().addEventListener('change', (e) => {
    state.priceFilter = e.target.value;
    applyFiltersAndSort();
  });

  // Modal close (X button)
  DOM.modalClose().addEventListener('click', closeModal);

  // Modal close (Close button)
  DOM.modalCloseBtn().addEventListener('click', closeModal);

  // Modal close on overlay click
  DOM.modalOverlay().addEventListener('click', (e) => {
    if (e.target === DOM.modalOverlay()) closeModal();
  });

  // Keyboard: Escape to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DOM.modalOverlay().classList.contains('open')) {
      closeModal();
    }
  });

  // Reset filters button
  DOM.resetFilters().addEventListener('click', resetAllFilters);

  // Affiliate link clicks — show toast
  document.addEventListener('click', (e) => {
    const affLink = e.target.closest('.btn-try-tool, .btn-affiliate');
    if (affLink) {
      showToast('🚀 Redirecting to tool... (Affiliate link)');
    }
  });
}

/* ============================================================
   RESET
   ============================================================ */
function resetAllFilters() {
  state.activeCategory = 'All';
  state.searchQuery    = '';
  state.sortBy         = 'rating';
  state.priceFilter    = 'All';

  DOM.searchInput().value    = '';
  DOM.categoryFilter().value = 'All';
  DOM.sortFilter().value     = 'rating';
  DOM.priceFilter().value    = 'All';
  DOM.searchClear().classList.remove('visible');

  DOM.pills().forEach(p => {
    p.classList.toggle('active', p.dataset.category === 'All');
  });

  applyFiltersAndSort();
  showToast('✅ Filters reset!');
}

/* ============================================================
   INTERSECTION OBSERVER — lazy card animation
   ============================================================ */
function initCardObserver() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.tool-card').forEach(card => {
    observer.observe(card);
  });
}

/* ============================================================
   STATS COUNTER ANIMATION
   ============================================================ */
function animateCounter(el, target, duration = 1200) {
  let start = 0;
  const step = target / (duration / 16);
  const isDecimal = target % 1 !== 0;

  const update = () => {
    start = Math.min(start + step, target);
    el.textContent = isDecimal
      ? start.toFixed(1)
      : Math.floor(start).toString();
    if (start < target) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounterAnimation() {
  const totalEl = DOM.totalCount();
  if (totalEl) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(totalEl, tools.length);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(totalEl);
  }
}

/* ============================================================
   SMOOTH SCROLL for anchor links
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  initTheme();
  initPills();
  initMobileNav();
  initScroll();
  initEventListeners();
  initSmoothScroll();
  applyFiltersAndSort();   // initial render
  initCounterAnimation();

  // Small delay to observe cards after initial render
  requestAnimationFrame(() => initCardObserver());
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
