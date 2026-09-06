export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '7+', label: 'Core Solutions' },
  { value: '24/7', label: 'Support Desk' },
  { value: '4', label: 'Tech Partners' },
  { value: '100%', label: 'Client First' },
]

export const aboutPillars = [
  {
    title: 'Our Vision',
    body: 'To lead the way in delivering cutting-edge technology and digital solutions across diverse industries with a streamlined, agile methodology.',
  },
  {
    title: 'Our Values',
    body: 'Client satisfaction, continuous innovation, and premium quality — building long-term relationships fueled by deep technical expertise and dependability.',
  },
  {
    title: 'Why Choose Us',
    body: 'Client-first approach ensuring every initiative is delivered on schedule, within budget, enhancing productivity, security, and operational efficiency.',
  },
]

export type SolutionIcon =
  | 'key'
  | 'video'
  | 'radar'
  | 'flame'
  | 'zap'
  | 'shield'
  | 'user'

export const solutions: { title: string; body: string; icon: SolutionIcon }[] = [
  {
    title: 'Identity & Access Control',
    icon: 'key',
    body: 'From traditional Photo ID cards and smart tokens to biometrics, MFA, and Blockchain Identity — managing who accesses your physical and digital assets across enterprises, smart cities, and commercial facilities.',
  },
  {
    title: 'Video Surveillance',
    icon: 'video',
    body: 'Fully digital surveillance up to 32K resolution. Beyond security — crowd density, traffic monitoring, city governance, and environmental oversight with scalable cloud-ready architecture.',
  },
  {
    title: 'Threat Detection',
    icon: 'radar',
    body: 'Sophisticated sensor fusion — LiDAR, motion sensors, AI video analytics — to detect and prevent intrusions with minimal false alarms. CMCC team response alongside law enforcement agencies.',
  },
  {
    title: 'Conventional Fire Alarm System',
    icon: 'flame',
    body: 'Addressable and conventional fire alarm systems with state-of-the-art sensors for commercial buildings, industrial facilities, data centers, and residential complexes. Early warning before threats become disasters.',
  },
  {
    title: 'Fire Gas Flooding System',
    icon: 'zap',
    body: 'Rapid, reliable automated suppression for data centers, industrial facilities, and commercial spaces. Durable mild steel construction, powder-coated red, operating at 50–60 Hz with intelligent triggering.',
  },
  {
    title: 'Portable Fire Extinguishers',
    icon: 'shield',
    body: 'Cylindrical mild-steel trolley-mounted extinguishers — powder coated, corrosion resistant, highly visible red. Essential safety equipment for homes and businesses of all sizes.',
  },
  {
    title: 'Safety Suits & Breathing Apparatus',
    icon: 'user',
    body: 'High-quality fiberglass safety kits in navy blue, waterproof, and reusable for long-term deployment. Essential PPE for fire safety and hazardous environment emergency response.',
  },
]

export const products = [
  { spec: '2MP–8MP', name: 'Network Camera' },
  { spec: 'Scalable', name: 'Network Video Recorder (NVR)' },
  { spec: 'HD', name: 'Analog HD Camera' },
  { spec: 'Multi-Channel', name: 'Digital Video Recorder (DVR)' },
  { spec: '360°', name: 'Speed Dome (PTZ)' },
  { spec: 'IP', name: 'Video Door Phones' },
  { spec: 'Biometric', name: 'Access Control System' },
  { spec: 'GT-2511', name: 'Fire Gas Flooding System' },
  { spec: 'Industrial', name: 'Industrial Fire Sprinkler' },
  { spec: 'Addressable', name: 'Conventional Fire Alarm' },
  { spec: 'Industrial', name: 'MS Fire Hydrant System' },
  { spec: 'PPE', name: 'Safety Suits & Breathing Kit' },
]

export const productFeatures = [
  {
    tag: 'Infrastructure',
    name: 'Network & IT Supply',
    image: '/images/network-it.png',
    alt: 'Network router switch with ethernet cables and indicator lights',
  },
  {
    tag: 'Surveillance',
    name: 'CCTV & Monitoring',
    image: '/images/cctv-monitoring.png',
    alt: 'Security operator monitoring a wall of CCTV camera feeds',
  },
]

export const lifecycle = [
  {
    title: 'Requirements & Pre-Engineering',
    items: [
      'User Requirements Gathering',
      'Tech & AV Integration Drawings',
      'System Architecture & Design',
      'Detailed Scope of Work',
    ],
  },
  {
    title: 'Program & Project Management',
    items: [
      'Project Kickoff',
      'Certified Technical PM',
      'Weekly Deployment Updates',
      'Technical Resource Management',
    ],
  },
  {
    title: 'Fabrication',
    items: ['Custom Hardware Build & Assembly', 'In-House System Bench Testing'],
  },
  {
    title: 'Field Installation',
    items: ['On-Site Deployment', 'Quality Control & Infrastructure Check'],
  },
  {
    title: 'Programming & Configuration',
    items: [
      'Custom Software & Firmware',
      'Performance Optimization',
      'End-to-End System Testing',
      'Final System QC Check',
    ],
  },
  {
    title: 'User Experience',
    items: [
      'Client & Admin System Training',
      'As-Built Documentation',
      'Source Code & IP Handoff',
      'Final Acceptance & Onboarding',
    ],
  },
  {
    title: 'Service & Support',
    items: [
      'Dedicated Account Management',
      '24/7 Tech Help Desk',
      'System Maintenance Audits',
      'Customer Operations Portal',
    ],
  },
]

export const partners = ['CP Plus', 'Hikvision', 'Spectra', 'Radical Engineering Solutions']

export const contactDetails = [
  { icon: 'user', label: 'Contact', value: 'Tanaji Yadav' },
  {
    icon: 'mail',
    label: 'Email',
    value: 'technoholices@gmail.com',
    href: 'mailto:technoholices@gmail.com',
  },
  { icon: 'phone', label: 'Phone', value: '+91 8805329516', href: 'tel:+918805329516' },
  {
    icon: 'pin',
    label: 'Address',
    value: 'Sr.no 109, Radhakrish Park L-2, Kesnand, Wagholi, Tel-Haveli, Dist-Pune, Pin-412207',
  },
] as const

export const serviceOptions = [
  'Identity & Access Control',
  'Video Surveillance',
  'Threat Detection',
  'Conventional Fire Alarm System',
  'Fire Gas Flooding System',
  'Portable Fire Extinguishers',
  'Safety Suits & Breathing Apparatus',
  'General Inquiry',
]
