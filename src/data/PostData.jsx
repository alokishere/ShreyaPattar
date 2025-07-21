const data = [{
  "blogSection": {
    "title": "Shreya Pattar's Insights",
    "description": "Dive into Shreya Pattar’s actionable advice on freelancing, LinkedIn marketing, content creation, and social impact. Discover tips, strategies, and personal stories to grow your online presence and achieve success.",
    "posts": [
      {
        "id": 1,
        "title": "Ca$hing In on LinkedIn: Building a LinkedIn Audience for Leads and Income",
        "slug": "cashing-in-on-linkedin",
        "date": "2025-04-10",
        "category": "LinkedIn Marketing",
        "excerpt": "Learn how Shreya built a LinkedIn audience of 146K+ followers, generating 3-5 inbound leads daily and six-figure income, starting from a single viral post.",
        "contentSnippet": "I started posting on LinkedIn in 2018 as a student. My first post went viral with 1.5M views, landing me 4 clients overnight. Consistency led to 3-5 daily leads and a six-figure income. Here’s how: optimize your profile, share authentic stories, and post regularly to build trust.",
        "tags": ["LinkedIn", "personal branding", "lead generation"],
        "image": "src/assets/cashing on ln.webp",
        "readTime": "6 min",
        "source": "Gumroad Product (https://shreyapattar.gumroad.com/l/linkedin)"
      },
      {
        "id": 2,
        "title": "Freelancing Freedom: From $0 to $1000+ in 10 Days",
        "slug": "freelancing-freedom",
        "date": "2025-03-20",
        "category": "Freelancing",
        "excerpt": "A step-by-step guide to launching your freelancing career, from crafting offers to landing your first client in just 10 days.",
        "contentSnippet": "Freelancing can feel overwhelming, but it’s simpler than you think. Forget portfolios or bidding platforms—focus on creating high-value offers and pitching directly. I went from $0 to $1000+ in 10 days by targeting the right clients and showcasing value, not skills.",
        "tags": ["freelancing", "client acquisition", "business"],
        "image": "src/assets/freedom.webp",
        "readTime": "5 min",
        "source": "Gumroad Product (https://shreyapattar.gumroad.com/l/freelancingfreedom)"
      },
      {
        "id": 3,
        "title": "Money Call$: Closing $5000+ Deals Over the Phone",
        "slug": "money-calls",
        "date": "2025-02-15",
        "category": "Freelancing",
        "excerpt": "Discover Shreya’s system for confidently closing high-value clients over the phone, overcoming fears and negotiation challenges.",
        "contentSnippet": "Closing $5000+ deals isn’t about being pushy—it’s about confidence and strategy. I used to dread client calls, but my ‘Money Call$’ system helps you qualify prospects, quote prices, and close deals systematically, even if you’re nervous.",
        "tags": ["freelancing", "sales", "client calls"],
        "image": "src/assets/moneycall.webp",
        "readTime": "5 min",
        "source": "Gumroad Product (https://shreyapattar.gumroad.com/l/moneycalls)"
      },
      {
        "id": 4,
        "title": "LinkedIn Power Profile: Building a Profile That Gets Results",
        "slug": "linkedin-power-profile",
        "date": "2025-01-05",
        "category": "LinkedIn Marketing",
        "excerpt": "A guide to optimizing your LinkedIn profile to attract followers, build trust, and generate leads with actionable tips and examples.",
        "contentSnippet": "Your LinkedIn profile is your virtual handshake. Simple tweaks to your headline, About section, and content strategy can skyrocket your reach. I share exact examples to make your profile stand out and win your audience’s trust.",
        "tags": ["LinkedIn", "personal branding", "profile optimization"],
        "image": "src/assets/freelancebandal.webp",
        "readTime": "4 min",
        "source": "Gumroad Product (https://shreyapattar.gumroad.com/l/linkedinpowerprofile)"    },
      {
        "id": 5,
        "title": "#Anthology: Writing Content and Freelancing Successfully",
        "slug": "anthology-linkedin-freelancing",
        "date": "2024-12-10",
        "category": "Content Creation",
        "excerpt": "A collection of Shreya’s best LinkedIn posts that drove massive engagement and helped her grow to 50,000 followers in 20 months.",
        "contentSnippet": "Great content builds audiences. My best LinkedIn posts, compiled in #Anthology, show you how to write click-worthy content and grow your visibility. These posts helped me gain 50,000 followers in 20 months—learn what works.",
        "tags": ["content creation", "LinkedIn", "freelancing"],
        "image": "src/assets/antholgy.webp",
        "readTime": "4 min",
        "source": "Gumroad Product (https://shreyapattar.gumroad.com/l/anthology)"
      },
      {
        "id": 6,
        "title": "Using Technology for Social Good: Lessons from HomeLink",
        "slug": "homelink-social-impact",
        "date": "2024-11-01",
        "category": "Social Impact",
        "excerpt": "How Shreya’s HomeLink initiative uses AI to address homelessness by connecting people and providing up-skilling opportunities.",
        "contentSnippet": "HomeLink uses AI to match homeless individuals with homeowners and offer up-skilling. It’s proof that technology can solve real-world problems when driven by purpose. Here’s how we’re making an impact.",
        "tags": ["social impact", "technology", "HomeLink"],
        "image": "src/assets/ultimateGuide.png",
        "readTime": "6 min",
        "source": "LinkedIn Profile (https://www.linkedin.com/in/shreya-pattar/)"
      }
    ],
    "categories": [
      {
        "name": "Freelancing",
        "description": "Practical strategies to start and scale a freelancing career."
      },
      {
        "name": "LinkedIn Marketing",
        "description": "Tips for building a strong LinkedIn presence and generating leads."
      },
      {
        "name": "Content Creation",
        "description": "Guides on crafting engaging content for online platforms."
      },
      {
        "name": "Social Impact",
        "description": "Insights on using technology for positive social change."
      }
    ],
    "designNotes": {
      "layout": "Responsive grid (3 columns on desktop, 1 on mobile) with featured images, titles, and excerpts.",
      "filters": "Category filter buttons for Freelancing, LinkedIn Marketing, Content Creation, and Social Impact.",
      "styling": "Modern, clean design with blues (#1E3A8A), whites (#FFFFFF), and orange/green accents (#F97316 or #10B981). Use Tailwind CSS via CDN.",
      "interactivity": "Hover effects on post cards (scale 1.05, shadow-lg), dynamic search bar for title/tags, pagination (4 posts per page).",
      "callsToAction": [
        {
          "text": "Read More",
          "action": "Navigate to /blog/[slug]"
        },
        {
          "text": "Subscribe to Newsletter",
          "action": "Link to https://pattarshreya.ck.page/"
        }
      ]
    },
    "seo": {
      "keywords": ["freelancing tips", "LinkedIn marketing", "content creation", "social impact", "Shreya Pattar"],
      "metaDescription": "Shreya Pattar’s blog shares actionable insights on freelancing, LinkedIn marketing, content creation, and social impact. Learn from her journey to success."
    },
    "sources": [
      "Gumroad Store: https://shreyapattar.gumroad.com/",
      "LinkedIn Profile: https://www.linkedin.com/in/shreya-pattar/",
      "WordPress Blog: https://shreyapattararticles.wordpress.com/",
      "Social Nation Interview: https://www.socialnationnow.com/interview-with-shreya-pattar"
    ]
  }
}]

export default data