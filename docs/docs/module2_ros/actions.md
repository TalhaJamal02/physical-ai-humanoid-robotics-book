---
sidebar_position: 4
---

# ROS 2 Action Example: Humanoid Walk

Actions allow **long-running tasks** with feedback.  
Example: humanoid walking to a goal position.

## Action Server: Walk

```python
import rclpy
from rclpy.node import Node
from example_interfaces.action import Fibonacci  # placeholder for walk action
from rclpy.action import ActionServer

class WalkActionServer(Node):
    def __init__(self):
        super().__init__('walk_action_server')
        self._action_server = ActionServer(self, Fibonacci, 'walk', self.execute_callback)

    def execute_callback(self, goal_handle):
        feedback_msg = Fibonacci.Feedback()
        result = Fibonacci.Result()
        for i in range(1, 6):
            feedback_msg.partial_sequence = [i]
            goal_handle.publish_feedback(feedback_msg)
            self.get_logger().info(f'Walking step {i}...')
        goal_handle.succeed()
        result.sequence = [1, 2, 3, 4, 5]
        return result

def main(args=None):
    rclpy.init(args=args)
    node = WalkActionServer()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()
