---
sidebar_position: 1
---

# Capstone Project: Humanoid Robot in Action

## Objective

This capstone brings together every major module—Physical AI Foundations, ROS 2, Simulation, and the VLA system—into a single integrated humanoid-robot pipeline. By the end of the project, the robot should be capable of perceiving its surroundings, understanding spoken instructions, and performing meaningful actions based on those instructions.

## Components

1. **Voice Agent**  
   Captures spoken commands and converts them into text.

2. **VLA Module**  
   Interprets visual input and natural-language commands to generate structured robot actions.

3. **ROS 2 Nodes**  
   Translate high-level actions into low-level robot behavior, whether running on a real robot or inside a simulator.

4. **Simulation Environment**  
   Provides a safe space—Gazebo, Unity, or Isaac Sim—to evaluate and visualize robotic behavior before deploying to hardware.

## Workflow

1. The user speaks a command.
2. The voice agent transcribes the speech into text.
3. The VLA module analyzes both the visual input and the command text, then produces a robot-action description.
4. ROS 2 nodes interpret these actions and execute them.
5. The simulation environment renders the resulting robotic motion and interactions.

## Independent Test

- Speak a command and verify that the robot performs the expected action inside the simulation environment.
