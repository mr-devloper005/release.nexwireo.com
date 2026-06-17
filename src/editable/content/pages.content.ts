import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'News, media, and public updates',
      description: 'Explore announcements, newsroom updates, media coverage, and dynamic categories through a clean distribution experience.',
      openGraphTitle: 'News, media, and public updates',
      openGraphDescription: 'Discover press releases, media updates, visual assets, and connected public announcements through a clean distribution experience.',
      keywords: ['media distribution', 'press release distribution', 'newsroom updates', 'public announcements'],
    },
    hero: {
      badge: 'Latest media and newsroom updates',
      title: ['A flexible home for', 'news, media, and public updates.'],
      description: 'Browse distributed media, company announcements, press coverage, and public updates across categories managed directly from the master panel.',
      primaryCta: { label: 'Browse latest updates', href: '/updates' },
      secondaryCta: { label: 'Open News Media', href: '/updates?category=news-media' },
      searchPlaceholder: 'Search news, companies, categories, and updates',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for media distribution, public updates, and announcement discovery.',
      paragraphs: [
        'This site brings press releases, media updates, company announcements, and supporting resources into one organized distribution experience.',
        'Instead of scattering updates across disconnected pages, the platform keeps each release easy to find, read, share, and connect with related coverage.',
        'Whether someone starts with a company announcement, industry update, image-led story, or supporting resource, they can continue discovering relevant information without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Release-first homepage with clear emphasis on timely announcements.',
        'Connected sections for media releases, company news, visuals, and resources.',
        'Cleaner browsing rhythm designed for journalists, marketers, and readers.',
        'Lightweight interactions that keep distribution content fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles, visuals, and resources through one connected experience.',
      description: 'Move between articles, image-led posts, listings, and resources through one clearer and more connected visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Media Distribution',
    title: 'A clearer way to publish and discover public announcements.',
    description: `${slot4BrandConfig.siteName} helps teams present press releases, newsroom updates, campaign announcements, and supporting media in one trusted distribution experience.`,
    paragraphs: [
      'Instead of splitting releases, visuals, background notes, and related updates across disconnected pages, the platform keeps distribution content easy to move through and easy to understand.',
      'Whether someone starts with a press release, company update, campaign story, or media resource, they can continue exploring related information without losing context.',
    ],
    values: [
      {
        title: 'Release-first experience',
        description: 'We prioritize clear headlines, summaries, categories, and reading flow so announcements can be understood quickly.',
      },
      {
        title: 'Connected media surfaces',
        description: 'Press releases, visual assets, company updates, resources, and related stories stay connected so discovery feels natural.',
      },
      {
        title: 'Simple and credible',
        description: 'We focus on clean navigation and structured release pages to help media, marketers, and public readers find useful updates faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Get support for your next media release.',
    description: 'Tell us what you are preparing to announce, distribute, update, or correct. We will route your request through the right publishing lane.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find releases, announcements, visuals, and resources faster.',
      description: 'Use keywords, categories, and content types to discover media distribution posts from every active section of the site.',
      placeholder: 'Search releases, companies, topics, or categories',
    },
    resultsTitle: 'Latest searchable releases',
  },
  create: {
    metadata: {
      title: 'Submit a Release',
      description: 'Create and submit media distribution updates for the site.',
    },
    locked: {
      badge: 'Release access',
      title: 'Login to submit a media release.',
      description: 'Use your account to open the release workspace, save announcement details, and prepare distribution-ready updates.',
    },
    hero: {
      badge: 'Distribution workspace',
      title: 'Prepare a release for public distribution.',
      description: 'Choose the release type, add announcement details, and prepare a clean media update with images, source links, summaries, and body copy.',
    },
    formTitle: 'Release details',
    submitLabel: 'Submit release',
    successTitle: 'Release submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Media release access',
      title: 'Welcome back to your distribution workspace.',
      description: 'Login to manage release submissions, review saved details, and continue preparing media distribution updates.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create a release account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Release publishing access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to save release details, manage submissions, and prepare media distribution content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
