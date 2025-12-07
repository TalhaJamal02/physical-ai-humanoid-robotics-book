---
sidebar_position: 3
---

# VLA Pipeline

This file explains the step-by-step pipeline of the Vision-Language-Action (VLA) system.

## Pipeline Steps

1. **Input Acquisition**  
   - Capture images from robot cameras or load pre-recorded scenes.  
   - Accept text prompts describing desired actions.

2. **Perception Module**  
   - Detect and classify objects, obstacles, and relevant scene elements.  
   - Outputs structured representation of the environment.

3. **Language Understanding**  
   - Parse the text prompt into actionable instructions.  
   - Map natural language to predefined robot capabilities.

4. **Action Planning**  
   - Generate a sequence of movements or commands based on perception and instructions.  
   - Consider constraints like joint limits and safety.

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
