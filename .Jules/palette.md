## 2025-05-15 - [Form Accessibility and Interactive Controls]
**Learning:** Proper association of labels with form inputs using `htmlFor` and `id` is a fundamental but frequently overlooked accessibility requirement. Icon-only buttons or stateful controls like mobile menus must communicate their purpose and state via ARIA attributes.
**Action:** Always ensure all form inputs are explicitly linked to their labels. For stateful components like menus, use `aria-label` and `aria-expanded` to communicate the purpose and current state to assistive technologies.
