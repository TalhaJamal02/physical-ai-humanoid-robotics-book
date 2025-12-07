import rclpy
from rclpy.node import Node
from std_srvs.srv import SetBool

class GraspClient(Node):
    def __init__(self):
        super().__init__('grasp_client')
        self.cli = self.create_client(SetBool, 'grasp_object')
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('Service not available, waiting...')

    def send_request(self, grasp=True):
        req = SetBool.Request()
        req.data = grasp
        future = self.cli.call_async(req)
        rclpy.spin_until_future_complete(self, future)
        return future.result()

def main(args=None):
    rclpy.init(args=args)
    client = GraspClient()
    result = client.send_request(True)
    print(result.message)
    client.destroy_node()
    rclpy.shutdown()