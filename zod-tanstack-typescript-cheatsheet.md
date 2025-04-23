# 🧠 ZOD + TANSTACK + TYPESCRIPT CHEAT SHEET

## ✅ WHEN: Every time you're working with **API data**

## 🎯 GOAL: Validate the data AND infer types from it

---

## ✅ Step-by-Step Dev Flow

### 1️⃣ Inspect API Response (docs or devtools)

- Copy a sample of the JSON structure.
- Ask: “What properties do I need?”

---

### 2️⃣ Create a Zod Schema from the structure

```ts
import { z } from "zod";

export const MyFeatureSchema = z.object({
  id: z.number(),
  name: z.string(),
  items: z.array(z.object({
    label: z.string(),
    value: z.string(),
  })),
});
```

Use `.nullable()`, `.optional()`, and `.array(...)` as needed.

---

### 3️⃣ Infer TypeScript types from the Zod schema

```ts
export type MyFeature = z.infer<typeof MyFeatureSchema>;
```

✅ Now you have a fully typed object  
✅ Safe to use in components, Zustand, TanStack, etc.

---

### 4️⃣ Use Schema in TanStack Query (optional runtime validation)

```ts
const result = await fetchData();
const parsed = MyFeatureSchema.safeParse(result);
if (!parsed.success) throw new Error("Invalid API data");
return parsed.data;
```

---

### 5️⃣ Use Your Inferred Type in Your Hook or Component

```ts
const { data } = useQuery<MyFeature>(...);
```

---

## 🧰 Handy Helpers

| Use This | When You Need |
|----------|----------------|
| `z.string()` | simple string |
| `z.number()` | number |
| `z.boolean()` | true/false |
| `z.object({})` | nested object |
| `z.array(z.string())` | array of strings |
| `z.string().nullable()` | can be null |
| `z.string().optional()` | may be undefined |

---

## 🗂 Bonus Folder Tip

Keep Zod schemas in `features/featureName/types.ts` so they stay modular and scoped.

---

## 💾 Why We Use `localStorage` (for Favorites)

✅ You're not using a backend or database  
✅ So we store **persistent client-side state** in `localStorage`

```ts
localStorage.setItem("favorites", JSON.stringify(favorites));
const stored = localStorage.getItem("favorites");
```

### 🔁 Zustand can load/save from `localStorage` on init

Yes — as long as the user hasn’t cleared cache or disabled storage, it’ll persist even after refresh.

✅ Zero backend needed  
✅ Still feels “persistent”
