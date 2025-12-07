# Data Model: Physical AI & Humanoid Robotics Book

This document describes the key data entities and concepts that will be used throughout the book.

## 1. Humanoid Robot Model (URDF)

**Description**: The Unified Robot Description Format (URDF) is an XML format used in ROS to describe all elements of a robot. This includes its physical structure (links and joints), visual appearance, and collision properties.

**Key Attributes**:
- **`links`**: The rigid parts of the robot. Each link has visual, collision, and inertial properties.
- **`joints`**: The connections between links. Each joint has a type (e.g., `revolute`, `prismatic`, `fixed`), axis of rotation, and limits.
- **`transmissions`**: Describe the relationship between an actuator and a joint.
- **`gazebo` tags**: Used to specify additional properties for simulation in Gazebo, such as friction and damping.

**Relationships**:
- A robot model is a tree of links connected by joints.

## 2. ROS 2 Node

**Description**: A node is the fundamental processing unit in a ROS 2 system. Each node should be responsible for a single, specific purpose (e.g., controlling a motor, publishing sensor data, planning a path).

**Key Concepts**:
- **Topics**: Nodes communicate with each other by publishing and subscribing to messages on named buses called topics.
- **Services**: A request/reply form of communication between nodes. One node offers a service, and another node can make a request and wait for a response.
- **Actions**: A more complex form of communication for long-running tasks. An action has a goal, feedback, and a result.

**Relationships**:
- A ROS 2 system is a graph of nodes that communicate with each other over topics, services, and actions.

## 3. Vision-Language-Action (VLA) Model

**Description**: A deep learning model that takes multi-modal input (images and text) and produces a representation of the desired action.

**Input**:
- **Image**: A representation of the current state of the environment (e.g., from a camera).
- **Text Prompt**: A natural language command describing the desired goal (e.g., "pick up the red block").

**Output**:
- **Action Vector**: A numerical representation of the action to be taken. This could be a sequence of joint angles, a target end-effector pose, or a more abstract action command.

**Relationships**:
- The VLA model receives input from sensors (camera) and a high-level user interface (voice recognition). Its output is sent to the Agent for execution.

## 4. Agent

**Description**: A high-level control system that orchestrates the overall behavior of the robot. It translates abstract goals into concrete actions and interacts with the ROS 2 system to execute them.

**Responsibilities**:
- **Task Planning**: Breaking down a high-level goal (e.g., "get me the water bottle") into a sequence of smaller, executable steps.
- **State Management**: Keeping track of the robot's current state and the state of the environment.
- **Action Execution**: Translating the output of the VLA model into ROS 2 service calls or action goals to be executed by the robot's controllers.

**Relationships**:
- The Agent is the "brain" of the robot. It communicates with the VLA model and the ROS 2 nodes to perceive the world and act in it.
