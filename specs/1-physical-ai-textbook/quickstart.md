# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

**Feature Branch**: `1-physical-ai-textbook`
**Date**: 2025-12-27

---

## Prerequisites

- Node.js 18+ (for Docusaurus)
- Git
- Python 3.10+ (for Colab notebooks)
- (Optional) NVIDIA Jetson for hardware labs
- (Optional) NVIDIA Isaac Sim for advanced simulation

---

## Project Setup

### 1. Clone Repository

```bash
git clone https://github.com/[org]/physical-ai-humanoid-robotics-book-textbook.git
cd physical-ai-humanoid-robotics-book-textbook
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

Visit `http://localhost:3000` to preview the textbook.

---

## Content Development Workflow

### Creating a New Chapter

1. Navigate to the module folder:
   ```
   docs/module-{N}-{slug}/
   ```

2. Copy the template:
   ```bash
   cp docs/_templates/chapter-template.mdx docs/module-1-foundations/1-1-new-chapter.mdx
   ```

3. Update frontmatter with chapter details

4. Fill in all required sections:
   - Learning Objectives
   - Introduction
   - Theory Content
   - Simulation Lab
   - Hardware Lab
   - Case Study
   - Summary
   - Quiz (5+ questions)
   - References

5. Preview locally:
   ```bash
   npm start
   ```

### Validation Checklist

Before committing a chapter:

- [ ] All frontmatter fields complete
- [ ] 3-5 learning objectives with Bloom's verbs
- [ ] Word count: 1,000-1,700 words
- [ ] 5+ quiz questions with explanations
- [ ] 5+ citations (≥60% peer-reviewed)
- [ ] Simulation lab has working code
- [ ] Hardware lab has simulation alternative
- [ ] Extensibility hooks present:
  - `<PersonalizeButton />`
  - `<TranslateButton urdu />`
  - `<rag-zone id="...">` tags

---

## Build Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server with hot reload |
| `npm run build` | Production build to `build/` |
| `npm run serve` | Serve production build locally |
| `npm run clear` | Clear Docusaurus cache |

---

## Directory Structure

```
physical-ai-humanoid-robotics-book-textbook/
├── docs/                           # Textbook content
│   ├── intro.md                    # Book introduction
│   ├── _templates/                 # Chapter templates
│   │   └── chapter-template.mdx
│   ├── module-1-foundations/       # Module 1 chapters
│   ├── module-2-anatomy/           # Module 2 chapters
│   ├── module-3-perception/        # Module 3 chapters
│   ├── module-4-motion/            # Module 4 chapters
│   ├── module-5-manipulation/      # Module 5 chapters
│   ├── module-6-learning/          # Module 6 chapters
│   ├── module-7-integration/       # Module 7 chapters
│   └── module-8-applications/      # Module 8 chapters
├── src/
│   ├── components/                 # React components
│   │   ├── PersonalizeButton.tsx   # Personalization placeholder
│   │   ├── TranslateButton.tsx     # Translation placeholder
│   │   └── RagZone.tsx             # RAG integration placeholder
│   └── css/                        # Custom styles
├── static/
│   ├── img/                        # Images and diagrams
│   └── notebooks/                  # Colab notebook files
├── specs/                          # Feature specifications
├── history/                        # PHRs and ADRs
├── docusaurus.config.js            # Docusaurus configuration
├── sidebars.js                     # Sidebar navigation
└── package.json                    # Dependencies
```

---

## Content Guidelines

### Writing Standards

- **Reading level**: Grade 9-11 (Flesch-Kincaid)
- **Voice**: Active voice preferred
- **Sentences**: Average 15-20 words
- **Paragraphs**: 3-5 sentences
- **Technical terms**: Define on first use

### Citation Format (IEEE)

```
[1] A. Author, "Title," Journal, vol. X, no. Y, pp. XX-YY, Year. doi: 10.xxxx
```

### Code Blocks

Always include language hint:

````markdown
```python
# Python code here
```
````

### Admonitions

```markdown
:::note Title
Content for notes
:::

:::tip Pro Tip
Helpful tips
:::

:::warning Warning
Important warnings
:::

:::caution Danger
Safety-critical information
:::
```

---

## Deployment

### GitHub Pages

```bash
npm run build
npm run deploy
```

### Manual Deploy

1. Build: `npm run build`
2. Upload `build/` to hosting provider

---

## Troubleshooting

### Build Errors

**Problem**: MDX parsing error
**Solution**: Check for unclosed tags or invalid JSX

**Problem**: Missing dependencies
**Solution**: `npm install` or `npm ci`

**Problem**: Port already in use
**Solution**: `npm start -- --port 3001`

### Content Issues

**Problem**: Image not loading
**Solution**: Check path is relative to `static/img/`

**Problem**: Code not highlighting
**Solution**: Add language hint to code fence

---

## Contributing

1. Create feature branch from `main`
2. Make changes following content guidelines
3. Run `npm run build` to verify
4. Submit PR with description of changes
5. Request review from content maintainers
