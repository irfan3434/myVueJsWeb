import { createI18n } from 'vue-i18n';

// Translation messages
const messages = {
  en: {
    header: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      brand: 'Dr. Ayed Alqarni Prize',
    },
    home: {
      welcome: 'Welcome to the Dr. Ayed Alqarni Prize Website',
      description:
        'This site is dedicated to the prestigious Dr. Ayed Alqarni Prize.',
      learnMore: 'Learn More',
    },
    slideshow: [
      { text: 'Welcome to Dr. Zayd Alqarni Prize' },
      { text: 'Celebrating Excellence in Education' },
      { text: 'Empowering Future Generations' },
    ],
    timeline: [
      {text: 'Award Timeline and Milestones'},
      {text: 'Announcement and Submission Phase'},
      {text: 'February - May'},
      {text: 'Announce the key dates for the award: opening, closing, evaluation, and ceremony.'},
      {text: 'Categorize applicant fields.'},
      {text: 'Announce the award through various media channels.'},
      {text: 'Develop detailed submission conditions and criteria for excellence.'},
      {text: 'Preparation and Organization Phase'},
      {text: 'June - September'},
      {text: 'Finalize the number of winners, awards, and types of recognition.'},
      {text: 'Develop and simplify a website, along with creating media materials, slogans, and advertisements.'},
      {text: 'Form committees based on applicant categories.'},
      {text: 'Evaluation and Judging Phase'},
      {text: 'July - June'},
      {text: 'Filter and shortlist applicants to a manageable number.'},
      {text: 'Conduct the final selection of winners, complete evaluations, and submit final reports.'},
      {text: 'Celebration and Awarding Phase'},
      {text: 'October - December'},
      {text: 'Announce winners and distribute awards and certificates.'},
      {text: 'Organize the award ceremony, inviting key figures and stakeholders.'},
      {text: 'Publish and archive all award-related activities and results.'},
    ]
  },
  ar: {
    header: {
      home: 'الصفحة الرئيسية',
      about: 'حول',
      contact: 'اتصل بنا',
      brand: 'جائزة الدكتور عايد القرني',
    },
    home: {
      welcome: 'مرحبًا بكم في موقع جائزة الدكتور عايد القرني',
      description: 'هذا الموقع مخصص لجائزة الدكتور عايد القرني المرموقة.',
      learnMore: 'اعرف أكثر',
    },
    slideshow: [
      { text: 'مرحبًا بكم في جائزة الدكتور زايد القرني' },
      { text: 'الاحتفال بالتميز في التعليم' },
      { text: 'تمكين الأجيال القادمة' },
    ],
    timeline: [
      {text: 'الجوائز الجدول الزمني والمعلم'},
      {text: 'مرحلة الإعلان والتقديم'},
      {text: 'فبراير - مايو'},
      {text: 'تحديد والإعلان عن التواريخ الثلاثة الرئيسية للجائزة'},
      {text: 'تصنيف مجالات المتقدمين.'},
      {text: 'الإعلان عن الجائزة عبر قنوات مختلفة'},
      {text: 'تطوير شروط ومعايير التقديم'},
      {text: 'مرحلة التحضير والتنظيم'},
      {text: 'يونيو - سبتمبر'},
      {text: 'الانتهاء من عدد الفائزين والجوائز'},
      {text: 'تطوير موقع إلكتروني ومواد إعلامية'},
      {text: 'تشكيل اللجان بناءً على فئات المتقدمين'},
      {text: 'مرحلة التقييم والتحكيم'},
      {text: 'يوليو - يونيو'},
      {text: 'تصفية واختيار المتقدمين المختصرين'},
      {text: 'إجراء التقييم النهائي للفائزين'},
      {text: 'تقديم التقارير النهائية'},
      {text: 'مرحلة الاحتفال والتكريم'},
      {text: 'أكتوبر - ديسمبر'},
      {text: 'الإعلان عن الفائزين وتوزيع الجوائز'},
      {text: 'تنظيم حفل توزيع الجوائز'},
      {text: 'نشر وأرشفة النتائج'},
    ]

  },
};


// Create Vue I18n instance
const i18n = createI18n({
  locale: 'en', // Default language
  fallbackLocale: 'en', // Fallback language
  messages, // Translation messages
});

export default i18n;

i18n.global.locale = 'en';
document.documentElement.setAttribute('dir', i18n.global.locale === 'ar' ? 'rtl' : 'ltr');
