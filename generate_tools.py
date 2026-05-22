import json
import random

existing_tools = 12

new_tools_data = [
    # Writing
    ("Jasper AI", "✍️", "#f59e0b", "Writing", 4.7, "4.5k", "Paid / ₹3,200/mo", False, False, "https://jasper.ai"),
    ("Copy.ai", "✍️", "#10b981", "Writing", 4.6, "3.2k", "Free / ₹2,900/mo", True, False, "https://copy.ai"),
    ("Writesonic", "✍️", "#3b82f6", "Writing", 4.5, "2.8k", "Free / ₹1,200/mo", True, False, "https://writesonic.com"),
    ("Rytr", "✍️", "#ef4444", "Writing", 4.6, "5.1k", "Free / ₹750/mo", True, False, "https://rytr.me"),
    ("QuillBot", "✍️", "#22c55e", "Writing", 4.8, "8.9k", "Free / ₹800/mo", True, True, "https://quillbot.com"),
    ("Wordtune", "✍️", "#8b5cf6", "Writing", 4.7, "3.4k", "Free / ₹1,200/mo", True, False, "https://wordtune.com"),
    ("Sudowrite", "✍️", "#a855f7", "Writing", 4.5, "1.2k", "Paid / ₹1,500/mo", False, False, "https://sudowrite.com"),
    ("Anyword", "✍️", "#14b8a6", "Writing", 4.4, "900", "Paid / ₹3,000/mo", False, False, "https://anyword.com"),
    ("Frase", "✍️", "#f97316", "Writing", 4.6, "1.5k", "Paid / ₹1,200/mo", False, False, "https://frase.io"),
    ("INK", "✍️", "#6366f1", "Writing", 4.3, "600", "Paid / ₹2,500/mo", False, False, "https://inkforall.com"),
    ("TextCortex", "✍️", "#ec4899", "Writing", 4.5, "1.1k", "Free / ₹1,000/mo", True, False, "https://textcortex.com"),
    
    # Image Generation
    ("DALL-E 3", "🎨", "#000000", "Image Generation", 4.7, "5.5k", "Paid (with ChatGPT Plus)", False, True, "https://openai.com/dall-e-3"),
    ("Leonardo AI", "🎨", "#ec4899", "Image Generation", 4.8, "4.2k", "Free / ₹1,000/mo", True, True, "https://leonardo.ai"),
    ("Stable Diffusion", "🎨", "#8b5cf6", "Image Generation", 4.6, "6.1k", "Free (Open Source)", True, False, "https://stability.ai"),
    ("Adobe Firefly", "🎨", "#ef4444", "Image Generation", 4.7, "3.8k", "Free / Premium", True, False, "https://firefly.adobe.com"),
    ("Craiyon", "🎨", "#f59e0b", "Image Generation", 4.1, "2.5k", "Free / ₹400/mo", True, False, "https://craiyon.com"),
    ("NightCafe", "🎨", "#10b981", "Image Generation", 4.4, "1.9k", "Free / ₹500/mo", True, False, "https://nightcafe.studio"),
    ("Playground AI", "🎨", "#3b82f6", "Image Generation", 4.6, "2.1k", "Free / ₹1,200/mo", True, False, "https://playgroundai.com"),
    ("Lexica", "🎨", "#6366f1", "Image Generation", 4.5, "1.3k", "Free / ₹800/mo", True, False, "https://lexica.art"),
    ("DreamStudio", "🎨", "#14b8a6", "Image Generation", 4.4, "1.6k", "Paid (Credits)", False, False, "https://dreamstudio.ai"),

    # Coding
    ("Tabnine", "💻", "#3b82f6", "Coding", 4.5, "2.4k", "Free / ₹1,000/mo", True, False, "https://tabnine.com"),
    ("Codeium", "💻", "#10b981", "Coding", 4.8, "3.1k", "Free for Individuals", True, True, "https://codeium.com"),
    ("Amazon CodeWhisperer", "💻", "#f59e0b", "Coding", 4.4, "1.8k", "Free for Individuals", True, False, "https://aws.amazon.com/codewhisperer"),
    ("Sourcegraph Cody", "💻", "#ec4899", "Coding", 4.6, "1.2k", "Free / ₹800/mo", True, False, "https://sourcegraph.com/cody"),
    ("Mutable AI", "💻", "#8b5cf6", "Coding", 4.3, "500", "Free / ₹1,500/mo", True, False, "https://mutable.ai"),
    ("Blackbox AI", "💻", "#000000", "Coding", 4.5, "2.2k", "Free / ₹800/mo", True, False, "https://blackbox.ai"),
    ("Replit Ghostwriter", "💻", "#f97316", "Coding", 4.7, "3.5k", "Free / ₹1,200/mo", True, False, "https://replit.com"),

    # Research
    ("Consensus", "🔬", "#3b82f6", "Research", 4.8, "1.5k", "Free / ₹1,200/mo", True, True, "https://consensus.app"),
    ("Elicit", "🔬", "#8b5cf6", "Research", 4.7, "2.1k", "Free / ₹1,000/mo", True, False, "https://elicit.org"),
    ("ChatPDF", "🔬", "#ef4444", "Research", 4.9, "4.5k", "Free / ₹400/mo", True, True, "https://chatpdf.com"),
    ("SciSpace", "🔬", "#10b981", "Research", 4.6, "1.8k", "Free / ₹1,500/mo", True, False, "https://typeset.io"),
    ("Scholarcy", "🔬", "#f59e0b", "Research", 4.5, "900", "Free / ₹800/mo", True, False, "https://scholarcy.com"),
    ("Genei", "🔬", "#6366f1", "Research", 4.4, "600", "Paid / ₹1,000/mo", False, False, "https://genei.io"),

    # Audio
    ("Murf.ai", "🎙️", "#ec4899", "Audio", 4.7, "2.8k", "Free / ₹1,500/mo", True, False, "https://murf.ai"),
    ("Descript", "🎙️", "#3b82f6", "Audio", 4.8, "3.9k", "Free / ₹1,200/mo", True, True, "https://descript.com"),
    ("Lovo.ai", "🎙️", "#8b5cf6", "Audio", 4.6, "1.4k", "Free / ₹1,600/mo", True, False, "https://lovo.ai"),
    ("Speechify", "🎙️", "#10b981", "Audio", 4.7, "5.2k", "Free / ₹1,200/mo", True, False, "https://speechify.com"),
    ("Play.ht", "🎙️", "#f59e0b", "Audio", 4.5, "1.8k", "Free / ₹1,500/mo", True, False, "https://play.ht"),
    ("Altered", "🎙️", "#ef4444", "Audio", 4.3, "500", "Free / ₹2,000/mo", True, False, "https://altered.ai"),
    ("Podcastle", "🎙️", "#6366f1", "Audio", 4.6, "1.1k", "Free / ₹1,000/mo", True, False, "https://podcastle.ai"),

    # Productivity
    ("Taskade", "📋", "#10b981", "Productivity", 4.7, "2.5k", "Free / ₹400/mo", True, False, "https://taskade.com"),
    ("Mem", "📋", "#f59e0b", "Productivity", 4.5, "1.2k", "Paid / ₹800/mo", False, False, "https://mem.ai"),
    ("Fireflies.ai", "📋", "#ef4444", "Productivity", 4.8, "3.4k", "Free / ₹1,500/mo", True, True, "https://fireflies.ai"),
    ("Otter.ai", "📋", "#3b82f6", "Productivity", 4.7, "4.8k", "Free / ₹1,200/mo", True, False, "https://otter.ai"),
    ("Beautiful.ai", "📋", "#ec4899", "Productivity", 4.6, "2.1k", "Paid / ₹1,000/mo", False, False, "https://beautiful.ai"),
    ("Tome", "📋", "#8b5cf6", "Productivity", 4.5, "1.9k", "Free / ₹1,200/mo", True, False, "https://tome.app"),
    ("Gamma", "📋", "#14b8a6", "Productivity", 4.8, "3.5k", "Free / ₹1,500/mo", True, True, "https://gamma.app"),
    ("Synthesia", "📋", "#6366f1", "Productivity", 4.7, "4.1k", "Paid / ₹2,500/mo", False, False, "https://synthesia.io"),
    ("HeyGen", "📋", "#8b5cf6", "Productivity", 4.8, "2.9k", "Free / ₹2,000/mo", True, False, "https://heygen.com"),
    ("Zapier AI", "📋", "#f97316", "Productivity", 4.9, "6.5k", "Free / ₹1,500/mo", True, True, "https://zapier.com")
]

templates = {
    "Writing": {
        "short": ["Content writing aur copywriting ke liye zabardast tool. Seconds mein high-quality text generate karein.", "SEO friendly articles aur blogs likhne ke liye best AI assistant. Hindi support bhi available hai.", "Marketing copy aur emails likhne ka smart tarika. Time bachata hai aur creativity badhata hai."],
        "full": "Yeh tool writing aur content creation ko bohot aasan bana deta hai. Advanced AI models ka use karke yeh human-like text generate karta hai. Bloggers, marketers, aur students ke liye yeh ek perfect companion hai. Grammar check, tone adjustment, aur auto-complete jaise features iski khaasiyat hain.",
        "pros": [["Fast generation", "SEO friendly", "Multiple tones"], ["Easy to use", "Good templates", "Grammar check"], ["Saves time", "Affordable", "Hindi support"]],
        "cons": [["Sometimes repetitive", "Needs human editing"], ["Pro version is costly", "Limited free words"], ["Occasional formatting issues"]],
        "india": "Indian creators ke liye bohot useful hai. Freelancers iska use karke apni writing speed 10x tak badha sakte hain."
    },
    "Image Generation": {
        "short": ["Text prompts se stunning aur realistic images generate karein. Designers ke liye ek game-changer.", "Creative artwork aur social media graphics banane ka sabse aasan AI tool.", "High-quality image generation aur editing ke liye AI power ka use karein."],
        "full": "Is AI image generator se aap apni imagination ko reality mein badal sakte hain. Bas text prompt likhein aur seconds mein professional-quality images paayen. Graphic designers, YouTubers (for thumbnails), aur digital artists ke liye yeh tool bohot time aur mehnat bachata hai.",
        "pros": [["High resolution", "Fast rendering", "Commercial use"], ["Vast styles", "Easy prompts", "Community gallery"], ["Realistic details", "Customizable", "Good lighting"]],
        "cons": [["Struggles with text in images", "Complex prompts needed"], ["No free tier sometimes", "Credit system"], ["Faces can look distorted sometimes"]],
        "india": "Indian YouTubers aur graphic designers ise thumbnails aur digital art ke liye kaafi use kar rahe hain. Freelance work ke liye great tool."
    },
    "Coding": {
        "short": ["Developers ke liye smart AI coding assistant. Faster coding aur debugging ke liye best.", "Code autocomplete aur error fixing mein help karne wala powerful AI tool.", "Multiple programming languages support karta hai aur IDE mein directly integrate hota hai."],
        "full": "Yeh AI coding assistant developers ke liye ek virtual pair programmer ki tarah kaam karta hai. IDE mein integrate hokar yeh real-time code suggestions, bug fixes, aur code documentation provide karta hai. Isse coding speed badhti hai aur repetitive tasks automate ho jaate hain.",
        "pros": [["Supports many languages", "IDE integration", "Fast suggestions"], ["Finds bugs quickly", "Explains code well", "Free tier available"], ["Increases productivity", "Good for beginners", "Snippet library"]],
        "cons": [["Might suggest outdated code", "Needs internet"], ["Context limit can be short", "Premium is pricey"], ["Privacy concerns for enterprise code"]],
        "india": "Indian software developers aur IT students ke beech yeh kafi trending hai. Projects aur assignments jaldi poore karne mein madad karta hai."
    },
    "Research": {
        "short": ["Research papers aur PDFs ko summarize aur analyze karne ka best AI tool.", "Academic research aur data gathering ko super fast aur easy banata hai.", "Documents se automatically insights aur citations nikalne ke liye perfect."],
        "full": "Research aur study karne walon ke liye yeh AI tool ek vardan hai. Yeh lambe PDF documents, research papers aur articles ko padh kar unki summary, key points aur citations nikal deta hai. Students, researchers, aur professionals isse apna ghanton ka time bacha sakte hain.",
        "pros": [["Accurate summaries", "Easy PDF upload", "Saves reading time"], ["Finds relevant papers", "Good for literature review", "Citation help"], ["Highlights key data", "User-friendly interface", "Fast processing"]],
        "cons": [["Can miss nuanced details", "Limited pages in free tier"], ["Sometimes hallucinates facts", "Requires subscription for large files"], ["Only supports text-heavy PDFs"]],
        "india": "UPSC aspirants, PhD scholars aur college students India mein iska use apne notes aur research preparation ke liye heavily kar rahe hain."
    },
    "Audio": {
        "short": ["Text-to-speech aur audio editing ke liye amazing AI tool. Human-like voice generation.", "Podcasters aur video creators ke liye AI voiceovers aur audio cleanup tool.", "Apni scripts ko professional voiceovers mein badlein. Multiple languages supported."],
        "full": "Yeh AI audio tool text-to-speech, voice cloning, aur audio enhancement ke liye best in class hai. Iski generated voices itni natural hoti hain ki unhe human voice se alag karna mushkil hai. YouTube creators, audiobook narrators, aur podcasters ke liye yeh ek perfect aur cost-effective solution hai.",
        "pros": [["Natural sounding voices", "Multiple languages", "Voice cloning"], ["Removes background noise", "Easy timeline editing", "Export options"], ["High quality audio", "Affordable", "Fast generation"]],
        "cons": [["Emotion control can be tricky", "Free tier is very limited"], ["Pronunciation errors sometimes", "Requires fast internet"], ["Heavy accents might sound robotic"]],
        "india": "Indian content creators (YouTube/Reels) bina mic ke professional voiceovers bana rahe hain. Hindi language support bohot achha hai."
    },
    "Productivity": {
        "short": ["Meeting summaries, task management aur presentations banane ka all-in-one AI tool.", "Apne workflow ko automate karein aur AI ke saath apni productivity double karein.", "Notes lene aur team collaboration ko smart aur efficient banane wala AI assistant."],
        "full": "Productivity aur time management ko next level par le jaane ke liye yeh AI tool design kiya gaya hai. Yeh meetings ke notes automatically leta hai, action items banata hai, aur stunning presentations seconds mein taiyar kar deta hai. Startups, managers, aur teams ke liye yeh ek daily essential hai.",
        "pros": [["Automates daily tasks", "Great team collaboration", "Integration with apps"], ["Generates quick slides", "Transcribes accurately", "Beautiful UI"], ["Saves hours of work", "Smart reminders", "Customizable workflows"]],
        "cons": [["Learning curve for beginners", "Can be expensive for teams"], ["Accuracy drops with heavy accents", "Requires continuous internet"], ["Sometimes creates generic slides"]],
        "india": "Indian startups, remote workers aur corporate professionals apna time bachane aur efficiency badhane ke liye ise daily adopt kar rahe hain."
    }
}

generated_tools = []

for i, data in enumerate(new_tools_data):
    name, emoji, color, cat, rating, rc, price, has_free, feat, link = data
    t = templates[cat]
    
    short = random.choice(t["short"])
    short = f"{name} ek bohot popular tool hai. {short}"
    
    full = f"{name} {cat} category mein ek standout AI solution hai. {t['full']} Iska user interface kaafi clean hai aur iski processing speed exceptional hai."
    
    pros = random.choice(t["pros"])
    cons = random.choice(t["cons"])
    india = t["india"]
    
    tool_obj = {
        "id": existing_tools + i + 1,
        "name": name,
        "emoji": emoji,
        "emojiColor": color,
        "category": cat,
        "rating": rating,
        "ratingCount": rc + " reviews",
        "priceLabel": price,
        "hasFree": has_free,
        "featured": feat,
        "shortReview": short,
        "fullReview": full,
        "pros": pros,
        "cons": cons,
        "indiaNote": india,
        "affiliateLink": link
    }
    generated_tools.append(tool_obj)

# Read script.js
with open("script.js", "r", encoding="utf-8") as f:
    content = f.read()

# Find the end of the tools array
# We look for the ending '];' of the tools array
tools_end_idx = content.find("];\n\n/* ============================================================\n   STATE")

if tools_end_idx == -1:
    tools_end_idx = content.find("];")

# Generate JS string for new tools
js_str = ",\n"
for idx, tool in enumerate(generated_tools):
    js_str += "  {\n"
    for k, v in tool.items():
        if isinstance(v, str):
            # escape quotes
            v_esc = v.replace('"', '\\"')
            js_str += f'    {k}: "{v_esc}",\n'
        elif isinstance(v, bool):
            js_str += f'    {k}: {"true" if v else "false"},\n'
        elif isinstance(v, list):
            js_str += f'    {k}: {json.dumps(v)},\n'
        else:
            js_str += f'    {k}: {v},\n'
    js_str = js_str.rstrip(",\n") + "\n  }"
    if idx < len(generated_tools) - 1:
        js_str += ",\n"

# Insert the new tools
new_content = content[:tools_end_idx] + js_str + "\n" + content[tools_end_idx:]

with open("script.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Successfully added {len(generated_tools)} tools to script.js!")
