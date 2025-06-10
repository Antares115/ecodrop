
export interface Item {
  id: string;
  name: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  instructions: string[];
  alternatives: string[];
  image?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'electronics',
    title: 'Electronics',
    icon: '💻',
    color: 'bg-blue-100'
  },
  {
    id: 'batteries',
    title: 'Batteries',
    icon: '🔋',
    color: 'bg-green-100'
  },
  {
    id: 'chemicals',
    title: 'Chemicals',
    icon: '🧪',
    color: 'bg-purple-100'
  },
  {
    id: 'plastics',
    title: 'Plastics',
    icon: '🥤',
    color: 'bg-red-100'
  },
  {
    id: 'glass',
    title: 'Glass',
    icon: '🍾',
    color: 'bg-amber-100'
  },
  {
    id: 'paper',
    title: 'Paper',
    icon: '📄',
    color: 'bg-yellow-100'
  }
];

export const items: Item[] = [
  {
    id: '1',
    name: 'Smartphone',
    category: 'Electronics',
    difficulty: 'Medium',
    description: 'Smartphones contain valuable metals and materials that can be recycled. They also contain hazardous materials that should not end up in landfills.',
    instructions: [
      'Remove personal data by factory resetting your device',
      'Take to an electronics recycling center',
      'Many phone manufacturers and retailers offer trade-in or recycling programs',
      'Some charitable organizations accept working phones for reuse'
    ],
    alternatives: [
      'Consider repairing instead of replacing',
      'Sell or donate working phones',
      'Trade in for credit toward a new device'
    ],
  },
  {
    id: '2',
    name: 'Alkaline Batteries',
    category: 'Batteries',
    difficulty: 'Medium',
    description: 'Regular alkaline batteries (AA, AAA, etc.) are no longer made with mercury and can often be thrown in regular trash in small quantities, but it\'s better to recycle them if possible.',
    instructions: [
      'Store in a non-metal container',
      'Check if your local hardware stores offer battery recycling',
      'Take to a household hazardous waste facility',
      'Some municipalities have special battery collection programs'
    ],
    alternatives: [
      'Switch to rechargeable batteries',
      'Use devices that don\'t require batteries when possible'
    ],
  },
  {
    id: '3',
    name: 'Paint',
    category: 'Chemicals',
    difficulty: 'Hard',
    description: 'Paint contains chemicals that can be harmful to the environment if not disposed of properly.',
    instructions: [
      'Allow latex paint to dry out completely by mixing with cat litter or paint hardener',
      'Once solid, latex paint can often go in regular trash (check local regulations)',
      'Oil-based paints must be taken to a hazardous waste facility',
      'Never pour paint down drains or sewers'
    ],
    alternatives: [
      'Donate usable paint to community organizations',
      'Store properly sealed paint can last for years',
      'Mix leftover similar colors for touch-ups'
    ],
  },
  {
    id: '4',
    name: 'Plastic Bags',
    category: 'Plastics',
    difficulty: 'Easy',
    description: 'Plastic bags cannot typically go in regular recycling bins as they jam sorting machinery.',
    instructions: [
      'Return to grocery stores with plastic bag recycling bins',
      'Include other plastic film like bread bags and produce bags',
      'Make sure bags are clean and dry',
      'Do not put in curbside recycling'
    ],
    alternatives: [
      'Use reusable shopping bags',
      'Repurpose bags as trash can liners',
      'Some craft projects can use plastic bags as material'
    ],
  },
  {
    id: '5',
    name: 'Light Bulbs',
    category: 'Glass',
    difficulty: 'Medium',
    description: 'Different types of light bulbs require different disposal methods.',
    instructions: [
      'Incandescent bulbs can typically go in regular trash',
      'LED bulbs should be recycled if possible but can go in trash in many areas',
      'Fluorescent and CFL bulbs contain mercury and must be taken to special collection sites',
      'Many hardware stores accept CFL bulbs for recycling'
    ],
    alternatives: [
      'Switch to longer-lasting LED bulbs',
      'Choose energy-efficient options to reduce replacement frequency'
    ],
  },
  {
    id: '6',
    name: 'Magazines',
    category: 'Paper',
    difficulty: 'Easy',
    description: 'Glossy magazines are recyclable in most curbside recycling programs.',
    instructions: [
      'Place in your recycling bin along with other paper',
      'Remove any plastic wrapping or non-paper inserts',
      'No need to remove staples in most recycling systems'
    ],
    alternatives: [
      'Donate to libraries, schools, or doctor\'s offices',
      'Use in craft projects',
      'Consider digital subscriptions instead of paper'
    ],
  }
];

export const dropOffLocations = [
  {
    id: '1',
    name: 'City Recycling Center',
    address: '123 Green Street',
    coordinates: [40.7128, -74.0060],
    acceptedItems: ['Electronics', 'Batteries', 'Chemicals', 'Plastics', 'Glass', 'Paper'],
    hours: 'Mon-Fri: 8am-6pm, Sat: 9am-4pm, Sun: Closed'
  },
  {
    id: '2',
    name: 'EcoWaste Solutions',
    address: '456 Recycle Avenue',
    coordinates: [40.7282, -73.9942],
    acceptedItems: ['Electronics', 'Batteries'],
    hours: 'Mon-Sat: 10am-7pm, Sun: 11am-5pm'
  },
  {
    id: '3',
    name: 'GreenTech Disposal',
    address: '789 Sustainability Blvd',
    coordinates: [40.7053, -74.0140],
    acceptedItems: ['Electronics', 'Chemicals'],
    hours: 'Mon-Fri: 9am-5pm, Weekends: Closed'
  }
];

export const searchItems = (query: string): Item[] => {
  const lowercasedQuery = query.toLowerCase();
  return items.filter(item => 
    item.name.toLowerCase().includes(lowercasedQuery) || 
    item.category.toLowerCase().includes(lowercasedQuery) ||
    item.description.toLowerCase().includes(lowercasedQuery)
  );
};

export const getItemById = (id: string): Item | undefined => {
  return items.find(item => item.id === id);
};

export const getItemsByCategory = (categoryId: string): Item[] => {
  const category = categories.find(cat => cat.id === categoryId);
  if (!category) return [];
  
  return items.filter(item => item.category.toLowerCase() === category.title.toLowerCase());
};
