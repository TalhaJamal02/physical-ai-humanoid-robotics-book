---
sidebar_position: 3
---

# Launching the Capstone Project

## Steps to Launch

1. Start the ROS 2 master.
2. Launch simulation environment (Gazebo, Unity, or Isaac Sim).
3. Run the VLA pipeline (`examples/vla/pipeline.py`).
4. Start the voice agent (`examples/capstone/voice_agent.py`).
5. Start the main agent (`examples/capstone/main_agent.py`) to connect VLA outputs to ROS 2 actions.

## Notes

- Ensure all dependencies are installed.
- Adjust topic names, ports, and ROS 2 namespaces if needed.
- Use the included launch files for automated startup.
