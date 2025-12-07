---
sidebar_position: 2
---

# VLA Examples

This document demonstrates practical applications of Vision-Language-Action (VLA) systems.

## Example 1: Object Recognition to Action

- **Input:** Image of a table with objects and a text prompt: "Pick up the red cup."  
- **Process:**  
  1. The VLA model identifies objects in the image.  
  2. Maps the instruction to the robot's action plan.  
  3. Generates ROS 2 commands to perform the pick-and-place action.  
- **Output:** Robot picks up the red cup successfully.

## Example 2: Scene Navigation

- **Input:** Image of a room and prompt: "Move to the door."  
- **Process:**  
  1. Scene is analyzed to identify obstacles and target location.  
  2. VLA generates a path and controls the robot's movement.  
- **Output:** Robot navigates safely to the door.

> **Note:** These examples assume ROS 2 nodes are running and the humanoid robot is connected to a simulation or real hardware.