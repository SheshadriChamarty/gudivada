export interface Service {
  id: string
  title: string
  shortDescription: string
  image: string
  category: string
  brief: string
  highlights: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'anna-canteens',
    title: 'Anna Canteens',
    shortDescription: 'Subsidised meals at ₹5 for workers and the poor',
    image: '/assets/services/anna-canteen.jpg',
    category: 'Food Security',
    brief:
      'NTR Anna Canteens provide breakfast, lunch, and dinner at a highly subsidised rate of ₹5 per meal. Named after TDP founder N.T. Rama Rao, the scheme was relaunched in Gudivada — NTR\'s political home — to ensure no poor person goes hungry. Canteens serve auto drivers, street vendors, daily wage workers, and patients near hospitals and bus stands.',
    highlights: [
      '₹5 per meal — breakfast, lunch, and dinner',
      'Relaunched in Gudivada by CM Chandrababu Naidu',
      'Expanding to 700 centres across Andhra Pradesh',
      'Food supplied through Akshaya Patra kitchens',
    ],
  },
  {
    id: 'sachivalayams',
    title: 'Ward Sachivalayams',
    shortDescription: 'Grassroots governance and citizen services at ward level',
    image: '/assets/services/sachivalayam.jpg',
    category: 'Governance',
    brief:
      'Village and Ward Sachivalayams (Secretariats) are the frontline delivery units of Andhra Pradesh\'s decentralised governance model. Each Sachivalayam serves about 2,000 households, offering 500+ government services — from certificates and pensions to grievance redressal — at the ward level without citizens needing to visit distant offices.',
    highlights: [
      '500+ services delivered at ward/village level',
      'Doorstep pension and welfare disbursement',
      'Dedicated staff for each ward cluster',
      'Single window for certificates and schemes',
    ],
  },
  {
    id: 'ntr-bharosa',
    title: 'NTR Bharosa Pensions',
    shortDescription: 'Monthly pensions for elderly, widows, and disabled',
    image: '/assets/services/ntr-bharosa.jpg',
    category: 'Social Security',
    brief:
      'The NTR Bharosa Pension Scheme restores and enhances social security pensions for vulnerable groups across Andhra Pradesh. Standard pensions were raised to ₹4,000/month and disabled pensions to ₹6,000/month. Over 65 lakh beneficiaries receive pensions disbursed door-to-door by Sachivalayam staff, ensuring dignity and accountability.',
    highlights: [
      '₹4,000/month for senior citizens, widows, and others',
      '₹6,000/month for persons with disabilities',
      '65+ lakh beneficiaries across the state',
      'Doorstep delivery by Secretariat staff',
    ],
  },
  {
    id: 'deepam-2',
    title: 'Deepam 2.0',
    shortDescription: 'Three free LPG cylinders per year for eligible families',
    image: '/assets/services/deepam.jpg',
    category: 'Household Welfare',
    brief:
      'Deepam 2.0 is part of the TDP-led coalition\'s "Super Six" poll promises. Eligible white ration card households receive three free LPG cylinder refills per year — one every four months. The subsidy is reimbursed via Direct Benefit Transfer (DBT) to the woman\'s bank account within 48 hours of delivery.',
    highlights: [
      '3 free LPG cylinders per year per family',
      'One cylinder every four months',
      'DBT reimbursement within 48 hours',
      'Part of the Super Six welfare guarantees',
    ],
  },
  {
    id: 'talliki-vandanam',
    title: 'Talliki Vandanam',
    shortDescription: '₹15,000/year per student to support mothers',
    image: '/assets/services/talliki-vandanam.jpg',
    category: 'Education',
    brief:
      'Talliki Vandanam ("Salutation to Mother") provides ₹15,000 per annum per school-going child directly to mothers or guardians. Covering Classes I to XII across government, aided, and private schools, the scheme empowers mothers to invest in their children\'s education. Over 67 lakh students benefit statewide under this Super Six initiative.',
    highlights: [
      '₹15,000 per student per academic year',
      'Covers Class I to Intermediate (Class XII)',
      '67+ lakh students across Andhra Pradesh',
      'Direct transfer to mother\'s bank account',
    ],
  },
]

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id)
}
