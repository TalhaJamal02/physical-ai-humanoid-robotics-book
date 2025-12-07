---
sidebar_position: 1
---

# Capstone Project: Humanoid Robot in Action

## Objective

Integrate all modules (Physical AI Foundations, ROS 2, Simulation, and VLA) into a single coherent system. The robot should be able to perceive the environment, interpret commands, and perform actions.

## Components

1. **Voice Agent**: Converts voice commands into text.
2. **VLA Module**: Processes visual input and command text to generate robot actions.
3. **ROS 2 Nodes**: Execute actions on the robot (simulation or real).
4. **Simulation Environment**: Test robot behavior safely in Gazebo, Unity, or Isaac Sim.

## Workflow

1. User speaks a command.
2. Voice agent converts speech to text.
3. VLA module generates a structured robot command.
4. ROS 2 nodes execute the command.
5. Simulation environment visualizes the outcome.

## Independent Test

- Give a voice command and verify the robot performs the intended action in simulation.
