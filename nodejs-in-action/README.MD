### Container execute
docker run -d -it --name node-in-action -p3000:3000 -v /Users/lune/Documents/GitHub/nodejs:/app node:14.16.1

### Container shell connection
docker exec -it node-in-action /bin/bash
