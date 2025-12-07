---
sidebar_position: 2
---

# Voice Agent

## Purpose

The voice agent captures spoken commands and converts them into text to be sent to the VLA pipeline.  
It is the first step in the Capstone workflow.

## How it Works

1. Captures audio from a microphone.
2. Converts audio to text using speech recognition.
3. Sends text to the VLA pipeline or main agent.

## Python Implementation

- `examples/capstone/voice_agent.py` contains the actual Python code.
- Key functions:
  - `listen_command()` – listens to the microphone and returns a text command.
  - Handles errors like unrecognized speech or API issues.

## Independent Test

- Speak a command into the microphone.
- Verify that the recognized text matches your speech.
- Ensure the text can be sent to the main agent for execution.
