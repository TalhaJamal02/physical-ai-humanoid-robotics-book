---
sidebar_position: 4
---

# Isaac Sim Simulation

Isaac Sim, developed by NVIDIA, is a robotics simulator optimized for AI and reinforcement learning research.

## Key Features

- Realistic physics and high-fidelity rendering  
- Environments tailored for AI and RL experiments  
- ROS 2 bridge support for integration with robot software  
- Python scripting for creating custom scenarios and control logic  

## Getting Started

1. Install Isaac Sim via NVIDIA Omniverse.  
2. Import your robot model (URDF or USD format).  
3. Set up simulation environments with sensors, obstacles, and objects.  
4. Control the robot using Python scripts and ROS 2 topics, services, or actions.

### Example Python Script

```python
from omni.isaac.kit import SimulationApp

simulation_app = SimulationApp()
# Load robot model and environment here
simulation_app.update()
simulation_app.close()