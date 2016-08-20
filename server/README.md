# nomjs search website: server

Start the server:

```
$ GITHUB_OAUTH_CLIENT_ID=nomSearchWebclientId GITHUB_OAUTH_CLIENT_SECRET=nomSearchWebclientSecret docker-compose up
```

Optional:

To inspect Redis from host machine, install a Redis GUI such as [Redis Desktop Manager](https://github.com/uglide/RedisDesktopManager), then connect to Redis by specifying:

Host: Get this from `docker-machine ip`

Port: 6479
