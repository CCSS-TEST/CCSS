
#**FOE**

FOE is the master repository intended to contain the core functionality and some tools needed for the implementation for  **APPRIZ**  in your own entity. 

You can do any kind of change in the appearance of the APP as well as update the code to the latest version that we commit on this repository (FOE) without altering their changes.

To implement the project and make changes for your organization, you need to follow the below steps:


 - Fork this repository
 - Clone the fork
 - Make changes, commit and pull

To keep your fork up-to-date with the upstream repository, you need to follow the below steps:

 - Syncing a fork


----------


####**Fork this repository**
Forking a repository is a simple process. You only need to go at the top-right corner of the page and click Fork.

Right now, you have a fork of the FOE repository, but you don't have the files in that repository on your computer. Let's create a clone of your fork locally on your computer.


----------

####**Clone the fork**

 1. On GitHub, navigate to your fork
 2. In the right sidebar of your fork's repository page, click to copy the clone URL for your fork 

     ![enter image description here](https://help.github.com/assets/images/help/repository/clone-repo-clone-url-button.png)
     
 3. 	Open Terminal and go to the folder that you want to save the files
 4.   Type git clone and then paste the URL you copied in Step 2. It will look like this
<pre>$ git clone https://github.com/YOUR-USERNAME/FOE</pre>
 5.  Press Enter. Your local clone will be created 


----------

####**Make changes, commit and pull**

When you have made changes over your local files (cloned project) and want to synchronize your local folder with the fork must follow these steps:

 1. Go to the console and go to your clone project folder
 2. Type  
	<pre>$ git status</pre>
 That command shows you the files that were changed

 3. Add the changes whit the command
	<pre>$ git add –all</pre>
	
 4. Confirm your changes with: 
	<pre>$ git commit –m “message”</pre>
	
	
 5. At this point, your changes were realized in your local computer. To make the changes effective in the fork you need to type: 
 6. <pre>$ git remote add origin https://github.com/{USERNAME}/FOE.git</pre>
 7. <pre>$ git pull origin master</pre>


----------
####**Syncing a fork**

Sync a fork of a repository to keep it up-to-date with the upstream repository.

 1. Open terminal
 2. List the current configured remote repository for your fork.
	 <pre>$ git remote –v</pre>
 3. Specify a new remote upstream repository that will be synced with the fork
	<pre> $ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git</pre>
 4. Verify the new upstream repository you've specified for your fork with 
	<pre>$ git remote –v</pre>
 5. Fetch the branches and their respective commits from the upstream repository
	 <pre>$ git fetch upstream</pre>
 6. Check out your fork's local master branch
	<pre>$ git checkout master</pre>
 7. Merge the changes from upstream/master into your local master branch
	<pre>$git merge upstream/master</pre>

			
