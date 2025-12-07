import rclpy
from rclpy.node import Node
from sensor_msgs.msg import JointState

class JointSubscriber(Node):
    def __init__(self):
        super().__init__('joint_subscriber')
        self.subscription = self.create_subscription(
            JointState, 'joint_states', self.listener_callback, 10
        )

    def listener_callback(self, msg):
        self.get_logger().info(f'Received joints: {msg.name} at {msg.position}')

def main(args=None):
    rclpy.init(args=args)
    node = JointSubscriber()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()