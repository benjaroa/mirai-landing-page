# mirai nuc

## SSH

### Instalación

- Install the OpenSSH server package: `sudo dnf install openssh-server`
- Start the SSH service: `sudo systemctl start sshd`
- Enable the SSH service to start on boot: `sudo systemctl enable sshd`
- Check the status of the SSH service: `sudo systemctl status sshd`
- Connect to the remote system using SSH: `ssh username@hostname`
- Exit the SSH session: `exit`

### Conexión

```sh
# check conection
ping 192.168.2.116

# connect
ssh miraiprintserver@192.168.2.116

> password: mirai2022
```

### Revisar estado de las impresoras

```sh
~/Documents/check-printers.sh
```

## Fake monitor

> https://gist.github.com/chitholian/9cac41d22b76364360429cc2a5ffa681
