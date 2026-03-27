---
title: "Building a Better Analysis Workflow"
date: "2026-03-20"
summary: "A short example post showing how longer-form writing and code blocks can live together in the blog."
featured: false
---

One of the recurring challenges in analytics work is not just building the right analysis, but making the process repeatable enough that future work gets easier instead of harder.

That usually means reducing friction in a few places:

- cleaning data in a predictable way
- naming intermediate outputs clearly
- writing code that is easy to revisit later

Here is a small example of the kind of code block that should render nicely on the site:

```python
import pandas as pd

df = pd.read_csv("events.csv")
summary = (
    df.groupby("segment")["outcome"]
      .mean()
      .sort_values(ascending=False)
)

print(summary)
```

Good technical writing often comes from showing just enough of the work to make the thinking legible.
