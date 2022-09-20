# React-based Shopify’s craft theme

Hey there 👋, thanks for your interest in this repository. I created this project to keep my front-end skills like React, Redux, and styling sharp, along with strengthening my portfolio in order to improve my chances of landing a front-end role (yeah I’m tired of being a full-stack 🤓).

Since I’m no designer, I used a free Shopify template named [craft](https://themes.shopify.com/themes/craft/styles/default) as a blueprint for this project (All hail [Shopify](https://www.shopify.com/) and [Fable](https://fable.com/) 🖖).

## Folder structure

After an intensive investigation and a lot of trial and error, I came across an article by Brad Frost called “Atomic Design” which has an interesting way of approaching the art of creating design systems.

The rules can be applied to web development as well. Also, you can’t help but notice some of the similarities between this way of looking at different web compartments and the way of MVC.

So, in my mind

- Pages act like controllers in the MVC architecture
- Templates are like views in MVC
- Organisms that are state-aware components and act like ASP.NET’s view components (partial views + dedicated controllers)
- Molecules and atoms are like partial views in the MVC architecture

The folder structure of this project is based on this mental model, which helped me a lot when I wasn’t sure where to house a component.

## Naming

No, I don’t speak backward!😉 But I found this **“Yoda Style”** naming very helpful especially when we’re dealing with a large list of components.

Most of the time I know what I need eg. a list, a link, or … but I can’t remember the exact name of the component 😵. With Yoda named components, the type of component comes first (listProduct instead of productList), therefor all the components of the same type are next to each other which makes the task of locating components pretty easy.

### To be continued ...
