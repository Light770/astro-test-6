// TypeScript type definitions

interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  title?: string;
  description?: string;
  keywords?: string[];
  logo?: Image;
  favicon?: Image;
  navigation?: Navigation;
  footer?: Footer;
  socialLinks?: SocialLink[];
  googleAnalyticsId?: string;
  googleSearchConsoleId?: string;
  googleTagManagerId?: string;
}

interface Page {
  _id: string;
  _type: 'page';
  title?: string;
  slug?: Slug;
  seo?: SEO;
  body?: (Block | TextImage | FeatureCards | FeatureList | FeatureSticky | BasicForm | ContactCards | HomeCTA | HighlightRows | SignUp | PricingColumns | FaqSticky | BasicFeed)[];
}

interface BlogPost {
  _id: string;
  _type: 'blogPost';
  title?: string;
  slug?: Slug;
  publishedAt?: string;
  author?: Author;
  categories?: Category[];
  tags?: string[];
  mainImage?: Image;
  excerpt?: string;
  body?: Block[];
  seo?: SEO;
}

interface Author {
  _id: string;
  _type: 'author';
  name?: string;
  slug?: Slug;
  image?: Image;
  bio?: string;
}

interface Category {
  _id: string;
  _type: 'category';
  title?: string;
  slug?: Slug;
  description?: string;
}

interface Navigation {
  _id: string;
  _type: 'navigation';
  title?: string;
  items?: NavigationItem[];
}

interface NavigationItem {
  _type: 'navigationItem';
  label?: string;
  link?: string;
  isExternal?: boolean;
}

interface Footer {
  _id: string;
  _type: 'footer';
  title?: string;
  sections?: FooterSection[];
  copyright?: string;
}

interface FooterSection {
  _type: 'footerSection';
  title?: string;
  links?: NavigationItem[];
}

interface SocialLink {
  _type: 'socialLink';
  platform?: string;
  link?: string;
}

interface SEO {
  _type: 'seo';
  title?: string;
  description?: string;
  image?: Image;
  keywords?: string[];
}

interface TextImage {
  _type: 'textImage';
  text?: string;
  image?: Image;
  imagePosition?: 'left' | 'right';
}

interface FeatureCards {
  _type: 'featureCards';
  title?: string;
  cards?: FeatureCard[];
}

interface FeatureCard {
  _type: 'featureCard';
  title?: string;
  description?: string;
  image?: Image;
  link?: string;
  linkLabel?: string;
}

interface FeatureList {
  _type: 'featureList';
  title?: string;
  features?: FeatureItem[];
}

interface FeatureItem {
  _type: 'featureItem';
  title?: string;
  description?: string;
  icon?: Image;
}

interface FeatureSticky {
  _type: 'featureSticky';
  title?: string;
  description?: string;
  image?: Image;
  features?: FeatureItem[];
}

interface BasicForm {
  _id?: string;
  _type: 'basicForm';
  title?: string;
  description?: string;
  successMessage?: string;
  fields?: FormField[];
}

interface FormField {
  _type: 'formField';
  label?: string;
  name?: string;
  type?: 'text' | 'email' | 'textarea';
  required?: boolean;
}

interface ContactCards {
  _type: 'contactCards';
  title?: string;
  cards?: ContactCard[];
}

interface ContactCard {
  _type: 'contactCard';
  title?: string;
  description?: string;
  icon?: Image;
  link?: string;
}

interface HomeCTA {
  _type: 'homeCTA';
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonLink?: string;
  image?: Image;
}

interface HighlightRows {
  _type: 'highlightRows';
  rows?: HighlightRow[];
}

interface HighlightRow {
  _type: 'highlightRow';
  title?: string;
  description?: string;
  image?: Image;
  buttonLabel?: string;
  buttonLink?: string;
}

interface SignUp {
  _type: 'signUp';
  title?: string;
  description?: string;
  form?: BasicForm;
}

interface PricingColumns {
  _type: 'pricingColumns';
  title?: string;
  plans?: PricingPlan[];
}

interface PricingPlan {
  _type: 'pricingPlan';
  name?: string;
  price?: number;
  currency?: string;
  features?: string[];
  buttonLabel?: string;
  buttonLink?: string;
  isRecommended?: boolean;
}

interface FaqSticky {
  _type: 'faqSticky';
  title?: string;
  faqs?: FaqItem[];
  image?: Image;
}

interface FaqItem {
  _type: 'faqItem';
  question?: string;
  answer?: string;
}

interface BasicFeed {
  _type: 'basicFeed';
  title?: string;
  items?: FeedItem[];
}

interface FeedItem {
  _type: 'feedItem';
  title?: string;
  description?: string;
  link?: string;
  image?: Image;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    _type: 'sanity.imageHotspot';
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _type: 'block';
  style: string;
  children: {
    _type: 'span';
    text: string;
  }[];
}
