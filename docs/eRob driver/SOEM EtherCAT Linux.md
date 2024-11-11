---
sidebar_position: 5
---

# SOEM (Linux)
---
## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step-by-Step Guide](#step-by-step-guide)  
   - [Install Required Packages](#1-install-required-packages)
   - [Download and Build SOEM](#2-download-and-build-soem)
---

# SOEM (Linux)
---
## Prerequisites
Before you begin, make sure you have the following:
- **Ubuntu 18\20\22** installed on your system.
---

## Step-by-Step Guide

---
### 1. Install Required Packages
Start by installing the required dependencies on your Ubuntu system:

``` bash
sudo apt update
sudo apt install build-essential git libpcap-dev
```
libpcap-dev is essential for SOEM to access the network interface and handle EtherCAT frames.

---
### 2. Download and Build SOEM
Clone the SOEM repository and build it:

``` bash
git clone https://github.com/wdb-123/SOEM_eRob
mkdir build
cd build
cmake ..
make
sudo make install
```
This will download, build, and install SOEM on your Ubuntu machine.

---
### 3. Verify Network Interface
To drive a motor over EtherCAT, ensure that the network interface connected to the EtherCAT network is correctly configured.

- List all network interfaces using:

``` bash
ifconfig

fconfig
eno1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet XXX.XXX.XXX.XXX  netmask 255.255.252.0  broadcast XXX
        inet6 XXXX:XXXX:XXXX:XXXX:XXXX  prefixlen 64  scopeid 0x20<link>
        ether XX:XX:XX:XX:XX:XX  txqueuelen 1000  (Ethernet)
        RX packets 12433221  bytes 3311308984 (3.3 GB)
        RX errors 0  dropped 177668  overruns 0  frame 0
        TX packets 1582150  bytes 313791056 (313.7 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
....

```
Here, `eno1` is my EtherCAT interface.

Disable the IP stack on the interface you will use for EtherCAT:

``` bash
sudo ifconfig eno1 down
sudo ifconfig eno1 up
```

Replace `eno1` with the actual interface connected to your EtherCAT network.

---
### 4. Check EtherCAT Network

Let's check the EtherCAT network to make sure the SOEM and the EtherCAT network is working.

First, retrieve the list of ethernet adapter discovered on your machine.

``` bash
 cd ~/SOEM-master/build/test/linux/slaveinfo
sudo .\slaveinfo

SOEM (Simple Open EtherCAT Master)
Slaveinfo
Usage: slaveinfo ifname [options]
ifname = eth0 for example
Options :
 -sdo : print SDO info
 -map : print mapping
Available adapters
End program
```
---

Now run the `slaveinfo` with the ethernet device path again to list what `EtherCAT` slave controllers are discovered on the network. You should see information similar to the below and check that the details make sense to your environment.

``` bash

cd ~/SOEM-master/build/test/linux/slaveinfo
sudo .\slaveinfo eno1

Slave:1
 Name:simco drive 40028083-00-0
 Output size: 48bits
 Input size: 48bits
 State: 4
 Delay: 0[ns]
 Has DC: 0
 Activeports:1.1.0.0
 Configured address: 1002
 Man: 0000010a ID: 0262c7b3 Rev: 00010211
 SM0 A:1000 L: 512 F:00010026 Type:1
 SM1 A:1400 L: 512 F:00010022 Type:2
 SM2 A:1800 L:   6 F:00010064 Type:3
 SM3 A:1950 L:   6 F:00010020 Type:4
 FMMU0 Ls:0000000a Ll:   6 Lsb:0 Leb:7 Ps:1800 Psb:0 Ty:02 Act:01
 FMMU1 Ls:00000027 Ll:   6 Lsb:0 Leb:7 Ps:1950 Psb:0 Ty:01 Act:01
 FMMUfunc 0:1 1:2 2:0 3:0
 MBX length wr: 512 rd: 512 MBX protocols : 0c
 CoE details: 27 FoE details: 01 EoE details: 00 SoE details: 00
 Ebus current: 0[mA]
 only LRD/LWR:0
PDO mapping according to CoE :
  SM2 outputs
     addr b   index: sub bitl data_type    name
  [0x000A.0] 0x6040:0x00 0x10 UNSIGNED16   Controlword
  [0x000C.0] 0x60FF:0x00 0x20 INTEGER32    Target Velocity
  [0x0010.0] 0x0000:0x00 0x00
  [0x0010.0] 0x0000:0x00 0x00
  [0x0010.0] 0x0000:0x00 0x00
  [0x0010.0] 0x0000:0x00 0x00
  [0x0010.0] 0x0000:0x00 0x00
  [0x0010.0] 0x0000:0x00 0x00
  SM3 inputs
     addr b   index: sub bitl data_type    name
  [0x0027.0] 0x6041:0x00 0x10 UNSIGNED16   Statusword
  [0x0029.0] 0x6064:0x00 0x20 INTEGER32    Position Actual Value
  [0x002D.0] 0x0000:0x00 0x00
  [0x002D.0] 0x0000:0x00 0x00
  [0x002D.0] 0x0000:0x00 0x00
  [0x002D.0] 0x0000:0x00 0x00
  [0x002D.0] 0x0000:0x00 0x00
  [0x002D.0] 0x0000:0x00 0x00
```


### 4. Run the SOEM master

``` bash
cd ~/SOEM-master/build/test/linux/simple_test
sudo .\eRob_test eno1
```

This program will enable eRob, stable opereation requires a high degree of synchronization of the system.