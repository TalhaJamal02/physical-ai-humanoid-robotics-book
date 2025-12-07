---
sidebar_position: 2
---

# Gazebo Simulation

Gazebo is a robust robot simulator that enables testing and development in a 3D virtual environment.

## Key Features

- Physics-based simulation for realistic motion and collisions  
- Sensor simulation (LiDAR, cameras, IMU, etc.)  
- Test robot models without physical hardware  
- Seamless ROS 2 integration for nodes, topics, services, and actions  

## Getting Started

1. Install Gazebo along with the ROS 2 integration packages.  
2. Load your robot's URDF or Xacro model.  
3. Launch the simulation using a `.launch.py` file.  
4. Control and interact with the robot through ROS 2 topics, services, and actions.

### Example Launch Command

```bash
ros2 launch humanoid_gazebo simulation.launch.py