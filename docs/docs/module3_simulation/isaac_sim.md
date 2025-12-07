---
sidebar_position: 4
---

# Isaac Sim Simulation

Isaac Sim (by NVIDIA) is a robotics simulator optimized for AI and reinforcement learning research.

## Key Features

- Realistic physics and rendering
- AI and RL-focused environments
- Supports ROS 2 bridge
- Python scripting for custom scenarios

## Getting Started

1. Install Isaac Sim using NVIDIA Omniverse.
2. Import your robot model (URDF or USD format).
3. Create simulation environments with sensors and obstacles.
4. Control the robot using Python scripts and ROS 2 topics/services/actions.

### Example Python Script

```python
from omni.isaac.kit import SimulationApp

simulation_app = SimulationApp()
# Load robot and environment here
simulation_app.update()
simulation_app.close()
