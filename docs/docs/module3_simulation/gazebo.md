---
sidebar_position: 2
---

# Gazebo Simulation

Gazebo is a powerful robot simulator that allows testing and development in a virtual 3D environment.

## Key Features

- Physics-based simulation
- Sensor simulation (LIDAR, camera, IMU)
- Robot model testing without physical hardware
- Supports ROS 2 integration

## Getting Started

1. Install Gazebo and ROS 2 integration packages.
2. Load your robot URDF/Xacro model.
3. Launch the simulation using a `.launch.py` file.
4. Interact with the robot using ROS 2 topics, services, and actions.

### Example Launch Command

```bash
ros2 launch humanoid_gazebo simulation.launch.py
