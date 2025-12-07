# Tasks: Physical AI & Humanoid Robotics Book

**Input**: Design documents from `specs/001-humanoid-robotics-book/`

---

## Phase 1: Setup

**Purpose**: Initialize the Docusaurus project and basic structure.

- [x] T001 Initialize a new Docusaurus project in the `docs/` directory.
- [x] T002 Configure `docusaurus.config.js` with the book title "Physical AI & Humanoid Robotics Book".
- [x] T003 [P] Create placeholder markdown files for each of the four main modules.

---

## Phase 2: Foundational

**Purpose**: Core infrastructure that must be complete before content creation.

- [x] T004 Configure the sidebar in `sidebars.js` to reflect the four main modules.
- [x] T005 Create an initial hardware setup guide in `docs/setup/hardware.md`.
- [x] T006 Create a software installation guide in `docs/setup/software.md` for ROS 2, simulators, and Python dependencies.

---

## Phase 3: User Story 1 - Understand Physical AI Foundations (P1)

**Goal**: Write the content for the "Physical AI Foundations" module.
**Independent Test**: A reader can explain the core concepts of Physical AI after reading the module.

- [x] T007 [US1] Write the introductory chapter on Physical AI in `docs/module1_foundations/intro.md`.
- [ ] T008 [P] [US1] Create diagrams and illustrations for the core concepts.

- [x] T007a [US1] Write `concepts.md` in `module1_foundations/concepts.md`.
- [x] T007b [US1] Write `example.md` in `module1_foundations/example.md`.

---

## Phase 4: User Story 2 - Learn ROS 2 Development (P1)

**Goal**: Write the content and create examples for the "ROS 2 Development" module.
**Independent Test**: A reader can create a simple ROS 2 publisher and subscriber.

- [x] T009a [US2] Write `pubsub.md` in `module2_ros/pubsub.md`.
- [x] T009b [US2] Write `services.md` in `module2_ros/services.md`.
- [x] T009c [US2] Write `actions.md` in `module2_ros/actions.md`.
- [x] T009 [US2] Write the chapter on ROS 2 basics in `docs/module2_ros/basics.md`.
- [x] T010 [P] [US2] Create a simple pub/sub example in `examples/ros2/pubsub/`.
- [x] T011 [P] [US2] Create a service/client example in `examples/ros2/services/`.
- [x] T012 [P] [US2] Create an action server/client example in `examples/ros2/actions/`.

---

## Phase 5: User Story 3 - Simulate a Humanoid Robot (P1)

**Goal**: Write the content and create launch files for the "Simulation" module.
**Independent Test**: A reader can launch a simulated humanoid robot in a simulator.

- [x] T013a [US3] Write `gazebo.md` in `module3_simulation/gazebo.md`.
- [x] T013b [US3] Write `unity.md` in `module3_simulation/unity.md`.
- [x] T013c [US3] Write `isaac_sim.md` in `module3_simulation/isaac_sim.md`.
- [x] T013 [US3] Write the chapter on simulation concepts in `docs/module3_simulation/concepts.md`.
- [x] T014 [P] [US3] Create a Gazebo launch file for the humanoid robot in `sim/gazebo/`.
- [x] T015 [P] [US3] Create a Unity project and scene for the humanoid robot in `sim/unity/`.
- [x] T016 [P] [US3] Create an Isaac Sim setup script for the humanoid robot in `sim/isaac_sim/`.

---

## Phase 6: User Story 4 - Implement a Vision-Language-Action (VLA) System (P2)

**Goal**: Write the content and create the code for the "VLA" module.
**Independent Test**: A reader can provide an image/text prompt and receive a structured action.

- [x] T017a [US4] Write `examples.md` in `module4_vla/examples.md`.
- [x] T017b [US4] Write `pipeline.md` in `module4_vla/pipeline.md`.
- [x] T017 [US4] Write the chapter on VLA concepts in `docs/module4_vla/concepts.md`.
- [x] T018 [US4] Implement the VLA model pipeline in `examples/vla/pipeline.py`.
- [ ] T019 [P] [US4] Create a simple Gradio or web interface for testing the VLA model.

---

## Phase 7: User Story 5 - Build the Capstone Project (P2)

**Goal**: Write the content and integrate all components for the capstone project.
**Independent Test**: A reader can give a voice command and see the robot perform the action.

- [x] T020a [US5] Create placeholder `voice_agent.md` in `docs/capstone/voice_agent.md`.
- [x] T020b [US5] Create placeholder `voice_agent.md` in `docs/capstone/launch.md`.
- [x] T020 [US5] Write the capstone project overview in `docs/capstone/overview.md`.
- [x] T021 [US5] Implement the voice recognition to text agent in `examples/capstone/voice_agent.py`.
- [x] T022 [US5] Implement the main agent that integrates the VLA model and ROS 2 actions in `examples/capstone/main_agent.py`.
- [x] T023 [US5] Create the final launch file to run the entire capstone project in `examples/capstone/launch/`.

---

## Phase 8: Polish & Cross-Cutting Concerns

- [X] T024 Review all written content for clarity, consistency, and technical accuracy.
- [ ] T025 [P] Test all code examples and the full capstone project for reproducibility.
- [ ] T026 Validate that the Docusaurus site builds correctly and all links are working.
- [ ] T027 [P] Add citations and references according to the APA style guide.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** and **Phase 2 (Foundational)** must be completed before any other phases can begin.
- **User Story Phases (3-7)** can be worked on in parallel to some extent, but there are content dependencies (e.g., ROS 2 knowledge is needed for the capstone).
- **Phase 8 (Polish)** is the final phase and depends on the completion of all other phases.
