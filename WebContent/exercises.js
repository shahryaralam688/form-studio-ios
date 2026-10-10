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
	}
];

export function getExercise( id ) {

	return EXERCISES.find( ( item ) => item.id === id ) || null;

}
