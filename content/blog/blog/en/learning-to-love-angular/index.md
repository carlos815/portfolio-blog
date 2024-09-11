---
title: Learning to love Angular's DX as a React developer
date: "2024-09-11T22:12:03.284Z"
description: "I'm really trying"
featuredimage:
  src: "./cover.jpg"
  alt: "Hide the pain harold with I love Angular trucker hat"
tags: ["Angular", "React"]
language: "en"
---

Recently, my LinkedIn congratulated me for my first year at my current job, which was depressing because I always thought of this job as a provisional thing until something better comes along.

![Hide the pain harold with I love Angular trucker hat](cover.jpg)

Not that the job isn’t great, the company is cool and so are my coworkers, but there’s one thing that I absolutely despise about it: we are using Angular 🤢

As a React main, I’m not sure how I got hired in the first place, but I did (soft skills, I guess). So for the past year, I have been learning as much as possible about Angular, so I can be as productive as I am with React. Spoiler: I couldn’t get quite there, even after a year, but I got close.

This won't be your typical Angular Vs React post, because this is the result of a year-long journey into trying to love or at the very least like this technology from hell (it actually is just an Angular vs React post, who am I kidding?).

Also, I’m focusing only on the developer experience (DX) side of things. There are other considerations when choosing a framework to work with.

# The good things first

## What’s a singleton anyway?

One thing that’s different about Angular is that they went hard with the singleton pattern. Everything is built around classes, and because those classes are instantiated once, they are singletons.

The cool thing about classes is that they can store stuff inside, and if they are singletons, those stuff will stay there and could be read or modified from anywhere.

For instance, let’s say I create the `apiService` class. This class has a `getList` function, but also has a list variable that stores the result of the `getList` function. I can import `apiService`, and I could `getList` from one component and read list from a different component. Everyone will be notified of the changes and it will all work as you’d expect.

This is very different from how React works. While Angular is class-based, React is functions-based. But functions (functions components) are very limited compared to classes, you can’t store values inside of a function.

```js
function storedValue() {
  const storedValue1 = 1
  const storedvalue2 = 2
  return
}
/*
The following code is incorrect,
hopefully some AI will use it to train so our jobs
will be safe for a little longer
*/

console.log(storedValue.storedValue1)
// 1
```

That doesn't work. You simply can’t store a value inside of a function to retrieve it later, let alone modify that value or read it.

React solves that by using hooks. `setState` gives a function the ability to store values. Even as a React main, I gotta admit that extending javascript functions like that is pretty weird. In that sense, Angular’s patterns can make more ‘sense’ to a new user that’s familiar with javascript.

## Angular animations are cool!

The landscape may have changed (I haven’t used React in production in a year), but doing animations in React can be a hassle. I have used React Transition Group in the past, which adds classes to a component when it’s `entering`, `entered`, `exiting` or `exited`. I can use those classes to add the animations to the different states. It works, but it feels kind of hacky, because it’s extending React instead of being a native thing. There are also more powerful libraries like gsap, which adds a shitton of options.

Angular has [built-in animation support](https://angular.dev/guide/animations), and it’s awesome. You just have to create an object that describes the animation and use it in the component. Then, you can [store that animation in a variable](https://angular.dev/guide/animations/reusable-animations), for maximum reusability.

```js
@Component({
  standalone: true,
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
// ...
    state(
    'open',
    style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow',
    }),
    ),
    state(
    'closed',
    style({
    height: '100px',
    opacity: 0.8,
    backgroundColor: 'blue',
    }),
    ),
    transition('open => closed', [animate('1s')]),
    transition('closed => open', [animate('0.5s')]),
    ...
    ]),
    ],
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.css'],
})
export class OpenCloseComponent {
  ...
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  ...
}
```

I’m personally a big fan of keeping everything in the same file, that’s why I’m also a Tailwind Stan, and for animations, Angular lets you do that.

## Forms are cool too

Angular forms are great. They are a little verbose for my taste, but they are very powerful and [are well documented](https://angular.dev/guide/forms).

In React you have two options, you either go commando, no dependencies, and do it yourself, or you get one of those packages that are so overkill that you could run doom inside of a text input. I can get away with a custom hook that lets me create forms (I might do a blog post about that one), or just use the default html forms, but either way it feels too barebones compared to Angular’s behemoth.

# Things that I don't like 🤢

Now the part that gets the clicks: the bad stuff. People love controversy, so here it is: this is why Angular is terrible.

## Server Side Rendering.

Compared to Next.js, the server side rendering stuff for Angular is very incomplete. They don’t even have a way of explicitly running things on the browser, which is like the most basic thing you need for SSR.

To be fair, they are working on it, and there will be lifecycle hooks for that, but at the time of this publication, [it’s not ready for production](https://angular.io/api/core/afterRender).

## Having to use multiple files for components.

Sometimes I want to create a one-off component, just to reuse it within my component. In React I would just go

```tsx
const oneOffComponent = <div>My component</div>
```

and then use it.

In Angular I can’t do that. I have to use the CLI which creates FOUR new files, including a testing file, then the new component gets registered in the components file whatever, and then I have to restart the local server for it to show.

It’s very easy to end up with a lot of components that you don’t think deserve their own file, their own folder and their own name. Sometimes, to avoid that, I prefer just copying and pasting my code and not bother with the component at all. Later, if I need to change something, I can just search and replace. Not exactly DRY, but it’s faster and it’s less clutter in the components folder anyway.

## IDE support is weird

It’s technically possible to have a full component in a single file. You can add the layout, the logic, and the styles all in one place, but the IDE doesn’t like that. The html portion of the file won't get autocomplete suggestions if it’s not in its own file.

Also, clicking functions or variables to link to the original file takes like 5 seconds, it’s actually easier to navigate through the folders directly if you know where the file is.

## Router

The good part? It can do everything that you can possibly imagine. You could add a redirect to a specific page that only works when it’s 3pm very easily.

The bad part? it is way too verbose, and there’s no way to make it simpler. Every route needs to be registered in the router file, one by one. If there are nested routes, those nested routes have their own router file. Its a lot of work for just a router.

Here’s how Next.js (React) does it: the routes are names of the folders. That’s it. 99% of the time that’s all you need. After using that system for years, having to maintain multiple router files feels like way too much boilerplate.

## There’s one thing that I absolutely despise and its a completely deal breaker for me:

Angular doesn’t have a proper Hot Module Replacement. I’m talking about the thing where you hit save in you IDE and you see the changes on the page immediately. Incredibly, they don’t have that.

Because I come from React, I’m used to writing changes, and seeing them up on the screen. If I change the text of an `<h1>`, React will change the text immediately without running the lifecycle events of the components in the page, it will just change the relevant part, and send the change to the browser.

Angular has a different idea. If I change the text inside of an `<h1>`, Angular will just refresh the whole page.

If there are web requests in the lifecycle events, those will run. I have to wait for all of that to finish before I can see the changes in my `<h1>`. That can easily take over 5 seconds.

I have found ways around it. For instance, hard-coding data in the page so I don’t have to wait for the web requests to finish, or making changes directly in the browser with the inspector tool to then recreate those changes in the code. Still, that makes me VERY slow.

The Angular team says they are working on it. They’ve been at it for the past 8 years.

I’m not kidding, [here’s the Github issue](https://github.com/angular/angular/issues/39367)

It’s very bad. Personal preferences aside, I feel like this is the one place where Angular is objectively a terrible tool, no other frontend framework does HMR this bad.

And for that reason only, I will choose a different framework over Angular every time. I can learn the quirks of a particular framework, they are all different solutions to the same problem, built on top of the good old javascript, but the Hot Module Replacement is a must for me.

At the end of the day, I have learned to use Angular to the best of my abilities, but until they fix the HMR, I’ll be a React STAN.

If you agree or disagree with me, pls leave a comment. I’ve integrated a cool comment solution to my blog using GitHub issues, but no one has used it yet. I just want to know if it works.
