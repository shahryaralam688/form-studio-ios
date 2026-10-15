/** Bodyweight exercise catalog + Mixamo clips + guided form tours */

export const EXERCISES = [
	{
		id: 'push_up',
		name: 'Push-Ups',
		tagline: 'Chest, arms & core strength',
		level: 'Beginner+',
		reps: '8–12 reps',
		file: 'models/exercises/Push_Up.fbx',
		muscles: [ 'Chest', 'Shoulders', 'Triceps', 'Core' ],
		summary: 'A floor pressing move. You hold a straight body line and lower/raise your chest with arm control — no machine needed.',
		balance: [
			'Hands under shoulders, fingers slightly out.',
			'Body forms one straight line: head → hips → heels.',
			'Brace your core so hips do not sag or pike up.',
			'Feet together or hip-width for stability.'
		],
		steps: [
			'Start in a high plank: arms straight, shoulders over wrists.',
			'Lock your body — squeeze glutes and pull belly in.',
			'Bend elbows (~45°) and lower chest toward the floor with control.',
			'Pause briefly just above the floor without collapsing.',
			'Press the floor away and fully extend arms without locking hard.',
			'Breathe: inhale down, exhale as you push up.'
		],
		cues: [
			'Keep a rigid plank line',
			'Elbows ~45°, not flared wide',
			'Chest leads — not the hips',
			'Full range, controlled tempo'
		],
		mistakes: [
			'Hips sagging (hurts lower back)',
			'Head dropping or looking forward too hard',
			'Partial reps / bouncing off the floor'
		],
		guide: [
			{
				focus: 'Hands',
				title: 'Plant your hands',
				detail: 'Place hands under shoulders, fingers slightly out. Wrists stack under shoulders for a strong base.',
				t: 0.08,
				camera: { pos: [ -1.2, 1.1, 2.4 ], target: [ 0, 0.7, 0 ] }
			},
			{
				focus: 'Legs',
				title: 'Lock the leg line',
				detail: 'Feet together or hip-width. Legs stay long and active — squeeze quads so hips do not sag.',
				t: 0.18,
				camera: { pos: [ -2.2, 0.9, 2.8 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Core',
				title: 'Brace the whole body',
				detail: 'Ribs down, glutes on. Build one straight line from head to heels before you bend the elbows.',
				t: 0.28,
				camera: { pos: [ -1.8, 1.2, 3.0 ], target: [ 0, 0.85, 0 ] }
			},
			{
				focus: 'Chest',
				title: 'Lower the chest',
				detail: 'Bend elbows about 45°. Lower chest toward the floor with control — chest leads, not the hips.',
				t: 0.48,
				camera: { pos: [ -1.5, 0.85, 2.5 ], target: [ 0, 0.45, 0 ] }
			},
			{
				focus: 'Elbows',
				title: 'Bottom position',
				detail: 'Pause just above the floor. Keep elbows tracking, neck neutral, body still in one plank line.',
				t: 0.62,
				camera: { pos: [ -1.3, 0.7, 2.2 ], target: [ 0, 0.35, 0 ] }
			},
			{
				focus: 'Arms',
				title: 'Press back up',
				detail: 'Push the floor away, exhale, and fully extend arms without slamming or losing the plank.',
				t: 0.82,
				camera: { pos: [ -1.7, 1.15, 2.9 ], target: [ 0, 0.75, 0 ] }
			}
		]
	},
	{
		id: 'air_squat',
		name: 'Air Squats',
		tagline: 'Legs & glutes, bodyweight only',
		level: 'Beginner',
		reps: '12–15 reps',
		file: 'models/exercises/Air_Squat.fbx',
		muscles: [ 'Quads', 'Glutes', 'Hamstrings', 'Core' ],
		summary: 'Sit back and down with your own body weight, then stand tall. Great for legs, balance, and daily movement strength.',
		balance: [
			'Feet about shoulder-width, toes slightly out.',
			'Weight through mid-foot / heels — not only toes.',
			'Chest up, eyes forward — spine stays long.',
			'Knees track over toes; do not cave inward.'
		],
		steps: [
			'Stand tall, brace core, arms forward for counterbalance if needed.',
			'Push hips back as if sitting onto a chair.',
			'Bend knees and descend until thighs are at least parallel (mobility allowing).',
			'Keep heels planted and knees aligned.',
			'Drive through the floor to stand — squeeze glutes at the top.',
			'Breathe: inhale down, exhale up.'
		],
		cues: [
			'Hips back, then down',
			'Heels stay grounded',
			'Knees track over toes',
			'Stand tall every rep'
		],
		mistakes: [
			'Knees collapsing inward',
			'Rounding the lower back',
			'Rising onto the toes'
		],
		guide: [
			{
				focus: 'Feet',
				title: 'Set your stance',
				detail: 'Feet about shoulder-width, toes slightly out. Feel the whole foot — especially heels.',
				t: 0.05,
				camera: { pos: [ -1.4, 1.2, 2.8 ], target: [ 0, 0.9, 0 ] }
			},
			{
				focus: 'Hips',
				title: 'Hips go back first',
				detail: 'Push hips back like sitting to a chair. Chest stays proud; do not fold forward.',
				t: 0.25,
				camera: { pos: [ -1.8, 1.1, 2.9 ], target: [ 0, 0.85, 0 ] }
			},
			{
				focus: 'Knees',
				title: 'Track the knees',
				detail: 'Knees follow the toes. Do not let them cave inward as you descend.',
				t: 0.42,
				camera: { pos: [ -1.2, 0.85, 2.6 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Depth',
				title: 'Find your depth',
				detail: 'Lower until thighs are near parallel (or your safe depth). Heels stay planted.',
				t: 0.58,
				camera: { pos: [ -1.6, 0.9, 2.7 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Chest',
				title: 'Keep the chest tall',
				detail: 'Spine long, eyes forward. Avoid rounding the lower back at the bottom.',
				t: 0.68,
				camera: { pos: [ -1.5, 1.35, 2.5 ], target: [ 0, 1.0, 0 ] }
			},
			{
				focus: 'Stand',
				title: 'Drive up strong',
				detail: 'Push the floor away, squeeze glutes at the top, and finish tall before the next rep.',
				t: 0.88,
				camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] }
			}
		]
	},
	{
		id: 'jumping_jacks',
		name: 'Jumping Jacks',
		tagline: 'Cardio warm-up & coordination',
		level: 'Beginner',
		reps: '30–45 sec',
		file: 'models/exercises/Jumping_Jacks.fbx',
		muscles: [ 'Full body', 'Calves', 'Shoulders', 'Cardio' ],
		summary: 'A rhythmic jump that opens and closes arms and legs together. Raises heart rate and wakes up coordination.',
		balance: [
			'Land soft on the balls of your feet, then whole foot.',
			'Keep a slight knee bend on every landing.',
			'Stay upright — do not lean forward.',
			'Arms and legs move as one rhythm.'
		],
		steps: [
			'Start feet together, arms by your sides.',
			'Jump feet out to shoulder/hip-width while raising arms overhead.',
			'Jump back to start: feet together, arms down.',
			'Keep jumps light and springy — not stomping.',
			'Find a steady breath pattern; do not hold your breath.',
			'If impact is high, step jacks out instead of jumping.'
		],
		cues: [
			'Soft landings',
			'Same rhythm: arms + legs',
			'Stay tall through the torso',
			'Light and quick feet'
		],
		mistakes: [
			'Locking knees on landing',
			'Arms unfinished / lazy range',
			'Holding breath'
		],
		guide: [
			{
				focus: 'Start',
				title: 'Ready stance',
				detail: 'Feet together, arms relaxed by your sides. Soft knees — ready to spring.',
				t: 0.05,
				camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.0, 0 ] }
			},
			{
				focus: 'Legs',
				title: 'Open the feet',
				detail: 'Jump feet out to about shoulder width. Land light on the balls of the feet.',
				t: 0.28,
				camera: { pos: [ -1.7, 1.0, 2.9 ], target: [ 0, 0.6, 0 ] }
			},
			{
				focus: 'Arms',
				title: 'Arms go overhead',
				detail: 'Raise both arms in the same beat as the feet open. Finish with hands high.',
				t: 0.4,
				camera: { pos: [ -1.4, 1.6, 2.6 ], target: [ 0, 1.35, 0 ] }
			},
			{
				focus: 'Landing',
				title: 'Soft landing',
				detail: 'Keep a slight knee bend. Never lock the knees when you hit the floor.',
				t: 0.55,
				camera: { pos: [ -1.6, 0.95, 2.7 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Close',
				title: 'Return to center',
				detail: 'Jump feet together and bring arms down together — one clean rhythm.',
				t: 0.75,
				camera: { pos: [ -1.5, 1.35, 2.9 ], target: [ 0, 1.0, 0 ] }
			},
			{
				focus: 'Breath',
				title: 'Stay tall & breathe',
				detail: 'Torso upright, steady breathing. Light and springy — not stomping.',
				t: 0.9,
				camera: { pos: [ -1.6, 1.45, 3.1 ], target: [ 0, 1.05, 0 ] }
			}
		]
	},
	{
		id: 'plank',
		name: 'Plank Hold',
		tagline: 'Core stability & body line',
		level: 'Beginner+',
		reps: '20–40 sec',
		file: 'models/exercises/Plank.fbx',
		muscles: [ 'Core', 'Shoulders', 'Glutes', 'Back' ],
		summary: 'An isometric hold. You balance in a straight line and resist gravity — teaching the body how to stay stable.',
		balance: [
			'Elbows under shoulders (forearm plank) or hands under shoulders.',
			'Neutral neck: look at the floor just ahead of hands.',
			'Squeeze glutes; do not let hips drop or rise.',
			'Push the floor away so upper back stays active.'
		],
		steps: [
			'Set hands/forearms and step feet back into a straight line.',
			'Brace core like someone will tap your stomach.',
			'Create full-body tension: legs, glutes, shoulders.',
			'Hold steady — small breaths, no collapsing.',
			'If form breaks, rest, then restart with shorter holds.',
			'Exit by dropping knees down with control.'
		],
		cues: [
			'Straight line head to heels',
			'Glutes on, ribs down',
			'Push floor away',
			'Breathe in short steady cycles'
		],
		mistakes: [
			'Hips sagging or piking',
			'Shoulders shrugging to ears',
			'Holding breath until shake-collapse'
		],
		guide: [
			{
				focus: 'Hands',
				title: 'Set the base',
				detail: 'Hands or forearms under shoulders. Push the floor away so shoulders stay active.',
				t: 0.12,
				camera: { pos: [ -1.2, 0.9, 2.3 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Legs',
				title: 'Step into the line',
				detail: 'Feet back, legs long. Create a straight rail from heels through hips to head.',
				t: 0.28,
				camera: { pos: [ -2.1, 0.85, 2.8 ], target: [ 0, 0.5, 0 ] }
			},
			{
				focus: 'Hips',
				title: 'Hips neither up nor down',
				detail: 'Squeeze glutes. If hips sag or pike, reset — the goal is a flat body line.',
				t: 0.45,
				camera: { pos: [ -1.7, 1.0, 2.6 ], target: [ 0, 0.65, 0 ] }
			},
			{
				focus: 'Core',
				title: 'Brace like armor',
				detail: 'Pull belly in gently, ribs quiet. Full-body tension — not just “hanging”.',
				t: 0.6,
				camera: { pos: [ -1.5, 1.05, 2.5 ], target: [ 0, 0.7, 0 ] }
			},
			{
				focus: 'Neck',
				title: 'Neutral head',
				detail: 'Look at the floor just ahead of your hands. Do not crane the neck up.',
				t: 0.75,
				camera: { pos: [ -1.1, 1.1, 2.2 ], target: [ 0, 0.85, 0 ] }
			},
			{
				focus: 'Hold',
				title: 'Breathe and own it',
				detail: 'Short steady breaths. If form breaks, rest — then restart with a shorter hold.',
				t: 0.9,
				camera: { pos: [ -1.8, 1.1, 3.0 ], target: [ 0, 0.7, 0 ] }
			}
		]
	},
	{
		id: 'situps',
		name: 'Sit-Ups',
		tagline: 'Core flexion on the floor',
		level: 'Beginner+',
		reps: '10–15 reps',
		file: 'models/exercises/Situps.fbx',
		muscles: [ 'Abs', 'Hip flexors', 'Core' ],
		summary: 'Lie down, then sit up with control. Focus on curling the torso — not yanking with the neck.',
		balance: [
			'Feet planted; knees bent comfortably.',
			'Lower back starts in contact with the floor.',
			'Chin slightly tucked — fist-distance from chest.',
			'Move evenly; avoid twisting to one side.'
		],
		steps: [
			'Lie on your back, knees bent, feet down.',
			'Hands at temples or crossed on chest (avoid pulling the head).',
			'Engage abs and curl torso up toward thighs.',
			'Pause briefly at the top without jerking.',
			'Lower with control until shoulders touch the floor.',
			'Exhale on the way up, inhale on the way down.'
		],
		cues: [
			'Curl, do not yank the neck',
			'Abs initiate the move',
			'Control the lowering',
			'Smooth tempo each rep'
		],
		mistakes: [
			'Pulling head/neck with hands',
			'Using momentum / swinging',
			'Feet lifting wildly every rep'
		],
		guide: [
			{
				focus: 'Setup',
				title: 'Lie down correctly',
				detail: 'Back on the floor, knees bent, feet planted. Lower back starts in contact with the floor.',
				t: 0.08,
				camera: { pos: [ -1.6, 1.2, 2.8 ], target: [ 0, 0.4, 0 ] }
			},
			{
				focus: 'Hands',
				title: 'Place the hands',
				detail: 'Hands at temples or crossed on chest. Do not yank the head forward.',
				t: 0.22,
				camera: { pos: [ -1.2, 1.0, 2.3 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Abs',
				title: 'Abs start the curl',
				detail: 'Exhale and curl the torso up. Think “ribs toward hips”, not “head first”.',
				t: 0.4,
				camera: { pos: [ -1.5, 0.95, 2.5 ], target: [ 0, 0.5, 0 ] }
			},
			{
				focus: 'Top',
				title: 'Pause at the top',
				detail: 'Sit tall enough to finish the curl. Brief pause — no swinging or twisting.',
				t: 0.58,
				camera: { pos: [ -1.4, 1.15, 2.6 ], target: [ 0, 0.7, 0 ] }
			},
			{
				focus: 'Lower',
				title: 'Lower with control',
				detail: 'Inhale and reverse slowly until shoulders touch the floor. Own the eccentric.',
				t: 0.78,
				camera: { pos: [ -1.55, 1.0, 2.7 ], target: [ 0, 0.45, 0 ] }
			},
			{
				focus: 'Neck',
				title: 'Protect the neck',
				detail: 'Chin gently tucked. If the neck strains, cross arms on chest and shorten the range.',
				t: 0.9,
				camera: { pos: [ -1.1, 1.05, 2.2 ], target: [ 0, 0.65, 0 ] }
			}
		]
	},
	{
		id: 'burpee',
		name: 'Burpees',
		tagline: 'Full-body conditioner',
		level: 'Intermediate',
		reps: '6–10 reps',
		file: 'models/exercises/Burpee.fbx',
		muscles: [ 'Full body', 'Chest', 'Legs', 'Cardio' ],
		summary: 'Squat → plank → push-up pattern → jump. High effort, zero equipment. Quality beats speed.',
		balance: [
			'Soft knees on the jump landing.',
			'Hands plant under shoulders when you go to plank.',
			'Keep core braced during the kick-back.',
			'Stand fully before the next jump.'
		],
		steps: [
			'Stand tall, then squat and place hands on the floor.',
			'Jump or step feet back into a strong plank.',
			'Optional: perform one controlled push-up.',
			'Jump or step feet forward toward hands.',
			'Explode upward into a small jump, arms up.',
			'Land soft and immediately set up the next rep with control.'
		],
		cues: [
			'Plank line before you push',
			'Soft landings',
			'Full stand between reps',
			'Own the tempo — do not rush form'
		],
		mistakes: [
			'Collapsing in the plank',
			'Hard heel-stomping landings',
			'Sacrificing form only for speed'
		],
		guide: [
			{
				focus: 'Stand',
				title: 'Start tall',
				detail: 'Stand ready. Soft knees. You will move squat → plank → stand → jump.',
				t: 0.05,
				camera: { pos: [ -1.5, 1.45, 3.0 ], target: [ 0, 1.05, 0 ] }
			},
			{
				focus: 'Hands',
				title: 'Squat & plant hands',
				detail: 'Drop into a squat and place hands on the floor under shoulders.',
				t: 0.22,
				camera: { pos: [ -1.5, 1.0, 2.7 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Plank',
				title: 'Kick to a strong plank',
				detail: 'Jump or step feet back. Body line must be solid before any push-up.',
				t: 0.4,
				camera: { pos: [ -1.9, 0.95, 2.9 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Chest',
				title: 'Optional push-up',
				detail: 'If you add a push-up, keep hips level and chest controlled — no collapse.',
				t: 0.55,
				camera: { pos: [ -1.4, 0.75, 2.4 ], target: [ 0, 0.4, 0 ] }
			},
			{
				focus: 'Feet',
				title: 'Feet jump forward',
				detail: 'Bring feet toward hands under control, ready to stand tall.',
				t: 0.72,
				camera: { pos: [ -1.6, 1.05, 2.7 ], target: [ 0, 0.65, 0 ] }
			},
			{
				focus: 'Jump',
				title: 'Explode & land soft',
				detail: 'Jump up, arms high, then land with soft knees before the next rep.',
				t: 0.9,
				camera: { pos: [ -1.55, 1.55, 3.1 ], target: [ 0, 1.15, 0 ] }
			}
		]
	},
	{
		id: 'warming_up',
		name: 'Warming Up',
		tagline: 'Loosen joints before training',
		level: 'Beginner',
		reps: '45–60 sec',
		file: 'models/exercises/Warming_Up.fbx',
		muscles: [ 'Full body', 'Shoulders', 'Hips', 'Cardio' ],
		summary: 'A light full-body warm-up that wakes up shoulders, hips, and spine before harder work.',
		balance: [
			'Stay tall through the crown of the head.',
			'Keep a soft knee bend — never lock hard.',
			'Move smoothly; do not rush into big ranges.',
			'Breathe steadily as arms and torso open.'
		],
		steps: [
			'Stand tall with feet about hip-width.',
			'Begin gentle arm and torso circles or swings.',
			'Keep ribs quiet and core lightly braced.',
			'Increase range only as the body feels warm.',
			'Stay light on the feet — no stomping.',
			'Finish ready for your first strength move.'
		],
		cues: [
			'Tall posture, soft knees',
			'Smooth, controlled circles',
			'Warm first — stretch later',
			'Steady breathing'
		],
		mistakes: [
			'Forcing a deep stretch cold',
			'Holding the breath',
			'Rounding hard through the low back'
		],
		guide: [
			{
				focus: 'Stance',
				title: 'Stand ready',
				detail: 'Feet hip-width, soft knees, tall spine. This is a warm-up — stay relaxed.',
				t: 0.06,
				camera: { pos: [ -1.5, 1.45, 3.0 ], target: [ 0, 1.05, 0 ] }
			},
			{
				focus: 'Arms',
				title: 'Open the shoulders',
				detail: 'Let the arms swing or circle with control. Do not yank at end range.',
				t: 0.25,
				camera: { pos: [ -1.4, 1.55, 2.7 ], target: [ 0, 1.25, 0 ] }
			},
			{
				focus: 'Hips',
				title: 'Wake up the hips',
				detail: 'Keep weight centered. Hips stay quiet and ready — no collapsing sideways.',
				t: 0.42,
				camera: { pos: [ -1.7, 1.1, 2.9 ], target: [ 0, 0.85, 0 ] }
			},
			{
				focus: 'Spine',
				title: 'Keep the torso tall',
				detail: 'Ribs down, chest open. Warm the spine without folding forward hard.',
				t: 0.6,
				camera: { pos: [ -1.6, 1.35, 2.8 ], target: [ 0, 1.0, 0 ] }
			},
			{
				focus: 'Feet',
				title: 'Stay light on the feet',
				detail: 'Soft landings and quiet feet. Save heavy impact for the workout.',
				t: 0.78,
				camera: { pos: [ -1.5, 0.95, 2.7 ], target: [ 0, 0.5, 0 ] }
			},
			{
				focus: 'Breath',
				title: 'Breathe and finish warm',
				detail: 'Steady inhale/exhale. You should feel warm and ready — not exhausted.',
				t: 0.92,
				camera: { pos: [ -1.55, 1.45, 3.05 ], target: [ 0, 1.05, 0 ] }
			}
		]
	},
	{
		id: 'arm_stretching',
		name: 'Arm Stretching',
		tagline: 'Shoulders & upper-back mobility',
		level: 'Beginner',
		reps: '30–45 sec',
		file: 'models/exercises/Arm_Stretching.fbx',
		muscles: [ 'Shoulders', 'Chest', 'Upper back', 'Arms' ],
		summary: 'Controlled arm reaches that open the chest and shoulders without bouncing or forcing.',
		balance: [
			'Feet planted under hips for a stable base.',
			'Keep ribs stacked over the pelvis.',
			'Neck stays long — do not shrug to the ears.',
			'Move to a gentle stretch, then ease out.'
		],
		steps: [
			'Stand tall with a soft brace through the core.',
			'Reach or cross the arms through a comfortable range.',
			'Pause briefly where you feel a mild stretch.',
			'Keep shoulders away from the ears.',
			'Return slowly — no bouncing.',
			'Match breath to each reach and release.'
		],
		cues: [
			'Long neck, soft shoulders',
			'Gentle end range only',
			'Ribs stacked, not flared',
			'Slow return every rep'
		],
		mistakes: [
			'Bouncing into the stretch',
			'Shrugging shoulders up',
			'Arching the low back to fake range'
		],
		guide: [
			{
				focus: 'Base',
				title: 'Set a stable stance',
				detail: 'Feet under hips, soft knees, tall posture before the arms move.',
				t: 0.08,
				camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] }
			},
			{
				focus: 'Shoulders',
				title: 'Drop the shoulders',
				detail: 'Keep shoulders away from the ears. Length comes from the arms, not shrugging.',
				t: 0.25,
				camera: { pos: [ -1.3, 1.55, 2.5 ], target: [ 0, 1.3, 0 ] }
			},
			{
				focus: 'Chest',
				title: 'Open the chest gently',
				detail: 'Reach until you feel a mild stretch across the chest or upper back — then stop.',
				t: 0.45,
				camera: { pos: [ -1.45, 1.45, 2.7 ], target: [ 0, 1.15, 0 ] }
			},
			{
				focus: 'Core',
				title: 'Do not cheat with the back',
				detail: 'Ribs stay stacked. Avoid flaring or arching the low back for extra range.',
				t: 0.62,
				camera: { pos: [ -1.7, 1.25, 2.9 ], target: [ 0, 0.95, 0 ] }
			},
			{
				focus: 'Arms',
				title: 'Return with control',
				detail: 'Ease out of the stretch slowly. No bouncing at end range.',
				t: 0.8,
				camera: { pos: [ -1.4, 1.5, 2.6 ], target: [ 0, 1.25, 0 ] }
			},
			{
				focus: 'Breath',
				title: 'Breathe into the stretch',
				detail: 'Exhale as you reach, inhale as you release. Stay calm and smooth.',
				t: 0.92,
				camera: { pos: [ -1.55, 1.45, 3.0 ], target: [ 0, 1.1, 0 ] }
			}
		]
	},
	{
		id: 'bicycle_crunch',
		name: 'Bicycle Crunches',
		tagline: 'Abs & oblique rotation',
		level: 'Beginner+',
		reps: '10–16/side',
		file: 'models/exercises/Bicycle_Crunch.fbx',
		muscles: [ 'Abs', 'Obliques', 'Hip flexors', 'Core' ],
		summary: 'A rotating crunch on the floor. Elbow drives toward the opposite knee while the other leg extends.',
		balance: [
			'Lower back stays lightly pressed toward the floor.',
			'Chin gently tucked — fist-distance from the chest.',
			'Shoulders lift; neck does not yank forward.',
			'Move evenly left and right — no twisting hard.'
		],
		steps: [
			'Lie on your back, hands lightly at temples.',
			'Lift shoulders and bring knees into a tabletop.',
			'Rotate to bring one elbow toward the opposite knee.',
			'Extend the other leg long without slamming it down.',
			'Switch sides in a smooth pedaling rhythm.',
			'Exhale on each twist; keep tempo controlled.'
		],
		cues: [
			'Elbow to opposite knee',
			'Shoulders lift — neck stays quiet',
			'Long opposite leg',
			'Smooth left–right rhythm'
		],
		mistakes: [
			'Pulling the head with the hands',
			'Rushing and losing the rotation',
			'Letting the low back peel up hard'
		],
		guide: [
			{
				focus: 'Setup',
				title: 'Lie down & brace',
				detail: 'Back on the floor, hands at temples. Light brace so the low back stays quiet.',
				t: 0.08,
				camera: { pos: [ -1.6, 1.15, 2.8 ], target: [ 0, 0.4, 0 ] }
			},
			{
				focus: 'Legs',
				title: 'Tabletop start',
				detail: 'Lift knees toward tabletop. Shoulders come up — chin stays gently tucked.',
				t: 0.22,
				camera: { pos: [ -1.4, 1.0, 2.5 ], target: [ 0, 0.5, 0 ] }
			},
			{
				focus: 'Twist',
				title: 'Elbow meets opposite knee',
				detail: 'Rotate the torso so one elbow aims at the opposite knee. Abs turn you — not the neck.',
				t: 0.4,
				camera: { pos: [ -1.5, 0.95, 2.5 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Extend',
				title: 'Lengthen the free leg',
				detail: 'Extend the opposite leg long and controlled. Do not crash the heel into the floor.',
				t: 0.58,
				camera: { pos: [ -1.7, 0.9, 2.7 ], target: [ 0, 0.45, 0 ] }
			},
			{
				focus: 'Switch',
				title: 'Pedal to the other side',
				detail: 'Switch smoothly. Same height, same control — left and right should look even.',
				t: 0.75,
				camera: { pos: [ -1.45, 1.0, 2.55 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Breath',
				title: 'Own the tempo',
				detail: 'Exhale each twist. If form breaks, slow down or shorten the range.',
				t: 0.9,
				camera: { pos: [ -1.55, 1.1, 2.8 ], target: [ 0, 0.55, 0 ] }
			}
		]
	},
	{
		id: 'circle_crunch',
		name: 'Circle Crunches',
		tagline: 'Controlled ab circles',
		level: 'Beginner+',
		reps: '8–12 circles',
		file: 'models/exercises/Circle_Crunch.fbx',
		muscles: [ 'Abs', 'Obliques', 'Core' ],
		summary: 'A crunch pattern that traces a small circle with the torso — strength plus control, not speed.',
		balance: [
			'Feet planted or knees bent for a stable base.',
			'Low back stays supported; do not yank up.',
			'Circle stays small and even both directions.',
			'Neck follows the spine — chin lightly tucked.'
		],
		steps: [
			'Lie on your back and set hands at temples or across the chest.',
			'Engage abs and lift the shoulders slightly.',
			'Trace a small circle with the upper torso.',
			'Keep hips quiet — the circle comes from the core.',
			'Reverse direction after equal reps.',
			'Lower with control between sets.'
		],
		cues: [
			'Small, even circles',
			'Abs move the torso',
			'Hips stay quiet',
			'Control over speed'
		],
		mistakes: [
			'Huge wild circles with momentum',
			'Pulling on the neck',
			'Letting hips rock side to side'
		],
		guide: [
			{
				focus: 'Setup',
				title: 'Plant the base',
				detail: 'Back down, knees bent, feet planted. Hands light at temples or on the chest.',
				t: 0.08,
				camera: { pos: [ -1.55, 1.15, 2.8 ], target: [ 0, 0.4, 0 ] }
			},
			{
				focus: 'Abs',
				title: 'Lift with the abs',
				detail: 'Curl the shoulders up a little. Think ribs toward hips — not head first.',
				t: 0.25,
				camera: { pos: [ -1.4, 1.0, 2.5 ], target: [ 0, 0.5, 0 ] }
			},
			{
				focus: 'Circle',
				title: 'Start a small circle',
				detail: 'Trace a tight circle with the upper torso. Keep it even — no wild swings.',
				t: 0.45,
				camera: { pos: [ -1.5, 0.95, 2.55 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Hips',
				title: 'Hips stay quiet',
				detail: 'The circle is from the core. Hips and feet should not rock side to side.',
				t: 0.62,
				camera: { pos: [ -1.7, 0.9, 2.7 ], target: [ 0, 0.45, 0 ] }
			},
			{
				focus: 'Neck',
				title: 'Protect the neck',
				detail: 'Chin lightly tucked. If the neck strains, cross arms on the chest and shrink the circle.',
				t: 0.78,
				camera: { pos: [ -1.2, 1.05, 2.3 ], target: [ 0, 0.65, 0 ] }
			},
			{
				focus: 'Finish',
				title: 'Reverse & lower',
				detail: 'Match reps both directions, then lower shoulders with control.',
				t: 0.9,
				camera: { pos: [ -1.55, 1.1, 2.8 ], target: [ 0, 0.5, 0 ] }
			}
		]
	},
	{
		id: 'jump_push_up',
		name: 'Jump Push-Ups',
		tagline: 'Explosive chest & power',
		level: 'Intermediate',
		reps: '6–10 reps',
		file: 'models/exercises/Jump_Push_Up.fbx',
		muscles: [ 'Chest', 'Shoulders', 'Triceps', 'Core' ],
		summary: 'A push-up with an explosive press so the hands leave the floor briefly. Quality and soft landings beat raw height.',
		balance: [
			'Start from a strong plank line before every rep.',
			'Hands plant under shoulders on landing.',
			'Absorb the landing with soft elbows — no slap.',
			'Brace core so hips do not sag when you explode.'
		],
		steps: [
			'Set a high plank: hands under shoulders, body one line.',
			'Lower into a controlled push-up.',
			'Press hard and explosively so hands leave the floor.',
			'Keep the body rigid in the air — no piked hips.',
			'Land soft under the shoulders and reset the plank.',
			'Only go as high as you can land quietly.'
		],
		cues: [
			'Plank first, then explode',
			'Soft, quiet landings',
			'Hips level in the air',
			'Full control every rep'
		],
		mistakes: [
			'Sagging hips on the press',
			'Hard slap landings',
			'Chasing height while form collapses'
		],
		guide: [
			{
				focus: 'Plank',
				title: 'Build a rigid plank',
				detail: 'Hands under shoulders, body one straight line. No sag, no pike.',
				t: 0.08,
				camera: { pos: [ -1.8, 1.0, 2.9 ], target: [ 0, 0.6, 0 ] }
			},
			{
				focus: 'Lower',
				title: 'Lower with control',
				detail: 'Bend elbows ~45° and lower the chest. Own the eccentric before you explode.',
				t: 0.28,
				camera: { pos: [ -1.5, 0.85, 2.5 ], target: [ 0, 0.45, 0 ] }
			},
			{
				focus: 'Press',
				title: 'Explode off the floor',
				detail: 'Drive hard through the hands so they leave the floor. Core stays braced.',
				t: 0.48,
				camera: { pos: [ -1.6, 1.0, 2.7 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Air',
				title: 'Stay long in the air',
				detail: 'Body stays plank-like briefly. Do not tuck or pike just to get height.',
				t: 0.62,
				camera: { pos: [ -1.7, 1.15, 2.9 ], target: [ 0, 0.7, 0 ] }
			},
			{
				focus: 'Land',
				title: 'Land soft under shoulders',
				detail: 'Hands return under shoulders. Soft elbows absorb — no slap on the wrists.',
				t: 0.78,
				camera: { pos: [ -1.45, 0.9, 2.5 ], target: [ 0, 0.5, 0 ] }
			},
			{
				focus: 'Reset',
				title: 'Reset before the next rep',
				detail: 'Rebuild the plank line, then go again. Quality over max bounce.',
				t: 0.92,
				camera: { pos: [ -1.75, 1.05, 3.0 ], target: [ 0, 0.65, 0 ] }
			}
		]
	},
	{
		id: 'overhead_squat',
		name: 'Overhead Squats',
		tagline: 'Legs, shoulders & posture',
		level: 'Intermediate',
		reps: '6–10 reps',
		file: 'models/exercises/Overhead_Squat.fbx',
		muscles: [ 'Quads', 'Glutes', 'Shoulders', 'Core' ],
		summary: 'A squat with arms locked overhead. Demands mobility, balance, and a tall torso the whole way down and up.',
		balance: [
			'Feet about shoulder-width, toes slightly out.',
			'Arms stay long overhead — biceps by the ears if mobility allows.',
			'Chest up; do not collapse forward as you sit.',
			'Heels stay down; knees track over toes.'
		],
		steps: [
			'Stand tall and lock arms overhead (empty hands or imaginary bar).',
			'Brace core and push hips back to start the squat.',
			'Descend while keeping arms vertical and torso tall.',
			'Find a depth you can own without heels lifting.',
			'Drive up through the floor, arms still overhead.',
			'Stand fully before the next rep.'
		],
		cues: [
			'Arms long overhead',
			'Tall chest all the way',
			'Heels planted',
			'Knees track over toes'
		],
		mistakes: [
			'Arms drifting forward as you squat',
			'Heels rising / collapsing forward',
			'Knees caving inward'
		],
		guide: [
			{
				focus: 'Arms',
				title: 'Lock arms overhead',
				detail: 'Reach tall. Arms stay long — think biceps near the ears if your shoulders allow.',
				t: 0.08,
				camera: { pos: [ -1.4, 1.55, 2.8 ], target: [ 0, 1.25, 0 ] }
			},
			{
				focus: 'Stance',
				title: 'Set the squat stance',
				detail: 'Feet shoulder-width, toes slightly out. Soft brace through the core.',
				t: 0.22,
				camera: { pos: [ -1.5, 1.25, 3.0 ], target: [ 0, 0.9, 0 ] }
			},
			{
				focus: 'Hips',
				title: 'Hips back, chest tall',
				detail: 'Sit the hips back and down. Keep the chest proud so arms do not tip forward.',
				t: 0.4,
				camera: { pos: [ -1.7, 1.15, 2.9 ], target: [ 0, 0.85, 0 ] }
			},
			{
				focus: 'Depth',
				title: 'Own your depth',
				detail: 'Descend only as far as heels stay down and arms stay vertical. Quality over depth.',
				t: 0.58,
				camera: { pos: [ -1.55, 0.95, 2.7 ], target: [ 0, 0.6, 0 ] }
			},
			{
				focus: 'Knees',
				title: 'Track the knees',
				detail: 'Knees follow the toes. Do not let them cave as you drive up.',
				t: 0.75,
				camera: { pos: [ -1.3, 0.9, 2.6 ], target: [ 0, 0.55, 0 ] }
			},
			{
				focus: 'Stand',
				title: 'Stand tall overhead',
				detail: 'Drive the floor away, squeeze glutes, and finish with arms still locked overhead.',
				t: 0.9,
				camera: { pos: [ -1.5, 1.45, 3.0 ], target: [ 0, 1.1, 0 ] }
			}
		]
	},
	{
		id: 'walking_lunges',
		name: 'Walking Lunges',
		tagline: 'Single-leg strength & balance',
		level: 'Beginner+',
		reps: '8–12/leg',
		has3d: false,
		file: null,
		muscles: [ 'Quads', 'Glutes', 'Hamstrings', 'Core' ],
		summary: 'Step forward into a lunge, then alternate legs as you travel. Builds legs, balance, and hip control.',
		balance: [
			'Torso tall — do not collapse over the front thigh.',
			'Front knee tracks over the mid-foot / toes.',
			'Back knee lowers under control toward the floor.',
			'Push through the front mid-foot to step into the next lunge.'
		],
		steps: [
			'Stand tall, feet under hips, soft brace through the core.',
			'Step one foot forward into a long, stable stride.',
			'Lower until the front thigh is near parallel (mobility allowing).',
			'Keep the front heel down and the torso upright.',
			'Drive through the front foot and step the back leg through into the next lunge.',
			'Alternate legs with even depth and tempo.'
		],
		cues: [
			'Tall chest every step',
			'Front knee tracks toes',
			'Control the back knee',
			'Even strides left and right'
		],
		mistakes: [
			'Front knee caving inward',
			'Tipping the torso forward',
			'Short, choppy steps that lose depth'
		],
		guide: [
			{ focus: 'Stance', title: 'Stand ready', detail: 'Tall posture, soft brace, feet under hips before the first step.', t: 0.08, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Step', title: 'Step forward long', detail: 'Take a stride that lets both knees bend without the front heel lifting.', t: 0.25, camera: { pos: [ -1.7, 1.1, 2.9 ], target: [ 0, 0.75, 0 ] } },
			{ focus: 'Knee', title: 'Track the front knee', detail: 'Front knee follows the toes. Do not let it cave inward as you lower.', t: 0.42, camera: { pos: [ -1.3, 0.9, 2.6 ], target: [ 0, 0.55, 0 ] } },
			{ focus: 'Depth', title: 'Lower with control', detail: 'Back knee drops toward the floor. Front thigh near parallel if your hips allow.', t: 0.58, camera: { pos: [ -1.6, 0.95, 2.7 ], target: [ 0, 0.55, 0 ] } },
			{ focus: 'Drive', title: 'Drive to the next step', detail: 'Push the floor away through the front foot and step the rear leg through.', t: 0.75, camera: { pos: [ -1.5, 1.25, 2.9 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Rhythm', title: 'Even left & right', detail: 'Match depth and tempo on both legs. Stay tall the whole walk.', t: 0.9, camera: { pos: [ -1.55, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } }
		]
	},
	{
		id: 'romanian_deadlift',
		name: 'Romanian Deadlift',
		tagline: 'Hip hinge for hamstrings & glutes',
		level: 'Beginner+',
		reps: '8–12 reps',
		has3d: false,
		file: null,
		muscles: [ 'Hamstrings', 'Glutes', 'Back', 'Core' ],
		summary: 'A hip-hinge pattern. Push hips back, keep a long spine, then stand by driving the hips forward — soft knee bend the whole time.',
		balance: [
			'Soft knees — never lock hard.',
			'Spine long: ribs stacked over pelvis.',
			'Bar/weight stays close to the legs.',
			'Hips travel back; do not squat the weight down.'
		],
		steps: [
			'Stand tall holding weight at the thighs (or empty hands for pattern practice).',
			'Brace core, unlock the knees slightly.',
			'Push hips back as the torso tilts forward with a flat back.',
			'Feel stretch in the hamstrings; stop before the back rounds.',
			'Drive hips forward to stand tall and squeeze glutes at the top.',
			'Exhale as you stand; keep the weight path close.'
		],
		cues: [
			'Hips back, not down',
			'Long flat back',
			'Soft knees',
			'Weight stays close'
		],
		mistakes: [
			'Rounding the lower back',
			'Squatting instead of hinging',
			'Letting the weight drift away from the body'
		],
		guide: [
			{ focus: 'Setup', title: 'Stand tall & brace', detail: 'Feet hip-width, soft knees, long spine before the hinge starts.', t: 0.08, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Hips', title: 'Push hips back', detail: 'Send hips rearward like closing a car door behind you. Torso follows.', t: 0.28, camera: { pos: [ -1.8, 1.15, 2.9 ], target: [ 0, 0.9, 0 ] } },
			{ focus: 'Spine', title: 'Keep the back long', detail: 'Ribs quiet, back flat. Stop if the low back starts to round.', t: 0.45, camera: { pos: [ -1.6, 1.2, 2.7 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Depth', title: 'Feel the hamstrings', detail: 'Lower only as far as the hinge stays clean. Soft knees the whole time.', t: 0.6, camera: { pos: [ -1.55, 1.0, 2.7 ], target: [ 0, 0.7, 0 ] } },
			{ focus: 'Drive', title: 'Hips drive up', detail: 'Push the floor away and drive hips forward to stand. Squeeze glutes at the top.', t: 0.78, camera: { pos: [ -1.5, 1.35, 2.9 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Finish', title: 'Stand tall, do not lean', detail: 'Finish stacked — do not hyperextend the low back at lockout.', t: 0.92, camera: { pos: [ -1.5, 1.45, 3.0 ], target: [ 0, 1.1, 0 ] } }
		]
	},
	{
		id: 'hip_hinge_drill',
		name: 'Hip Hinge Drill',
		tagline: 'Learn the hinge before loading',
		level: 'Beginner',
		reps: '8–10 slow reps',
		file: 'models/exercises/Kettlebell_Swing.fbx',
		muscles: [ 'Hamstrings', 'Glutes', 'Core', 'Back' ],
		summary: 'A patterning drill for the hip hinge used in swings and deadlifts. Soft knees, hips back, tall spine — then snap the hips through.',
		balance: [
			'Soft knee bend locked in place.',
			'Hips travel back, chest stays proud.',
			'Spine stays long — no rounding.',
			'Arms stay quiet; hips do the work.'
		],
		steps: [
			'Stand tall, feet about shoulder-width.',
			'Unlock knees and brace the core lightly.',
			'Push hips back while the torso tips forward.',
			'Pause briefly at the bottom with a long back.',
			'Drive hips forward to stand (or into a light swing pattern).',
			'Reset tall before the next slow hinge.'
		],
		cues: [
			'Hips back first',
			'Soft knees stay soft',
			'Long spine',
			'Hips snap through'
		],
		mistakes: [
			'Squatting the hips down',
			'Rounding the back',
			'Letting arms yank the pattern'
		],
		guide: [
			{ focus: 'Stance', title: 'Set the base', detail: 'Shoulder-width stance, soft knees, tall spine.', t: 0.08, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Hips', title: 'Hinge the hips back', detail: 'Push hips rearward. Chest stays open; do not collapse forward.', t: 0.28, camera: { pos: [ -1.75, 1.15, 2.9 ], target: [ 0, 0.9, 0 ] } },
			{ focus: 'Spine', title: 'Hold a long back', detail: 'Brace so the back stays flat at the bottom of the hinge.', t: 0.45, camera: { pos: [ -1.6, 1.15, 2.7 ], target: [ 0, 0.9, 0 ] } },
			{ focus: 'Pause', title: 'Own the bottom', detail: 'Brief pause. Feel hamstrings load — knees still soft.', t: 0.58, camera: { pos: [ -1.55, 1.0, 2.7 ], target: [ 0, 0.7, 0 ] } },
			{ focus: 'Drive', title: 'Snap hips through', detail: 'Drive hips forward to stand tall. Glutes finish the move.', t: 0.78, camera: { pos: [ -1.5, 1.35, 2.9 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Reset', title: 'Reset & repeat', detail: 'Stack tall, then hinge again slowly. Pattern first — load later.', t: 0.92, camera: { pos: [ -1.5, 1.45, 3.0 ], target: [ 0, 1.1, 0 ] } }
		]
	},
	{
		id: 'overhead_press',
		name: 'Overhead Press',
		tagline: 'Standing shoulder strength',
		level: 'Beginner+',
		reps: '6–10 reps',
		has3d: false,
		file: null,
		muscles: [ 'Shoulders', 'Triceps', 'Upper chest', 'Core' ],
		summary: 'Press a load from the shoulders to lockout overhead while staying braced and stacked. Legs stay quiet — torso owns the press.',
		balance: [
			'Feet about hip- to shoulder-width.',
			'Ribs down; do not flare into a big arch.',
			'Wrists stacked over elbows in the rack.',
			'Head moves through slightly so the bar path stays vertical.'
		],
		steps: [
			'Start with weight at the shoulders, elbows slightly in front of the bar.',
			'Brace core and glutes like a standing plank.',
			'Press straight up; move the head back slightly as the bar passes.',
			'Lock out with biceps near the ears, ribs still quiet.',
			'Lower with control back to the shoulders.',
			'Exhale on the press; keep legs quiet.'
		],
		cues: [
			'Ribs down, glutes on',
			'Press straight up',
			'Lock out tall',
			'Lower with control'
		],
		mistakes: [
			'Excessive low-back arch / rib flare',
			'Pressing forward instead of up',
			'Bending the knees into a push-press when you want a strict press'
		],
		guide: [
			{ focus: 'Rack', title: 'Set the rack position', detail: 'Weight at the shoulders, wrists stacked, elbows slightly forward.', t: 0.08, camera: { pos: [ -1.3, 1.45, 2.6 ], target: [ 0, 1.2, 0 ] } },
			{ focus: 'Brace', title: 'Brace like a plank', detail: 'Glutes on, ribs down. The torso must stay solid before you press.', t: 0.25, camera: { pos: [ -1.6, 1.25, 2.9 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Press', title: 'Press straight up', detail: 'Drive the load vertically. Do not push it forward away from the face.', t: 0.45, camera: { pos: [ -1.4, 1.55, 2.7 ], target: [ 0, 1.35, 0 ] } },
			{ focus: 'Lockout', title: 'Lock out tall', detail: 'Biceps near the ears, elbows locked, ribs still quiet — no leaning back.', t: 0.62, camera: { pos: [ -1.45, 1.65, 2.8 ], target: [ 0, 1.45, 0 ] } },
			{ focus: 'Lower', title: 'Lower under control', detail: 'Bring the load back to the shoulders smoothly. Own the eccentric.', t: 0.8, camera: { pos: [ -1.35, 1.45, 2.6 ], target: [ 0, 1.2, 0 ] } },
			{ focus: 'Breath', title: 'Breathe & reset', detail: 'Exhale on the way up. Reset the brace before the next press.', t: 0.92, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.1, 0 ] } }
		]
	},
	{
		id: 'bent_over_row',
		name: 'Bent Over Row',
		tagline: 'Back thickness & posture',
		level: 'Beginner+',
		reps: '8–12 reps',
		has3d: false,
		file: null,
		muscles: [ 'Lats', 'Upper back', 'Rear delts', 'Biceps' ],
		summary: 'Hinge to a strong torso angle, then row the load to the torso. Pull with the back — not a shrug or a yank from the arms alone.',
		balance: [
			'Soft knees, hips back, flat back.',
			'Torso angle stays steady while the arms row.',
			'Pull elbows toward the hips / lower ribs.',
			'Neck stays long — look slightly ahead of the floor.'
		],
		steps: [
			'Hinge to a strong bent-over position with a flat back.',
			'Let the arms hang long under the shoulders.',
			'Row the load toward the lower ribs / hip pockets.',
			'Squeeze the shoulder blades without shrugging up.',
			'Lower with control until the arms are long again.',
			'Keep the torso quiet — no bouncing each rep.'
		],
		cues: [
			'Flat back hinge',
			'Elbows toward hips',
			'Quiet torso',
			'Squeeze, then lower'
		],
		mistakes: [
			'Rounding the back under load',
			'Using hip bounce / momentum',
			'Shrugging the traps to the ears'
		],
		guide: [
			{ focus: 'Hinge', title: 'Set the hinge', detail: 'Hips back, soft knees, flat back. Find a torso angle you can own.', t: 0.08, camera: { pos: [ -1.7, 1.15, 2.9 ], target: [ 0, 0.9, 0 ] } },
			{ focus: 'Hang', title: 'Arms hang long', detail: 'Let the load hang under the shoulders. Shoulders packed, not shrugged.', t: 0.25, camera: { pos: [ -1.5, 1.05, 2.7 ], target: [ 0, 0.75, 0 ] } },
			{ focus: 'Pull', title: 'Row to the torso', detail: 'Drive elbows toward the hips / lower ribs. Pull with the back.', t: 0.45, camera: { pos: [ -1.45, 1.1, 2.6 ], target: [ 0, 0.85, 0 ] } },
			{ focus: 'Squeeze', title: 'Squeeze without shrugging', detail: 'Brief squeeze at the top. Keep neck long and traps quiet.', t: 0.6, camera: { pos: [ -1.4, 1.2, 2.5 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Lower', title: 'Lower fully', detail: 'Extend the arms under control. Do not bounce the torso.', t: 0.78, camera: { pos: [ -1.55, 1.05, 2.7 ], target: [ 0, 0.75, 0 ] } },
			{ focus: 'Brace', title: 'Keep the torso quiet', detail: 'Same hinge angle every rep. If the back rounds, reset lighter.', t: 0.9, camera: { pos: [ -1.7, 1.15, 2.9 ], target: [ 0, 0.9, 0 ] } }
		]
	},
	{
		id: 'glute_bridge',
		name: 'Glute Bridge',
		tagline: 'Glutes & posterior chain',
		level: 'Beginner',
		reps: '10–15 reps',
		has3d: false,
		file: null,
		muscles: [ 'Glutes', 'Hamstrings', 'Core' ],
		summary: 'Lie on your back and drive through the heels to lift the hips. Squeeze the glutes at the top — do not overarch the low back.',
		balance: [
			'Feet flat, about hip-width, under the knees.',
			'Ribs stay down as hips rise.',
			'Drive through mid-foot / heels.',
			'Chin gently tucked; neck stays neutral.'
		],
		steps: [
			'Lie on your back, knees bent, feet planted.',
			'Arms by your sides for support.',
			'Brace lightly and drive through the heels to lift the hips.',
			'Squeeze glutes at the top until thighs and torso form a line.',
			'Lower the hips with control without fully collapsing every time (optional pulse).',
			'Exhale as you bridge up.'
		],
		cues: [
			'Drive through heels',
			'Squeeze glutes at top',
			'Ribs quiet',
			'No low-back crunch'
		],
		mistakes: [
			'Overarching the lumbar spine',
			'Pushing only through the toes',
			'Flaring the knees out uncontrolled (or caving in)'
		],
		guide: [
			{ focus: 'Setup', title: 'Plant the feet', detail: 'Back down, knees bent, feet hip-width under the knees.', t: 0.08, camera: { pos: [ -1.6, 1.1, 2.8 ], target: [ 0, 0.4, 0 ] } },
			{ focus: 'Brace', title: 'Quiet the ribs', detail: 'Light brace so ribs stay down before the hips leave the floor.', t: 0.25, camera: { pos: [ -1.4, 1.0, 2.5 ], target: [ 0, 0.5, 0 ] } },
			{ focus: 'Drive', title: 'Bridge the hips up', detail: 'Push the floor away through the heels. Hips rise as one piece.', t: 0.45, camera: { pos: [ -1.55, 0.95, 2.6 ], target: [ 0, 0.55, 0 ] } },
			{ focus: 'Squeeze', title: 'Glutes finish the top', detail: 'Squeeze glutes hard. Stop before the low back takes over.', t: 0.62, camera: { pos: [ -1.5, 1.05, 2.6 ], target: [ 0, 0.65, 0 ] } },
			{ focus: 'Line', title: 'Check the body line', detail: 'Shoulders to knees should look like a ramp — not a banana back.', t: 0.78, camera: { pos: [ -1.8, 1.0, 2.9 ], target: [ 0, 0.6, 0 ] } },
			{ focus: 'Lower', title: 'Lower with control', detail: 'Ease the hips down. Exhale up, inhale down.', t: 0.9, camera: { pos: [ -1.55, 1.0, 2.7 ], target: [ 0, 0.45, 0 ] } }
		]
	},
	{
		id: 'bird_dog',
		name: 'Bird Dog',
		tagline: 'Core anti-rotation control',
		level: 'Beginner',
		reps: '6–8/side',
		has3d: false,
		file: null,
		muscles: [ 'Core', 'Glutes', 'Back', 'Shoulders' ],
		summary: 'From all fours, reach opposite arm and leg long without letting the hips twist or the low back sag.',
		balance: [
			'Hands under shoulders, knees under hips.',
			'Spine neutral — like a tabletop.',
			'Reach long, do not lift high.',
			'Hips stay square to the floor.'
		],
		steps: [
			'Set up on all fours with a neutral spine.',
			'Brace gently as if someone will tap your stomach.',
			'Slide one hand forward and the opposite foot back.',
			'Reach long until arm and leg are level with the torso.',
			'Pause, then return slowly without touching down hard (optional hover).',
			'Switch sides and keep the hips quiet.'
		],
		cues: [
			'Square hips',
			'Reach long, not high',
			'Neutral tabletop spine',
			'Slow return'
		],
		mistakes: [
			'Hips twisting open',
			'Low back sagging',
			'Lifting the limb so high the back arches'
		],
		guide: [
			{ focus: 'Setup', title: 'Build the tabletop', detail: 'Hands under shoulders, knees under hips, spine neutral.', t: 0.08, camera: { pos: [ -1.7, 1.1, 2.9 ], target: [ 0, 0.7, 0 ] } },
			{ focus: 'Brace', title: 'Brace the midsection', detail: 'Light brace so the low back does not sag when a limb leaves the floor.', t: 0.25, camera: { pos: [ -1.5, 1.05, 2.6 ], target: [ 0, 0.75, 0 ] } },
			{ focus: 'Reach', title: 'Opposite arm & leg', detail: 'Reach one arm forward and the opposite leg back — long lines, not high lifts.', t: 0.45, camera: { pos: [ -1.8, 1.1, 3.0 ], target: [ 0, 0.75, 0 ] } },
			{ focus: 'Hips', title: 'Keep hips square', detail: 'Imagine a glass of water on the low back. Do not spill it by twisting.', t: 0.62, camera: { pos: [ -1.4, 1.15, 2.5 ], target: [ 0, 0.8, 0 ] } },
			{ focus: 'Pause', title: 'Pause & own it', detail: 'Brief pause at full reach. Ribs quiet, neck long.', t: 0.78, camera: { pos: [ -1.6, 1.15, 2.8 ], target: [ 0, 0.8, 0 ] } },
			{ focus: 'Return', title: 'Return slow & switch', detail: 'Bring limbs back without collapsing, then switch sides.', t: 0.9, camera: { pos: [ -1.7, 1.1, 2.9 ], target: [ 0, 0.7, 0 ] } }
		]
	},
	{
		id: 'dead_bug',
		name: 'Dead Bug',
		tagline: 'Core stability on the floor',
		level: 'Beginner',
		reps: '6–8/side',
		has3d: false,
		file: null,
		muscles: [ 'Abs', 'Core', 'Hip flexors' ],
		summary: 'On your back, move opposite arm and leg while keeping the low back gently pressed toward the floor. Slow beats fancy.',
		balance: [
			'Low back stays quietly toward the floor.',
			'Ribs down — no flaring.',
			'Opposite arm and leg move together.',
			'Range only as far as the back stays quiet.'
		],
		steps: [
			'Lie on your back, arms to the ceiling, knees in tabletop.',
			'Press the low back gently toward the floor and brace.',
			'Extend one leg out and the opposite arm overhead slowly.',
			'Stop before the back peels up or ribs flare.',
			'Return to start and switch sides.',
			'Exhale as limbs extend; keep tempo slow.'
		],
		cues: [
			'Low back quiet',
			'Opposite arm + leg',
			'Ribs down',
			'Slow and even'
		],
		mistakes: [
			'Low back arching off the floor',
			'Moving too fast',
			'Only moving the arms while legs stay idle (or the reverse)'
		],
		guide: [
			{ focus: 'Setup', title: 'Tabletop start', detail: 'Back down, arms up, knees over hips. Low back gently toward the floor.', t: 0.08, camera: { pos: [ -1.55, 1.15, 2.8 ], target: [ 0, 0.45, 0 ] } },
			{ focus: 'Brace', title: 'Pin the low back', detail: 'Brace so the low back stays quiet before any limb moves.', t: 0.25, camera: { pos: [ -1.4, 1.0, 2.5 ], target: [ 0, 0.5, 0 ] } },
			{ focus: 'Extend', title: 'Opposite limbs reach', detail: 'Extend one leg and the opposite arm. Move only as far as the back stays pinned.', t: 0.45, camera: { pos: [ -1.6, 1.0, 2.7 ], target: [ 0, 0.5, 0 ] } },
			{ focus: 'Ribs', title: 'Keep ribs quiet', detail: 'Do not flare the ribs to get more range. Smaller range is still good work.', t: 0.62, camera: { pos: [ -1.45, 1.05, 2.5 ], target: [ 0, 0.55, 0 ] } },
			{ focus: 'Return', title: 'Return to tabletop', detail: 'Bring limbs back slowly to the start position.', t: 0.78, camera: { pos: [ -1.5, 1.05, 2.6 ], target: [ 0, 0.5, 0 ] } },
			{ focus: 'Switch', title: 'Switch sides evenly', detail: 'Match range and tempo left and right. Exhale on each reach.', t: 0.9, camera: { pos: [ -1.55, 1.1, 2.8 ], target: [ 0, 0.5, 0 ] } }
		]
	},
	{
		id: 'cat_cow',
		name: 'Cat Cow',
		tagline: 'Spinal mobility reset',
		level: 'Beginner',
		reps: '6–10 slow cycles',
		has3d: false,
		file: null,
		muscles: [ 'Spine', 'Core', 'Back', 'Shoulders' ],
		summary: 'On all fours, alternate rounding the spine (cat) and gently arching (cow). Move segment by segment with the breath.',
		balance: [
			'Hands under shoulders, knees under hips.',
			'Move the spine, not just the neck.',
			'Shoulders stay away from the ears.',
			'Match breath to each shape.'
		],
		steps: [
			'Set up on all fours in a neutral tabletop.',
			'Exhale: round the spine, tuck the pelvis, look toward the thighs (cat).',
			'Inhale: tip the pelvis forward, lift the chest and gaze slightly (cow).',
			'Wave the motion through the whole spine — do not yank the neck.',
			'Keep wrists stacked and hips over knees.',
			'Flow slowly for several cycles, then return to neutral.'
		],
		cues: [
			'Breath leads the shape',
			'Whole spine moves',
			'Soft neck',
			'Slow cycles'
		],
		mistakes: [
			'Only nodding the head',
			'Dumping into the shoulders',
			'Rushing with no breath link'
		],
		guide: [
			{ focus: 'Setup', title: 'Neutral tabletop', detail: 'Hands under shoulders, knees under hips, spine long and quiet.', t: 0.08, camera: { pos: [ -1.7, 1.1, 2.9 ], target: [ 0, 0.7, 0 ] } },
			{ focus: 'Cat', title: 'Round into cat', detail: 'Exhale, tuck the pelvis, push the floor away, and round the back.', t: 0.28, camera: { pos: [ -1.6, 1.15, 2.7 ], target: [ 0, 0.8, 0 ] } },
			{ focus: 'Wave', title: 'Move segment by segment', detail: 'Let the curve travel through the whole spine — not just the neck.', t: 0.45, camera: { pos: [ -1.5, 1.2, 2.6 ], target: [ 0, 0.85, 0 ] } },
			{ focus: 'Cow', title: 'Open into cow', detail: 'Inhale, tip the pelvis forward, lift the chest gently, gaze soft.', t: 0.62, camera: { pos: [ -1.6, 1.1, 2.7 ], target: [ 0, 0.75, 0 ] } },
			{ focus: 'Shoulders', title: 'Keep shoulders quiet', detail: 'Push the floor away lightly so you do not dump into the wrists/shoulders.', t: 0.78, camera: { pos: [ -1.4, 1.15, 2.5 ], target: [ 0, 0.85, 0 ] } },
			{ focus: 'Flow', title: 'Flow with the breath', detail: 'Slow cat ↔ cow cycles. Finish back in neutral tabletop.', t: 0.9, camera: { pos: [ -1.7, 1.1, 2.9 ], target: [ 0, 0.7, 0 ] } }
		]
	},
	{
		id: 'worlds_greatest_stretch',
		name: 'World’s Greatest Stretch',
		tagline: 'Hip, T-spine & hamstring opener',
		level: 'Beginner+',
		reps: '4–6/side',
		has3d: false,
		file: null,
		muscles: [ 'Hips', 'Hamstrings', 'T-spine', 'Hip flexors' ],
		summary: 'A flowing mobility sequence: lunge, elbow toward the instep, rotate open to the sky, then a hamstring hinge. One of the best full-body openers.',
		balance: [
			'Front foot flat in the lunge.',
			'Hips square as you rotate.',
			'Move into mild stretch only — no forcing.',
			'Rear leg stays long and active.'
		],
		steps: [
			'Step into a strong lunge with the front foot flat.',
			'Place both hands inside the front foot.',
			'Drop the same-side elbow toward the instep (as mobility allows).',
			'Rotate that arm to the sky, eyes follow the hand.',
			'Return the hand down, then shift hips up/back for a hamstring stretch.',
			'Step forward and repeat on the other side.'
		],
		cues: [
			'Strong lunge base',
			'Elbow toward instep',
			'Rotate through the mid-back',
			'Hamstring hinge to finish'
		],
		mistakes: [
			'Front heel lifting in the lunge',
			'Forcing the elbow to the floor',
			'Twisting only the neck instead of the T-spine'
		],
		guide: [
			{ focus: 'Lunge', title: 'Step into a lunge', detail: 'Front foot flat, rear leg long, hands frame the front foot.', t: 0.08, camera: { pos: [ -1.7, 1.05, 2.9 ], target: [ 0, 0.65, 0 ] } },
			{ focus: 'Hands', title: 'Plant both hands', detail: 'Hands inside the front foot. Front heel stays down.', t: 0.25, camera: { pos: [ -1.4, 0.95, 2.5 ], target: [ 0, 0.5, 0 ] } },
			{ focus: 'Elbow', title: 'Elbow toward instep', detail: 'Lower the same-side elbow toward the instep as far as is comfortable.', t: 0.42, camera: { pos: [ -1.35, 0.9, 2.4 ], target: [ 0, 0.45, 0 ] } },
			{ focus: 'Rotate', title: 'Open to the sky', detail: 'Rotate the arm up. Turn through the mid-back; eyes follow the hand.', t: 0.6, camera: { pos: [ -1.55, 1.2, 2.7 ], target: [ 0, 0.85, 0 ] } },
			{ focus: 'Hinge', title: 'Hamstring shift', detail: 'Hand returns down. Shift hips up and back to stretch the front hamstring.', t: 0.78, camera: { pos: [ -1.6, 1.1, 2.8 ], target: [ 0, 0.7, 0 ] } },
			{ focus: 'Switch', title: 'Flow to the other side', detail: 'Step through and repeat. Mild stretch only — never force.', t: 0.9, camera: { pos: [ -1.7, 1.15, 2.9 ], target: [ 0, 0.75, 0 ] } }
		]
	},
	{
		id: 'seated_row',
		name: 'Seated Row',
		tagline: 'Machine / cable back strength',
		level: 'Beginner',
		reps: '10–12 reps',
		has3d: false,
		file: null,
		muscles: [ 'Lats', 'Upper back', 'Biceps', 'Rear delts' ],
		summary: 'Seated row pattern: sit tall, pull handles to the torso, then return with control. Think elbows and shoulder blades — not bouncing torso.',
		balance: [
			'Feet planted on the platform.',
			'Tall seat posture — slight hinge OK, no rounding.',
			'Pull toward the lower ribs / stomach line.',
			'Shoulders stay down away from the ears.'
		],
		steps: [
			'Sit tall with feet on the platform and a light brace.',
			'Grab handles with arms long and shoulders packed.',
			'Pull elbows back toward the hips / lower ribs.',
			'Squeeze the shoulder blades without shrugging.',
			'Extend the arms forward under control.',
			'Keep the torso quiet — no rocking for momentum.'
		],
		cues: [
			'Sit tall',
			'Elbows back',
			'Shoulders down',
			'No torso rock'
		],
		mistakes: [
			'Rounding the upper back',
			'Yank-and-lean with the torso',
			'Shrugging every rep'
		],
		guide: [
			{ focus: 'Sit', title: 'Sit tall on the seat', detail: 'Feet planted, tall spine, light brace before you pull.', t: 0.08, camera: { pos: [ -1.5, 1.3, 2.9 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Reach', title: 'Arms long, shoulders packed', detail: 'Reach to the handles without rounding or shrugging.', t: 0.25, camera: { pos: [ -1.4, 1.25, 2.7 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Pull', title: 'Row to the torso', detail: 'Drive elbows back toward the lower ribs. Pull with the back.', t: 0.45, camera: { pos: [ -1.45, 1.25, 2.6 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Squeeze', title: 'Squeeze the blades', detail: 'Brief squeeze. Keep neck long and shoulders down.', t: 0.6, camera: { pos: [ -1.35, 1.3, 2.5 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Return', title: 'Return with control', detail: 'Let the arms extend smoothly. Torso stays quiet.', t: 0.78, camera: { pos: [ -1.5, 1.25, 2.8 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Breath', title: 'Exhale on the pull', detail: 'Exhale as you row, inhale as you return. Own every rep.', t: 0.9, camera: { pos: [ -1.5, 1.35, 3.0 ], target: [ 0, 1.0, 0 ] } }
		]
	},
	{
		id: 'seated_shoulder_press',
		name: 'Seated Shoulder Press',
		tagline: 'Machine / DB shoulder strength',
		level: 'Beginner',
		reps: '8–12 reps',
		has3d: false,
		file: null,
		muscles: [ 'Shoulders', 'Triceps', 'Upper chest' ],
		summary: 'Press overhead while seated with back support (or a tall unsupported seat). Strict path up and down — no excessive arch.',
		balance: [
			'Feet flat on the floor.',
			'Back against the pad (if using a machine) or tall unsupported posture.',
			'Wrists stacked over elbows.',
			'Ribs stay down through the press.'
		],
		steps: [
			'Sit tall with feet planted and a light brace.',
			'Start with handles / DBs at shoulder height.',
			'Press up until arms are long without shrugging.',
			'Keep ribs quiet — do not lean back hard.',
			'Lower to the shoulders under control.',
			'Exhale on the press.'
		],
		cues: [
			'Feet planted',
			'Press straight up',
			'Ribs quiet',
			'Soft lockout'
		],
		mistakes: [
			'Big low-back arch off the pad',
			'Flared elbows with shrugging traps',
			'Bouncing out of the bottom'
		],
		guide: [
			{ focus: 'Sit', title: 'Plant feet & sit tall', detail: 'Feet flat, tall posture, head neutral against or above the pad.', t: 0.08, camera: { pos: [ -1.5, 1.35, 2.9 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Rack', title: 'Start at the shoulders', detail: 'Handles at shoulder height, wrists stacked over elbows.', t: 0.25, camera: { pos: [ -1.35, 1.4, 2.6 ], target: [ 0, 1.2, 0 ] } },
			{ focus: 'Press', title: 'Press overhead', detail: 'Drive straight up. Do not push the load forward.', t: 0.45, camera: { pos: [ -1.4, 1.55, 2.7 ], target: [ 0, 1.35, 0 ] } },
			{ focus: 'Lockout', title: 'Long arms, quiet ribs', detail: 'Finish tall without shrugging or leaning back hard.', t: 0.62, camera: { pos: [ -1.45, 1.65, 2.8 ], target: [ 0, 1.45, 0 ] } },
			{ focus: 'Lower', title: 'Lower to the shoulders', detail: 'Control the way down to the start position.', t: 0.78, camera: { pos: [ -1.35, 1.4, 2.6 ], target: [ 0, 1.2, 0 ] } },
			{ focus: 'Breath', title: 'Exhale up', detail: 'Exhale on the press, reset brace, then repeat.', t: 0.9, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.1, 0 ] } }
		]
	},
	{
		id: 'chest_press_machine',
		name: 'Chest Press Machine',
		tagline: 'Guided pressing strength',
		level: 'Beginner',
		reps: '8–12 reps',
		has3d: false,
		file: null,
		muscles: [ 'Chest', 'Shoulders', 'Triceps' ],
		summary: 'Machine chest press with a supported back. Set seat height so handles line up with mid-chest, then press and return without shrugging.',
		balance: [
			'Seat height: handles at mid-chest.',
			'Back and hips stay on the pad.',
			'Wrists neutral; elbows roughly ~45–70° from the torso.',
			'Do not lock out harshly or bounce.'
		],
		steps: [
			'Set seat height so handles meet mid-chest.',
			'Sit with hips and back on the pad, feet planted.',
			'Brace lightly and press the handles forward / out.',
			'Stop just short of a hard elbow slam.',
			'Return until you feel a mild chest stretch — no shoulder dump.',
			'Exhale on the press; control the return.'
		],
		cues: [
			'Handles at mid-chest',
			'Back stays on the pad',
			'Smooth press',
			'Control the return'
		],
		mistakes: [
			'Seat too high/low (bad shoulder line)',
			'Shrugging and craning the neck',
			'Bouncing out of the bottom stretch'
		],
		guide: [
			{ focus: 'Seat', title: 'Set seat height', detail: 'Handles should meet mid-chest when you sit tall on the pad.', t: 0.08, camera: { pos: [ -1.5, 1.3, 2.9 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Contact', title: 'Hips & back on the pad', detail: 'Plant feet. Keep hips and upper back glued to the support.', t: 0.25, camera: { pos: [ -1.55, 1.25, 2.8 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Press', title: 'Press with control', detail: 'Drive handles out. Wrists neutral, shoulders away from ears.', t: 0.45, camera: { pos: [ -1.4, 1.3, 2.6 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Finish', title: 'Soft finish', detail: 'Extend without slamming the elbows or shrugging the traps.', t: 0.62, camera: { pos: [ -1.45, 1.35, 2.7 ], target: [ 0, 1.1, 0 ] } },
			{ focus: 'Return', title: 'Return to a safe stretch', detail: 'Come back until a mild chest stretch — stop before the shoulders dump forward.', t: 0.78, camera: { pos: [ -1.5, 1.25, 2.8 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Breath', title: 'Exhale on the press', detail: 'Exhale out, inhale in. Smooth tempo every rep.', t: 0.9, camera: { pos: [ -1.5, 1.35, 3.0 ], target: [ 0, 1.05, 0 ] } }
		]
	},
	{
		id: 'bike_sprint',
		name: 'Bike Sprint',
		tagline: 'Hard cardio interval',
		level: 'Intermediate',
		reps: '20–40 sec hard',
		has3d: false,
		file: null,
		muscles: [ 'Cardio', 'Quads', 'Glutes', 'Calves' ],
		summary: 'Short all-out bike efforts with easy spinning recoveries. Focus on smooth cadence and upright, braced posture — not mashing with a rounded back.',
		balance: [
			'Saddle height: slight knee bend at the bottom of the stroke.',
			'Light hands on the bars — do not hang on your wrists.',
			'Brace the core so the torso stays quiet.',
			'Drive through the mid-foot around the whole pedal stroke.'
		],
		steps: [
			'Warm up with easy spinning first.',
			'Shift to a challenging gear you can still turn over.',
			'Sprint hard for the planned interval while staying smooth.',
			'Keep torso quiet; breathe hard but stay tall.',
			'Ease to easy spin for recovery.',
			'Repeat for the planned number of rounds.'
		],
		cues: [
			'Smooth high cadence',
			'Quiet torso',
			'Tall posture',
			'Hard then easy'
		],
		mistakes: [
			'Rounded back and yanking the bars',
			'Gear so heavy cadence collapses',
			'Skipping the easy recovery spin'
		],
		guide: [
			{ focus: 'Setup', title: 'Dial the bike', detail: 'Saddle height and light hands first. Sprint quality starts with fit.', t: 0.1, camera: { pos: [ -1.5, 1.35, 3.0 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Warm', title: 'Easy spin warm-up', detail: 'Loose legs, easy breathing. Do not jump straight into an all-out sprint.', t: 0.25, camera: { pos: [ -1.5, 1.3, 2.9 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Sprint', title: 'Go hard & smooth', detail: 'Drive the pedals hard while keeping cadence smooth and torso quiet.', t: 0.45, camera: { pos: [ -1.55, 1.35, 2.9 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Posture', title: 'Stay tall', detail: 'Brace lightly. Do not collapse the chest onto the bars.', t: 0.62, camera: { pos: [ -1.4, 1.4, 2.7 ], target: [ 0, 1.1, 0 ] } },
			{ focus: 'Recover', title: 'Easy spin recovery', detail: 'Drop effort fully. Easy breathing before the next sprint.', t: 0.8, camera: { pos: [ -1.5, 1.3, 2.9 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Repeat', title: 'Repeat quality rounds', detail: 'Same posture every sprint. Stop if form falls apart.', t: 0.92, camera: { pos: [ -1.5, 1.35, 3.0 ], target: [ 0, 1.0, 0 ] } }
		]
	},
	{
		id: 'zone2_bike',
		name: 'Zone 2 Bike',
		tagline: 'Easy aerobic base ride',
		level: 'Beginner',
		reps: '20–45 min',
		has3d: false,
		file: null,
		muscles: [ 'Cardio', 'Quads', 'Glutes', 'Aerobic base' ],
		summary: 'Steady easy-to-moderate bike work where you can still speak in full sentences. Builds aerobic base without sprint intensity.',
		balance: [
			'Comfortable saddle and handlebar reach.',
			'Relaxed shoulders and light grip.',
			'Smooth circular pedal stroke.',
			'Effort stays conversational (Zone 2).'
		],
		steps: [
			'Set a comfortable gear and cadence (~70–90 rpm as a guide).',
			'Settle into upright, relaxed posture.',
			'Hold a steady effort you could sustain for a long chat.',
			'Breathe through the nose when possible; stay relaxed.',
			'Sip water; check posture every few minutes.',
			'Finish with 2–3 minutes of very easy spinning.'
		],
		cues: [
			'Conversational pace',
			'Relaxed shoulders',
			'Smooth cadence',
			'Steady, not heroic'
		],
		mistakes: [
			'Creeping into hard intervals by accident',
			'Tense upper body / death-grip on bars',
			'Cadence so low every stroke is a grind'
		],
		guide: [
			{ focus: 'Fit', title: 'Get comfortable', detail: 'Saddle and reach should feel sustainable for a long easy ride.', t: 0.1, camera: { pos: [ -1.5, 1.35, 3.0 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Pace', title: 'Find Zone 2', detail: 'Effort where you can talk in sentences. If you cannot, ease off.', t: 0.28, camera: { pos: [ -1.5, 1.3, 2.9 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Stroke', title: 'Smooth circles', detail: 'Pedal in quiet circles. Avoid stompy, uneven strokes.', t: 0.45, camera: { pos: [ -1.55, 1.2, 2.9 ], target: [ 0, 0.85, 0 ] } },
			{ focus: 'Upper', title: 'Relax the upper body', detail: 'Soft hands, quiet shoulders, easy neck.', t: 0.62, camera: { pos: [ -1.4, 1.4, 2.7 ], target: [ 0, 1.1, 0 ] } },
			{ focus: 'Check', title: 'Recheck every few minutes', detail: 'Posture, breathing, and effort. Stay honest in Zone 2.', t: 0.8, camera: { pos: [ -1.5, 1.35, 2.9 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Finish', title: 'Easy spin cool-down', detail: 'Last minutes very easy. Roll the legs out.', t: 0.92, camera: { pos: [ -1.5, 1.3, 3.0 ], target: [ 0, 0.95, 0 ] } }
		]
	},
	{
		id: 'easy_walk',
		name: 'Easy Walk',
		tagline: 'Low-impact recovery movement',
		level: 'Beginner',
		reps: '10–30 min',
		has3d: false,
		file: null,
		muscles: [ 'Cardio', 'Legs', 'Recovery' ],
		summary: 'An easy conversational walk for recovery and daily movement. Tall posture, relaxed arms, comfortable pace.',
		balance: [
			'Tall posture, soft gaze ahead.',
			'Arms swing naturally.',
			'Soft mid-foot / heel-to-toe landings.',
			'Pace stays easy — nasal breathing when possible.'
		],
		steps: [
			'Start at an easy strolling pace.',
			'Stand tall: crown up, shoulders relaxed.',
			'Let arms swing opposite the legs.',
			'Breathe easy; you should be able to chat.',
			'Optional: add gentle hills only if still easy.',
			'Finish feeling fresher, not fried.'
		],
		cues: [
			'Tall & relaxed',
			'Easy chat pace',
			'Natural arm swing',
			'Soft landings'
		],
		mistakes: [
			'Turning it into a power hike by accident',
			'Phone-hunch posture',
			'Holding the breath or rushing'
		],
		guide: [
			{ focus: 'Start', title: 'Start easy', detail: 'Stroll first. This is recovery movement, not a race.', t: 0.1, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Posture', title: 'Stand tall', detail: 'Crown up, shoulders soft, eyes ahead — not locked on the phone.', t: 0.28, camera: { pos: [ -1.45, 1.45, 2.8 ], target: [ 0, 1.15, 0 ] } },
			{ focus: 'Arms', title: 'Natural arm swing', detail: 'Let arms swing opposite the legs. Hands relaxed.', t: 0.45, camera: { pos: [ -1.5, 1.35, 2.9 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Feet', title: 'Soft landings', detail: 'Quiet feet. Heel-to-toe or soft mid-foot — no stomping.', t: 0.62, camera: { pos: [ -1.5, 1.0, 2.8 ], target: [ 0, 0.5, 0 ] } },
			{ focus: 'Breath', title: 'Conversational breathing', detail: 'You should talk easily. If not, slow down.', t: 0.8, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Finish', title: 'Finish fresh', detail: 'End feeling better than you started — that is the win.', t: 0.92, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } }
		]
	},
	{
		id: 'hiking_intervals',
		name: 'Hiking Intervals',
		tagline: 'Hills mixed with easy walking',
		level: 'Beginner+',
		reps: '20–40 min',
		has3d: false,
		file: null,
		muscles: [ 'Glutes', 'Quads', 'Cardio', 'Calves' ],
		summary: 'Alternate steadier climbs / stronger efforts with easy walking recoveries. Great outdoor conditioning when you keep posture and footing honest.',
		balance: [
			'Shorten the stride on steeper grades.',
			'Plant the whole foot; avoid tipping only onto the toes.',
			'Use poles if you have them for upper-body help.',
			'Recover fully on the easy segments.'
		],
		steps: [
			'Warm up with 3–5 minutes of easy walking.',
			'Pick a hill or stronger pace segment for the work bout.',
			'Climb or push with short, strong steps and tall posture.',
			'At the top (or time cap), walk easy to recover.',
			'Repeat work / easy intervals as planned.',
			'Cool down with easy flat walking.'
		],
		cues: [
			'Short strong steps',
			'Tall on the climb',
			'Easy recoveries',
			'Watch your footing'
		],
		mistakes: [
			'Overstriding uphill',
			'No real recovery between efforts',
			'Looking only at the phone on technical footing'
		],
		guide: [
			{ focus: 'Warm', title: 'Easy warm-up walk', detail: 'Loosen up on flat or easy ground before any hard climbs.', t: 0.1, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Climb', title: 'Shorten the stride', detail: 'On the work bout, take shorter stronger steps. Stay tall.', t: 0.3, camera: { pos: [ -1.55, 1.3, 2.9 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Feet', title: 'Plant the whole foot', detail: 'Avoid tip-toe mashing. Feel the mid-foot / whole shoe.', t: 0.48, camera: { pos: [ -1.5, 1.0, 2.8 ], target: [ 0, 0.5, 0 ] } },
			{ focus: 'Posture', title: 'Hinge a little, stay long', detail: 'Slight forward lean from the ankles is OK — do not collapse the chest.', t: 0.65, camera: { pos: [ -1.45, 1.4, 2.8 ], target: [ 0, 1.1, 0 ] } },
			{ focus: 'Recover', title: 'Walk easy to recover', detail: 'Drop the effort fully between intervals. Breathe down.', t: 0.8, camera: { pos: [ -1.5, 1.35, 2.9 ], target: [ 0, 1.0, 0 ] } },
			{ focus: 'Repeat', title: 'Repeat quality rounds', detail: 'Same footing focus each climb. Cool down easy at the end.', t: 0.92, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } }
		]
	},
	{
		id: 'sun_breath_flow',
		name: 'Sun Breath Flow',
		tagline: 'Breath-led mobility reset',
		level: 'Beginner',
		reps: '5–8 slow rounds',
		has3d: false,
		file: null,
		muscles: [ 'Breath', 'Shoulders', 'Spine', 'Mobility' ],
		summary: 'A calm breath-led flow: inhale to reach and open, exhale to fold or settle. Use it as a reset between harder training blocks.',
		balance: [
			'Feet grounded hip-width.',
			'Breath leads the movement — never the reverse.',
			'Soft knees; no forced end ranges.',
			'Neck stays long and relaxed.'
		],
		steps: [
			'Stand tall and take a few easy breaths to settle.',
			'Inhale: reach the arms up and lengthen through the sides.',
			'Optional: gentle backspace / open the chest without compressing the low back.',
			'Exhale: fold or bring the arms down and soften.',
			'Match each move to a full breath cycle.',
			'Finish standing tall with quiet breathing.'
		],
		cues: [
			'Breath leads',
			'Reach tall on the inhale',
			'Soften on the exhale',
			'No forcing'
		],
		mistakes: [
			'Rushing with shallow breaths',
			'Cranking the low back for a “deeper” arch',
			'Tensing the jaw and shoulders'
		],
		guide: [
			{ focus: 'Settle', title: 'Stand & arrive', detail: 'Feet hip-width, soft knees, a few easy breaths before moving.', t: 0.1, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Inhale', title: 'Reach on the inhale', detail: 'Arms float up as you inhale. Lengthen the sides of the body.', t: 0.3, camera: { pos: [ -1.4, 1.55, 2.7 ], target: [ 0, 1.3, 0 ] } },
			{ focus: 'Open', title: 'Open without forcing', detail: 'Optional gentle chest open. Keep the low back happy — no cranking.', t: 0.48, camera: { pos: [ -1.45, 1.5, 2.7 ], target: [ 0, 1.2, 0 ] } },
			{ focus: 'Exhale', title: 'Soften on the exhale', detail: 'Fold or lower the arms as you exhale. Let the breath finish the shape.', t: 0.65, camera: { pos: [ -1.5, 1.25, 2.9 ], target: [ 0, 0.95, 0 ] } },
			{ focus: 'Flow', title: 'Repeat slow rounds', detail: 'Inhale open, exhale settle. Same tempo every round.', t: 0.8, camera: { pos: [ -1.5, 1.4, 2.9 ], target: [ 0, 1.05, 0 ] } },
			{ focus: 'Finish', title: 'Stand in quiet breath', detail: 'Finish tall. Shoulders soft, jaw unclenched.', t: 0.92, camera: { pos: [ -1.5, 1.4, 3.0 ], target: [ 0, 1.05, 0 ] } }
		]
	}
];

export function getExercise( id ) {

	return EXERCISES.find( ( item ) => item.id === id ) || null;

}

/** True when a Mixamo clip is wired for guided scrub + live loop */
export function exerciseHas3d( ex ) {

	return Boolean( ex && ex.has3d !== false && ex.file );

}
