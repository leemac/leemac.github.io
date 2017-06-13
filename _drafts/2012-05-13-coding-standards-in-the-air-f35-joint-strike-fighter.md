---
layout: post
title: Coding Standards in the Air
---

Every serious software company has some sort of coding standards. Some have them documented in lengthy pages, others have standards that are absorbed from the industry and adherence to those standards may not be so strictly enforced. In the air however, especially with firepower on-board, the standards have to be extremely well thought out and documented. They save lives and prevent catastrophe in the event a missile gets launched prematurely.

![The F35 Striker](/images/posts/f35-joint-strike-fighter/f35.jpg)

Today on Hacker News, someone posted a very interesting document that details the strict guidelines a developer must follow when designing fight jet systems. [The F-35 Joint Strike Fighter Coding Standards Documentation (800.5 KB)](http://www2.research.att.com/~bs/JSF-AV-rules.pdf), dated 2005, was publicly released and contains some valuable insight to a different world of coding standards.

Most of the rules apply to most other industries and their programming standards. Naming conventions, object lifetime and readability suggestions are applicable to most languages. Some others, such as no exception handling, no recursion and one return point per function are understandable.

Here are some cool highlights from looking through the document:

- C++ exceptions shall not be used (i.e. throw, catch and try shall not be used.)
- The public, protected, and private sections of a class will be declared in that order (the public section is declared before the protected section which is declared before the private section).
- When declaring and defining functions with more than two parameters, the leading parenthesis and the first argument will be written on the same line as the function name. Each additional argument will be written on a separate line (with the closing parenthesis directly after the last argument).
- Functions will have a single exit point.
- Functions shall not call themselves, either directly or indirectly (i.e. recursion shall not be allowed).

No recursion must be a preventative measure against a stackoverflow which I’m willing to bet most of us have done that at one time or another. One return point helps maintenance and keeps complexity down. No exception handling forces the developer to know his code, he can’t rely on a lazy “fail safe” when the environment can’t afford one.

All in all it's really not as strict and I expected!
