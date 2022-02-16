---
title: Getting Started with Version Control
author: Mary
date: 2022-02-13
---

Git is a difficult subject to tackle for self taught web developers who didn't learn to code with a team. If you've always worked alone and want an explanation of how to get started with Git, this tutorial is for you.

### Goals

- learn what Git actually is
- create a local Git project
- connect local git to remote Github repository
- how Git is useful when coding projects

## What is Git?

**Git** is a version control system (VCS) for code. It is used to keep track of versions of a project and make it easy for a developer team to work together on a project by using Git branches. **Git** creates a local git repository on your local machine, hidden folder that tracks your commits over time. **Github** on the other hand is where you can create a remote repository and then push your local commits to the remote to be stored on a server.

**Git** by itself has nothing to do with uploading files, but similar to an FTP you can use Git on a command lind to move files from your local computer to a server. If you don't know an _FTP_ stands for File Transfer Protocol, it processes files to upload to a server.

`Local Environment -> Git Repository -> Live Server`

You can push files up to a server as well as pull files down from a server onto your local machine.

### GUI for Github

_Tower, SourceTree, Github_ software are all GUIS, Graphical User Interfaces. A GUI is a program that utilizes graphics to create a user-friendly experience. They can help beginners to learn, but it is better to start off using the command line. So you can become more confident in your skills as a developer.

## Installation

So how do you install Git? Since I work on a _Mac_ I will discuss the steps for that oeprating system. Sadly I am not as well versed on a Windows machine.

- Open the Terminal and type `git --version`, press enter. If a version number is returned, Git is already installed. If something along the lines of `git: command not found` shows up, you need to install [Xcode](https://developer.apple.com/xcode/) from the App store.
- In XCode you want to install **Command Line Tools**. Now you can use Git through the Terminal

## Create a Local Project

The basic commands you will need to know to get started using the Command Line and Git:

- `pwd` **Print Working Directory** - shows the current directory you are working in
- `ls` **List Directories** - list all the files and folders in your current directory
- `cd` **Change Directory** - change into another directory
- `mkdir` **Make Directory** - create a new directory

When you open terminal you will start off in your main directory. To begin you need to confirm where you are in your computer file structure, create a new folder called new-project, and then list your directories.

```bash
$ pwd
$ mkdir new-project
$ ls
```

You should now see the **project-new** directory that you just created. You can also do this using the GUI of your operating system too, but it is essential to learn the command line. You then will have more power over your computer.

Now move into the newly created directroy.

```bash
cd new-project
```

Once you are in the folder where your local project and Git repository will live, you can begin using git commands. So what are some basics Git commands?

### Basic Git Commands

- `git config` - Configure Git
- `git init` - Initialize Git repo
- `git status` - Check the status of a Git repo
- `git add` - Track files
- `git commit` - Commit the tracked files to the repo
- `git push` - Upload files
- `git pull` - Download files

All the commands that we do will only apply to your local git environment. In order to get your files onto the Git server in your remote repo, which we will set up next, there is one important global step to take.

You need to configure your global Git account

```bash
$ git config --global user.name "Firstname Lastname"
$ git config --global user.email username@email.com
```

Once that is done check again that you are in the correct project folder and then initialize the Git repository

```bash
$ git init
```

Awesome Job! Now you have an empty Git repo on your local computer. The next step is to hook up the local directory with the remote that we still need to make on [Github](https://github.com/).

## Create an Online Git Repo

As previously mentioned [Github](https://github.com/) is one of the most popular locations to host repositories. So make an account there if you don't have one already.

Once the account is made you can create a new repository by clicking _Add New Repo_ near top right corner of page. Do not initialize with a README.md at this point. When you are done you should see `github.com/githubacc/project`.

## Connect Local to Remote

Now that we have a remote repo, we can hook up the local directory with the repo that we just made on github.com.

```bash
git remote add origin https://github.com/you/project
```

Now you can add a file to the **new-project** directory. I would recommend first creating a _README.md_ file. If making a website then you can also start by adding an **index.html** and **style.css** file.

Next it is a good idea to check the status of your local git repository.

```bash
$ git status
# On branch master Initial commit Untracked files:
# (use "git add ..." to include in what will be committed)
# index.html style.css nothing added to commit but untracked
# files present (use "git add" to track)
```

Now Git knows that there are a certain number of files in the directory, but they are not yet part of the Git repo - Git needs to start tracking the files. To **track** the files use the **add** command, which adds all files to the repo.

```bash
$ git add .
```

Once you check the `git status` again you notice that the files are all green now instead of red. We still need to **commit** the files before we can push them to the remote server.

Commit tracked files to the master branch

```bash
$ git commit -am "Initial commit"
```

With this command, all the files (`-a`), include a message (`-m`), listed here ("Initial commit"). All the options in this command are mandatory.

> Remember to add a message when you commit your files. There are best practices for commenting in Git. For one they should be in present tense and you should group commits where you performed a similar update. If you forget to add a message, you will end up in a strange screen where you can no longer enter any commands, press ESC and type `:q!` follwed by **ENTER**

Finally we can push all the files to the Git repo at github.com

```bash
$ git push origin master
```

Terminal will prompt you to enter your Github username and password. Now you can refresh the Github page. You should now see all your files hosted on Github.com! Congrats, success!

## Push to Live Server

Your files are being tracked by Git and saved remotely to Github. Now if you want your site to be uploaded to the web you will need to be hosted somewhere. To upload your files to that host's server.

When you upload to a server via FTP you will need to have the following information from your host provider:

- Host: ftp.domain.com
- Username: user
- Password: **\*\***

You will enter your credentials into an FTP GUI such as **FileZilla** and you will be in. **SSH** (Secure Shell) is very similar - in the command prompt you will use the ssh command to enter the host. You host should show you your SSH settings by your FTP settings.

```bash
$ ssh username@ssh.domain.com
```

Then you will be prompted to enter your password. Now you will be into the host server!

Now you can make a folder in your host's directory. It can match the name of your Github repo or not. Once you're in, you will follow many of the same steps as before, except this time we will be _pulling_ from Github, instead of pushing (uploading) from local to Github.

Remember since you are connected to the host server you don't currently have access to your local files. So in the server you will

- initialize a Git repo
- add remote Git repo to origin master (branch): now called **main**
- Pull from the origin master (main branch)

```bash
$ git init
$ git remote add origin https://github.com/you/project.git
$ git pull origin master
```

Now all the files you had in your Github remote repo will be host's server and live on the web!

I hope this quick and simple tutorial helped you get a start on how essential **Git** is to a developer's workflow and work environment!
