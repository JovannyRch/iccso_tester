

class Respuesta {
    constructor(cuerpo, valor = false) {
        this.cuerpo = cuerpo;
        this.valor = valor;
    }
}


var preguntas = [
    {
        pregunta: "/1.png",
        respuestas: [
            new Respuesta(`The zone needs to be installed.`),
            new Respuesta("The zone needs to be brought to the ready state."),
            new Respuesta("The zone needs to be uninstalled and reinstalled.", true),
            new Respuesta("The zone needs to be brought to the complete state."),
        ]
    },
    {
        pregunta: `You need to make sure that all of the software packages on your server are up to date. Without installing any updates, which two commands would display .my
        software updates that are available in the default Oracle repository?`,
        respuestas: [
            new Respuesta(`pkg list -u`, true),
            new Respuesta("pkg verify u `*'"),
            new Respuesta("pkg search u"),
            new Respuesta("pkg info r `*'", true),
            new Respuesta('pkg install nv'),
            new Respuesta("pkg update nv `*'"),
        ]
    },
    {
        pregunta: "/3.png",
        respuestas: [
            new Respuesta(`ipadm set-gateway 192.168.1.1`),
            new Respuesta("route add default 192.168.1.1", true),
            new Respuesta("ipadm set-default 192.168.1.1"),
            new Respuesta("dladm route-add d 192.168.1.1"),
            new Respuesta("echo 192.168.1.1 >/etc/gateway"),
            new Respuesta("echo 192.168.1.1 >/etc/defaultrouter", true),
        ]
    },
    {
        pregunta: `You want the system to generate an email notification each time one of the services has changed its state. Which option would send an email message to the
        system administrator whenever a service changes to the maintenance state?`,
        respuestas: [
            new Respuesta(`Use the setsc command in ALOM to enable the mail alerts to be sent to a specified email address whenever the fault management facility detects a service
            change to the maintenance state.`),
            new Respuesta(`Make an entry in the /etc/syslog.conf file to instruct syslogd to send an email alert when it receives a message from the SMF facility that a service has changed
            to the maintenance state.`),
            new Respuesta("Use the svccfg setnotify command to create a notification and send an email when a service enters the maintenance state", true),
            new Respuesta(`Use the scvadm command to enable the notification service. Set the g maintenance option on the netnotify service to send an email when a service enters the
            maintenance state`),
        ]
    },
    {
        pregunta: "How are operating system updates distributed in the Oracle Solaris 11 environment?",
        respuestas: [
            new Respuesta(`Updates are only available to customers with an active support contract. The updates are distributed through the My Oracle Support web portal and installed in a
            central location. All software packages are then updated manually from the command line using the smpatch command.`),
            new Respuesta(`Patches are download from http: //support.oracle.com either automatically or manually. All software packages are then updated manually from the command
            line using the smpatch or patchadd commands.`),
            new Respuesta(`Software updates are published as packages to a repository. All software packages are then updated manually from the command line using the pkg command.`, true),
            new Respuesta(`Software updates, published as packages to an OS image. All software packages are then updated manually from the command line using the pkg command.`)
        ]
    },
    {
        pregunta: "/6.png",
        respuestas: [
            new Respuesta(`He will get a "file not found" error, because the current directory is not in his seaech path.`),
            new Respuesta(` He will get a "file not found" error, because his home directory is not in his search path.`),
            new Respuesta(`The useradd script will execute, because jack is in the same directory that the script is located in.`),
            new Respuesta(`The command /user/sbin/useradd will execute, because it is the last match in the search path.`, true),
            new Respuesta(`The command /user/sbin/useradd will execute, because it is the first match in the search path.`),
        ]
    },
    {
        pregunta: `/7.png`,
        respuestas: [
            new Respuesta(`Host oracle does not have a valid host public key.`),
            new Respuesta(`Host oracle does not have a valid host private key.`),
            new Respuesta(`Host solaris does not have a valid host public key`),
            new Respuesta(`Host does not have a valid host private key.`),
            new Respuesta(`Host solaris is not configured for host-based authentication.`),
            new Respuesta(`Host oracle is not configured for host-based authentication.`),
            new Respuesta(` Host oracle is not running the ssh service.`, true),
            new Respuesta(` Host solaris is not running the ssh service.`)
        ]
    },

    {
        pregunta: `When speaking in an Oracle Support Engineer, you are asked to verify the version of the Solaris 11 build currently running on your system.
        Which command would display the Solaris 11 build version currently running on your system?
        `,
        respuestas: [
            new Respuesta(`pkg info all`),
            new Respuesta(`cat /etc/release`, true),
            new Respuesta(`cat /etc/update`),
            new Respuesta(`prtconf | grep i update`),
            new Respuesta(`pkg info entire`)
        ]
    },
    {
        pregunta: `/9.png`,
        respuestas: [
            new Respuesta(`The COMSTAR feature is not supported on the x86 platform. The feature is supported only on the SPARC platform.`),
            new Respuesta(`Use the iscsitadm command on the x86 platform when configuring an iSCSI target`),
            new Respuesta(`Install the storage-server group package on this system.`, true),
            new Respuesta(`Start the iSCSI target daemon on this system`),
        ]
    },
    {
        pregunta: `/10.png`,
        respuestas: [
            new Respuesta(`boot -s`),
            new Respuesta(`boot milestone none`),
            new Respuesta(`boot -m milestone=single-user`),
            new Respuesta(`boot -m milestone=none`, true),
            new Respuesta(`boot -m none`),
        ]
    },
    {
        pregunta: `/11.png`,
        respuestas: [
            new Respuesta(`You can kill a process only if you are root.`),
            new Respuesta(`You can kill only a process that you own`, true),
            new Respuesta(`You can kill the process only with the pkill command`),
            new Respuesta(`You need to kill the process with a stronger kill signal`),
        ]
    },
    {
        pregunta: `Your server has one zone named dbzone (hat has been configured, but not yet installed). Which command would you use to view all the options that were used to
        configure this zone?`,
        respuestas: [
            new Respuesta(`zoneadm list icv dbzone`),
            new Respuesta(`zones tat c summary dbzone`),
            new Respuesta(`zonecfg z dbzone info`, true),
            new Respuesta(`zonecfg icv dbzone info`),
        ]
    },
    {
        pregunta: `/13.png`,
        respuestas: [
            new Respuesta(`ipadm`),
            new Respuesta(`traceroute`, true),
            new Respuesta(`dladm`),
            new Respuesta(`snoop`),
            new Respuesta(`arp`),
        ]
    },
    {
        pregunta: `When upgrading an existing system from Solaris 11 Express to Oracle Solaris 11, what happens to the datalink names?`,
        respuestas: [
            new Respuesta(`They follow the default naming convention for the newly installed version.`, true),
            new Respuesta(`They maintain their names.`),
            new Respuesta(`They are called eth#.`),
            new Respuesta(` They are called el00g#.`),
            new Respuesta('They are left unnamed, to avoid conflicts, and need to be renamed after the installation process is complete.')
        ]
    },
    {
        pregunta: `/15.png`,
        respuestas: [
            new Respuesta(`boot L currentBE`),
            new Respuesta(`boot Z rpool/ROOT/currentBE`),
            new Respuesta(`boot a Enter the currentBE dataset name when prompted.`),
            new Respuesta(`boot rpool/ROOT/currentBE`),
            new Respuesta(`boot m currentBE`),
            new Respuesta(`beadm activate currentBE`, true),
        ]
    },
    {
        pregunta: `/16.png`,
        respuestas: [
            new Respuesta(`/etc/security/policy.conf /etc/passwd`),
            new Respuesta(`/etc/passwd /etc/shadow`, true),
            new Respuesta(`/etc/security /etc/passwd`),
            new Respuesta(`/etc/shadow /etc/passwd`),
        ]
    },
    {
        pregunta: `_________ serves as the interface between the SMF repository and the user to ensure that a consistent, picture of the repository is presented to the user.`,
        respuestas: [
            new Respuesta(`repository.db`),
            new Respuesta(`service manifest`),
            new Respuesta(`svc.startd`),
            new Respuesta(`svc.configd`, true),
        ]
    },
    {
        pregunta: `You are attempting to edit your crontab file in the bash shell. Instead of getting your usual vi interface, you are presented with an unfamiliar interface. In order to
        have your editor of choice-vi- what command must you type after exiting the unfamiliar editor?`,
        respuestas: [
            new Respuesta(`EDITOR=vi`, true),
            new Respuesta(`crontab=v`),
            new Respuesta(`crontab e v`),
            new Respuesta(`env`),
        ]
    },
    {
        pregunta: `You want to display the IP address assignments of the network interfaces. Which command should you use?`,
        respuestas: [
            new Respuesta(`ipadm show-if`),
            new Respuesta(`ipadm show-addr`, true),
            new Respuesta(`ipadm show-prop`),
            new Respuesta(`ipadm show-addrprop`),
        ]
    },
    {
        pregunta: `/20.png`,
        respuestas: [
            new Respuesta(`All package operations are performed in a new BE set as active on the next boot`),
            new Respuesta(`Do not create a new BE. The install, update, uninstall, or revert operation is not performed if a new BE is required.`),
            new Respuesta(`If a BE is created, do not set it as the active BE on the next boot`),
            new Respuesta(`A reboot is required for all package operations`, true),
            new Respuesta(` A reboot is not required after a package operation`),
            new Respuesta(`For package operations that require a reboot, this policy creates a new BE set as active on the next boot`, true)
        ]
    },
    {
        pregunta: `/21.png`,
        respuestas: [
            new Respuesta(`zlogin z dbzone halt`),
            new Respuesta(`zoneadm z dbzone shutdown i0`),
            new Respuesta(`zoneadm z dbzone shutdown`),
            new Respuesta(`zoneadm z dbzone halt`, true),
            new Respuesta(`zlogin dbzone shutdown i0`, true),
        ]
    },

    {
        pregunta: `/22.png`,
        respuestas: [
            new Respuesta(`NWAM will be used to configure the network interface.`),
            new Respuesta(`The network/physical service is offline.`, true),
            new Respuesta(`You cannot log in from the console as root. You must first log in as a user and then su to root account`),
            new Respuesta(`The root user can log in from the console login.`, true),
            new Respuesta(`You will be prompted to configure the network interface after the initial login.`),
        ]
    },
    {
        pregunta: `In order to display the IP addresses of network interfaces, what command would you use?`,
        respuestas: [
            new Respuesta(`dladm`),
            new Respuesta(`ipconfig`),
            new Respuesta(`sves`),
            new Respuesta(`ipadm`, true),
            new Respuesta(`ipaddr`),
        ]
    },
    {
        pregunta: `/24.png`,
        respuestas: [
            new Respuesta(`unsuccessful attempt`),
            new Respuesta(`successful attempt`, true),
            new Respuesta(`The attempt was from a pseudo terminal, and not the console`),
            new Respuesta(`The attempt was from a user that is in the adm group, same as root`),
            new Respuesta(`Time zone is not set`)
        ]
    },
    {
        pregunta: `/25.png`,
        respuestas: [
            new Respuesta(`genius will be ritchie, because that was the value exported in .profile.`),
            new Respuesta(`genius will be kernighan, because .bashrc executes after .profile.`),
            new Respuesta(`genius will be ritchie because variable settings in .profile take precedence over variable settings in .bashrc.`, true),
            new Respuesta(`genius will be ritchie because .profile executes after .bashrc`),
            new Respuesta(`genius will be thompson because /etc/profile system settings always override local settings.`)
        ]
    },
    {
        pregunta: `You are logged in as root to a newly installed Solaris 11 system. You issue the command useradd -d, and then examine the /usr/sadm/defadduser file. This file
        includes the entry defshell=/bin/sh. Which shell will now be the default for the next account created?`,
        respuestas: [
            new Respuesta(`bash shell`, true),
            new Respuesta(`C shell`),
            new Respuesta(`korn shod`),
            new Respuesta(`bourne shell`),
        ]
    },
    {
        pregunta: `You want to display network interface information. Which command should you use?`,
        respuestas: [
            new Respuesta(` ipadm show-if`, true),
            new Respuesta(`ipadm show-addr`),
            new Respuesta(`ipadm show-prop`),
            new Respuesta(`ipadm show-addrprop`),
        ]
    },
    {
        pregunta: `Which two options accurately describe the network characteristics of a zone?`,
        respuestas: [
            new Respuesta(`DHCP address assignment cannot be configured in a shared IP zone.`, true),
            new Respuesta(`Shared IP is the default type of network configuration.`, true),
            new Respuesta(`Exclusive IP is the default type of network configuration.`),
            new Respuesta(`By default, all IP addresses, netmasks, and routes are set by the global zone and cannot be altered in a non global zone.`),
            new Respuesta(`IPMP cannot be managed within the non-global zone.`),
            new Respuesta(`Commands such as snoop and dladm cannot be used on datalinks that are in use by a running zone.`)
        ]
    },
    {
        pregunta: `To assist in examining and debugging running processes, Solaris 11 has a utility that returns pro arguments and the names and values of environment variables.
        What is the name of this utility?`,
        respuestas: [
            new Respuesta(`ppgsz`),
            new Respuesta(`pargs`, true),
            new Respuesta(`pmap`),
            new Respuesta(`pgrep`),
        ]
    },
    {
        pregunta: `Identify the correct description of an IPS image.    `,
        respuestas: [
            new Respuesta(`an ISO image of the Solaris media DVD`),
            new Respuesta(`an IPS repository`),
            new Respuesta(`a depot location or source where Solaris packages can be installed from`),
            new Respuesta(`a location where packages can be installed, for example, your Solaris instance`, true),
        ]
    },
    {
        pregunta: `You need to know the IP address configured on interface net3, and that the interface is up. Which command confirms these?`,
        respuestas: [
            new Respuesta(`ipadm show-if`),
            new Respuesta(`ipadm up-addr`),
            new Respuesta(`ipadm show-addr`, true),
            new Respuesta(`ipadm enable-if`),
            new Respuesta(`ipadm refresh-addr`),
            new Respuesta(`ipadm show-addrprop`)
        ]
    },
    {
        pregunta: `/33.png`,
        respuestas: [
            new Respuesta(`15163`, true),
            new Respuesta(`15156`),
            new Respuesta(`15166`),
            new Respuesta(`15165`),
        ]
    },
    {
        pregunta: `You have installed the SMF notification framework to monitor services. Which command is used to set up the notifications for a particular service?`,
        respuestas: [
            new Respuesta(`svccfg`, true),
            new Respuesta(`svcadm`),
            new Respuesta(`setnotify`),
            new Respuesta(`smtp-notify`),
        ]
    },
    {
        pregunta: `/35.png`,
        respuestas: [
            new Respuesta(`User jack can edit testfile because he has read and write permissions at the group level.`),
            new Respuesta(`User jack can use cat to output the contents of testfile because he has read permission as the file owner`),
            new Respuesta(`User jill can change the permissions of testfile because she has write permission for the file at the group level.`),
            new Respuesta(`User jill can edit testfile because she has read and write permission at the group level.`, true),
            new Respuesta(`User jack can change permissions for testfile because he is the owner of the file.`, true),
            new Respuesta(`User jack can change permissions for testfile because he has execute permission for the file.`, true),
        ]
    },
    {
        pregunta: `The OpenBoot firmware controls the operation of the system before the operating system is loaded.
        Which four tasks are directly controlled by the OpenBoot firmware?`,
        respuestas: [
            new Respuesta(` Provides a list of boot entries from which to choose`, true),
            new Respuesta(`Allows hardware to identify itself and load its own plug-in device driver`, true),
            new Respuesta(`Loads the boot loader from the configured boot device`, true),
            new Respuesta(`Performs basic hardware testing`, true),
            new Respuesta(`Installs the console`),
            new Respuesta(`Reads and executes the boot archive`),
            new Respuesta(`Extract and executes the kernel image`)
        ]
    },
    {
        pregunta: `Which two options are accurate regarding the non-global zone console?`,
        respuestas: [
            new Respuesta(`Access the non-global zone console by using the zlogin c command.`, true),
            new Respuesta(`Access the non-global zone console by using the zlogin 1 command.`),
            new Respuesta(`Disconnect from the non-global zone console by using the ~. keys.`, true),
            new Respuesta(`Disconnect from the non-global zone console by using the #. keys.`),
        ]
    },
    {
        pregunta: `/38.png`,
        respuestas: [
            new Respuesta(`pkg publisher to specify the new publisher`),
            new Respuesta(`pkg set-publisher to set the stickiness on the http://server1.example.com publisher and unset stickiness for http://pkg.oracle.com/solaris/release`),
            new Respuesta(`pkg add-publisher to add the new publisher`),
            new Respuesta(` pkg set-publisher to set the origin for the publisher`, true),
        ]
    },
    {
        pregunta: `/39.png`,
        respuestas: [
            new Respuesta(`The data on c3t3d0 is duplicated on c3t4do.`, true),
            new Respuesta(`The data is striped across disks c3t3d0 and c3t4do and mirrored across vdevs mirror-0 and mirror-1.`),
            new Respuesta(`The storage pool is 146 GB total size (rounded to the nearest GB).`),
            new Respuesta(`The storage pool is 584 GB total size (rounded to the nearest GB).`, true),
            new Respuesta(`The storage pool is 292 GB total size (rounded to the nearest GB)`)
        ]
    },
    {
        pregunta: `/40.png`,
        respuestas: [
            new Respuesta(`ipadm: cannot; create interface net3: Operation failed.`),
            new Respuesta(`ipadm: cannot create interface net3: Interface already exists.`, true),
            new Respuesta(`ipadm: cannot create interface net3: IP address object not specified.`),
            new Respuesta(`No_response, The command was successful.`),
        ]
    },
    {
        pregunta: `Choose three options that describe the features associated with a Live Media installation.`,
        respuestas: [
            new Respuesta(`does not allow the root user to log in to the system directly from the console (or any terminal)`),
            new Respuesta(`provides a "hands free" installation`, true),
            new Respuesta(`installs the desktop based packages`, true),
            new Respuesta(`can be used to install only x86 platforms`, true),
            new Respuesta(`installs the server-based set of packages only`),
            new Respuesta(`allows both automatic and manual configuration of the network`),
            new Respuesta(`installs both the server-based and desktop-based package`)
        ]
    },
    {
        pregunta: `In a fresh installation of Oracle Solaris 11, default datalinks are named with a genetic naming convention, and they increment as you add interfaces. What is the
        default name?`,
        respuestas: [
            new Respuesta(`eth#`),
            new Respuesta(`net#`, true),
            new Respuesta(`el000g#`),
            new Respuesta(`lo#`),
            new Respuesta(`nic#`),
        ]
    },
    {
        pregunta: `Which three options accurately describe Oracle Solaris 11 zones?`,
        respuestas: [
            new Respuesta(`can be NFS servers`, true),
            new Respuesta(`are whole root type only`),
            new Respuesta(`cannot have their own time zone setting`),
            new Respuesta(`can execute z£s and zpool commands (from a non-global zone)`, true),
            new Respuesta(`are virtualized operating system environments, each with its own dedicated OS and kernel`),
            new Respuesta(`are virtualized operating system environments, created with a single instance of the OS shared kernel`, true)
        ]
    },
    {
        pregunta: `/44.png`,
        respuestas: [
            new Respuesta(`A zpool create error is generated.`),
            new Respuesta(`A 1-GB ZFS file system named /pool1 is created.`, true),
            new Respuesta(`A 15.97-GB storage pool named pool1 is created.`),
            new Respuesta(`The disk will contain an EFI disk label.`),
        ]
    },
    {
        pregunta: `/45.png`,
        respuestas: [
            new Respuesta(`uid-0(root) gid=0(root)user1 console Dec 30 20:20root`),
            new Respuesta(`rootuser1 console Dec 30 20:20uid=0(root) gid=0(root)`, true),
            new Respuesta(`user1 console Dec 30 20:20rootuid=0(root) gid=0(root)`),
            new Respuesta(`uid=0(root) gid=0(root)rootuser1 console Dec 30 20:20`),
        ]
    },
    {
        pregunta: `/46.png`,
        respuestas: [
            new Respuesta(`zpool add pool1 mirror c3t5d0 c3t6d0`, true),
            new Respuesta(`zpool attach pool1 mirror c3t5d0 c3t6d0`),
            new Respuesta(`zpool attach pool1 c3r3d0 c3r5d0; zpool attach pool1 c3r4d0 c3r6d0`),
            new Respuesta(`zpool add pool1 c3r3d0 c3r5d0; zpool add pool1 c3r4d0 c3r6d0`),
        ]
    },
    {
        pregunta: `You attempted to reboot a system via the init command, however the system did not perform boot sequence into the Oracle Solaris Operating Environment. You are
        presented with a prompt from the OpenBoot PROM. Which command would you enter, to boot the system from the default device?`,
        respuestas: [
            new Respuesta(`boot -net install`),
            new Respuesta(`boot`, true),
            new Respuesta(`boot default`),
            new Respuesta(`boot s0`),
        ]
    },
    {
        pregunta: `/48.png`,
        respuestas: [
            new Respuesta(`zfs set refreservation=10g dbase/oral`),
            new Respuesta(`zfs set quota=10g dbase/oral`),
            new Respuesta(`zfs set refquota=10g dbase/oral`),
            new Respuesta(`zfs set reservation=10g dbase/oral`),
        ]
    },
];

