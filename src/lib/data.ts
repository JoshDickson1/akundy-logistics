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
  Heart,
  MapPin,
  Phone,
  RefreshCw,
  Settings,
  ShieldCheck,
  Ship,
  ShoppingCart,
  Smile,
  Trophy,
  Users,
  Wrench,
  Zap,
} from 'lucide-react'

export const COMPANY = {
  name: 'Akundy Logistics and Development Company Limited',
  shortName: 'Akundy Logistics',
  rcNumber: '6891533',
  tin: '31315323-0001',
  incorporated: '2023',
  headquarters: 'Rivers State, Nigeria',
  coverage: 'Nigeria (nationwide), West Africa and International',
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
      'Flexible, well-maintained leasing solutions for marine, offshore, construction and industrial projects: containers, waste skips, gas racks and power equipment.',
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
      'Prompt marine supply solutions to vessels calling at Nigerian ports: provisions, technical stores, safety equipment and consumables, 24 hours a day.',
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
      'Custom metal fabrication and industrial engineering for marine, commercial and industrial applications: structural steel, tanks, pipes and platforms.',
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
      'Professional maintenance solutions for industrial, commercial and offshore facilities, reducing downtime and keeping operations running efficiently.',
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
    title: '10ft Dry Container',
    category: 'Containers',
    shortDescription:
      'A compact and secure solution for storage, transportation and offshore support operations.',
    description:
      'Our 10ft shipping containers provide a compact and secure solution for storage, transportation, and offshore support operations. Built from high-grade steel, they are designed to withstand harsh environmental conditions including salt air, heavy rain and extreme temperatures.',
    applications: ['Offshore storage', 'Site offices', 'Tool storage', 'Warehouse extension', 'Marine logistics'],
    features: ['Weatherproof', 'Secure locking system', 'Forklift pockets', 'Heavy-duty steel construction', 'Easy transportation'],
    specs: { dimensions: '10ft L x 8ft W x 8.5ft H', material: 'Corten steel', capacity: 'Compact', finish: 'Marine-grade paint' },
    images: ['container-10ft-1', 'container-10ft-2', 'container-10ft-3'],
    related: ['20ft-container', '10ft-reefer'],
  },
  {
    id: '20ft-container',
    title: '20ft Dry Container',
    category: 'Containers',
    shortDescription:
      'Ideal for large-volume storage and transportation of materials, equipment and supplies.',
    description:
      'The 20ft shipping container is ideal for large-volume storage and transportation of materials, equipment and supplies for industrial and offshore operations. Its ISO standard design ensures compatibility with global shipping and logistics networks.',
    applications: ['Cargo transportation', 'Equipment storage', 'Construction projects', 'Marine operations', 'Industrial warehousing'],
    features: ['High capacity', 'Durable construction', 'Secure locking', 'Weather resistant', 'ISO standard design'],
    specs: { dimensions: '20ft L x 8ft W x 8.5ft H', material: 'Corten steel', capacity: 'High', finish: 'Marine-grade paint' },
    images: ['container-20ft-1', 'container-20ft-2', 'container-20ft-3'],
    related: ['10ft-container', '10ft-reefer'],
  },
  {
    id: '10ft-reefer',
    title: '10ft Reefer Container',
    category: 'Refrigeration',
    shortDescription:
      'Refrigerated containers for transporting and storing temperature-sensitive goods.',
    description:
      'Our refrigerated containers maintain controlled temperatures for transporting and storing temperature-sensitive goods in offshore, marine, industrial, and commercial environments. Energy-efficient cooling ensures reliable performance in remote locations.',
    applications: ['Food storage', 'Medical supplies', 'Pharmaceuticals', 'Offshore catering', 'Cold chain logistics'],
    features: ['Temperature controlled', 'Energy efficient', 'Stainless steel interior', 'Heavy-duty construction', 'Reliable refrigeration'],
    specs: { dimensions: '10ft L x 8ft W x 8.5ft H', material: 'Stainless steel interior', capacity: 'Compact', temperature: '-25°C to +25°C' },
    images: ['reefer-10ft-1', 'reefer-10ft-2', 'reefer-10ft-3'],
    related: ['10ft-container', '20ft-container'],
  },
  {
    id: '4m3-waste-skip',
    title: '4m³ Basket Waste Skip',
    category: 'Waste Management',
    shortDescription:
      'Safe collection and transportation of industrial waste during offshore and construction activities.',
    description:
      'Designed for safe collection and transportation of industrial waste generated during offshore and construction activities. Certified lifting points and corrosion-resistant steel ensure safe handling in marine environments.',
    applications: ['Offshore installations', 'Construction sites', 'Industrial facilities', 'Environmental waste management'],
    features: ['Heavy-duty steel', 'Certified lifting points', 'Corrosion resistant', 'Safe waste handling'],
    specs: { volume: '4 cubic metres', material: 'Heavy-duty steel', lifting: 'Certified points', finish: 'Corrosion resistant' },
    images: ['waste-skip-4m3-1', 'waste-skip-4m3-2', 'waste-skip-4m3-3'],
    related: ['6m3-waste-skip', '8-drum-lube-rack'],
  },
  {
    id: '6m3-waste-skip',
    title: '6m³ Basket Waste Skip',
    category: 'Waste Management',
    shortDescription:
      'Larger capacity waste skip for offshore installations, construction sites and industrial facilities.',
    description:
      'A larger capacity waste skip designed for offshore installations, construction sites and industrial facilities. The basket design allows efficient crane lifting and secure containment of industrial and environmental waste.',
    applications: ['Offshore installations', 'Construction sites', 'Industrial facilities', 'Environmental waste management'],
    features: ['Heavy-duty steel', 'Certified lifting points', 'Corrosion resistant', 'Safe waste handling'],
    specs: { volume: '6 cubic metres', material: 'Heavy-duty steel', lifting: 'Certified points', finish: 'Corrosion resistant' },
    images: ['waste-skip-6m3-1', 'waste-skip-6m3-2', 'waste-skip-6m3-3'],
    related: ['4m3-waste-skip', '8-drum-lube-rack'],
  },
  {
    id: '8-drum-lube-rack',
    title: '8-Drum Lube Rack',
    category: 'Storage',
    shortDescription:
      'Safe storage and transportation of lubricant drums while preventing spills.',
    description:
      'Designed for safe storage and transportation of lubricant drums while preventing spills and improving workplace safety. The rack holds up to 8 standard 200-litre drums and is suitable for workshops, offshore platforms and industrial facilities.',
    applications: ['Workshops', 'Offshore platforms', 'Industrial facilities', 'Marine operations'],
    features: ['Holds 8 standard 200-litre drums', 'Spill containment', 'Heavy-duty frame', 'Safe handling'],
    specs: { capacity: '8 x 200-litre drums', material: 'Heavy-duty steel', finish: 'Powder coated', mobility: 'Forklift compatible' },
    images: ['lube-rack-8-1', 'lube-rack-8-2', 'lube-rack-8-3'],
    related: ['8-cylinder-gas-rack', '12-cylinder-gas-rack'],
  },
  {
    id: '8-cylinder-gas-rack',
    title: '8-Cylinder Gas Rack',
    category: 'Gas Cylinder Racks',
    shortDescription:
      'Transporting and storing oxygen, acetylene, nitrogen, argon and other industrial gas cylinders.',
    description:
      'Suitable for transporting and storing oxygen, acetylene, nitrogen, argon and other industrial gas cylinders. The compact 8-cylinder design is ideal for fabrication yards, offshore projects and industrial sites.',
    applications: ['Fabrication yards', 'Offshore projects', 'Industrial sites'],
    features: ['Secure cylinder retention', 'Heavy-duty steel', 'Corrosion resistant', 'Certified design'],
    specs: { capacity: '8 cylinders', material: 'Heavy-duty steel', gases: 'Oxygen, acetylene, nitrogen, argon', finish: 'Corrosion resistant' },
    images: ['gas-rack-8-1', 'gas-rack-8-2', 'gas-rack-8-3'],
    related: ['12-cylinder-gas-rack', '16-cylinder-gas-rack'],
  },
  {
    id: '12-cylinder-gas-rack',
    title: '12-Cylinder Gas Rack',
    category: 'Gas Cylinder Racks',
    shortDescription:
      'Medium-sized fabrication yards, offshore projects and industrial sites requiring multiple gas cylinders.',
    description:
      'Ideal for medium-sized fabrication yards, offshore projects and industrial sites requiring multiple gas cylinders. The modular configuration allows flexible placement and safe handling in demanding environments.',
    applications: ['Medium fabrication yards', 'Offshore projects', 'Industrial sites'],
    features: ['Higher capacity', 'Modular configuration', 'Safety compliant', 'Durable finish'],
    specs: { capacity: '12 cylinders', material: 'Heavy-duty steel', gases: 'Oxygen, acetylene, nitrogen, argon', finish: 'Corrosion resistant' },
    images: ['gas-rack-12-1', 'gas-rack-12-2', 'gas-rack-12-3'],
    related: ['8-cylinder-gas-rack', '16-cylinder-gas-rack'],
  },
  {
    id: '16-cylinder-gas-rack',
    title: '16-Cylinder Gas Rack',
    category: 'Gas Cylinder Racks',
    shortDescription:
      'Large industrial and offshore operations requiring safe handling of multiple gas cylinders.',
    description:
      'Designed for large industrial and offshore operations requiring safe handling of multiple gas cylinders. The robust construction and integrated safety features make it suitable for high-volume gas storage and transport.',
    applications: ['Large fabrication yards', 'Major offshore operations', 'Industrial plants'],
    features: ['Large capacity', 'Robust construction', 'Integrated safety features', 'Customisable layout'],
    specs: { capacity: '16 cylinders', material: 'Heavy-duty steel', gases: 'Oxygen, acetylene, nitrogen, argon', finish: 'Corrosion resistant' },
    images: ['gas-rack-16-1', 'gas-rack-16-2', 'gas-rack-16-3'],
    related: ['8-cylinder-gas-rack', '12-cylinder-gas-rack'],
  },
]

export const WHY_CHOOSE_US = [
  { icon: Users, title: 'Experienced Workforce', text: '40+ years combined management experience across marine, offshore and industrial sectors: seasoned professionals with deep operational knowledge.' },
  { icon: Clock, title: 'Timely Delivery', text: 'We deliver projects and equipment on schedule, every time. Prompt mobilisation and reliable logistics keep your operations moving.' },
  { icon: BadgeCheck, title: 'Quality Service', text: 'Quality is non-negotiable. We meet agreed requirements on time and within budget, without compromising industry standards.' },
  { icon: Smile, title: 'Customer Focus', text: 'Long-term partnerships built on trust, responsiveness and practical, cost-effective solutions tailored to your needs.' },
  { icon: ShieldCheck, title: 'Safety Culture', text: 'HSE compliance is embedded in every operation. We continually improve our safety records across all sites and vessels.' },
  { icon: Award, title: 'Competitive Pricing', text: 'Premium service at rates that protect your project economics: quality and value without compromise.' },
]

export const CORE_VALUES = [
  { icon: Heart, title: 'Honesty', text: 'Transparent, ethical dealings in every relationship and contract.' },
  { icon: BadgeCheck, title: 'Integrity', text: 'We do what we say, always: with clients, partners and staff.' },
  { icon: Zap, title: 'Hard Work', text: 'Determined effort on every assignment, from the first call to final delivery.' },
  { icon: ArrowRight, title: 'Innovation', text: 'Practical solutions that improve efficiency and deliver real value.' },
  { icon: RefreshCw, title: 'Consistency', text: 'The same high standard delivered across every project, every time.' },
  { icon: Cog, title: 'Reliability', text: 'Equipment and people you can count on when it matters most.' },
  { icon: Wrench, title: 'Thoroughness', text: 'Attention to detail at every stage: no shortcuts, no compromises.' },
  { icon: Trophy, title: 'Excellence', text: 'Committed to quality that meets and exceeds international standards.' },
  { icon: ShieldCheck, title: 'Safety Compliance', text: 'Safety-first operations on every site, vessel and facility.' },
  { icon: HardHat, title: 'Professionalism', text: 'Skilled people, disciplined processes and polished service delivery.' },
  { icon: Smile, title: 'Customer Satisfaction', text: 'Your success is the measure of everything we do.' },
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
  // { name: 'Andy Nwoha', role: 'Managing Director / CEO', phone: '08102401146', photo: '/images/founder.jpg' },
  { name: 'Lovelyn Nwoha',           role: 'Executive Director',            phone: '08100253776', photo: '/images/executive-director.jpg' },
  { name: 'Engr. Remigius Echenwa',  role: 'Technical Manager',             phone: '08035503789', photo: '/images/technical-manager.jpg' },
  { name: 'Alugwu Sunny',            role: 'Base Manager / Head of Operations', phone: '08060549992', photo: '/images/base-manager.jpg' },
]

export const CERTIFICATIONS = [
  {
    title: 'Certificate of Incorporation',
    issuer: 'Corporate Affairs Commission',
    ref: 'RC No. 6891533',
    validity: '28 February 2023',
    description: 'Incorporated as a private company limited by shares under the Companies and Allied Matters Act 2020.',
    icon: FileCheck,
  },
  {
    title: 'Tax Identification Number',
    issuer: 'Federal Inland Revenue Service',
    ref: 'TIN: 31315323-0001',
    validity: 'Current',
    description: 'Fully tax-registered and compliant with all Federal Inland Revenue Service requirements.',
    icon: FileCheck,
  },
  {
    title: 'Ship Chandler Licence',
    issuer: 'Nigeria Customs Service',
    ref: 'Licence No. CD439RC6891533',
    validity: 'Valid till 31 Dec 2026',
    description: 'Licensed to carry on business as a ship chandler at Port Harcourt I customs port under the NCS Act 2023.',
    icon: Box,
  },
  {
    title: 'Registration as Shipping Agent',
    issuer: 'Nigerian Ports Authority',
    ref: 'Ref. HQ/AGM/OP/T.7',
    validity: 'Valid till 31 Dec 2026',
    description: 'Duly registered as a shipping company and agent operating in Nigerian ports. Issued 15 April 2026.',
    icon: Ship,
  },
  {
    title: 'Registration as Ship Chandler',
    issuer: 'Nigerian Ports Authority',
    ref: 'Ref. HQ/AGM/OP/T.7/306',
    validity: 'Valid till 31 Dec 2026',
    description: 'Registered as a ship chandler operating in Nigerian ports. Receipt No. R/PORTS/HQS/FO6/28638. Issued 15 June 2026.',
    icon: Ship,
  },
  {
    title: 'Oil Industry Permit: Major Category',
    issuer: 'Nigerian Upstream Petroleum Regulatory Commission',
    ref: 'Permit No. NUPRC/OGISP/26/5131560/N451240',
    validity: 'Valid till 27 Mar 2027',
    description: 'Permitted to render services to the oil industry: Rehabilitation/Upgrade/Fabrication Works, Minor Metal Fabrication, and Overhead Tanks.',
    icon: Fuel,
  },
]

export const STATS = [
  { value: '40+', label: 'Years Combined Experience' },
  { value: '2023', label: 'Year Incorporated' },
  { value: '9', label: 'Core Service Lines' },
  { value: 'W. Africa', label: '& International' },
]

export { MapPin, Phone }
