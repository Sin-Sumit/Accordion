# Accordion
- Accordion project is similar to FAQ's section which we all know and familiar with that from many websites.
- This project is implemented using ReactJs, and follow the contribution steps for making contribution to this project.

# Contribution Steps

## How to Contribute

- Take a look at the Existing Issues
- Fork the Repo and create a Branch for any Issue that you are working upon.
- Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.
- Add Screenshots to help us know what this is all about.

## How to make a Pull Request

**1.** Fork the repository by clicking on the <img src="https://img.icons8.com/ios/24/000000/code-fork.png"> symbol at the top right corner.

**2.** Clone the forked repository.
```
   git clone https://github.com/your_user_name/<repo_name>.git
```

**3.** Navigate to the project directory.
```
   cd project directory
```

**4.** Create a new branch:
```
   git checkout -b YourBranchName
```

**5.** Make changes in source code.

**6.** Stage your changes and commit

```
   git add .
```

```
   git commit -m "<your_commit_message>"
```

**7.** Push your local commits to the remote repo.

```
   git push origin YourBranchName
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

**9.** If anyone contribute to this repository, then the changes will not reflect in your local repository. For that:

**10.** Setup a reference(remote) to the original repository to get all the changes from the remote.
```
   git remote add upstream https://github.com/Sin-Sumit/<repo_name>.git
```

**11.** Check the remotes for this repository.
```
   git remote -v
```

**12.** Fetching from the remote repository will bring in its branches and their respective commits.
```
   git fetch upstream
```

**13.** Make sure that you're on your master branch.
```
   git checkout master
```

**14.** Now that we have fetched the upstream repository, we want to merge its changes into our local branch. This will bring that branch into sync with the upstream, without losing our local changes.
```
   git merge upstream/master
```

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

### Will Add Soon.

Work in Progress pull requests are also welcome to get feedback early on, or if there is something blocked you.

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
