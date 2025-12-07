---
sidebar_position: 3
---

# Launching the Capstone Project

## Steps to Launch

1. Start the ROS 2 master to initialize the communication layer.
2. Launch your simulation environment of choice (Gazebo, Unity, or Isaac Sim).
3. Run the VLA pipeline using `examples/vla/pipeline.py`.
4. Start the voice agent via `examples/capstone/voice_agent.py`.
5. Launch the main agent (`examples/capstone/main_agent.py`) to link the VLA output with ROS 2 action nodes.

## Notes

- Confirm that all required dependencies for ROS 2, simulation tools, and Python packages are installed.
- Modify topic names, network ports, or ROS 2 namespaces as needed for your setup.
- Utilize the provided launch files for a more automated and streamlined startup process.
