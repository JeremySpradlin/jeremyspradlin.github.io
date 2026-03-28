---
title: So You Wanna Data Science?
date: 2021-03-02
summary: A tutorial for setting up a basic data science environment
featured: true
---
![](attachments/Pasted%20image%2020260327231037.png)

You there! Yea you! So I hear you want to check out some of that new stuff all the cool kids around town have been talking about — some of that Data Science. You probably heard something about it, these wizards of data who work with black boxes to unlock the secrets of the universe. The only question you might be wondering is where do you even start?

Right here. By the time we finish this short article, we will have setup and configure a local Python virtual environment ready to do all the data sciencing you can handle (at least for getting started anyway). The first step to any new endeavor is understanding the environment you’re going to be working in, or as the case may be here, virtual environments, but we’ll get back to that momentarily. First let’s take a look at where most scary endeavors begin on a computer, the terminal.
### The Terminal
The terminal, command line, shell; these little windows that allow us to write and send instructions to the computer in any manner that makes sense can seem frightening to those less familiar with them, however with a little patience and practice, it doesn’t take long to get the basics down. All major operating systems will have a terminal program. (Indeed, some operating systems are ONLY a terminal) For those not familiar with terminals at all, you can read a crash course [here](https://code.tutsplus.com/tutorials/command-line-basics-and-useful-tricks-with-the-terminal--cms-29356).

I’ll be using a terminal program called [iTerm2](https://iterm2.com/) on my MacBook Pro. I’m also using [Powerlevel10k](https://github.com/romkatv/powerlevel10k), a ZSH theme known for it’s flexibility and customization options. Customizing your terminal can be a daunting process for those who are new to them, so if that’s you, don’t worry about all the bells and whistles. You can make do with the basic Terminal program that comes with your operating system.
![](attachments/Pasted%20image%2020260327231116.png)
### Package Managers
For the truly new to a terminal environment that might sound like a daunting topic, but I promise it’s not too bad here. Think of a package manager as like a program that gives you access to other programs. On MacOS that would be Homebrew. You can find instructions on how to install it from their [homepage](https://brew.sh/).

Once installed, you need to install PyEnv, a software tool for installing different versions of python. The best way to think of PyEnv is like a Python version manager, allowing you to install different versions on your system simultaneously. This is important because as you develop and write code, different projects will require different versions of Python.
```
brew install pyenv
```
This will make lots of things happen. If you pay attention, you’ll see a lot of drinking references flash across your terminal as Homebrew breaks open casks, and makes pours, and all sorts of other shenanigans until eventually the party will stop, and you’ll be left looking at your cursor again. Test to make sure pyenv was installed correctly with the following:
```
pyenv
```
Assuming everything has gone well so far, you should be greeted with the following output, giving us information about using pyenv.
![](attachments/Pasted%20image%2020260327231242.png)
If this is your first time ever using a terminal, congratulations! You’ve now installed your first software tool in the command line! PyEnv is great because it allows the user (that’s you) to install and manage different versions of python on the same system. Typically from here you would go ahead and install a python version, but we can skip that part for now, as our next tool will install the latest version if there isn’t one already installed on your system.

Now let’s go ahead and install another package, pipenv, a tool that will help us create python environments to work in!
```
brew install pipenv
```
We are now ready to create our first python environment and do some of this data science we keep hearing about.
### Python Environments
One of the biggest challenges I had when first learning how to program in Python was learning how to deal with these things called virtual environments. Often tutorials will gloss over the topic, if they mention it at all, and I’ve found that it can easily cause more confusion than it should. Virtual environments are actually a pretty straight forward concept. They are simply a software created virtual environment that allows you to install different python packages for each python project you are working on. Simple right? Don’t worry, there are simpler ways to think about this for those that are entirely new to Python and might not be 100% sure of what we’re talking about.

Think of a Python virtual environment as like a box you can place your project in so that no matter what software packages you install while inside the box, they don’t interfere with anything outside of the box. This allows us to work on different projects in different boxes that have different software version requirements at the same time with no more extra work than a couple of lines in our terminal to switch from one environment to the other. Let’s go ahead and make our first one.
### Creating Virtual Environments with Pipenv
Creating a virtual environment is pretty straight forward process with pipenv. Follow the commands below to navigate to the directory you want to create your project in and create a virtual environment:
```
cd Your-Project-Folder  
pipenv install
```
Again, you’ll see some lines of text popup on your terminal window, and after a brief moment, you should see messages telling you you can activate the virtual environment with `pipenv shell` which will activate your terminal environment and will change how your terminal looks to something like below:
![](attachments/Pasted%20image%2020260327231426.png)
The important thing I want to point out here is the extra text at the right of the screen on my terminal line. That let’s me know that when I type in commands, I am typing them into my virtual environment rather than my general system. Now if you recall, I’ve made my terminal all nice and flashy, and your terminal will likely look different at this point, with the virtual environment name located at the left in parentheses.

You might also notice a couple new files located in your project directory. Specifically the `Pipfile` and `Pipefile.lock` . Don’t worry about these too much for now, as these are files for keeping track of which packages (and their versions) are installed in the virtual environment.
### Jupyter Notebooks: The Data Scientist’s Favorite Tool
Okay so it may not be every data scientist’s favorite tool, but it’s definitely one of the most important ones. to install it, we install it like we will any and all packages into our virtual environment:
```
pipenv install jupyter
```
Now this one will take a few seconds to complete, but once it’s done you can start the server and open a Jupyter notebook page with the following command:
```
jupyter notebook
```
![](attachments/Pasted%20image%2020260327231538.png)
There are those two files we mentioned. To start a new notebook, just click on the ‘New’ drop menu item towards the top-right, and select ‘Python 3’ for your kernal. You will see a new tab open with a new notebook named `untitled.ipynb` that you can now do all sorts of data sciencing in!
![](attachments/Pasted%20image%2020260327231607.png)
### Conclusion
Jupyter Notebooks are extremely powerful and are capable for too many things to cover here, but we can quickly see what it is and how we can begin to use them.

Your new notebook will start out with a single cell, a block that can be used to write code or [markdown](https://www.markdownguide.org/), a markup language designed for writing formatted text for the internet easier. In the image above, I used the first cell to write a brief congratulations message, and the second cell for the universal first line of code that every programmer knows and love. You can see that the output from that code is displayed in the space beneath the cell it was written in, and a new, blank cell is ready for writing new code or markdown in.

If you would like to see examples of Jupyter notebooks being used for all sorts of scientific work, this collection on their [Github repo](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks) has many great notebooks showing just how powerful this simple tool is. If you want to learn more about Jupyter Notebooks in general, [Towards Data Science](https://towardsdatascience.com/) has a fantastic article on them located [here](https://towardsdatascience.com/the-complete-guide-to-jupyter-notebooks-for-data-science-8ff3591f69a4).

I hope you have found this introduction useful. The world of data science is very large and things can get complicated before you know it, and this tutorial only scratches the surface of the technologies and applications that are involved. With time, patience, and most importantly practice and experimentation eventually things will begin to make more sense. There are many directions that a data scientists can go from this initial starting point, but the tools introduced in this article will be useful for moving forward in your journey learning more about our world of data.