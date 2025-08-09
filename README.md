# CSE-135-HW1
Repo for the CSE 135 first homework web server

## Server Obfuscation
To change the value of the header "Server", I used the security2 module of Apache 2.4. I cded into /etc/modsecurity and saw that there was the file modsecurity.conf-recommended in there. I cped this file to modsecurity.conf. Then I edited modsecurity.conf to add the line 'SecServerSignature "CSE135 Server"' at the bottom of the file. Then I restarted apache2.

I originally attempted using the mod_headers module, but to no avail. I assume that the Server header is considered one of the more important headers, resulting in its management by the security2 module rather than mod_headers.