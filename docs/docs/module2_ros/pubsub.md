---
sidebar_position: 2
---

# ROS 2 Pub/Sub Example: Humanoid Sensors

In ROS 2, **publishers** send messages to a **topic**, and **subscribers** listen for messages.  

This example demonstrates a humanoid robot publishing sensor data while a monitoring node subscribes to it.

## Publisher: Joint Angles

```python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import JointState

class JointPublisher(Node):
    def __init__(self):
        super().__init__('joint_publisher')
        # Publisher sends JointState messages to the 'joint_states' topic
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        # Timer triggers publishing every 0.5 seconds
        self.timer = self.create_timer(0.5, self.publish_joint_state)

    def publish_joint_state(self):
        msg = JointState()
        msg.name = ['left_arm_joint', 'right_arm_joint']
        msg.position = [0.5, -0.5]
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing joint angles!')

def main(args=None):
    rclpy.init(args=args)
    node = JointPublisher()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()