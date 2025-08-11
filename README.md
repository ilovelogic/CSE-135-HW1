# CSE-135-HW1
Repo for the CSE 135 first homework web server

## Auto Deployment to Web Server
On my server, I created a bare repo clone of my GitHub repo. Then I set up a GitHub workflow (located at .github/workflows/main.yml) that pushes from GitHub to the bare repo. When a push occurs, the post-receive hook script runs, which I editted to write all the pushed changes to my site's public_html directory.

### GitHub Workflow
The Github action has 4 steps. 
 - First, it gets the code from my repo using actions/checkout@v4. 
 - Next, it calls on webfactory/ssh-agent@v0.8.0, which prepares the private SSH key (stored as a repo secret) to use if needed. 
 - Now it adds my server's IP address to known_hosts to avoid the question of whether or not we trust the server.
 - Then it executes git commands. It defines prod to be the bare repo. Then it performs a git fetch --unshallow and then a git push --force prod main.

## Server Obfuscation
To change the value of the header "Server", I used the security2 module of Apache 2.4. I cded into /etc/modsecurity and saw that there was the file modsecurity.conf-recommended in there. I cped this file to modsecurity.conf. Then I edited modsecurity.conf to add the line 'SecServerSignature "CSE135 Server"' at the bottom of the file. Then I restarted apache2.

I originally attempted using the mod_headers module, but to no avail. I assume that the Server header is considered one of the more important headers, resulting in its management by the security2 module rather than mod_headers.