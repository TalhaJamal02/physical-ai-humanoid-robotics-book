---
sidebar_position: 3
---

# ROS 2 Service Example: Humanoid Arm Control

A **service** in ROS 2 enables request/response communication.  
This example creates a service that tells a humanoid robot to **grasp or release an object**.

## Service Implementation

```python
# grasp_service.py
import rclpy
from rclpy.node import Node
from std_srvs.srv import SetBool

class GraspService(Node):
    def __init__(self):
        super().__init__('grasp_service')
        # Create a service named 'grasp_object' using SetBool
        self.srv = self.create_service(SetBool, 'grasp_object', self.handle_grasp)

    def handle_grasp(self, request, response):
        if request.data:
            self.get_logger().info('Grasping object...')
            success = True
        else:
            self.get_logger().info('Releasing object...')
            success = True
        response.success = success
        response.message = 'Action executed'
        return response

def main(args=None):
    rclpy.init(args=args)
    node = GraspService()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()
