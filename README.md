# Search Books from Open Library API

ReactJS`s application that looks for books from the API

- the application consists of a search box where the title of the book is entered.
- a second after entering the last character of the text in the search line, the search for books should automatically
  begin. If within a second the user enters something else, the timer should be reset.
- below the search bar, a list of snippets of found books is displayed, consisting of an image with a cover, book title,
  author
- when you click on the snippet of a book, more detailed information is displayed in the modal window: an enlarged image
  with a cover, title of the book, author, date of publication, publisher, ISBN of the book.

## Demonstration:

you can see the project:
https://book-app-x4aekx.vercel.app/

---

![Books app image](https://github.com/x4aekx/book-app/raw/main/public/books-app.gif)

---

## Run project:

for run project

1. Clone repository
   `git clone https://github.com/x4AEKx/book-app.git your-folder`
1. Type
   `yarn start`

for run project

1. Type
   `yarn build`

## Used technologies:

- React (hooks)
- Redux (hooks)
- Redux-thunk
- third party api: Open Library API
