---
sidebar_position: 3
---

# ROS 2 Service Example: Humanoid Arm Control

A **service** is used for request/response communication.  
We will create a service that tells the humanoid to **grasp an object**.

## Service Definition

```python
# grasp_service.py
import rclpy
from rclpy.node import Node
from std_srvs.srv import SetBool

class GraspService(Node):
    def __init__(self):
        super().__init__('grasp_service')
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
