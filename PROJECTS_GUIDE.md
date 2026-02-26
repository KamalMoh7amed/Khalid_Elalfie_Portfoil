# Projects Gallery System

## نظرة عامة
تم تطوير نظام gallery متقدم يتيح عرض المشاريع مع صور متعددة لكل مشروع.

## هيكل المشاريع

### 10 مشاريع مضافة:
1. **Modern Living Room** - 5 صور
2. **Minimalist Bedroom** - 5 صور
3. **Luxury Kitchen** - 5 صور
4. **Executive Office** - 5 صور
5. **Zen Bathroom** - 5 صور
6. **Retail Boutique** - 5 صور
7. **Library Haven** - 6 صور
8. **Rooftop Terrace** - 5 صور
9. **Dining Elegance** - 4 صور
10. **Home Wellness** - 6 صور

## المميزات

### 1. Gallery Modal المتقدم
- عرض الصور بأحجام كاملة في modal
- التنقل بين الصور بأزرار Next/Previous
- استخدام مفاتيح الأسهم (← →) للتنقل بين الصور
- اغلاق بـ ESC
- عداد الصور الحالية والإجمالي

### 2. واجهة المستخدم
- عند الضغط على أي مشروع، يظهر modal مع صور المشروع
- transition سلس بين الصور
- loading state أثناء تحميل الصور
- مؤشرات نقاط (dots) للتنقل المباشر بين الصور
- نص توضيحي يشرح طرق التنقل

### 3. التصميم
- تصميم dark mode مع backdrop مظلم
- أزرار navigation بتأثيرات hover
- رسالة توضيحية للمستخدمين (keyboard hints)
- responsive على جميع الأجهزة

## إضافة مشاريع جديدة

لإضافة مشروع جديد:

1. أضف مجلد جديد في `/public/ProjectX/` (حيث X رقم المشروع)
2. أضف الصور إلى المجلد
3. ثم عدّل ملف `/components/sections/projects.tsx`:

```typescript
{
  id: 11,
  title: 'اسم المشروع',
  category: 'Residential أو Commercial',
  description: 'وصف المشروع',
  thumbnail: '/ProjectX/image1.jpg',
  images: ['/ProjectX/image1.jpg', '/ProjectX/image2.jpg', ...], // اضف كل الصور
  year: '2024',
}
```

## الملفات الرئيسية

- `/components/gallery-modal.tsx` - مكون Modal الرئيسي
- `/components/sections/projects.tsx` - قسم المشاريع مع البيانات
- `/public/ProjectX/` - مجلدات الصور

## ملاحظات تقنية

- الصور تستخدم Next.js Image component للأداء الأفضل
- تم تفعيل `unoptimized: true` في next.config.mjs للعمل مع الصور المحلية
- جميع المكونات مكتوبة بـ TypeScript
- استخدام Tailwind CSS للتصميم
- accessibility محسّن مع ARIA attributes
