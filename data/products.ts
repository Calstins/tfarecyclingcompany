import { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 'blue-lounge-tyre-set',
    name: 'Blue Lounge Tyre Set',
    slug: 'blue-lounge-tyre-set',
    category: 'sets',
    price: 599999,
    images: [
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2022-05-03-at-12.50.58-AM-1.jpeg',
      'https://barattini.coffee/wp-content/uploads/2025/05/IMG-20230212-WA0086.jpg',
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-05-16-at-14.17.23-2.jpeg',
    ],
    description:
      'This modern lounge set is made from recycled tyres, offering an eco-friendly alternative to traditional furniture. It features deep blue cushions, a circular design for added comfort, and a sleek glass-top center table. The set is available in one-, two-, and three-seater options, combining sustainability with bold, functional style for home or lounge spaces.',
    longDescription: `
      <p>Our Blue Lounge Tyre Set transforms discarded tyres into a stunning contemporary seating collection that brings both comfort and conversation to any space. This comprehensive lounge set showcases our commitment to innovative design and environmental responsibility.</p>

      <p>The collection features seating options crafted from carefully selected recycled tyres, transformed through our meticulous upcycling process. Each seat maintains the circular structure of the original tyre, creating an ergonomic and visually distinctive seating experience. The deep blue cushions provide luxurious comfort while adding a bold pop of color that enlivens your space.</p>

      <p>Accompanying the seating pieces is our signature glass-top center table, featuring the same thoughtful tyre-based design that unifies the collection. The clear tempered glass allows the unique base to remain visible, celebrating the sustainable origins of the piece.</p>

      <p>Available in flexible configurations including one-, two-, and three-seater options, this set can be tailored to your specific space requirements and design vision.</p>

      <p>The Blue Lounge Tyre Set offers numerous advantages:</p>
      <ul>
        <li>Exceptional durability - stands up to daily use with minimal wear</li>
        <li>Distinctive design - creates an immediate visual impact</li>
        <li>Comfort-focused - ergonomically designed with plush cushioning</li>
        <li>Eco-conscious materials - repurposes multiple tyres per set</li>
        <li>Versatile placement - suitable for residential and commercial spaces</li>
        <li>Low maintenance - simple to clean and maintain</li>
      </ul>

      <p>This collection is ideally suited for contemporary homes, creative offices, lounge areas, reception spaces, and eco-conscious businesses looking to make a design statement.</p>

      <p>By choosing our Blue Lounge Tyre Set, you're embracing furniture that tells a story of transformation and environmental care, while enjoying exceptional comfort and style.</p>
    `,
    features: [
      'Available in 1, 2, and 3-seater configurations',
      'Deep blue cushioned upholstery',
      'Circular ergonomic design',
      'Matching glass-top center table',
      'Eco-friendly recycled materials',
      'Durable construction',
      'Statement design piece',
    ],
    dimensions: {
      oneSeat: 'One-seater: 70 cm (H) x 75 cm (W) x 75 cm (D)',
      twoSeat: 'Two-seater: 70 cm (H) x 140 cm (W) x 75 cm (D)',
      threeSeat: 'Three-seater: 70 cm (H) x 195 cm (W) x 75 cm (D)',
      table: 'Table: 45 cm (H) x 90 cm (W) x 60 cm (D)',
    },
    inStock: true,
    featured: true,
    tags: [
      'eco-friendly',
      'seating',
      'set',
      'tyre',
      'upcycled',
      'blue',
      'lounge',
    ],
  },
  {
    id: 'compact-gold-side-table',
    name: 'Compact Gold Side Table',
    slug: 'compact-gold-side-table',
    category: 'tables',
    price: 35000,
    images: [
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-05-07-at-10.41.35.jpeg',
      'https://barattini.coffee/wp-content/uploads/2025/05/20241212_101731-scaled.jpg',
    ],
    description:
      'This compact side table is made from an upcycled tyre with a gold finish and a smooth, glossy top. Its sturdy build and eco-friendly design make it a sustainable alternative to standard tables, ideal for modern homes, cafes, or office spaces.',
    longDescription: `
      <p>Our Compact Gold Side Table offers a perfect blend of sustainability, style, and function in a space-conscious design. This elegant piece showcases how discarded materials can be transformed into beautiful, practical furniture.</p>

      <p>Beginning as a discarded tyre, each table undergoes a meticulous transformation process. The base is thoroughly cleaned, structured, and finished with a luxurious gold coating that adds a touch of sophistication to any space. The smooth, glossy top surface provides a practical area for daily use while maintaining the table's streamlined aesthetic.</p>

      <p>Despite its compact footprint, this side table delivers impressive functionality and visual impact. Its carefully considered proportions make it an ideal addition to spaces where square footage is at a premium, without sacrificing style or utility.</p>

      <p>The Compact Gold Side Table works beautifully in various settings:</p>
      <ul>
        <li>As a sophisticated bedside table</li>
        <li>As a practical end table beside sofas and armchairs</li>
        <li>As a decorative accent piece in hallways or corners</li>
        <li>As a stylish side table in cafe settings</li>
        <li>As a distinctive display surface for retail environments</li>
      </ul>

      <p>The durable construction ensures this piece will maintain its beauty and function for years to come, while its eco-friendly origins make it a meaningful addition to environmentally conscious spaces.</p>

      <p>By choosing our Compact Gold Side Table, you're not only adding a versatile and elegant piece to your space but also supporting sustainable design practices that give new purpose to discarded materials.</p>
    `,
    features: [
      'Repurposed tyre with gold finish',
      'Smooth, glossy top surface',
      'Compact, space-saving design',
      'Eco-friendly materials',
      'Durable construction',
      'Versatile placement options',
    ],
    dimensions: {
      height: '45 cm',
      width: '50 cm',
      depth: '50 cm',
    },
    inStock: true,
    featured: false,
    tags: [
      'eco-friendly',
      'table',
      'tyre',
      'upcycled',
      'gold',
      'compact',
      'side-table',
    ],
  },
  {
    id: 'luxury-tyre-lounge-chair',
    name: 'Luxury Tyre Lounge Chair',
    slug: 'luxury-tyre-lounge-chair',
    category: 'chairs',
    price: 75000,
    images: [
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-05-07-at-10.45.30.jpeg',
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2022-05-03-at-12.52.43-AM.jpeg',
    ],
    description:
      "This comfy-tyre chair is made entirely from recycled tyres, turning waste into style. Wrapped in soft faux leather with plush velvet cushions, it's perfect for both home and office use. The round tyre frame offers strong support and a bold look. Eco-friendly, durable, and unique—this chair proves sustainability can be stylish.",
    longDescription: `
      <p>Our Luxury Tyre Lounge Chair represents the perfect marriage of comfort, sustainability, and sophisticated design. This statement piece transforms discarded tyres into a luxurious seating experience that elevates any space.</p>

      <p>Each chair begins with carefully selected recycled tyres that form the sturdy foundation of the piece. The circular structure is then expertly wrapped in premium soft faux leather that provides both durability and a luxurious feel. The plush velvet cushions add another layer of comfort and visual richness, creating an inviting seating experience that encourages relaxation.</p>

      <p>The distinctive round tyre frame not only provides exceptional support but also creates a bold silhouette that makes this piece an immediate focal point. Its circular design offers ergonomic comfort while making an unmistakable design statement.</p>

      <p>This versatile chair works beautifully in various settings:</p>
      <ul>
        <li>As a statement accent chair in living rooms</li>
        <li>As a comfortable reading chair in bedrooms or studies</li>
        <li>As a distinctive office chair for creative workspaces</li>
        <li>As a luxurious addition to hotel suites or executive areas</li>
        <li>As a signature piece in reception areas or waiting rooms</li>
      </ul>

      <p>The chair's construction offers exceptional durability while maintaining its striking appearance, ensuring it will remain a treasured piece for years to come. The materials are selected for both their aesthetic appeal and their resilience to daily use.</p>

      <p>By choosing our Luxury Tyre Lounge Chair, you're embracing furniture that tells a compelling story of transformation—from discarded waste to luxurious comfort—while making a bold design statement in your space.</p>
    `,
    features: [
      'Entirely crafted from recycled tyres',
      'Premium soft faux leather wrapping',
      'Plush velvet cushions',
      'Ergonomic circular design',
      'Eco-friendly materials',
      'Exceptional durability',
      'Statement design piece',
    ],
    dimensions: {
      height: '75 cm',
      width: '85 cm',
      depth: '85 cm',
      seatHeight: '45 cm',
    },
    inStock: true,
    featured: true,
    tags: [
      'eco-friendly',
      'chair',
      'tyre',
      'upcycled',
      'luxury',
      'velvet',
      'lounge',
    ],
  },
  {
    id: 'executive-tyre-office-set',
    name: 'Executive Tyre Office Set',
    slug: 'executive-tyre-office-set',
    category: 'sets',
    price: 250000,
    images: [
      'https://barattini.coffee/wp-content/uploads/2025/05/20241212_101635-scaled.jpg',
      'https://barattini.coffee/wp-content/uploads/2025/05/20241212_101004-scaled.jpg',
    ],
    description:
      'This eco-friendly couch chair, crafted from repurposed tyres, and a sleek glass décor center table were proudly presented to Lagos state Honorable Commissioner For Youth and Social Development Hon. Mobolaji Ogunlende, Lagos State Honorable commissioner for Women and Poverty Alleviation, Mrs. Cecilia Dada among others. The set showcases innovative design through the creative reuse of materials, turning discarded tyres into a comfortable and sustainable statement piece; a bold reminder of the power of recycling and environmental responsibility.',
    longDescription: `
      <p>Our Executive Tyre Office Set represents the pinnacle of sustainable luxury furniture, designed specifically for distinguished spaces and discerning individuals. This premium collection has been recognized at the highest levels of government, having been presented to prominent officials including the Lagos State Honorable Commissioner For Youth and Social Development, Hon. Mobolaji Ogunlende, and the Lagos State Honorable Commissioner for Women and Poverty Alleviation, Mrs. Cecilia Dada.</p>

      <p>This prestigious set features our signature eco-friendly couch chair, meticulously crafted from repurposed tyres. The chair combines exceptional comfort with distinctive style, featuring premium upholstery and expert craftsmanship that transforms discarded materials into a luxurious seating experience suitable for executive environments.</p>

      <p>Accompanying the chair is our sleek glass décor center table, which continues the sustainable design ethos while adding sophisticated functionality to the collection. The transparent glass surface creates a light, modern aesthetic that complements the substantial presence of the chair.</p>

      <p>What makes this collection truly special:</p>
      <ul>
        <li>Executive-level design and comfort</li>
        <li>Recognition by government officials and institutions</li>
        <li>Showcase of innovative sustainable design principles</li>
        <li>Perfect balance of statement aesthetics and practical function</li>
        <li>Representation of environmental responsibility in leadership spaces</li>
        <li>Handcrafted quality with attention to every detail</li>
      </ul>

      <p>This Executive Tyre Office Set is ideally suited for:</p>
      <ul>
        <li>Government offices and executive suites</li>
        <li>Corporate boardrooms and CEO offices</li>
        <li>Distinguished reception areas</li>
        <li>High-end professional practices</li>
        <li>Exclusive residential studies and home offices</li>
      </ul>

      <p>By choosing our Executive Tyre Office Set, you're making a powerful statement about leadership that values innovation, sustainability, and distinctive design. This collection serves as a daily reminder of the transformative potential of creative recycling and environmental responsibility.</p>
    `,
    features: [
      'Premium eco-friendly couch chair from repurposed tyres',
      'Sleek glass décor center table',
      'Executive-grade materials and finishes',
      'Government-recognized design excellence',
      'Sustainable luxury statement pieces',
      'Handcrafted quality construction',
      'Perfect for distinguished spaces',
    ],
    dimensions: {
      chair: 'Chair: 85 cm (H) x 90 cm (W) x 85 cm (D)',
      table: 'Table: 45 cm (H) x 100 cm (W) x 60 cm (D)',
    },
    inStock: true,
    featured: true,
    tags: [
      'eco-friendly',
      'office',
      'set',
      'tyre',
      'upcycled',
      'executive',
      'premium',
    ],
  },
  {
    id: 'gold-illuminated-tyre-table',
    name: 'Gold Illuminated Tyre Table',
    slug: 'gold-illuminated-tyre-table',
    category: 'tables',
    price: 65000,
    images: [
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-05-07-at-10.45.29-1.jpeg',
      'https://barattini.coffee/wp-content/uploads/2025/05/20241212_101731-scaled.jpg',
      'https://barattini.coffee/wp-content/uploads/2025/05/20221005_132835-scaled.jpg',
    ],
    description:
      'This table is made from a repurposed tyre, finished in metallic gold and fitted with a sturdy glass top and chrome legs. Red LED lighting adds a bold, modern touch. Eco-friendly and visually striking, it combines sustainable materials with an industrial style, making it a standout piece for lounges or creative spaces.',
    longDescription: `
      <p>Our Gold Illuminated Tyre Table brings dramatic flair to sustainable furniture design. This show-stopping piece transforms a discarded tyre into a luminous conversation starter that serves as both functional furniture and artistic statement.</p>
  
      <p>The table begins with a carefully selected used tyre that undergoes thorough cleaning and preparation. It's then meticulously hand-finished in a striking metallic gold that catches and reflects light brilliantly. The integration of red LED lighting within the tyre structure creates a mesmerizing glow that transforms any space, particularly in evening or low-light environments.</p>
  
      <p>The sleek glass top provides a practical surface while allowing the illuminated base to remain visible from above. Polished chrome legs add a touch of industrial elegance while elevating the piece to an ideal height for various uses.</p>
  
      <p>This illuminated table serves multiple purposes:</p>
      <ul>
        <li>As a statement center table in modern living spaces</li>
        <li>As a distinctive cocktail table in lounge areas</li>
        <li>As an attention-grabbing piece in creative studios or offices</li>
        <li>As mood lighting and functional furniture for entertainment spaces</li>
      </ul>
  
      <p>Each illuminated table includes energy-efficient LED lighting with simple controls. The lighting system is designed for longevity and low power consumption, ensuring your statement piece remains brilliant for years to come.</p>
  
      <p>By choosing our Gold Illuminated Tyre Table, you're not only making a bold design statement but also supporting sustainable practices that give new purpose to discarded materials.</p>
    `,
    features: [
      'Repurposed tyre with metallic gold finish',
      'Integrated red LED lighting',
      'Tempered glass top',
      'Polished chrome legs',
      'Energy-efficient lighting system',
      'Eco-friendly materials',
      'Statement design piece',
    ],
    dimensions: {
      height: '45 cm',
      width: '70 cm',
      depth: '70 cm',
    },
    inStock: true,
    featured: true,
    tags: [
      'eco-friendly',
      'glass',
      'table',
      'tyre',
      'upcycled',
      'illuminated',
      'gold',
    ],
  },
  {
    id: 'confy-boss-chair',
    name: '255,999',
    slug: 'Confy Boss Chair',
    category: 'chairs',
    price: 255999,
    images: [
      'https://barattini.coffee/wp-content/uploads/2025/05/20241212_100947-scaled.jpg',
      'https://barattini.coffee/wp-content/uploads/2025/05/WhatsApp-Image-2023-12-21-at-02.35.05.jpeg',
    ],
    description:
      'A unique, eco-friendly Boss office chair and customised tyred glass centre table from repurposed tyres, proudly presented to Lagos State Governor, Babajide Sanwo-Olu. This innovative piece highlights sustainable design by transforming used tyres into functional art, promoting environmental awareness and creativity in waste reuse.',
    longDescription: `
      <p>Our Gubernatorial Tyre Chair represents the ultimate expression of sustainable luxury and executive design. This extraordinary piece has received the highest recognition possible, having been officially presented to Lagos State Governor, Babajide Sanwo-Olu, as a symbol of innovative environmental leadership.</p>

      <p>This distinguished chair begins with carefully selected recycled tyres that undergo our most meticulous transformation process. The result is a commanding Boss office chair that delivers exceptional comfort while making a powerful statement about sustainability and creative reuse. Its design incorporates premium materials and finishes suitable for the most prestigious governmental settings.</p>

      <p>Accompanying this remarkable chair is a customized tyred glass center table that complements its design aesthetic while extending its environmental message. Together, these pieces create a cohesive executive suite that balances authority with environmental consciousness.</p>

      <p>What distinguishes this gubernatorial collection:</p>
      <ul>
        <li>Highest-level official recognition and acceptance</li>
        <li>Premium materials and exceptional craftsmanship</li>
        <li>Perfect balance of executive presence and sustainable innovation</li>
        <li>Symbolic representation of environmental leadership</li>
        <li>Transformation of waste materials into gubernatorial furniture</li>
        <li>Completely unique, one-of-a-kind design</li>
      </ul>

      <p>While this exact piece was created for the Governor's office, we offer similar executive-level designs suitable for:</p>
      <ul>
        <li>Government executive offices</li>
        <li>Corporate leadership suites</li>
        <li>Institutional directors' offices</li>
        <li>Distinguished professional practices</li>
        <li>Exclusive residential studies</li>
      </ul>

      <p>By choosing a design inspired by our Gubernatorial Tyre Chair, you're aligning yourself with the highest levels of leadership in sustainable innovation. These pieces serve as powerful daily reminders that environmental responsibility can coexist with executive presence and distinguished design.</p>
    `,
    features: [
      'Premium Boss office chair from repurposed tyres',
      'Customized tyred glass center table',
      'Gubernatorial-grade materials and finishes',
      'Presented to Lagos State Governor',
      'Symbol of environmental leadership',
      'One-of-a-kind executive design',
      'Sustainable luxury statement piece',
    ],
    dimensions: {
      chair: 'Chair: 120 cm (H) x 70 cm (W) x 70 cm (D)',
      table: 'Table: 45 cm (H) x 100 cm (W) x 70 cm (D)',
    },
    inStock: true,
    featured: true,
    tags: [
      'eco-friendly',
      'chair',
      'tyre',
      'upcycled',
      'executive',
      'gubernatorial',
      'premium',
    ],
  },
  {
    id: 'highlife-garden-seat',
    name: 'Highlife Garden Seat',
    slug: 'decorative-tyre-planter',
    category: 'sets',
    price: 499750,
    images: [
      'https://barattini.coffee/wp-content/uploads/2025/05/20221102_142605-scaled.jpg',
      'https://barattini.coffee/wp-content/uploads/2025/05/20241212_101004-scaled.jpg',
    ],
    description:
      "This elegant planter transforms a recycled tyre into a sophisticated garden accessory. Hand-painted and sealed for outdoor use, it's perfect for displaying plants, flowers, or small trees. The durable construction ensures longevity while giving new life to discarded materials.",
    longDescription: `
      <p>Our Decorative Tyre Planter seamlessly blends sustainability with garden aesthetics, transforming discarded tyres into elegant vessels for growing and displaying plants. These innovative planters bring new meaning to eco-friendly gardening with their unique approach to material reuse.</p>

      <p>Each planter begins with a carefully selected used tyre that undergoes thorough cleaning and preparation. The tyre is then artfully transformed through precise cutting, shaping, and finishing techniques that reveal its new potential as a garden accessory. Hand-painted in your choice of colors and sealed with weather-resistant finishes, these planters are designed to withstand the elements while maintaining their beauty.</p>

      <p>The interior of each planter is specially prepared to create an optimal growing environment, with drainage solutions that keep your plants healthy. Their sturdy construction allows them to hold soil, plants, and moisture without compromising structural integrity, ensuring years of use in outdoor settings.</p>

      <p>These versatile planters work beautifully in various settings:</p>
      <ul>
        <li>As statement pieces in garden landscapes</li>
        <li>As practical containers for herbs, flowers, or decorative plants</li>
        <li>As sustainable accents for patios and outdoor living spaces</li>
        <li>As eco-friendly features for commercial spaces and eco-conscious businesses</li>
        <li>As creative solutions for urban gardening with limited space</li>
      </ul>

      <p>Available in various sizes and finish options, our Decorative Tyre Planters can be customized to complement your existing outdoor decor. Their distinctive character adds visual interest to any garden setting while showcasing your commitment to environmental responsibility.</p>

      <p>By choosing our Decorative Tyre Planter, you're not only enhancing your garden with a unique and practical piece but also supporting sustainable design practices that give new purpose to discarded materials.</p>
    `,
    features: [
      'Handcrafted from recycled tyres',
      'Weather-resistant finishes',
      'Built-in drainage system',
      'Multiple size options',
      'Various color choices',
      'Durable outdoor construction',
      'Eco-friendly gardening solution',
    ],
    dimensions: {
      height: '30 cm',
      diameter: '65 cm',
    },
    inStock: true,
    featured: false,
    tags: ['eco-friendly', 'garden', 'planter', 'tyre', 'upcycled', 'outdoor'],
  },
];
