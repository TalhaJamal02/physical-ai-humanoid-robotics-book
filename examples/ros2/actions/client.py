import rclpy
from rclpy.node import Node
from example_interfaces.action import Fibonacci  # placeholder
from rclpy.action import ActionClient

class WalkActionClient(Node):
    def __init__(self):
        super().__init__('walk_action_client')
        self._action_client = ActionClient(self, Fibonacci, 'walk')

    def send_goal(self):
        goal_msg = Fibonacci.Goal()
        self._action_client.wait_for_server()
        self._send_goal_future = self._action_client.send_goal_async(goal_msg)
        rclpy.spin_until_future_complete(self, self._send_goal_future)
        goal_handle = self._send_goal_future.result()
        self._get_result_future = goal_handle.get_result_async()
        rclpy.spin_until_future_complete(self, self._get_result_future)
        print('Walk action result:', self._get_result_future.result().result.sequence)

def main(args=None):
    rclpy.init(args=args)
    client = WalkActionClient()
    client.send_goal()
    client.destroy_node()
    rclpy.shutdown()
