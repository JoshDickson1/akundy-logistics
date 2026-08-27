import {
  Anchor,
  ArrowRight,
  Award,
  BadgeCheck,
  Box,
  ClipboardCheck,
  Clock,
  Cog,
  Container,
  Factory,
  FileCheck,
  Fuel,
  Globe,
  HardHat,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
  Ship,
  ShoppingCart,
  Smile,
  Users,
} from 'lucide-react'

export const COMPANY = {
  name: 'Akundy Logistics and Development Company Limited',
  shortName: 'Akundy Logistics',
  rcNumber: '6891533',
  tin: '31315323-0001',
  incorporated: '2023',
  headquarters: 'Rivers State, Nigeria',
  coverage: 'Nigeria and West Africa',
  motto: 'Delivering Solutions. Building Value.',
  tagline: 'One Company. Total Solutions.',
  colors: 'Orange, Black & White',
  address: {
    street: 'Opposite Pamo University Hospital, KM 17, Port Harcourt/Aba Expressway',
    city: 'Port Harcourt',
    state: 'Rivers State',
    country: 'Nigeria',
  },
  phones: ['+234 810 240 1146', '+234 909 074 2570', '+234 806 054 9992', '+234 803 550 3789'],
  email: 'akundylogistics@gmail.com',
  website: '#',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'HSE & Quality', href: '/hse-quality' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    id: 'equipment-leasing',
    title: 'Equipment Leasing',
    icon: Container,
    description:
      'Flexible, well-maintained leasing solutions for marine, offshore, construction and industrial projects — from containers and waste skips to gas racks and power equipment.',
    items: [
      '10ft & 20ft dry containers',
      '10ft reefer containers',
      '4m³ & 6m³ basket waste skips',
      '8/12/16-cylinder gas racks',
      '8-drum lube racks',
      'Generators, welding & lifting equipment',
    ],
  },
  {
    id: 'marine-logistics',
    title: 'Marine Logistics',
    icon: Ship,
    description:
      'Comprehensive marine logistics support including crew boat operations, supply vessel support, cargo handling, barge operations and port/jetty coordination.',
    items: [
      'Crew boat operations',
      'Supply vessel support',
      'Cargo handling & movement',
      'Offshore material delivery',
      'Barge operations',
      'Port & jetty logistics',
    ],
  },
  {
    id: 'offshore-support',
    title: 'Offshore Support Services',
    icon: Anchor,
    description:
      'Reliable operational support for oil & gas companies and marine operators, including manpower supply, logistics coordination and vessel support.',
    items: [
      'Offshore operational support',
      'Manpower supply services',
      'Offshore equipment support',
      'Project logistics coordination',
      'Vessel support services',
      'Maintenance support',
    ],
  },
  {
    id: 'shipping-agency',
    title: 'Shipping Agency',
    icon: Globe,
    description:
      'Professional port and vessel agency services that coordinate vessel movements, documentation and communication between owners, authorities and terminal operators.',
    items: [
      'Vessel clearance',
      'Port documentation',
      'Customs & immigration coordination',
      'Berthing arrangements',
      'Husbandry & bunkering',
      'Marine survey assistance',
    ],
  },
  {
    id: 'ship-chandler',
    title: 'Ship Chandler Services',
    icon: ShoppingCart,
    description:
      'Prompt marine supply solutions to vessels calling at Nigerian ports — provisions, technical stores, safety equipment and consumables, 24 hours a day.',
    items: [
      'Food provisions & fresh produce',
      'Deck, engine & cabin stores',
      'Safety equipment & PPE',
      'Marine lubricants',
      'Welding consumables & gas cylinders',
      'Ropes & mooring equipment',
    ],
  },
  {
    id: 'metal-fabrication',
    title: 'Metal Fabrication',
    icon: Factory,
    description:
      'Custom metal fabrication and industrial engineering for marine, commercial and industrial applications — structural steel, tanks, pipes and platforms.',
    items: [
      'Structural & stainless steel fabrication',
      'Tank & pipe fabrication',
      'Platforms & support structures',
      'Equipment skids & handrails',
      'Welding & construction works',
      'Repairs & modifications',
    ],
  },
  {
    id: 'facility-maintenance',
    title: 'Facility Maintenance',
    icon: Settings,
    description:
      'Professional maintenance solutions for industrial, commercial and offshore facilities — reducing downtime and keeping operations running efficiently.',
    items: [
      'Building & mechanical maintenance',
      'Electrical maintenance',
      'Preventive maintenance programmes',
      'Industrial facility upkeep',
      'Routine inspections & repairs',
      'Industrial cleaning',
    ],
  },
  {
    id: 'procurement',
    title: 'Procurement & Supply Chain',
    icon: Box,
    description:
      'Strategic sourcing and timely delivery of quality industrial materials and equipment from trusted local and international manufacturers and suppliers.',
    items: [
      'Industrial materials sourcing',
      'Oil & gas equipment procurement',
      'Marine equipment procurement',
      'Electrical & mechanical supplies',
      'Safety equipment supply',
      'Vendor sourcing & management',
    ],
  },
  {
    id: 'general-contracts',
    title: 'General Contracts',
    icon: ClipboardCheck,
    description:
      'Execution of civil works, project management, industrial support and infrastructure projects for public and private sector clients.',
    items: [
      'Civil works',
      'Industrial support services',
      'Project management',
      'Supply & maintenance contracts',
      'Technical support services',
      'Infrastructure & engineering support',
    ],
  },
]

export const EQUIPMENT = [
  {
    id: '10ft-container',
    title: '10ft Shipping Container',
    category: 'Containers',
    description:
      'A compact and secure solution for storage, transportation and offshore support operations. Built from high-grade steel to withstand harsh environmental conditions.',
    applications: ['Offshore storage', 'Site offices', 'Tool storage', 'Warehouse extension', 'Marine logistics'],
    features: ['Weatherproof', 'Secure locking system', 'Forklift pockets', 'Heavy-duty steel construction', 'Easy transportation'],
  },
  {
    id: '20ft-container',
    title: '20ft Shipping Container',
    category: 'Containers',
    description:
      'Ideal for large-volume storage and transportation of materials, equipment and supplies for industrial and offshore operations.',
    applications: ['Cargo transportation', 'Equipment storage', 'Construction projects', 'Marine operations', 'Industrial warehousing'],
    features: ['High capacity', 'Durable construction', 'Secure locking', 'Weather resistant', 'ISO standard design'],
  },
  {
    id: '10ft-reefer',
    title: '10ft Reefer Container',
    category: 'Refrigeration',
    description:
      'Refrigerated containers that maintain controlled temperatures for transporting and storing temperature-sensitive goods.',
    applications: ['Food storage', 'Medical supplies', 'Pharmaceuticals', 'Offshore catering', 'Cold chain logistics'],
    features: ['Temperature controlled', 'Energy efficient', 'Stainless steel interior', 'Heavy-duty construction', 'Reliable refrigeration'],
  },
  {
    id: '4m3-waste-skip',
    title: '4m³ Basket Waste Skip',
    category: 'Waste Management',
    description:
      'Designed for safe collection and transportation of industrial waste generated during offshore and construction activities.',
    applications: ['Offshore installations', 'Construction sites', 'Industrial facilities', 'Environmental waste management'],
    features: ['Heavy-duty steel', 'Certified lifting points', 'Corrosion resistant', 'Safe waste handling'],
  },
  {
    id: '6m3-waste-skip',
    title: '6m³ Basket Waste Skip',
    category: 'Waste Management',
    description:
      'Larger capacity waste skip for offshore installations, construction sites and industrial facilities.',
    applications: ['Offshore installations', 'Construction sites', 'Industrial facilities', 'Environmental waste management'],
    features: ['Heavy-duty steel', 'Certified lifting points', 'Corrosion resistant', 'Safe waste handling'],
  },
  {
    id: '8-drum-lube-rack',
    title: '8-Drum Lube Rack',
    category: 'Storage',
    description:
      'Designed for safe storage and transportation of lubricant drums while preventing spills and improving workplace safety.',
    applications: ['Workshops', 'Offshore platforms', 'Industrial facilities', 'Marine operations'],
    features: ['Holds 8 standard 200-litre drums', 'Spill containment', 'Heavy-duty frame', 'Safe handling'],
  },
  {
    id: '8-cylinder-gas-rack',
    title: '8-Cylinder Gas Rack',
    category: 'Gas Cylinder Racks',
    description:
      'Suitable for transporting and storing oxygen, acetylene, nitrogen, argon and other industrial gas cylinders.',
    applications: ['Fabrication yards', 'Offshore projects', 'Industrial sites'],
    features: ['Secure cylinder retention', 'Heavy-duty steel', 'Corrosion resistant', 'Certified design'],
  },
  {
    id: '12-cylinder-gas-rack',
    title: '12-Cylinder Gas Rack',
    category: 'Gas Cylinder Racks',
    description:
      'Ideal for medium-sized fabrication yards, offshore projects and industrial sites requiring multiple gas cylinders.',
    applications: ['Medium fabrication yards', 'Offshore projects', 'Industrial sites'],
    features: ['Higher capacity', 'Modular configuration', 'Safety compliant', 'Durable finish'],
  },
  {
    id: '16-cylinder-gas-rack',
    title: '16-Cylinder Gas Rack',
    category: 'Gas Cylinder Racks',
    description:
      'Designed for large industrial and offshore operations requiring safe handling of multiple gas cylinders.',
    applications: ['Large fabrication yards', 'Major offshore operations', 'Industrial plants'],
    features: ['Large capacity', 'Robust construction', 'Integrated safety features', 'Customisable layout'],
  },
]

export const WHY_CHOOSE_US = [
  { icon: Users, title: 'Experienced Workforce', text: '40+ years combined management experience across marine, offshore and industrial sectors.' },
  { icon: Clock, title: 'Timely Delivery', text: 'We deliver projects and equipment on schedule, every schedule.' },
  { icon: BadgeCheck, title: 'Quality Service', text: 'Quality is non-negotiable. We meet requirements on time and within budget.' },
  { icon: Smile, title: 'Customer Focus', text: 'Long-term partnerships built on trust, responsiveness and practical solutions.' },
  { icon: ShieldCheck, title: 'Safety Culture', text: 'HSE compliance is embedded in every operation we undertake.' },
  { icon: Award, title: 'Competitive Pricing', text: 'Premium service at rates that protect your project economics.' },
]

export const CORE_VALUES = [
  { icon: BadgeCheck, title: 'Integrity', text: 'Honest, ethical dealings in every relationship.' },
  { icon: HardHat, title: 'Professionalism', text: 'Skilled people, disciplined processes, polished delivery.' },
  { icon: ShieldCheck, title: 'Safety Compliance', text: 'Safety-first operations on every site and vessel.' },
  { icon: Cog, title: 'Reliability', text: 'Equipment and people you can count on.' },
  { icon: ArrowRight, title: 'Innovation', text: 'Practical solutions that improve efficiency and value.' },
  { icon: Smile, title: 'Customer Satisfaction', text: 'Your success is the measure of ours.' },
]

export const INDUSTRIES = [
  'Oil & Gas Companies',
  'Marine Operators',
  'Construction Companies',
  'Government Agencies',
  'Industrial Firms',
  'Engineering Companies',
  'Private Organizations',
]

export const CLIENTS = [
  'Apex Integrated Ventures Ltd',
  'Aero Atlantic Nigeria Limited',
  'Apex Agro Allied Product & Multipurpose Farms Ltd',
]

export const TEAM = [
  { name: 'Andy Nwoha', role: 'Managing Director / CEO', phone: '08102401146' },
  { name: 'Lovelyn Nwoha', role: 'Executive Director', phone: '08100253776' },
  { name: 'Mr. Sunny Alugwu', role: 'Base Manager', phone: '08060549992' },
  { name: 'Mr. Remy Echenwa', role: 'Technical Manager', phone: '08035503789' },
]

export const CERTIFICATIONS = [
  {
    title: 'CAC Certificate of Incorporation',
    issuer: 'Corporate Affairs Commission',
    description: 'Incorporated 28 February 2023 as a private company limited by shares. RC No. 6891533.',
    icon: FileCheck,
  },
  {
    title: 'Tax Identification Number',
    issuer: 'Federal Inland Revenue Service',
    description: 'TIN: 31315323-0001. Fully tax-registered and compliant.',
    icon: FileCheck,
  },
  {
    title: 'Nigerian Ports Authority Registration',
    issuer: 'Nigerian Ports Authority',
    description: 'Registered shipping agent for vessel clearance and port representation services.',
    icon: Ship,
  },
  {
    title: 'Nigeria Customs Service License',
    issuer: 'Nigeria Customs Service',
    description: 'Licensed ship chandler clearing and forwarding operations for vessel supplies.',
    icon: Box,
  },
  {
    title: 'NUPRC / DPR Oil Industry Permit',
    issuer: 'Nigerian Upstream Petroleum Regulatory Commission',
    description: 'Permitted to provide logistics, procurement and support services to Nigeria’s oil & gas sector.',
    icon: Fuel,
  },
]

export const STATS = [
  { value: '40+', label: 'Years Combined Experience' },
  { value: '2023', label: 'Year Incorporated' },
  { value: '9', label: 'Core Service Lines' },
  { value: 'Nigeria', label: '& West Africa Coverage' },
]

export { MapPin, Phone }
