# CSE-135-HW1
Repo for the CSE 135 first homework web server

## Auto Deployment to Web Server
On my server, I created a bare repo clone of my GitHub repo. Then I set up a GitHub workflow (located at .github/workflows/main.yml) that pushes from GitHub to the bare repo. When a push occurs, the post-receive hook script runs, which I editted to write all the pushed changes to my site's public_html directory.

## Server Obfuscation
To change the value of the header "Server", I used the security2 module of Apache 2.4. I cded into /etc/modsecurity and saw that there was the file modsecurity.conf-recommended in there. I cped this file to modsecurity.conf. Then I edited modsecurity.conf to add the line 'SecServerSignature "CSE135 Server"' at the bottom of the file. Then I restarted apache2.

I originally attempted using the mod_headers module, but to no avail. I assume that the Server header is considered one of the more important headers, resulting in its management by the security2 module rather than mod_headers.