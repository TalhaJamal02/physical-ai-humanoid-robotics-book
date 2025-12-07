---
sidebar_position: 3
---

# VLA Pipeline

This document explains the step-by-step pipeline of a Vision-Language-Action (VLA) system.

## Pipeline Steps

1. **Input Acquisition**  
   - Capture images from robot cameras or load pre-recorded scenes.  
   - Accept text prompts describing the desired actions.

2. **Perception Module**  
   - Detect and classify objects, obstacles, and other relevant scene elements.  
   - Output a structured representation of the environment.

3. **Language Understanding**  
   - Parse the text prompt into actionable instructions.  
   - Map natural language commands to predefined robot capabilities.

4. **Action Planning**  
   - Generate a sequence of movements or commands based on perception and instructions.  
   - Respect constraints such as joint limits, collisions, and safety requirements.

5. **Execution & Feedback**  
   - Send commands to ROS 2 nodes controlling the humanoid robot.  
   - Monitor execution and handle failures or retries.

## Example Workflow

```python
# Pseudocode
scene = capture_image()
instruction = "Pick up the red cup"
parsed_action = vla.parse(scene, instruction)
vla.execute(parsed_action)