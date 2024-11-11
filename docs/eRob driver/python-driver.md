---
sidebar_position: 3
---

# Python (Windows)

---
## Table of Contents
1. [Using Python to Connect to TwinCAT](#using-python-to-connect-to-twincat)
2. [Install pyads](#1-install-pyads)
3. [Demo Code for pyads](#3-demo-code-for-pyads)

---

To use Python to connect to TwinCAT, you can utilize the **pyads** library, which allows communication with TwinCAT systems via the ADS (Automation Device Specification) protocol. This library enables you to read and write variables, call functions, and interact with the TwinCAT runtime directly from Python.

Here's how you can set up and use pyads to connect to TwinCAT:    
We provided a simple demo. ->>>[Link](https://github.com/wdb-123/python2TC3).

---
## 1. Install pyads

You can install the pyads library using pip:

```bash
pip install pyads
```


## 2. Configure TwinCAT for ADS Communication

Before connecting, ensure that your TwinCAT system is configured to accept ADS communication:

- **Obtain the AMS Net ID and IP Address** of your TwinCAT device.
  - The AMS Net ID is typically in the format `x.x.x.x.1.1`, where `x.x.x.x` is the IP address.
  - You can find it in the TwinCAT XAE shell under **System > AMS Router > AMS Net ID**.
- **Set up Routes**:
  - On the TwinCAT system, add an ADS route for your development machine.
  - Use the **TwinCAT Remote Manager** or **TcAdmin** tool to add the route.
  - Ensure that the firewall settings allow ADS communication.



## 3. Basic Connection Example

Below is an example of how to connect to TwinCAT and read/write variables:

```python
import pyads

# Replace these with your actual AMS Net ID and IP address
PLC_AMS_NET_ID = '5.80.192.240.1.1'
PLC_IP_ADDRESS = '192.168.0.1'

# Establish a connection to the TwinCAT device
plc = pyads.Connection(PLC_AMS_NET_ID, pyads.PORT_TC3PLC1, PLC_IP_ADDRESS)

# Open the connection
plc.open()

# Read a variable from the PLC
# Assume there's a global variable named 'GVL.my_int_var' of type INT
value = plc.read_by_name('GVL.my_int_var', pyads.PLCTYPE_INT)
print(f"The value of 'GVL.my_int_var' is: {value}")

# Write a value to the PLC variable
plc.write_by_name('GVL.my_int_var', 42, pyads.PLCTYPE_INT)
print("Updated 'GVL.my_int_var' to 42.")

# Close the connection when done
plc.close()
```

### Explanation:
- **pyads.Connection:** Creates a connection object with the specified AMS Net ID, port, and IP address.
  - **AMS Net ID:** Unique identifier for the TwinCAT device.
  - **pyads.PORT_TC3PLC1:** Default port for TwinCAT 3 PLC runtime 1.
- **plc.open():** Opens the connection.
- **read_by_name():** Reads the value of a PLC variable by its name.
- **write_by_name():** Writes a value to a PLC variable.
- **plc.close():** Closes the connection.


## 4. Reading and Writing Different Data Types
pyads supports various TwinCAT PLC data types:

``` python
# Read a REAL variable
real_value = plc.read_by_name('GVL.my_real_var', pyads.PLCTYPE_REAL)

# Read a BOOL variable
bool_value = plc.read_by_name('GVL.my_bool_var', pyads.PLCTYPE_BOOL)

# Write to a STRING variable
plc.write_by_name('GVL.my_string_var', 'Hello TwinCAT!', pyads.PLCTYPE_STRING)

```

## 5. Reading and Writing Arrays
To read or write arrays, specify the number of elements:

``` python
# Read an array of INTs with 10 elements
array_values = plc.read_by_name('GVL.my_int_array', pyads.PLCTYPE_ARR_INT(10))

# Write to an array of INTs
plc.write_by_name('GVL.my_int_array', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], pyads.PLCTYPE_ARR_INT(10))

```

## 6. Handling Structures
For structures, you need to define a ctypes Structure that matches the PLC structure:

``` python
import ctypes

# Define the structure in Python
class MyStruct(ctypes.Structure):
    _fields_ = [
        ('int_var', ctypes.c_int16),
        ('real_var', ctypes.c_float),
        ('bool_var', ctypes.c_uint8),
    ]

# Read the structure
my_struct = plc.read_by_name('GVL.my_struct_var', MyStruct)
print(f"Structure values: {my_struct.int_var}, {my_struct.real_var}, {my_struct.bool_var}")

```
7. Using Symbolic Handles
For repeated access to the same variable, you can use symbolic handles to improve performance:

``` python
# Get a handle to the variable
handle = plc.get_handle('GVL.my_int_var')

# Read the variable using the handle
value = plc.read(handle, pyads.PLCTYPE_INT)

# Write to the variable using the handle
plc.write(handle, 100, pyads.PLCTYPE_INT)

# Release the handle when done
plc.release_handle(handle)

```

## 8. Error Handling
Always include error handling to manage exceptions:

``` python 
try:
    plc.open()
    # Perform read/write operations
except pyads.ADSError as err:
    print(f"An ADS error occurred: {err}")
finally:
    plc.close()

```

## 9. Resources and Documentation
- **pyads Documentation:** pyads.readthedocs.io
- **GitHub Repository:** pyads on GitHub
- **TwinCAT Information System:** Beckhoff Info System

## 10. Tips and Best Practices
- **Ensure Network Connectivity:** Your Python environment and TwinCAT system must be network-accessible to each other.
- **Firewall Settings:** Configure firewalls to allow ADS communication on the required ports.
- **Variable Names:** Use fully qualified names for variables, including namespaces if necessary.
- **Data Types:** Match the PLC data types with the appropriate pyads PLCTYPE constants.
- **Test Connectivity:** Use TwinCAT's tools to verify that the route is correctly set up and the device is reachable.