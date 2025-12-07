---
sidebar_position: 2
---

# Software Installation

This guide covers the installation of all necessary software for the projects in this book.

## Core Dependencies

- **Operating System:** Ubuntu 22.04 LTS  
- **ROS 2:** Humble Hawksbill distribution (recommended)  
- **Python:** Version 3.10 or higher, with `pip` and `venv` for managing packages and virtual environments  

## Simulators

- **Gazebo:** Install Gazebo Fortress for ROS 2 integration.  
- **Unity:** Install Unity Hub and the Unity Editor (preferably LTS version).  
- **NVIDIA Isaac Sim:** Install via NVIDIA Omniverse and set up the environment for robotics simulation.  

## Python Libraries

A `requirements.txt` file is provided for each project. Key libraries include:  

- `torch` (PyTorch for AI models)  
- `transformers` (for NLP and VLA tasks)  
- `gradio` (optional GUI interface)  
- `rclpy` (ROS 2 Python client library)