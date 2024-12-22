# Web Content Accessibility Guidelines (WCAG)

![WCAG_markdown_image](https://img.uxcel.com/tags/web-content-accessibility-guidelines-wcag-1721717259834-2x.jpg)

## Overview

WCAG is a set of guidelines, created by the W3C, for making digital content accessible for all users, including people with disabilities.

---

## WCAG Timeline

- **1999:** WCAG 1.0 released by W3C  
- **2008:** WCAG 2.0 (current version) released  
- **2012:** WCAG 2.0 became ISO standard  
- **2017:** WCAG 2.1 draft under public review  
- **2018:** WCAG 2.1 became ISO standard  
- **2020:** WCAG 2.2 working draft and WCAG 3.0 (called "Silver") is also in the working phase  

---

## 4 Principles

WCAG is organized around four principles often referred to by the acronym **POUR**:

1. **Perceivable:**  
   Can users perceive the content? This ensures content is accessible through multiple senses, not just sight.

2. **Operable:**  
   Can users interact with UI components and navigate the content? For example, hovering actions may not work for users who cannot use a mouse or touch screen.

3. **Understandable:**  
   Can users comprehend the content and interface? Consistency and clarity are key to reducing confusion.

4. **Robust:**  
   Can the content be accessed by a wide variety of user agents (browsers and assistive technologies)?

---

## Accessibility Levels

WCAG defines three levels of compliance:

### **Level A (Required):**  
Improves basic accessibility by enabling easier navigation for browsing readers and translation of content.

### **Level AA (Required):**  
Ensures content is accessible to a wider range of disabilities by addressing elements like color contrast and error identification. Preferred by regulators.

### **Level AAA (Optional):**  
The highest level of compliance, providing the widest accessibility but often requiring significant design changes. Not typically required by legislation.

---

## ARIA (Accessible Rich Internet Applications)

ARIA improves the accessibility of applications by adding extra information for assistive technologies via attributes.  
**Important Note:** Always use native HTML elements before adding ARIA roles to avoid unnecessary complexity.

### Categories:
- **ARIA Roles**  
- **ARIA States and Properties**

### Resources:
- [First Rule of ARIA Use](https://webaim.org/techniques/aria/)  
- [Introduction to ARIA | Google Developers](https://developers.google.com/web/fundamentals/accessibility/semantics-aria)  
- [Getting Started with ARIA - The A11Y Project](https://www.a11yproject.com/posts/getting-started-aria/)  
- [Top 6 ARIA Mistakes to Avoid | Deque](https://www.deque.com/blog/top-6-aria-mistakes/)  

---

## A11y Testing Tools

Web accessibility testing involves both automated and manual tools.  
- **Automated Tools:** Axe, Lighthouse, etc.  
- **Manual Tools:** Screen readers, code analysis, etc.

### Companies Dedicated to A11y:
- **Siteimprove**
- **Tenon.io**
- **Deque Systems** (developer of axe-core used by Lighthouse)  
- **The Paciello Group**

### Example: Chrome Developer Tools
- Accessibility tree and element properties  
- Built-in color contrast checker  

---

## Screen Readers

Commonly used screen readers include:
- **VoiceOver** (Apple)  
- **JAWS** (popular but expensive)  
- **NVDA** (open-source alternative to JAWS)

### Enable VoiceOver on macOS:
1. Open **Preferences** > **Accessibility**  
2. Enable **VoiceOver** (Shortcut: `⌘ + F5`)  

### Basic VoiceOver Shortcuts:
- Toggle VoiceOver: `⌘ + F5`  
- Start reading: `VO + A`  
- Stop reading: `CTRL`  
- Next heading: `VO + H`  
- Next link: `VO + L`  

### Resources:
- [JAWS Screen Reader](https://www.freedomscientific.com/)  
- [NV Access](https://www.nvaccess.org/)  
- [VoiceOver - Mac Accessibility](https://www.apple.com/accessibility/mac/vision/)  

---

## Keyboard Navigation

Some users rely solely on keyboards for navigation. Test your pages with keyboard-only interaction.

### Tab Order:
Ensure logical tabbing through links and content.

### Resources:
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)  
- [Designing for Keyboard Accessibility](https://accessibletech.org/keyboard-accessibility/)  
- [CSS Outline Property](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)  

---

## Skip Links

Skip links help keyboard users jump directly to important sections of a page.

**WCAG 2.1 Reference:**  
2.4.1 Bypass Blocks: Provide a mechanism to bypass repeated blocks of content.  

### Resources:
- [WebAIM: Skip Navigation Links](https://webaim.org/techniques/skipnav/)  
- [How-to: Use Skip Links - A11Y Project](https://www.a11yproject.com/posts/skip-links/)  
- [Your Skip Links Are Broken - Axess Lab](https://axesslab.com/skip-links/)  

### Author

* Khaled Jallouli