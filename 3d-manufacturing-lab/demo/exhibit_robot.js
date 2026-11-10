// Single source of truth for the robot exhibit — used by BOTH study arms.
// Arm A renders it with photos; Arm B renders it with the interactive splat.
// (( TODO: facts marked [confirm] need checking with the lab owner. ))
export const EXHIBIT = {
  id: 'robot',
  family: 'LAB PROTOTYPE',
  title: 'Articulated Spine Robot',
  subtitle: 'Continuum manipulator prototype [confirm]',
  tags: ['Robotics', '3D-printed', 'Articulated', 'Research prototype'],
  sections: [
    {
      icon: '🔍',
      head: 'What you are looking at',
      text: 'A desktop research robot with a bright green hexagonal shell and a flexible ' +
            'white spine rising from its top plate. The spine is a stack of identical ' +
            '3D-printed vertebrae that can bend as one continuous curve.',
    },
    {
      icon: '⚙️',
      head: 'Design details',
      text: 'The green body houses the actuation: the shell is split into a lower hexagonal ' +
            'base and an upper open cage with pillars, topped by a white hex plate. Each ' +
            'vertebra in the spine is a small disc with spokes; thin tendon cables run ' +
            'through the discs — pulling them makes the whole spine curve. [confirm]',
    },
    {
      icon: '📷',
      head: 'How it was digitized',
      text: 'This is not a hand-made 3D model: it is a reconstruction from an 86-second ' +
            'phone video. Software estimated the camera path (COLMAP), then optimized about ' +
            '50 thousand 3D "gaussian splats" to reproduce every view — including real ' +
            'lighting, reflections and wear.',
    },
    {
      icon: '🌱',
      head: 'Why it matters',
      text: 'Flexible spine robots can bend around obstacles where rigid arms cannot — the ' +
            'same principle used in surgical snake robots and inspection robots. Studying ' +
            'the real prototype, marks and all, shows how research hardware actually gets built.',
    },
  ],
  discovery: 'The spine bends because of pulled cables — the same way your fingers curl: ' +
             'the muscles sit in your forearm and pull tendons.',
  // ---- close-up details: rendered as a text list in Arm A, as 3D hotspot pins in Arm B ----
  // pin = position in viewer world units (object centered at origin, ~1 unit tall)
  // cam = suggested camera position for the fly-to
  closeups: [
    { id: 'markers', head: 'Ball markers on the tip',
      text: 'Small grey balls on posts crown the top plate — tracking markers, so ' +
            'instruments can measure exactly where the spine tip moves. [confirm]',
      pin: [0.02, 0.22, 0.02], cam: [0.24, 0.34, 0.3] },
    { id: 'springs', head: 'Coil springs between vertebrae',
      text: 'Between every pair of white discs sits a ring of metal coil springs around a ' +
            'central bead column — they keep the spine springy and evenly spaced while the ' +
            'tendons bend it.',
      pin: [0.04, 0.1, 0.03], cam: [0.2, 0.16, 0.26] },
    { id: 'plate', head: 'Hexagonal top plate',
      text: 'The white hexagonal plate is the interface between body and spine: it carries ' +
            'the spine base and guide holes, with thin cable whiskers exiting around it.',
      pin: [0.08, -0.02, 0.05], cam: [0.26, 0.08, 0.3] },
    { id: 'cage', head: 'Actuation cage',
      text: 'The upper green section is an open cage with corner pillars — the mechanism ' +
            'inside pulls the tendons. The solid green box below is the base housing. [confirm]',
      pin: [0.08, -0.11, 0.06], cam: [0.28, -0.02, 0.34] },
  ],
  // real-world size calibration for the Arm B scale ruler
  realHeightM: 0.60, // [confirm] total height of the physical robot in meters (content = 0.494 world units)
  // ---- study tasks: IDENTICAL in both arms ----
  tasks: {
    observation: {
      minutes: 2,
      prompt: 'Study the robot for 2 minutes. List every distinct detail you can see — ' +
              'shapes, materials, connections, marks, anything. One item per line.',
    },
    inference: [
      'How do you think the white spine moves? What visible evidence supports your answer?',
      'Which parts look custom-made and which look like standard components? How can you tell?',
    ],
    quiz: [
      { q: 'What makes the spine bend?',
        opts: ['Electric motors in each vertebra', 'Pulled tendon cables', 'Air pressure', 'Magnets'], a: 1 },
      { q: 'How was this 3D exhibit created?',
        opts: ['Modeled by an artist', 'CAD files from the lab', 'Reconstructed from a phone video', 'Laser scanner'], a: 2 },
      { q: 'The green shell mainly houses…',
        opts: ['batteries', 'the actuation system', 'sensors', 'a computer'], a: 1 },
      { q: 'Robots with flexible spines are especially useful for…',
        opts: ['lifting heavy loads', 'moving very fast', 'bending around obstacles', 'working underwater'], a: 2 },
      // discovery questions — answerable by LOOKING at the object, not from the text
      { q: 'LOOK: what sits between the white discs of the spine?',
        opts: ['Nothing — they touch', 'Metal coil springs', 'Rubber pads', 'Ball bearings'], a: 1 },
      { q: 'LOOK: what shape is the white top plate?',
        opts: ['Circle', 'Square', 'Hexagon', 'Triangle'], a: 2 },
      { q: 'LOOK: what crowns the very top of the spine?',
        opts: ['A camera', 'A hook', 'Small ball markers', 'A light'], a: 2 },
    ],
  },
};
