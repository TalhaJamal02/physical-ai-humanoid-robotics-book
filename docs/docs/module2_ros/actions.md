---
sidebar_position: 4
---

# ROS 2 Action Example: Humanoid Walk

Actions are used for **long-running, goal-driven tasks** that provide feedback over time.  
Walking is a perfect example: the robot needs to take multiple steps, report progress, and confirm completion.

---

## Action Server: Walk

Below is a minimal ROS 2 Action Server using a placeholder action (Fibonacci) to demonstrate the walking structure.  
In a real system, you would replace it with a `Walk` action definition that includes pose targets, gait parameters, and status feedback.

```python
import rclpy
from rclpy.node import Node
from example_interfaces.action import Fibonacci  # placeholder for a real Walk action
from rclpy.action import ActionServer


class WalkActionServer(Node):
    def __init__(self):
        super().__init__('walk_action_server')

        # Create the action server
        self._action_server = ActionServer(
            self,
            Fibonacci,
            'walk',
            self.execute_callback
        )

    def execute_callback(self, goal_handle):
        self.get_logger().info('Received walk goal.')
        feedback_msg = Fibonacci.Feedback()
        result = Fibonacci.Result()

        # Simulated step-by-step walking loop
        for step in range(1, 6):
            feedback_msg.partial_sequence = [step]
            goal_handle.publish_feedback(feedback_msg)

            self.get_logger().info(f'Walking step {step}...')

        # Mark completion
        goal_handle.succeed()
        result.sequence = [1, 2, 3, 4, 5]
        return result


def main(args=None):
    rclpy.init(args=args)
    node = WalkActionServer()
    rclpy.spin(node)

    node.destroy_node()
    rclpy.shutdown()