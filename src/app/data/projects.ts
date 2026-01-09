export interface Project {
  id: number;
  title: string;
  slug: string; // added slug
  category: string;
  image: string;
  description: string;
  longDescription: string;
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    slug: "portfolio-website",
    category: "Front-end",
    image: "/assets/images/Projects/Portfolio_Saiha/SA_Thumbnail.png",
    description: "Responsive Personal portfolio built with React and Tailwind",
    longDescription:
      "A <strong style='color:#F0F0F0;'>modern and minimal portfolio website</strong> designed to showcase <strong style='color:#F0F0F0;'>projects, skills, and services</strong> with a <strong style='color:#F0F0F0;'><em>clean user interface</em></strong> and <strong style='color:#F0F0F0;'>smooth visual flow</strong>. Built using <strong style='color:#F0F0F0;'>React</strong> and <strong style='color:#F0F0F0;'>Tailwind CSS</strong> to ensure responsiveness and performance.",
    tools: ["React", "Figma Make", "HTML", "Tailwind CSS"],
    images: [
      "/assets/images/Projects/Portfolio_Saiha/SA_screen_2.png",
      "/assets/images/Projects/Portfolio_Saiha/SA_screen_3.png",
      "/assets/images/Projects/Portfolio_Saiha/SA_screen_4.png",
      "/assets/images/Projects/Portfolio_Saiha/SA_screen_5.png",
    ],
  },
  {
    id: 2,
    title: "Landing Pages Practice Designs",
    slug: "landing-pages-practice-designs",
    category: "Front-end",
    image: "/assets/images/Projects/Landing_Pages/Landing Pages-Thumbnail.png",
    description:
      "Practice front-end landing page designs created to explore layouts, UI patterns, and responsive design.",
    longDescription:
      "A collection of <strong style='color:#F0F0F0;'>practice landing page designs</strong> created to explore <strong style='color:#F0F0F0;'>layouts, UI patterns, and responsiveness</strong>. These designs demonstrate hands-on learning in <strong style='color:#F0F0F0;'>HTML, CSS, and JavaScript</strong> while experimenting with <strong style='color:#F0F0F0;'><em>creative brand styles</em></strong> for blogs and platforms.",
    tools: ["HTML", "CSS", "JavaScript", "UI Design", "Tailwind CSS"],
    images: [
      "/assets/images/Projects/Landing_Pages/Azaleas_screen_1.png",
      "/assets/images/Projects/Landing_Pages/Azaleas_screen_2.png",
      "/assets/images/Projects/Landing_Pages/Dreamers_1.png",
      "/assets/images/Projects/Landing_Pages/Dreamers_2.png",
      "/assets/images/Projects/Landing_Pages/LaracastBlogPost_1.png",
      "/assets/images/Projects/Landing_Pages/LaracastBlogPost_2.png",
    ],
  },
  {
    id: 3,
    title: "Brand Presentation – Mindversity",
    slug: "brand-presentation-mindversity",
    category: "Graphic Design",
    image:
      "/assets/images/Projects/Mindversity_Brand_Presentation/mindversity_thumbnail.png",
    description:
      "Complete brand identity design for Mindversity, a student- and women-focused career empowerment platform.",
    longDescription:
      "A <strong style='color:#F0F0F0;'>comprehensive brand identity</strong> for Mindversity, focusing on <strong style='color:#F0F0F0;'>logo design, color palette (#305CDE, #E0CD67, #101010, #FFFFFF), typography system (Poppins, Montserrat, Open Sans)</strong>, and <strong style='color:#F0F0F0;'><em>brand applications</em></strong>. The project ensures a <strong style='color:#F0F0F0;'>professional, approachable, and empowering</strong> look aligned with Mindversity’s mission, created using <strong style='color:#F0F0F0;'>Figma</strong> and <strong style='color:#F0F0F0;'>Canva</strong>.",
    tools: ["Figma", "Canva"],
    images: [
      "/assets/images/Projects/Mindversity_Brand_Presentation/Mindversity_Brand_1.png",
      "/assets/images/Projects/Mindversity_Brand_Presentation/Mindversity_Brand_2.png",
      "/assets/images/Projects/Mindversity_Brand_Presentation/Mindversity_Brand_3.png",
      "/assets/images/Projects/Mindversity_Brand_Presentation/Mindversity_Brand_4.png",
      "/assets/images/Projects/Mindversity_Brand_Presentation/Mindversity_Brand_5.png",
    ],
  },
  {
    id: 4,
    title: "Mindversity – Business & Blog Website",
    slug: "mindversity-business-blog-website",
    category: "WordPress",
    image:
      "/assets/images/Projects/Mindversity_Website/Mindversity_Thumbnail.png",
    description:
      "Business and blog website for Pakistan’s first Agentic AI Career Coach platform.",
    longDescription:
      "<strong style='color:#F0F0F0;'>Business and blog website</strong> built for Pakistan’s first <strong style='color:#F0F0F0;'>Agentic AI Career Coach</strong> platform. Designed for <strong style='color:#F0F0F0;'>students and women</strong>, featuring <strong style='color:#F0F0F0;'>AI-powered guidance, mentorship programs, service sections, testimonials</strong> and <strong style='color:#F0F0F0;'><em>strong CTAs</em></strong>. Developed using <strong style='color:#F0F0F0;'>WordPress</strong> and <strong style='color:#F0F0F0;'>Elementor</strong> for clarity, accessibility, and trust.",
    tools: ["WordPress", "Elementor", "CSS", "UI Design"],
    images: [
      "/assets/images/Projects/Mindversity_Website/Mindversity_screen_1.png",
      "/assets/images/Projects/Mindversity_Website/Mindversity_screen_2.png",
      "/assets/images/Projects/Mindversity_Website/Mindversity_screen_3.png",
      "/assets/images/Projects/Mindversity_Website/Mindversity_screen_4.png",
      "/assets/images/Projects/Mindversity_Website/Mindversity_screen_5.png",
      "/assets/images/Projects/Mindversity_Website/Mindversity_screen_6.png",
    ],
  },
  {
    id: 5,
    title: "Canva Practice Designs",
    slug: "canva-practice-designs",
    category: "Graphic Design",
    image: "/assets/images/Projects/Canva_Designs/Canva_Designs_Thumbnail.png",
    description:
      "A collection of practice graphic designs created in Canva to explore layouts, color combinations, and visual hierarchy.",
    longDescription:
      "A series of <strong style='color:#F0F0F0;'>practice graphic designs</strong> created in <strong style='color:#F0F0F0;'>Canva</strong> to strengthen <strong style='color:#F0F0F0;'>layout composition, typography balance, and color usage</strong>. Focused on creating <strong style='color:#F0F0F0;'><em>social-media–friendly visuals</em></strong> to improve <strong style='color:#F0F0F0;'>visual consistency and creative skills</strong>.",
    tools: ["Canva"],
    images: [
      "/assets/images/Projects/Canva_Designs/Canva_Designs_1.png",
      "/assets/images/Projects/Canva_Designs/Canva_Designs_2.png",
      "/assets/images/Projects/Canva_Designs/Canva_Designs_3.png",
      "/assets/images/Projects/Canva_Designs/Canva_Designs_4.png",
      "/assets/images/Projects/Canva_Designs/Canva_Designs_5.png",
      "/assets/images/Projects/Canva_Designs/Canva_Designs_6.png",
    ],
  },
  {
    id: 6,
    title: "Kaar-e-Kamal – Volunteer Graphic Design Work",
    slug: "kaar-e-kamal-volunteer-graphic-design",
    category: "Graphic Design",
    image:
      "/assets/images/Projects/Kaar-e-kamal_Graphics/Kaar-e-Kamal_Graphics_Thumbnail.png",
    description:
      "Graphic design work created for Kaar-e-Kamal Foundation as a volunteer graphic designer.",
    longDescription:
      "Showcases <strong style='color:#F0F0F0;'>graphic design work</strong> created for <strong style='color:#F0F0F0;'>Kaar-e-Kamal Foundation</strong> as a volunteer designer. Designs were used for <strong style='color:#F0F0F0;'>social media, awareness campaigns, and digital communication</strong>, focusing on <strong style='color:#F0F0F0;'><em>clear messaging and audience engagement</em></strong>.",
    tools: ["Canva", "Graphic Design"],
    images: [
      "/assets/images/Projects/Kaar-e-kamal_Graphics/Kaar-e-Kamal_Graphics_1.png",
      "/assets/images/Projects/Kaar-e-kamal_Graphics/Kaar-e-Kamal_Graphics_2.png",
      "/assets/images/Projects/Kaar-e-kamal_Graphics/Kaar-e-Kamal_Graphics_3.png",
      "/assets/images/Projects/Kaar-e-kamal_Graphics/Kaar-e-Kamal_Graphics_4.png",
      "/assets/images/Projects/Kaar-e-kamal_Graphics/Kaar-e-Kamal_Graphics_5.png",
      "/assets/images/Projects/Kaar-e-kamal_Graphics/Kaar-e-Kamal_Graphics_6.png",
      "/assets/images/Projects/Kaar-e-kamal_Graphics/Kaar-e-Kamal_Graphics_7.png",
      "/assets/images/Projects/Kaar-e-kamal_Graphics/Kaar-e-Kamal_Graphics_8.png",
    ],
  },
  {
    id: 7,
    title: "Mobile App UI Screens – Practice Designs",
    slug: "mobile-app-ui-screens-practice-designs",
    category: "UI/UX",
    image: "/assets/images/Projects/Mobile_UIUX/MobileApp_UI_UX_Thumbnail.png",
    description:
      "Practice mobile app UI screen designs created to explore visual layout, components, and styling.",
    longDescription:
      "Practice <strong style='color:#F0F0F0;'>mobile app UI screens</strong> designed to improve <strong style='color:#F0F0F0;'>interface design skills</strong>. Focus on <strong style='color:#F0F0F0;'>visual layout, spacing, typography, and component styling</strong>, rather than full user flows. Screens were created as <strong style='color:#F0F0F0;'><em>standalone exercises</em></strong> to strengthen <strong style='color:#F0F0F0;'>UI fundamentals</strong>.",
    tools: ["Figma", "UI Design"],
    images: [
      "/assets/images/Projects/Mobile_UIUX/MobileApp_UI_UX_1.png",
      "/assets/images/Projects/Mobile_UIUX/MobileApp_UI_UX_2.png",
    ],
  },
  {
    id: 8,
    title: "Portfolio Website Wireframe – Desktop",
    slug: "portfolio-website-wireframe-desktop",
    category: "UI/UX",
    image:
      "/assets/images/Projects/Portfolio_WireFrame/Portfolio_UI_UX_Thumbnail.png",
    description:
      "Desktop wireframe design for a personal portfolio website created as a practice task in Figma.",
    longDescription:
      "A <strong style='color:#F0F0F0;'>low-fidelity desktop wireframe</strong> created in <strong style='color:#F0F0F0;'>Figma</strong> as a practice portfolio project. Focused on <strong style='color:#F0F0F0;'>layout structure, section hierarchy, and content placement</strong> to provide a <strong style='color:#F0F0F0;'><em>clear and usable foundation</em></strong> for a complete portfolio website.",
    tools: ["Figma", "Wireframing"],
    images: [
      "/assets/images/Projects/Portfolio_WireFrame/Portfolio_UI_UX_1.png",
      "/assets/images/Projects/Portfolio_WireFrame/Portfolio_UI_UX_2.png",
    ],
  },
  {
    id: 9,
    title: "Saeyha Brand Identity Design",
    slug: "saeyha-brand-identity-design",
    category: "Graphic Design",
    image: "/assets/images/Projects/Saeyha_Brand/Saeyha_Brand_Thumbnail.png",
    description:
      "A personal brand identity design exploring modern visuals, color balance, and typography.",
    longDescription:
      "This project showcases the <strong style='color:#F0F0F0;'>visual identity design</strong> created for the Saeyha brand. The work focuses on developing a <strong style='color:#F0F0F0;'><em>cohesive brand look</em></strong> through <strong style='color:#F0F0F0;'>logo design, color palettes, typography, and social media graphics</strong>. <strong style='color:#F0F0F0;'>Canva</strong> was used for layout and visual composition, while <strong style='color:#F0F0F0;'>Inkscape</strong> was used for logo creation. Design inspiration was gathered from platforms like <strong style='color:#F0F0F0;'>Pinterest, Behance, and Dribbble</strong> to align the brand with <strong style='color:#F0F0F0;'><em>modern digital design trends</em></strong>.",
    tools: ["Canva", "Inkscape", "Pinterest", "Behance", "Dribbble"],
    images: [
      "/assets/images/Projects/Saeyha_Brand/Saeyha_1.png",
      "/assets/images/Projects/Saeyha_Brand/Saeyha_2.png",
      "/assets/images/Projects/Saeyha_Brand/Saeyha_3.png",
      "/assets/images/Projects/Saeyha_Brand/Saeyha_4.png",
      "/assets/images/Projects/Saeyha_Brand/Saeyha_5.png",
    ],
  },
  {
    id: 10,
    title: "Saeyha Social Media Posts",
    slug: "saeyha-social-media-posts",
    category: "Graphic Design",
    image:
      "/assets/images/Projects/Saeyha_SocialMediaPosts/Saeyha_SocialMediaPosts_Thumbnail.png",
    description:
      "A collection of visually engaging social media graphics designed to strengthen the Saeyha brand presence.",
    longDescription:
      "This project showcases the <strong style='color:#F0F0F0;'>creative social media content</strong> designed for the Saeyha brand. The work focuses on developing <strong style='color:#F0F0F0;'><em>consistent visual aesthetics</em></strong> across posts, utilizing <strong style='color:#F0F0F0;'>color palettes, typography, and layout principles</strong> to engage the audience effectively. <strong style='color:#F0F0F0;'>Canva</strong> was the primary tool used to create these posts, ensuring <em style='color:#F0F0F0;'>modern, professional, and eye-catching designs</em> suitable for social media platforms.",
    tools: ["Canva"],
    images: [
      "/assets/images/Projects/Saeyha_SocialMediaPosts/Saeyha_SocialMediaPosts_1.png",
      "/assets/images/Projects/Saeyha_SocialMediaPosts/Saeyha_SocialMediaPosts_2.png",
      "/assets/images/Projects/Saeyha_SocialMediaPosts/Saeyha_SocialMediaPosts_3.png",
      "/assets/images/Projects/Saeyha_SocialMediaPosts/Saeyha_SocialMediaPosts_4.png",
    ],
  },
];
