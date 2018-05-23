# LED Raspberry PI Testing

## Installation

```sh
$ sudo npm install --unsafe-perm
```

## Issues with NPM install

```sh
$ sudo npm rebuild
```

## Stop the App
```sh
$ ctrl + c
```

## Shutdown PI
```sh
$ sudo shutdown -h now
```

## Restart PI
```sh
$ sudo shutdown -r now
```

## Remove Folder
```sh
$ sudo rm -rf [folder-name]
```

## Clone GIT Repo
```sh
$ git clone https://github.com/...
```

## check directory
```sh
$ ls
```

## change directory
```sh
$ cd ..
```


## update wifi password settings
```sh
$ sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
```

Then add the following.  The higher priority number will try to connect first.

```js
network={
    ssid="testing"
    psk="password"
    priority=2
    id_str="work"
}
```

## restart wifi

```sh
$ /etc/init.d/networking restart
```


## check ip address
```sh
$ hostname -I
```

## check wifi name
```sh
```



## Running the App

 Note that everyone must be on the same network/WiFi. `Chrome` is the recommend web browser.

> `Will run on `http://[ip_address]:3000/` 
