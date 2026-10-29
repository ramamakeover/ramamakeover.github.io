# Rama Makeover — Modern Beauty Parlour UI/UX Design Brief

**Purpose:** A practical design and build specification for a modern, elegant, mobile-first beauty parlour website. Replace “Rama Makeover” if the business name differs.

## 1. Design vision

Create a soft-luxury beauty brand: warm, welcoming, editorial, polished, and easy to book. It should feel premium through typography, real photography, whitespace, and restrained motion—not loud pinks, excessive gradients, or animations everywhere.

**Primary goals**
- Help visitors understand the services quickly.
- Convert visitors into appointment enquiries.
- Build trust with real work, genuine reviews, staff/interior photos, and accurate contact details.
- Make WhatsApp and phone contact effortless on mobile.
- Keep the website fast, accessible, and easy to maintain.

## 2. Visual identity

### Colour palette

| Token | Hex | Use |
|---|---|---|
| Warm ivory | `#FAF7F2` | Main page background |
| Soft cream | `#F1E9DF` | Alternate sections |
| Dusty rose | `#A66F78` | Accent links, highlights |
| Blush | `#D9A6A0` | Decorative details, small tags |
| Deep cocoa | `#352B2A` | Main text, primary buttons |
| Sage | `#A8B5A0` | Small secondary accent |
| White | `#FFFFFF` | Cards and form surfaces |
| Muted text | `#746B67` | Secondary copy |
| Border | `#E7DED5` | Dividers and outlines |

**Colour balance:** roughly 70% warm neutrals, 20% white/cream surfaces, 10% accents. Use deep cocoa for important text. Check contrast before using rose for small text on ivory. Avoid neon, saturated pink, and gradients as the main visual identity.

### Typography
- **Headings:** DM Serif Display or Playfair Display.
- **Body and interface:** DM Sans or Manrope.
- Use expressive serif headings, but keep navigation, buttons, forms, and descriptions highly readable.
- Keep paragraphs short and line lengths comfortable.

### Photography
Use authentic photos of the parlour, team, bridal makeup, hairstyles, and finished looks wherever possible. Prefer soft daylight, natural skin texture, clean backgrounds, and consistent warm colour grading. Avoid over-retouched images and mismatched stock photography. Check commercial image licences; obtain permission before publishing identifiable client photos.

## 3. Landing page structure

### A. Announcement bar
Optional, short and factual. Example: “Bridal and festive bookings are open — enquire today.” Do not use fake countdowns or unverified discounts.

### B. Header
Desktop: logo left, navigation links, booking CTA right. Mobile: logo, accessible menu button, and a visible contact/booking action.

Navigation: **Home · Services · Bridal · Our Work · About · Contact**

Primary CTA: **Book an Appointment**

Use a clean ivory header. It may become slightly opaque with a fine border on scroll. Ensure the mobile menu supports keyboard navigation, Escape to close, visible focus, and appropriate ARIA attributes.

### C. Hero — most important section
Use a spacious split layout on desktop and a stacked layout on mobile.

**Eyebrow:** `BEAUTY · BRIDAL · SELF-CARE`  
**Headline:** `Feel beautiful. Feel like you.`  
**Supporting copy:** `Thoughtful beauty services, personalised looks, and a little time just for you.`  
**Primary CTA:** `Book an Appointment`  
**Secondary CTA:** `Explore Services`  
**Optional trust line:** `Personalised consultations · Professional care · A welcoming experience`

Use one strong, authentic hero image rather than a busy collage. Keep the text readable and the CTA immediately visible. Avoid placing decorative labels over the face or key subject.

### D. Trust strip
Show three or four true business strengths, for example:
- Personalised consultations
- Bridal and occasion styling
- Professional care
- A clean, comfortable environment

Only include claims that are accurate. Use subtle line icons and concise labels.

### E. Services preview
Heading: `A little care, a lot of confidence`

Create 4–6 image-led cards. Each card has an image/icon, service name, one-line description, and a clear link. Possible categories—only if actually offered:
- Hair styling and care
- Makeup
- Bridal packages
- Facial and skincare services
- Manicure and pedicure
- Saree draping / occasion styling

Show prices only after confirming them. Prefer thin borders, generous spacing, and a restrained hover lift over heavy shadows.

### F. Bridal / occasion feature
Heading: `Made for your most memorable moments`  
Copy: `From consultation to the finishing touches, we’ll help you create a look that feels true to you.`  
CTA: `Enquire About Bridal Services`

Use one large image with a clean text panel, or a simple three-image composition. List package inclusions only when verified.

### G. Gallery / Our Work
Display real work in a consistent grid. Optional categories: Bridal, Makeup, Hair, Occasion looks. Use descriptive alt text. If a lightbox is added, it must be keyboard accessible, touch friendly, and dismissible with Escape. Do not autoplay the gallery.

### H. Booking steps
1. Choose a service.
2. Contact the parlour with your preferred date and time.
3. Receive confirmation from the team.

Do not imply instant booking or real-time availability unless those features exist.

### I. Testimonials
Use 2–3 genuine reviews, with permission. Never invent customer quotes, ratings, or review counts. Link to a real public review profile if available.

### J. About section
Introduce the owner/team and explain the parlour’s approach to beauty and customer care. Use real team/interior photography. Avoid unsupported claims such as “the best salon” or unverified years of experience.

### K. Final CTA
Heading: `Ready for a little time for yourself?`  
Buttons: **Book an Appointment** and **Chat on WhatsApp**

### L. Footer
Include logo, short brand line, phone/WhatsApp, address and map link, verified opening hours, Instagram, navigation, and a privacy notice if collecting personal information. Prefer a lightweight map link over loading a heavy map embed by default.

## 4. Design system

### Layout and spacing
Use an 8px-based scale: 8, 16, 24, 32, 48, 64, 80, 96px. Suggested main content width: 1180–1280px; reading text width: 600–720px. Keep generous whitespace between major sections.

### Corners, borders, shadows
- Buttons: 10–14px radius.
- Cards/images: 16–24px radius.
- Prefer subtle neutral borders before shadows.
- Keep shadows soft and rare.
- Avoid excessive glassmorphism, pill shapes, and decorative effects.

### Buttons
- Primary: deep cocoa background, white text.
- Secondary: transparent/ivory with cocoa border.
- Hover: subtle colour shift and 2–3px lift.
- Include a visible keyboard focus ring.
- Every button must perform a real action.

### Icons
Use one consistent line-icon library, such as Lucide. Icons should support the content rather than decorate every heading.

## 5. Motion and animation

Motion should add polish and guide attention—not delay booking or distract from the work.

| Element | Motion | Duration |
|---|---|---|
| Hero heading | Fade in + move up 12–20px | 450–650ms |
| Hero image | Fade in + scale from 0.98 to 1 | 500–700ms |
| Section reveal | Fade + move up 12–18px once on entry | 350–500ms |
| Service cards | Lift 2–4px; image scale to 1.02–1.04 | 180–250ms |
| Buttons/links | Colour and transform transition | 150–220ms |
| Gallery lightbox | Gentle fade/scale | 200–300ms |

Use ease-out curves and small stagger delays (about 60–100ms). Prefer `transform` and `opacity`; avoid animating layout-heavy properties such as `top`, `left`, and `height`. Do not animate every component, add constant parallax, or autoplay video with sound.

**React recommendation:** use CSS transitions for simple hover effects. For richer entrance/reveal animations, use Motion for React. Respect `prefers-reduced-motion: reduce`; nonessential motion should be removed or simplified. Content and CTAs must remain available even when animation is disabled.

## 6. Responsive behaviour

Suggested breakpoints: small mobile below 480px; tablet/large mobile 480–767px; desktop 768–1199px; wide desktop 1200px+. Adjust based on content, not device names alone.

- Build mobile first and test it early.
- Stack hero content and image cleanly on small screens.
- Make touch targets about 44×44px or larger.
- Prevent horizontal overflow.
- Use a one- or two-column gallery depending on available width.
- Do not let sticky booking controls cover content or browser controls.
- Keep phone and WhatsApp actions easy to reach.

## 7. Booking and contact UX

For a simple first release, use WhatsApp click-to-chat and click-to-call. Add a booking form or scheduling tool only if the business can manage incoming requests.

Suggested short form:
- Name
- Phone/WhatsApp number
- Service of interest
- Preferred date/time (optional)
- Message (optional)

Show validation, loading, success, and error states. Explain what happens after submission. Do not say an appointment is confirmed until the parlour confirms it. Collect only necessary data and include a privacy notice.

Example prefilled WhatsApp message:  
`Hello, I’d like to enquire about an appointment. Please share available times and service details.`

Use the verified business number—never ship a placeholder.

## 8. Accessibility

Aim for WCAG 2.2 AA:
- Semantic `header`, `nav`, `main`, `section`, and `footer`.
- One clear H1 and logical heading order.
- Sufficient text contrast, especially for muted rose.
- Visible keyboard focus; keyboard-operable menu, forms, and lightbox.
- Descriptive alt text for meaningful images; empty alt for decorative images.
- Proper labels and accessible error messages for form fields.
- Do not use colour alone to convey status.
- Respect browser zoom and reduced-motion preferences.

## 9. Performance and SEO

### Performance
- Use AVIF/WebP and responsive image sizes.
- Set image dimensions/aspect ratios to prevent layout shifts.
- Lazy-load below-the-fold images; do not lazy-load the main hero image if it is the LCP image.
- Compress assets, limit font weights, and avoid oversized video/animation files.
- Test on a real mid-range mobile device and slower connection.

### Local SEO
- Write a unique page title and meta description.
- Mention actual services and the actual location naturally.
- Add `BeautySalon`/`LocalBusiness` structured data only with verified business details.
- Keep business name, address, phone, and hours consistent.
- Use descriptive image filenames and alt text.
- Link to the genuine Google Business Profile and real review source.
- Add sitemap and robots.txt if appropriate. Do not fabricate reviews or location pages.

Suggested metadata (replace `[Area]` with the real location):
- **Title:** `Rama Makeover | Beauty Parlour & Bridal Makeup in [Area]`
- **Description:** `Explore beauty, makeup, hair and bridal services at Rama Makeover in [Area]. Enquire about personalised services and appointments.`

## 10. Suggested technology

For a new React build:
- React + TypeScript + Vite
- Tailwind CSS, or CSS Modules if the existing app uses them
- Motion for React for selected animations
- Lucide React for line icons
- React Hook Form + Zod only if form complexity warrants them
- WhatsApp click-to-chat and `tel:` links for a lightweight first release

Do not add a backend just for a contact CTA. If a form stores leads, use a secure backend or reputable form service; never expose private API keys in client code. For an existing website, inspect the framework, assets, routes, and dependencies before making changes. Preserve working functionality rather than rewriting everything automatically.

## 11. Suggested component structure

```text
src/
  components/
    layout/AnnouncementBar.tsx
    layout/SiteHeader.tsx
    layout/MobileMenu.tsx
    layout/SiteFooter.tsx
    home/HeroSection.tsx
    home/TrustStrip.tsx
    home/ServicePreview.tsx
    home/BridalFeature.tsx
    home/GallerySection.tsx
    home/BookingSteps.tsx
    home/TestimonialsSection.tsx
    home/AboutSection.tsx
    home/FinalBookingCTA.tsx
    ui/Button.tsx
    ui/SectionHeading.tsx
    ui/ServiceCard.tsx
    ui/WhatsAppButton.tsx
  pages/HomePage.tsx
  styles/globals.css
```

Adapt this to the project; do not split every tiny element into a component unnecessarily.

## 12. Content checklist

- [ ] Correct business name and logo
- [ ] Actual services and current prices
- [ ] Verified phone and WhatsApp number
- [ ] Full address and map link
- [ ] Opening hours
- [ ] Real team, interior, and service photos
- [ ] Genuine reviews with permission
- [ ] Accurate package inclusions
- [ ] Social links
- [ ] Clear booking process
- [ ] Privacy notice for contact forms

Never invent prices, reviews, awards, credentials, opening hours, or years of experience.

## 13. Implementation plan

**Phase 1 — Foundation:** inspect the existing app; define colours, typography, spacing, buttons, and image styles; build header/footer.

**Phase 2 — Landing page:** implement the hero and booking CTA first; then services, bridal feature, and contact actions. Validate mobile layout before secondary pages.

**Phase 3 — Trust:** add authentic gallery, about section, and real testimonials.

**Phase 4 — Motion:** add subtle reveals and hover interactions; verify reduced-motion behaviour; remove anything distracting.

**Phase 5 — Quality:** test responsive widths, keyboard navigation, links, WhatsApp/call actions, forms, image loading, SEO metadata, accessibility, and performance on a real phone.

## 14. Definition of done

- [ ] Website feels modern, calm, elegant, and consistent.
- [ ] Visitors can identify services and contact the parlour quickly.
- [ ] Main CTA works on desktop and mobile.
- [ ] All factual content is verified.
- [ ] Motion is subtle and respects reduced-motion settings.
- [ ] No broken layouts or horizontal overflow.
- [ ] Images are optimised and have stable dimensions.
- [ ] Navigation and forms work with a keyboard.
- [ ] No placeholder contact details or fake testimonials remain.
- [ ] Local SEO details are accurate.
- [ ] Website is tested on a real mobile device.

## 15. Recommended design resources

1. **Salon website examples (Zarla):** https://www.zarla.com/inspiration/salon — practical examples and design choices.
2. **Dribbble beauty salon concepts:** https://dribbble.com/search/beauty-salon-web — visual direction and layout inspiration.
3. **Behance case studies:** https://www.behance.net/search/projects/beauty%20salon%20website — branding and full-site projects.
4. **Awwwards:** https://www.awwwards.com/ — polished web design inspiration.
5. **Motion for React documentation:** https://motion.dev/docs/react — current React animation API and examples.
6. **Tailwind CSS docs:** https://tailwindcss.com/docs — responsive styling and design tokens.
7. **Lucide icons:** https://lucide.dev/ — consistent line icons.
8. **Google Fonts:** https://fonts.google.com/ — DM Serif Display, Playfair Display, DM Sans, and Manrope.
9. **web.dev:** https://web.dev/ — performance and Core Web Vitals.
10. **W3C WAI:** https://www.w3.org/WAI/ — accessibility guidance.
11. **Unsplash:** https://unsplash.com/ and **Pexels:** https://www.pexels.com/ — temporary imagery; verify commercial licensing.

## Final recommendation

Use warm ivory, deep cocoa, dusty rose, and a restrained sage accent; pair elegant serif headings with clean sans-serif body text; lead with one beautiful authentic hero image; keep the booking CTA prominent; and use animation sparingly. The most effective salon website is the one that feels trustworthy within seconds, showcases real work, and makes contacting the parlour effortless.
