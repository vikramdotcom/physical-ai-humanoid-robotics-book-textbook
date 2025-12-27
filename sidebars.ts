import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  textbookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: Foundations of Physical AI',
      link: {
        type: 'generated-index',
        description: 'Introduction to the convergence of artificial intelligence and physical robotics systems.',
      },
      items: [
        'module-1-foundations/1-1-what-is-physical-ai',
        'module-1-foundations/1-2-history-of-robotics-ai',
        'module-1-foundations/1-3-physical-ai-technology-stack',
        'module-1-foundations/1-4-mathematics-for-robotics',
        'module-1-foundations/1-5-programming-fundamentals',
        'module-1-foundations/1-6-ethics-and-safety',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Robot Anatomy and Morphology',
      link: {
        type: 'generated-index',
        description: 'Comprehensive study of robot physical structures, focusing on humanoid body design.',
      },
      items: [
        'module-2-anatomy/2-1-degrees-of-freedom',
        'module-2-anatomy/2-2-humanoid-body-architecture',
        'module-2-anatomy/2-3-actuators-and-motors',
        'module-2-anatomy/2-4-materials-structural-design',
        'module-2-anatomy/2-5-end-effectors-hands',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: Perception and Sensing',
      link: {
        type: 'generated-index',
        description: 'How robots perceive and understand their environment through various sensing modalities.',
      },
      items: [
        'module-3-perception/3-1-sensor-fundamentals',
        'module-3-perception/3-2-vision-systems',
        'module-3-perception/3-3-computer-vision-robotics',
        'module-3-perception/3-4-proprioception-internal-sensing',
        'module-3-perception/3-5-sensor-fusion-state-estimation',
        'module-3-perception/3-6-3d-perception-scene-understanding',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Motion and Locomotion',
      link: {
        type: 'generated-index',
        description: 'Principles of robot movement, from basic kinematics to advanced bipedal walking.',
      },
      items: [
        'module-4-motion/4-1-forward-inverse-kinematics',
        'module-4-motion/4-2-dynamics-force-control',
        'module-4-motion/4-3-motion-planning-fundamentals',
        'module-4-motion/4-4-bipedal-walking-principles',
        'module-4-motion/4-5-balance-and-stability',
        'module-4-motion/4-6-running-jumping-dynamic-locomotion',
        'module-4-motion/4-7-whole-body-control',
      ],
    },
    {
      type: 'category',
      label: 'Module 5: Manipulation and Interaction',
      link: {
        type: 'generated-index',
        description: 'Robot manipulation capabilities, from grasping objects to safe human interaction.',
      },
      items: [
        'module-5-manipulation/5-1-grasping-fundamentals',
        'module-5-manipulation/5-2-manipulation-planning',
        'module-5-manipulation/5-3-dexterous-manipulation',
        'module-5-manipulation/5-4-contact-collision-handling',
        'module-5-manipulation/5-5-physical-human-robot-interaction',
        'module-5-manipulation/5-6-teleoperation-shared-autonomy',
      ],
    },
    {
      type: 'category',
      label: 'Module 6: Learning and Intelligence',
      link: {
        type: 'generated-index',
        description: 'How robots learn from data and experience, covering ML, RL, and foundation models.',
      },
      items: [
        'module-6-learning/6-1-ml-fundamentals-robotics',
        'module-6-learning/6-2-reinforcement-learning-basics',
        'module-6-learning/6-3-deep-reinforcement-learning',
        'module-6-learning/6-4-imitation-learning',
        'module-6-learning/6-5-sim-to-real-transfer',
        'module-6-learning/6-6-foundation-models-robotics',
        'module-6-learning/6-7-robot-learning-practice',
        'module-6-learning/6-8-emergent-behaviors-generalization',
      ],
    },
    {
      type: 'category',
      label: 'Module 7: Systems Integration and Deployment',
      link: {
        type: 'generated-index',
        description: 'Bringing together all components into working robotic systems.',
      },
      items: [
        'module-7-integration/7-1-ros2-architecture-deep-dive',
        'module-7-integration/7-2-robot-software-design-patterns',
        'module-7-integration/7-3-simulation-digital-twins',
        'module-7-integration/7-4-testing-and-validation',
        'module-7-integration/7-5-deployment-and-operations',
      ],
    },
    {
      type: 'category',
      label: 'Module 8: Applications and Future Directions',
      link: {
        type: 'generated-index',
        description: 'Real-world applications of humanoid robotics and emerging trends.',
      },
      items: [
        'module-8-applications/8-1-humanoids-manufacturing-logistics',
        'module-8-applications/8-2-service-healthcare-robotics',
        'module-8-applications/8-3-entertainment-social-robots',
        'module-8-applications/8-4-research-platforms-open-source',
        'module-8-applications/8-5-future-of-physical-ai',
      ],
    },
  ],
};

export default sidebars;
