# Personal Portfolio

This project is my portfolio web application, where you can see all my projects and blog articles in Serbian.

![Screenshot 2022-09-08 at 16.23.39 Large.jpeg](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/523612F5-CC78-4E37-9906-B64CC94ABB5D_2/YmKhGzpmm2TcQ9z1Ogj18O6f50J9QEoIgn7x8s8TN5sz/Screenshot%202022-09-08%20at%2016.23.39%20Large.jpeg)

## Built with:

- Next.js
- React
- TypeScript
- TailwindCSS
- Headless UI
- React Query
- GitHub GraphGL API (Octokit)
- Markdown It

## GitHub GraphGL API

Because the place where I put all my work and project is GitHub, I don't want to add content on both my portfolio website and GitHub manually. I came to the idea that I could use GitHub as a data source for my portfolio. Maybe it's not the best, but it seems practical to me. So, I found Octokit on StackOverflow.

I define API endpoints in my Next.js project that collect data from GitHub and returns object fulfilled with desirable data. To this point, I was not too fond of GraphGL, but after a while, I fell in love with it.

I fetched only pinned repository data on the index page with React Query (also used to cash data).

![Screenshot 2022-09-09 at 20.06.02 Large.jpeg](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/07F671A0-2E8B-48F2-AC47-4E890D904099_2/S9Ol5YRVmvruwW48vWzLjV3X4UovYbEEBxd20SnL4Jcz/Screenshot%202022-09-09%20at%2020.06.02%20Large.jpeg)

For Project page purposes, I implemented a hook that fetches all repositories with React Query.

![Screenshot 2022-09-09 at 20.07.00 Large.jpeg](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/3EA777E6-8E56-4945-A1CB-A1F5733A36FE_2/cgEHH5AfO21E42HyZEVQJIGTuysvkafrvKuljGg7Fi4z/Screenshot%202022-09-09%20at%2020.07.00%20Large.jpeg)

## Markdown to HTML

Like with GitHub, I didn't want to copy or paste my articles from one place to another. Because I write my articles in Craft (MacOS note-taking application with a feature to export markdown files), I found it interesting to write code that will collect all my markdown files and make a blog with them.

NPM packages that allow me to do that are 'Markdown It, 'Grey Matter,' and, of course, 'fs' for converting files to a simple string.

![Screenshot 2022-09-09 at 20.08.01 Large.jpeg](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/2B434757-18C9-4542-AF1B-859996BDF15B_2/nE2ZICKoXYaB6DZfmCEIwo3qYIHVdQeJIcQkIgx2me8z/Screenshot%202022-09-09%20at%2020.08.01%20Large.jpeg)
