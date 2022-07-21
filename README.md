### nodejs base node:14.16.1

### Container execute
docker run -d -it --name node -p 3000:3000 -v /Users/lune/Documents/GitHub/nodejs:/app impelfin/nodejs 

### Container shell connection
docker exec -it node /bin/bash
