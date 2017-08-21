---
layout: post
title:  "Managing margin styles of UI components"
intro: "Component based development seems to be a perfect way to build modern interfaces. Still when you start implementing them on the real project pages you will usually face a problem with managing offsets between the components you added to the page. Let's check some ways of handling it in the most efficient way."
date:   2017-05-12 10:38 +0300
tags: React CSS Layout
---

Nowadays almost every developer comes to component based development when he is involved into building website interfaces professionally.
The code becomes way more structured and easy to understand when you split everything into separate blocks which could work as intended in any context.
They care only about functionality provided by themselves and don't affect surrounding elements.

However there is a common problem of connecting this components together when you're building the real project - each page would usually have different cases of components usage with various margins between them.
So the main question is where to store the styles for these margins. Based on my experience, I prefer using these 3 approaches, depending on the project codebase:

## Margin styles in routes

The easiest way to manage margins is to wrap components in some nodes with local css classes that will handle margins for this page.
Either you can add those classes to the root element of the component, but in some cases that can possibly affect component base styles.

This method is likely the first one that comes to mind, still all of the layout styles get copypasted a lot.
So the css file grows bigger and you should be aware of bugs related to similar layout margins on different pages.

{% gist BananaBobby/aa8fd3590c31cdefafc386afc369cc45 %}

## Atomic classes for margins

A bit of more organized approach for implementing margins is adding atomic classes based on project's grid layout.
It's kinda similar to the previous method as you have to make wrappers with these classes or add them to your component class list.
However you'll have your margins stored under the same names and they're easy to read if written properly.

> Note: The code becomes much more scalable if you would have base margin size like 4px and further name your classes as a multiplier values of your base size. `margin-bottom-2` or `mb3`, for example.

{% gist BananaBobby/e7d218e798b18f8ba0242b2422cf06d1 %}

## Component that manages margins

As my daily development is connected with React development, my personal favorite method is a component, that manages margins of its children.
Though it has its own boundaries - the major one is that it's mostly usable when you render a list of components.
So if you have some complex layout of components on the page, you will mostly make some column grid components as well.
On the other hand this method simplifies working in situations when you have a list of components that need offsets between them but none of the outer ones.

For the better understanding of the concept I'll add a gist of React version of the component:

{% gist BananaBobby/51d2a17d551268e78a43f278c84d977a %}

All 3 of the methods are quite usable in real projects and try not to get stuck on using just one of them. Find which of them suits best for your own situation, but keep all of them in mind.
