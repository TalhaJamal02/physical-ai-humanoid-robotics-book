---
sidebar_position: 1
---

# ROS 2 Basics

This chapter introduces the essential building blocks of ROS 2 — the framework that powers modern robotic systems, from small embedded robots to full-scale humanoids.

---

## What is ROS 2?

ROS 2 (Robot Operating System 2) is a collection of libraries, tools, and communication frameworks designed to help you build robust, modular robot applications.  
It is a **complete redesign** of ROS 1, created to meet the demands of real-world robotics.

Key improvements introduced in ROS 2 include:

- **Real-time capabilities** for control and safety-critical loops  
- **Security features** (authentication, encryption, access control)  
- **Support for embedded and resource-constrained hardware**  
- **Multi-platform support** (Linux, Windows, macOS)  
- **Better communication reliability** through DDS middleware  
- **Improved scalability** for large multi-robot systems  

ROS 2 is now the standard for robotics development across industry, research, and advanced robotic platforms.

---

## Core Concepts

ROS 2 is built around a set of core primitives that define how robot software is organized and how components communicate.

### **Nodes**
Independent processes that perform computation.  
Each sensor, controller, planner, or AI module typically runs as its own node.

### **Topics**
Named channels that allow nodes to **publish** or **subscribe** to messages.  
Ideal for streaming data such as camera frames, IMU readings, or joint states.

### **Services**
Provide synchronous **request–response** communication.  
Used for operations that produce an immediate result, such as resetting a sensor or requesting a map.

### **Actions**
Designed for **long-running tasks** that require feedback and the ability to cancel mid-execution.  
Examples include navigation, manipulation, or humanoid locomotion.

---

These primitives form the foundation of all ROS 2 architectures.  
Understanding them is the first step toward building full perception–planning–control pipelines for real robots.