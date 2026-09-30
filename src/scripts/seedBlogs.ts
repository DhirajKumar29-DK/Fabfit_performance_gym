import prisma from '../lib/prisma';

async function main() {
  console.log('Ensuring BlogPost table exists in MySQL database...');

  // 1. Create table if not exists
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS \`BlogPost\` (
      \`id\` VARCHAR(191) NOT NULL,
      \`title\` VARCHAR(191) NOT NULL,
      \`slug\` VARCHAR(191) NOT NULL,
      \`excerpt\` TEXT NULL,
      \`content\` LONGTEXT NOT NULL,
      \`coverImage\` VARCHAR(191) NULL,
      \`category\` VARCHAR(191) NOT NULL DEFAULT 'Fitness',
      \`tags\` JSON NULL,
      \`authorName\` VARCHAR(191) NOT NULL DEFAULT 'Coach Ankit Baliyan',
      \`authorRole\` VARCHAR(191) NULL DEFAULT 'Head Performance Coach',
      \`authorImage\` VARCHAR(191) NULL,
      \`readTime\` VARCHAR(191) NULL DEFAULT '5 min read',
      \`isFeatured\` TINYINT(1) NOT NULL DEFAULT 0,
      \`metaTitle\` VARCHAR(191) NULL,
      \`metaDescription\` TEXT NULL,
      \`metaKeywords\` VARCHAR(191) NULL,
      \`canonicalUrl\` VARCHAR(191) NULL,
      \`ogImage\` VARCHAR(191) NULL,
      \`status\` ENUM('DRAFT', 'PUBLISHED', 'ARCHIVED') NOT NULL DEFAULT 'DRAFT',
      \`views\` INT NOT NULL DEFAULT 0,
      \`publishedAt\` DATETIME(3) NULL,
      \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
      \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
      \`deletedAt\` DATETIME(3) NULL,
      PRIMARY KEY (\`id\`),
      UNIQUE INDEX \`BlogPost_slug_key\`(\`slug\`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  `);

  console.log('BlogPost table verified/created in MySQL database!');

  // 2. Insert sample blogs
  const blogs = [
    {
      id: "blog-101",
      title: "10 Proven Scientific Rules for Sustainable Fat Loss",
      slug: "10-proven-scientific-rules-for-sustainable-fat-loss",
      category: "Fat Loss",
      excerpt: "Stop crash dieting. Discover the 10 evidence-based rules for losing body fat while preserving lean muscle tissue and maintaining high energy.",
      content: `Fat loss is not about starvation; it is about strategic energy balance, macro distribution, and hormonal optimization.

1. Caloric Deficit is Non-Negotiable
To lose fat, you must consume fewer calories than your Total Daily Energy Expenditure (TDEE). Aim for a moderate, sustainable 15-20% deficit.

2. Prioritize Protein Intake
Consume 1.8g to 2.2g of protein per kilogram of body weight. High protein protects muscle tissue, boosts metabolic rate through the thermic effect of food (TEF), and increases satiety.

3. Heavy Progressive Resistance Training
Lifting weights signals your nervous system to retain muscle mass while drawing on adipose tissue (fat) for energy. Never drop resistance training during a fat loss phase.

4. Sleep & Cortisol Management
Sleep deprivation elevates cortisol and ghrelin (hunger hormone), leading to cravings and muscle catabolism. Aim for 7 to 9 hours of uninterrupted sleep nightly.

5. Daily Step Count (NEAT)
Non-Exercise Activity Thermogenesis (NEAT) accounts for up to 15% of your daily burn. Hitting 8,000 to 10,000 steps daily accelerates fat loss without overburdening your nervous system.`,
      coverImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200",
      authorName: "Coach Ankit Baliyan",
      authorRole: "Head Performance Coach",
      readTime: "6 min read",
      isFeatured: true,
      metaTitle: "10 Scientific Fat Loss Rules | Fab Fit Performance Gym Gurgaon",
      metaDescription: "Learn evidence-based fat loss strategies from Head Coach Ankit Baliyan at Fab Fit Performance Gym Gurgaon.",
      metaKeywords: "fat loss, gym gurgaon, diet plan, ankit baliyan coach, fitness gurgaon",
      status: "PUBLISHED" as const,
      views: 142,
      publishedAt: new Date(),
    },
    {
      id: "blog-102",
      title: "Hypertrophy Blueprint: How to Build Lean Muscle Mass Fast",
      slug: "hypertrophy-blueprint-how-to-build-lean-muscle-mass-fast",
      category: "Muscle Gain",
      excerpt: "Unlock maximum muscle growth with progressive overload, periodized training splits, and optimal post-workout recovery strategies.",
      content: `Building lean muscle requires strategic tension, mechanical overload, and adequate metabolic recovery.

Key Principles for Hypertrophy:

1. Progressive Overload
Consistently increase load, volume, or control over time. Track your workouts and aim to beat your previous performance every 2 to 3 weeks.

2. Optimal Working Volume
Target 10 to 20 hard working sets per muscle group per week, taking most sets to 1-2 reps shy of failure (RIR 1-2).

3. Time Under Tension & Form Precision
Control the eccentric (lowering) phase for 2 to 3 seconds. Eccentric contraction creates micro-tears that drive hypertrophic response.

4. Caloric Surplus
Fuel your growth with a lean surplus of 250 to 500 calories above maintenance, rich in complex carbohydrates and high-quality protein sources.`,
      coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
      authorName: "Coach Ankit Baliyan",
      authorRole: "Head Performance Coach",
      readTime: "5 min read",
      isFeatured: true,
      metaTitle: "Hypertrophy Muscle Building Blueprint | Fab Fit Performance Gym Gurgaon",
      metaDescription: "Master progressive overload and muscle hypertrophy with Fab Fit Performance Gym elite coaching.",
      metaKeywords: "muscle gain, hypertrophy split, personal trainer gurgaon, fabfit performance gym",
      status: "PUBLISHED" as const,
      views: 98,
      publishedAt: new Date(),
    },
    {
      id: "blog-103",
      title: "Macro Nutrition 101: Calculating Carbs, Proteins & Fats for Your Goal",
      slug: "macro-nutrition-101-calculating-carbs-proteins-and-fats",
      category: "Nutrition",
      excerpt: "Demystify macronutrient counting. Learn how to calculate your BMR, TDEE, and exact macro splits for your physique goals.",
      content: `Nutrition dictates 70% of your body transformation outcome. Understanding macronutrients allows flexible dieting while maintaining progress.

Macronutrient Breakdown:

- Protein (4 Calories/gram): Essential building block for muscle repair, recovery, and immune function.
- Carbohydrates (4 Calories/gram): Primary glycogen fuel source for high-intensity weight training.
- Healthy Fats (9 Calories/gram): Crucial for endocrine health, hormone production (testosterone, thyroid), and joint lubrication.

By mastering your macro ratio, you take full ownership of your physical evolution.`,
      coverImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200",
      authorName: "Coach Ankit Baliyan",
      authorRole: "Head Performance Coach",
      readTime: "7 min read",
      isFeatured: false,
      metaTitle: "Macro Nutrition 101 Guide | Fab Fit Performance Gym",
      metaDescription: "Learn how to calculate proteins, carbs, and fats for your fitness transformation goals.",
      metaKeywords: "nutrition coach, macro calculator, diet plan gurgaon, fabfit",
      status: "PUBLISHED" as const,
      views: 75,
      publishedAt: new Date(),
    },
    {
      id: "blog-104",
      title: "Mindset & Discipline: Overcoming Fitness Plateaus",
      slug: "mindset-and-discipline-overcoming-fitness-plateaus",
      category: "Mindset & Lifestyle",
      excerpt: "Hit a wall in your weight loss or strength journey? Here is how to audit your habits, break plateaus, and maintain relentless drive.",
      content: `Plateaus are a natural stage of physiological adaptation. They are not a signal of failure—they are feedback from your body.

How to Overcome a Plateau:

1. Audit Caloric Intake
Hidden calories in cooking oils, salad dressings, and liquid beverages often erode your deficit. Track meticulously for 7 days.

2. Adjust Training Stimulus
Periodize your routine by switching rep ranges (e.g. from 8-10 reps to 12-15 reps) or deloading for 5-7 days.

3. Optimize Sleep & Stress
High systemic stress increases cortisol, triggering water retention and stalling scale weight reduction. Focus on sleep hygiene and active recovery.`,
      coverImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200",
      authorName: "Coach Ankit Baliyan",
      authorRole: "Head Performance Coach",
      readTime: "4 min read",
      isFeatured: false,
      metaTitle: "Overcoming Fitness Plateaus | Fab Fit Performance Gym",
      metaDescription: "Learn how to break fat loss and strength plateaus with elite mindset coaching.",
      metaKeywords: "mindset coaching, fitness plateau, workout motivation, fabfit",
      status: "PUBLISHED" as const,
      views: 64,
      publishedAt: new Date(),
    }
  ];

  for (const blog of blogs) {
    await (prisma as any).blogPost.upsert({
      where: { slug: blog.slug },
      update: blog,
      create: blog,
    });
    console.log(`✓ Seeded blog: "${blog.title}"`);
  }

  console.log('\n🎉 Successfully created BlogPost table & seeded sample blog posts!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
