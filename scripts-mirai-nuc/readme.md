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
/usr/local/bin/check-printers.sh
```

### Configurar para arrancar firefox al abrir el pecé

Crear un desktop-entry file en el archivo `~/.config/autostart`:

```sh
[Desktop Entry]
Name=Fudo
Comment=Fudo
Exec=firefox -new-tab 'https://app-v2.fu.do/app/'
# Exec=sh -c "/usr/local/bin/check-printers.sh & firefox -new-tab 'https://app-v2.fu.do/app/'"
Type=Application
Terminal=true
Categories=Test
```

## Fake monitor

> https://gist.github.com/chitholian/9cac41d22b76364360429cc2a5ffa681
