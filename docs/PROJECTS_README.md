# How to Update Your Web Projects

## Easy 3-Step Process:

### 1. Open `projects.json` in any text editor

### 2. Add/Edit projects using this format:

```json
{
  "name": "Project Name",
  "description": "brief description of what the project is",
  "url": "https://example.com",
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

### 3. Save the file - that's it! ✅

---

## Example:

```json
[
  {
    "name": "My Awesome Website",
    "description": "a cool e-commerce store i built with shopify",
    "url": "https://mystore.com",
    "tags": ["Shopify", "E-commerce", "Custom Theme"]
  },
  {
    "name": "GitHub Project",
    "description": "open source tool for developers",
    "url": "https://github.com/username/project",
    "tags": ["JavaScript", "Open Source", "React"]
  }
]
```

---

## Rules:

- Each project is wrapped in `{ }` curly braces
- Separate projects with commas `,`
- All the projects go inside `[ ]` square brackets
- Keep `tags` short (1-2 words each)
- Use lowercase for description (matches your site style)
- Always use `"quotes"` around text
- URLs must start with `https://` or `http://`

---

## Tips:

- Add projects in order of importance (top = most important)
- Keep descriptions under 100 characters
- Limit to 3-5 tags per project
- Test by refreshing the case-studies page after saving

---

## Troubleshooting:

**Projects not showing?**
- Make sure the JSON syntax is valid (use a JSON validator online)
- Check that all quotes and commas are in place
- Open browser console (F12) to see any errors

**That's it! No code required, just update the JSON file whenever you want to add/remove projects.**
