import React from 'react';
import { Zap, Sun, Home, Cable, Search, Wrench, ShieldCheck, Lightbulb, Building2, Factory, HardHat, Gauge } from 'lucide-react';

export const services = [
  {
    id: 'house-wiring',
    title: 'House Wiring & Tubing',
    shortTitle: 'House Wiring',
    description: 'Complete residential electrical wiring and conduit tubing installations for new builds and renovations.',
    longDescription: 'From blueprint to breaker box, we deliver precision residential wiring that powers your home safely for decades. Our certified engineers handle everything from conduit installation to final connection, ensuring your home meets all safety standards.',
    icon: Home,
    features: ['Full house wiring', 'Conduit installation', 'DB board installation', 'Circuit protection', 'Compliance certificates'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    color: '#DC2626',
  },
  {
    id: 'solar-installation',
    title: 'Solar System Installation',
    shortTitle: 'Solar Energy',
    description: 'Harness the power of the sun with our professional solar panel installation and energy solutions.',
    longDescription: 'Zimbabwe receives an average of 3,000 hours of sunshine annually — let us help you harness it. We design, supply, and install complete solar systems from small residential setups to large commercial arrays.',
    icon: Sun,
    features: ['Solar panel mounting', 'Inverter installation', 'Battery storage', 'Grid-tie systems', 'Energy audits'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    color: '#F59E0B',
  },
  {
    id: 'line-construction',
    title: 'Line Construction',
    shortTitle: 'Line Construction',
    description: 'Professional overhead and underground power line construction for residential and commercial projects.',
    longDescription: 'We build the backbone of electrical infrastructure — from overhead power lines to underground cable networks. Our team handles everything from pole erection to conductor stringing with military precision.',
    icon: Cable,
    features: ['Overhead lines', 'Underground cables', 'Pole erection', 'Transformer installation', 'Right-of-way clearing'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    color: '#2563EB',
  },
  {
    id: 'fault-finding',
    title: 'Fault Finding & Maintenance',
    shortTitle: 'Fault Finding',
    description: 'Advanced diagnostic services to locate and repair electrical faults quickly and efficiently.',
    longDescription: 'When the lights go out, we bring them back. Our fault-finding team uses state-of-the-art diagnostic equipment to trace, identify, and resolve electrical faults with minimal disruption to your property.',
    icon: Search,
    features: ['Thermal imaging', 'Cable tracing', 'Earth fault detection', 'Power quality analysis', 'Emergency callouts'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    color: '#DC2626',
  },
  {
    id: 'electrical-consultancy',
    title: 'Electrical Consultancy',
    shortTitle: 'Consultancy',
    description: 'Expert electrical engineering consultancy for projects of any scale and complexity.',
    longDescription: 'Our consultancy division provides expert guidance on electrical system design, energy efficiency optimization, regulatory compliance, and project management for developments of all sizes.',
    icon: Lightbulb,
    features: ['System design', 'Energy audits', 'Compliance advisory', 'Project management', 'Feasibility studies'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    color: '#F59E0B',
  },
  {
    id: 'material-supply',
    title: 'Electrical Material Supply',
    shortTitle: 'Material Supply',
    description: 'Quality electrical materials and components sourced from trusted manufacturers worldwide.',
    longDescription: 'We stock and supply a comprehensive range of electrical materials — from cables and switchgear to lighting fixtures and solar components. All products are sourced from reputable manufacturers and carry full warranties.',
    icon: Wrench,
    features: ['Cables & conductors', 'Switchgear', 'Lighting fixtures', 'Solar components', 'Safety equipment'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    color: '#2563EB',
  },
  {
    id: 'deck-tubing',
    title: 'Deck Tubing',
    shortTitle: 'Deck Tubing',
    description: 'Specialized electrical conduit installations for decking and outdoor living spaces.',
    longDescription: 'Transform your outdoor spaces with expertly installed electrical infrastructure. We specialize in weatherproof conduit installation for decks, patios, and outdoor entertainment areas.',
    icon: Building2,
    features: ['Outdoor wiring', 'Weatherproof conduits', 'Deck lighting', 'Garden electrics', 'Pool wiring'],
    image: 'https://images.unsplash.com/photo-1752606300942-c395b2d691e6?w=800&q=80',
    color: '#DC2626',
  },
  {
    id: 'commercial-electrical',
    title: 'Commercial & Industrial',
    shortTitle: 'Commercial',
    description: 'Large-scale electrical solutions for commercial buildings, factories, and industrial facilities.',
    longDescription: 'From office complexes to manufacturing plants, we deliver robust electrical systems engineered for performance, safety, and efficiency at scale.',
    icon: Factory,
    features: ['3-phase installations', 'Industrial automation', 'Emergency power', 'Energy management', 'Maintenance contracts'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    color: '#F59E0B',
  },
];

export const stats = [
  { number: '500+', label: 'Projects Completed', suffix: '' },
  { number: '15+', label: 'Years Experience', suffix: '' },
  { number: '98', label: 'Client Satisfaction', suffix: '%' },
  { number: '50+', label: 'Expert Engineers', suffix: '' },
];

export const testimonials = [
  {
    name: 'Tatenda Moyo',
    role: 'Property Developer',
    company: 'Moyo Estates',
    text: 'Credence Electrical transformed our entire residential complex. Their attention to detail and commitment to safety standards is unmatched in Zimbabwe.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Grace Mutasa',
    role: 'Operations Manager',
    company: 'Harare Industrial Park',
    text: 'The solar installation they did for our factory has cut our energy costs by 60%. Professional team, excellent communication, and outstanding results.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    name: 'David Chirwa',
    role: 'Homeowner',
    company: 'Borrowdale',
    text: 'From the initial consultation to the final inspection, everything was handled with professionalism. Our house wiring is flawless.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    name: 'Rumbidzai Ncube',
    role: 'School Administrator',
    company: 'Heritage Academy',
    text: 'They completed our campus rewiring project on time and within budget. The team was respectful, clean, and incredibly skilled.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
];

export const projects = [
  {
    id: 'borrowdale-estate',
    title: 'Borrowdale Brook Estate',
    category: 'Residential',
    description: 'Complete electrical installation for 48-unit luxury estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    year: '2024',
  },
  {
    id: 'solar-farm-norton',
    title: 'Norton Solar Farm',
    category: 'Solar',
    description: '2MW solar array installation and grid connection',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    year: '2024',
  },
  {
    id: 'avondale-mall',
    title: 'Avondale Shopping Centre',
    category: 'Commercial',
    description: 'Full electrical fit-out including emergency systems',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    year: '2023',
  },
  {
    id: 'chitungwiza-line',
    title: 'Chitungwiza Power Line',
    category: 'Infrastructure',
    description: '15km overhead power line construction project',
    image: 'https://images.unsplash.com/photo-1765810655564-15150fe4332e?w=800&q=80',
    year: '2023',
  },
  {
    id: 'msasa-factory',
    title: 'Msasa Industrial Complex',
    category: 'Industrial',
    description: '3-phase power distribution and automation systems',
    image: 'https://images.unsplash.com/photo-1717386255773-a456c611dc4e?w=800&q=80',
    year: '2023',
  },
  {
    id: 'greendale-homes',
    title: 'Greendale Smart Homes',
    category: 'Residential',
    description: 'Smart home electrical systems with solar backup',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80',
    year: '2024',
  },
];

export const team = [
  {
    name: 'Engineer Prosper Chikomo',
    role: 'Managing Director & Chief Engineer',
    bio: 'Over 15 years of experience in electrical engineering with a passion for powering Zimbabwe forward.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Tendai Mashingaidze',
    role: 'Senior Project Manager',
    bio: 'Expert in large-scale electrical projects with a track record of on-time, on-budget delivery.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    name: 'Nyasha Dube',
    role: 'Solar Division Lead',
    bio: 'Certified solar technician with specialized training in commercial and residential solar solutions.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  },
  {
    name: 'Tapiwa Moyo',
    role: 'Safety & Compliance Officer',
    bio: 'Ensuring every project meets and exceeds national and international safety standards.',
    image: 'https://images.unsplash.com/photo-1725960103635-0a6709f97126?w=400&q=80',
  },
];

export const blogPosts = [
  {
    id: 'solar-savings-zimbabwe',
    title: 'How Solar Energy Can Save Your Business 60% on Electricity Costs',
    excerpt: 'Discover how Zimbabwe businesses are slashing their power bills with strategic solar installations.',
    category: 'Solar Energy',
    date: 'Feb 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1713544123580-12096cc9eb12?w=800&q=80',
    author: 'Engineer Prosper Chikomo',
  },
  {
    id: 'electrical-safety-tips',
    title: '10 Electrical Safety Tips Every Homeowner Must Know',
    excerpt: 'Protect your family and property with these essential electrical safety guidelines.',
    category: 'Safety',
    date: 'Feb 8, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?w=800&q=80',
    author: 'Tapiwa Moyo',
  },
  {
    id: 'smart-home-wiring',
    title: 'Future-Proofing Your Home: Smart Wiring for the Modern Age',
    excerpt: 'Why investing in smart electrical infrastructure today pays dividends for years to come.',
    category: 'Innovation',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    author: 'Tendai Mashingaidze',
  },
];

export const careers = [
  {
    id: 'senior-electrician',
    title: 'Senior Electrician',
    type: 'Full-time',
    location: 'Harare',
    department: 'Field Operations',
    description: 'We are looking for an experienced electrician to lead installation projects across the greater Harare area.',
    requirements: ['5+ years experience', 'Wireman\'s license', 'Valid driver\'s license', 'Team leadership skills'],
  },
  {
    id: 'solar-technician',
    title: 'Solar Installation Technician',
    type: 'Full-time',
    location: 'Harare / Norton',
    department: 'Solar Division',
    description: 'Join our growing solar team to install and maintain photovoltaic systems for residential and commercial clients.',
    requirements: ['2+ years solar experience', 'PV certification preferred', 'Physical fitness', 'Roof work experience'],
  },
  {
    id: 'project-coordinator',
    title: 'Project Coordinator',
    type: 'Full-time',
    location: 'Harare',
    department: 'Project Management',
    description: 'Coordinate multiple electrical projects, manage timelines, and liaise between teams and clients.',
    requirements: ['Project management experience', 'Excellent communication', 'MS Project / similar tools', 'Engineering background preferred'],
  },
];

export const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We serve the greater Harare metropolitan area and surrounding regions including Chitungwiza, Norton, Ruwa, and Epworth. For large projects, we operate nationwide across Zimbabwe.',
  },
  {
    question: 'Do you offer free quotations?',
    answer: 'Yes! Simply send us your building plans or project details and we will provide a comprehensive, no-obligation quotation within 48 hours.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Credence Electrical Engineers is a fully registered and licensed electrical engineering firm. All our technicians hold valid wireman\'s licenses and we carry comprehensive professional liability insurance.',
  },
  {
    question: 'How long does a typical house wiring project take?',
    answer: 'A standard 3-bedroom house typically takes 5-7 working days from conduit installation to final connection. Larger homes and renovations may take 2-3 weeks.',
  },
  {
    question: 'Do you provide after-sales support?',
    answer: 'Yes, all our installations come with a comprehensive warranty and our maintenance team is available for after-sales support. We also offer annual maintenance contracts.',
  },
  {
    question: 'What brands of solar panels do you install?',
    answer: 'We partner with leading solar manufacturers including Canadian Solar, JA Solar, Jinko, and LONGi. All panels come with 25-year performance warranties.',
  },
];

export const navLinks = [
  {
    label: 'Company',
    children: [
      { label: 'About Us', path: '/about', description: 'Our story and mission' },
      { label: 'Our Team', path: '/about#team', description: 'Meet the experts' },
      { label: 'Careers', path: '/careers', description: 'Join our team' },
      { label: 'Blog', path: '/blog', description: 'News & insights' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'House Wiring', path: '/services/house-wiring', description: 'Residential electrical' },
      { label: 'Solar Installation', path: '/services/solar-installation', description: 'Harness the sun' },
      { label: 'Line Construction', path: '/services/line-construction', description: 'Power infrastructure' },
      { label: 'Fault Finding', path: '/services/fault-finding', description: 'Diagnostics & repair' },
    ],
  },
  {
    label: 'Expertise',
    children: [
      { label: 'Consultancy', path: '/services/electrical-consultancy', description: 'Expert guidance' },
      { label: 'Material Supply', path: '/services/material-supply', description: 'Quality components' },
      { label: 'Commercial', path: '/services/commercial-electrical', description: 'Industrial scale' },
      { label: 'All Services', path: '/services', description: 'Full catalogue' },
    ],
  },
  {
    label: 'Portfolio',
    children: [
      { label: 'Projects', path: '/projects', description: 'Our finest work' },
      { label: 'Case Studies', path: '/projects#case-studies', description: 'Deep dives' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];
