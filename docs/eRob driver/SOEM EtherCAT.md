---
sidebar_position: 4
---

# SOEM (Windows)
---
## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Poor Synchronization Issue](#poor-synchronization-issue)
3. [Step-by-Step Guide](#step-by-step-guide)
---

# SOEM (Windows)
---
## Prerequisites
- **1.Windows Operating System:** A 64-bit version of Windows 7, 8, 10, or later.
- **2.Visual Studio:** Microsoft Visual Studio 2017 or newer (Community, Professional, or Enterprise editions).
- **3.WinPcap or Npcap:** A packet capture library that allows applications to capture and transmit network packets bypassing the protocol stack.
---

# Poor synchronization of the system kernel caused ethercat to fail to run continuously!
Therefore, it is not recommended to run under Windows system unless it can solve system synchroniztion.

---

## Step-by-Step Guide

### 1. Install Required Software

#### a. Install Visual Studio
- Download and install Visual Studio Community Edition if you don't have it installed.
- During installation, ensure that you include the Desktop development with C++ workload.
#### b. Install WinPcap or Npcap
- WinPcap has been deprecated and is no longer maintained. It's recommended to use Npcap.
- Download Npcap from the [official website](https://npcap.com/) and install it.
- During installation, ensure the following options are selected:
  - Install Npcap in WinPcap API-compatible Mode
  - Support raw 802.11 traffic (and monitor mode) for WiFi adapters (if required)

### 2. Download SOEM Source Code
Clone the SOEM repository from GitHub:

``` bash
git clone https://git.zeroerr.cn/Don/eRob_SOEM-windows
```
Alternatively, download the ZIP archive from the [SOEM GitHub page](https://git.zeroerr.cn/Don/eRob_SOEM-windows) and extract it.
And unzip this archive in your computer.

### 3. Start a Visual Studio command prompt 
Start a Visual Studio command prompt(e.g. x86 Native Tools Command Prompt for VS 2017) then:

``` bash
cd "The path of SOEM file, e.g.  D:\SOEM"
mkdir build
cd build
cmake .. -G "NMake Makefiles"
nmake
```

### 4. Run the SOEM master

``` bash
cd  test/win32/simple_test
eRob_test.exe
```
It will print out `your network devices`, including your `EtherCAT device`.
Look for the ethernet adapter for your `EtherCAT` network and take a note of the path, for example,  `\Device\NPF_{A54146EA-CD6F-4A95-93E4-0919C4B2D685} `.

```bash
eRob_test.exe  "\Device\NPF_{EFxxxxxxxxxxxxxx}"    (your etherCAT device)
```

This program will enavle eRob devices, but will not run for a long time due to sychronization issues, hopefully the developers can solve this problems.
