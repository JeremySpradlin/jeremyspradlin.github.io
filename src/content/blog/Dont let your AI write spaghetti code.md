---
title: Don't Let your AI Write Spaghetti Code
date: 2025-06-06
summary: A practical guide to using AI coding tools without creating brittle, overcomplicated systems, focused on planning, documentation, and keeping implementation aligned with intent.
featured: true
---
![](attachments/Pasted%20image%2020260328001422.png)
When coding with AI, there’s a moment every developer knows intimately — that sinking feeling when your ambitious project begins to crumble under its own complexity. You’re three hours deep into what should have been a simple feature addition, your code is becoming an unwieldy mess, and you’re starting to question every decision that led you to this point.

Here’s the thing about AI pair programming: it’s not going to magically fix your terrible planning habits. In fact, if you’re not careful, your AI buddy will happily help you dig yourself into an even deeper hole with impressive efficiency.

After spending way too much time watching AI assistants generate beautiful, completely wrong solutions to problems I didn’t properly explain, I’ve learned a few things about keeping both human and artificial intelligence pointed in the right direction.
## Write Everything Down (Your Future Self Will Thank You)
The first lesson I learned, often the hard way, is that markdown documents aren’t just nice-to-haves — they’re your insurance policy against future confusion. When you’re deep in the trenches of a complex implementation and things start breaking down (and they will), having a comprehensive record of your plans, decisions, and discoveries becomes the difference between “oh right, that’s why we did it this way” and “what were we thinking?!”

I keep a small army of markdown files around my projects now: `plan.md` for the big picture, `notes.md` for random insights and gotchas, `refactor.md` for when things inevitably need restructuring. The key insight here is that these aren't static documents you write once and abandon like yesterday's to-do list. They're living documents that your AI assistant should be constantly reviewing and updating as you work together.

Your AI has the memory of an elephant and the patience of a saint, which makes it the perfect documentation partner. As you work through problems together, have it capture not just what you’re doing, but why you’re doing it. This creates a historical record that becomes incredibly valuable when you need to backtrack or when future-you (who will remember none of this) needs to understand your reasoning.

The bonus? The act of explaining your ideas often reveals flaws in your logic before they become bugs in your code. It’s like rubber duck debugging, except the duck occasionally offers helpful suggestions.
## When In Doubt, Plan It Out (Yes, Even More)

Conventional wisdom suggests that when you’re uncertain about something, you should just start coding and figure it out as you go. This is terrible advice that leads to refactoring nightmares and existential crises at 2 AM.

Here’s the counterintuitive truth: uncertainty is exactly when you need to plan more, not less. When I’m facing a complex feature or architectural decision, I’ve learned to resist the developer’s natural urge to immediately start typing code. Instead, I sit down with my AI assistant and we talk through the problem from every conceivable angle.

What are we trying to achieve? What are the edge cases that will inevitably bite us later? What could go wrong? (Spoiler: everything.) What are the long-term implications of different approaches?

This isn’t about creating perfect, unchangeable plans — those don’t exist outside of fantasy novels. It’s about building a shared understanding of the problem space before you start building solutions. AI assistants excel at asking the annoying questions you’d rather ignore: “Have you considered how this will handle concurrent users?” “What happens if the API is down?” “How will this scale when your three users become three thousand?”

Pro tip: explicitly tell your AI to ask for clarification whenever something seems ambiguous. Yes, it feels like it slows things down initially, but it prevents the kind of miscommunications that lead to complete rewrites and the questioning of your life choices.
## Commit Early, Commit Often (Your Sanity Depends On It)
One of the most transformative practices I’ve adopted is treating Git commits like save points in a video game. You know, those moments where you think “I should probably save before attempting this boss fight” because you’re about to do something that could go spectacularly wrong.

Before implementing any significant change, save your planning work to Git. This creates a safety net that allows you to take risks and experiment without the fear of losing hours of valuable thinking to a moment of overzealous refactoring.

The rhythm becomes almost meditative: work on the plan with your AI, save it to Git, implement the plan together, test it thoroughly, save the implementation to Git, then plan out the next steps. Rinse and repeat. It’s a predictable cycle that creates natural stopping points and prevents the kind of feature creep that turns “add a simple button” into a three-day architectural overhaul.

This approach has saved me countless hours of the kind of frustration that makes you question your career choices. When something isn’t working and I find myself in what I call an “error loop” — where both the AI and I are struggling to make progress and the code is becoming increasingly convoluted — I can simply revert to the last known good state and try a different approach. No sunk cost fallacy, no emotional attachment to broken code, just a clean slate and the hard-won wisdom of what doesn’t work.
## Baby Steps Beat Giant Leaps (Trust Me On This)
Here’s the most counterintuitive lesson I’ve learned: going slower initially allows you to go much faster overall. But building in small iterations isn’t just about risk management, it’s about creating a foundation stable enough to support increasingly complex features without collapsing like a house of cards in a hurricane. This is really no different than what developers have to do with the magic powers of AI.

When I’m working on a feature that involves both backend and frontend components, I resist the developer’s natural urge to build them simultaneously. Instead, I focus on the most basic implementation of the backend first, creating a frontend that’s purely functional — no styling, no user experience considerations, just the bare minimum needed to test that the backend actually works.

This approach reveals integration issues early, when they’re easy to fix and you still remember why you made certain decisions. It also prevents the frustrating scenario where you’re debugging a problem but you’re not sure if the bug is in your backend logic, your frontend code, or somewhere in the mysterious space between them.

I think of this as “building wide then narrow.” If I’m creating a writing application, I build out all the project management functionality before diving into document management. This creates a stable foundation that document features can build upon, rather than trying to develop both systems simultaneously and finding yourself constantly modifying each as the other evolves — like trying to change the tires on a moving car.
## The Case of the Overeager Assistant
Here’s a small but important lesson I learned through a mildly embarrassing experience: be mindful of when you add markdown documents to your project, because your AI assistant has the attention span of a caffeinated squirrel when it comes to new files.

I once created a `refactor.md` file while my AI was working on a completely unrelated feature, and it immediately started incorporating ideas from that document into the current task. While your AI's eagerness to help is generally wonderful, it can sometimes lead to the digital equivalent of "I wasn't talking to you, but thanks for the input."

The solution is simple: only add planning documents when you’re ready to act on them, and be explicit about which documents your AI should focus on for any given task. Think of it as giving your AI assistant a clear job description rather than letting it freelance its way through your entire project folder.
## Embrace the Revert (Failure Is Just Another Data Point)
One of the most liberating aspects of this workflow is how it transforms failure from a source of late-night debugging sessions into a learning opportunity with a clear exit strategy. When you’re building incrementally and saving your progress regularly, failure becomes cheap — like failing at a video game level instead of losing your entire save file.

You can afford to experiment with ambitious solutions because you’re never more than a few minutes away from a known good state. This changes how you approach problems entirely. Instead of being paralyzed by the fear of making the wrong choice (and then spending hours trying to make that wrong choice work), you can try the most promising approach and see what happens.

Your AI assistant becomes an excellent partner in this process because it doesn’t have an ego attached to any particular solution. It’s perfectly happy to help you try approach A, then cheerfully revert and try approach B with equal enthusiasm. This creates a safe environment for experimentation that actually leads to better solutions, rather than the first solution that technically works.

The key is recognizing when you’re in an error loop — that frustrating state where you and your AI are both trying to fix something that’s fundamentally broken, generating increasingly complex solutions to a problem that could be solved by starting over. When you find yourself three levels deep in debugging a fix for a workaround to a hack, it’s time to cut your losses and revert.
## Remember: You’re Still the Architect
Despite all the workflows and best practices, the most important thing to remember is that you’re still the one making the fundamental decisions about what to build and how to structure your application. Your AI assistant is incredibly capable, but it’s not the project manager, product owner, or lead architect — you are.

The best development sessions feel like pair programming with a colleague who has infinite patience, a vast knowledge base, and no opinions about what you should have for lunch. Your AI can suggest approaches, identify potential issues, and help implement solutions, but the creative vision and final decisions remain yours.

This is actually a feature, not a bug. The goal isn’t to write code faster or to let AI do all the thinking — it’s to build better software with less frustration and more confidence. The practices described here create a development environment where you can focus on solving interesting problems rather than fighting with your tools or drowning in technical debt of your own making.

Don’t let the impressive capabilities of AI assistants fool you into thinking they can replace good judgment, clear communication, and thoughtful planning. They’re tools to amplify your abilities, not replace them. Use them to build software that not only works but makes sense — software that you’re proud of, that’s maintainable, and that solves real problems elegantly.

The real promise of AI-assisted development isn’t just better code — it’s a better way of thinking about code. And honestly, in a world where software complexity keeps growing and deadlines keep shrinking, that might be exactly what we need to stay sane.