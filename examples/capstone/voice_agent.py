# examples/capstone/voice_agent.py

"""
Voice Agent Placeholder

This agent captures voice input and converts it into text commands for the VLA system.
"""

import speech_recognition as sr

def listen_command():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening for command...")
        audio = r.listen(source)
    try:
        command = r.recognize_google(audio)
        print(f"Recognized command: {command}")
        return command
    except sr.UnknownValueError:
        print("Could not understand audio")
        return None
    except sr.RequestError as e:
        print(f"Could not request results; {e}")
        return None

if __name__ == "__main__":
    cmd = listen_command()
    # Here you would pass cmd to the VLA pipeline
