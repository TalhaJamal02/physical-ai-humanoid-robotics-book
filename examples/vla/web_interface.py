# examples/vla/web_interface.py

"""
VLA Web Interface (Placeholder)

A simple Gradio interface for testing the VLA pipeline.
"""

import gradio as gr
from pipeline import VLAPipeline

pipeline = VLAPipeline()

def run_vla(image, command_text):
    """
    Gradio function to process inputs and return the action command.
    """
    action = pipeline.generate_action(image, command_text)
    return str(action)

# Build Gradio interface
iface = gr.Interface(
    fn=run_vla,
    inputs=[gr.Image(type="pil"), gr.Textbox(lines=2, placeholder="Enter command here")],
    outputs="text",
    title="VLA Test Interface",
    description="Upload an image and provide a text command to test the Vision-Language-Action pipeline."
)

if __name__ == "__main__":
    iface.launch()
