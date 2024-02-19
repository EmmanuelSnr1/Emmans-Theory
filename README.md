# Emmans-Theory

My personal Portfolio Page

Commands to deploy

npm run build
firebase deploy

Website Link
<https://emmanstheory.web.app/>

# Todo

- Remember to update CV
- Start a blog
- Add additional skills to my skills section

<<<<<<< HEAD
=======

## Getting started to checking out and using this project

1. Get nvm/ node version manager installed.
2. install firebase by creating a firebase account and running an npm install to configure it locally
3. Use nvm to install node version 18.13.0 locally for the packages to be able to be confifured properly
4. If possible, delete the build, node modules and package-lock.json
5. run npm install to install the needed packages afresh .
6. There is also an Extra info readme in the File's directory, be be sure to make good use of it.

The rest should be easy enough to manage.

Happy coding !!!!!!!!!!!!!!!!!!!!!

>>>>>>> ca6fdcd1840e21e134c7b0ef03e0e18cee050bfa
<!-- LF vs. CRLF:

LF (Line Feed) is represented as \n and is used for line breaks in UNIX-based systems.
CRLF (Carriage Return and Line Feed) is represented as \r\n and is used for line breaks in Windows.
The Warning Explained:

Git can be configured to automatically convert LF to CRLF when checking out code and convert it back to LF when committing. The warning you're seeing indicates that Git is performing this conversion.
"LF will be replaced by CRLF": This means that when you check out files on your Windows system, LF will be replaced with CRLF.
"The file will have its original line endings in your working directory": This is an assurance that, in your local working directory, the file will still have the LF line endings.
Why It's Relevant:

This conversion ensures that files maintain the correct line endings on both UNIX-based systems and Windows. If not managed properly, different line endings can cause unexpected behavior in applications.
Handling the Warning:

If you want Git to handle line endings automatically, you can set the core.autocrlf configuration:
On Windows: git config --global core.autocrlf true
On Linux/Mac: git config --global core.autocrlf input
If you already have a repository and want to normalize the line endings, you can do:
bash
Copy code
git add --renormalize .
<<<<<<< HEAD
git commit -m "Normalized line endings" -->
=======
git commit -m "Normalized line endings" -->

# Pay atttention to CRLF & LF

Depending on the kind of device you are using to contribute to this project.
Mac or Windows
>>>>>>> ca6fdcd1840e21e134c7b0ef03e0e18cee050bfa
