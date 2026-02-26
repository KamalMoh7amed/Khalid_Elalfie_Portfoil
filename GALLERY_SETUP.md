# Gallery Setup Guide

## الإعدادات الحالية

تم تكوين معرض الصور بالكامل مع 10 مشاريع وجميع الصور من المجلد `public`.

## البنية

```
public/
├── Project1/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ... (12 صورة إجمالاً)
├── Project2/
│   └── ... (13 صورة)
├── Project3/
│   └── ... (8 صور)
└── ... (Projects 4-10)
```

## المميزات

✓ عرض 10 مشاريع في شبكة 3 أعمدة (responsive)
✓ نقر على أي صورة مصغرة لفتح المعرض بملء الشاشة
✓ التنقل بين الصور باستخدام أزرار Arrow (◀ ▶)
✓ الأزرار أو نقاط المؤشر للتنقل المباشر
✓ اغلاق المعرض بـ ESC أو النقر خارج الصور
✓ مؤشر عداد الصور الحالية
✓ تصميم responsive يعمل على جميع الأجهزة

## كيفية التخصيص

### إضافة مشروع جديد

في ملف `components/sections/portfolio.tsx`، أضف كائن جديد إلى مصفوفة `projects`:

```javascript
{
  id: 11,
  title: 'Project Name',
  category: 'Residential or Commercial',
  year: 2024,
  thumbnail: '/ProjectX/image.jpg',
  images: [
    '/ProjectX/image1.jpg',
    '/ProjectX/image2.jpg',
    // ... إضافة المزيد من الصور
  ]
}
```

### تغيير الصور

1. أضف صور جديدة إلى مجلد في `public/` (مثل `public/Project1/`)
2. حدث المسارات في مصفوفة `projects` 

### تخصيص الألوان والتأثيرات

- تأثيرات Framer Motion موجودة في المكون
- تصاميم Tailwind CSS قابلة للتعديل مباشرة

## معلومات تقنية

- **المكون**: `components/sections/portfolio.tsx`
- **Framework**: Next.js 16 مع React
- **المكتبات**: Framer Motion, Lucide Icons, Next.js Image
- **التخزين**: ملفات محلية في مجلد `public`

## دعم المتصفح

✓ جميع المتصفحات الحديثة
✓ دعم الأجهزة المحمولة الكامل
✓ تحسين الأداء مع Next.js Image Optimization

---

تم إنشاء هذا بتاريخ 2026
