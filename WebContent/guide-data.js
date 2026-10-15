/**
 * On-body guide markers + camera focus for each exercise step.
 * Bones use Mixamo names (mixamorig:*).
 */

/** Pulled-back views so full body stays readable; screenLift pushes body above caption bar */
export const GUIDE_VIEWS = {
	full: { bone: 'mixamorig:Hips', distance: 3.6, yaw: -0.5, pitch: 0.18, screenLift: 0.45 },
	face: { bone: 'mixamorig:Head', distance: 1.85, yaw: -0.3, pitch: 0.05, screenLift: 0.2, bodyMix: 0.55 },
	hands: { bone: 'mixamorig:LeftHand', distance: 2.6, yaw: -0.7, pitch: 0.28, screenLift: 0.55, bodyMix: 0.55 },
	legs: { bone: 'mixamorig:LeftUpLeg', distance: 2.8, yaw: -0.55, pitch: 0.32, screenLift: 0.65, bodyMix: 0.5 },
	spine: { bone: 'mixamorig:Spine1', distance: 3.0, yaw: -0.45, pitch: 0.12, screenLift: 0.4, bodyMix: 0.4 },
	chest: { bone: 'mixamorig:Spine2', distance: 2.9, yaw: -0.4, pitch: 0.14, screenLift: 0.4, bodyMix: 0.45 },
	feet: { bone: 'mixamorig:LeftFoot', distance: 2.7, yaw: -0.6, pitch: 0.38, screenLift: 0.7, bodyMix: 0.55 }
};

/** Enrich built-in exercise guides with body markers */
export function enrichGuide( ex ) {

	const packs = GUIDE_PACKS[ ex.id ];
	if ( ! packs || ! ex.guide ) return ex.guide;

	return ex.guide.map( ( step, i ) => ( {
		...step,
		...( packs[ i ] || {} )
	} ) );

}

const GUIDE_PACKS = {
	push_up: [
		{
			view: 'hands',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftHand', label: 'Left hand', tip: 'Flat on floor · under shoulder · fingers slightly out' },
				{ bone: 'mixamorig:RightHand', label: 'Right hand', tip: 'Same angle · wrist stacks under shoulder' }
			]
		},
		{
			view: 'legs',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftUpLeg', label: 'Left leg', tip: 'Long & active · do not bend soft' },
				{ bone: 'mixamorig:RightUpLeg', label: 'Right leg', tip: 'Hip-width or together · squeeze quads' },
				{ bone: 'mixamorig:LeftFoot', label: 'Feet', tip: 'Toes plant · heels slightly lifted OK' }
			]
		},
		{
			view: 'spine',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine', label: 'Backbone', tip: 'One straight rail · head → hips → heels' },
				{ bone: 'mixamorig:Hips', label: 'Hips', tip: 'Neither sag nor pike · brace glutes' },
				{ bone: 'mixamorig:Spine2', label: 'Core brace', tip: 'Ribs quiet · belly lightly drawn in' }
			]
		},
		{
			view: 'chest',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Chest', tip: 'Lower toward floor · chest leads the move' },
				{ bone: 'mixamorig:LeftForeArm', label: 'Elbow ~45°', tip: 'Not flared wide · track back ~45°' }
			]
		},
		{
			view: 'chest',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Bottom', tip: 'Pause just above floor · body still a plank' },
				{ bone: 'mixamorig:Head', label: 'Neck', tip: 'Neutral · look slightly ahead on floor' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Breath', tip: 'Exhale as you press up · inhale on the way down' },
				{ bone: 'mixamorig:LeftArm', label: 'Press', tip: 'Push floor away · arms extend without collapse' }
			]
		}
	],
	air_squat: [
		{
			view: 'feet',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftFoot', label: 'Left foot', tip: 'Shoulder-width · toes slightly out' },
				{ bone: 'mixamorig:RightFoot', label: 'Right foot', tip: 'Weight mid-foot / heels · not only toes' }
			]
		},
		{
			view: 'legs',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Hips back', tip: 'Sit back first · like to a chair' },
				{ bone: 'mixamorig:Spine2', label: 'Chest tall', tip: 'Do not fold forward as hips go back' }
			]
		},
		{
			view: 'legs',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:LeftLeg', label: 'Knee track', tip: 'Knee follows toes · no cave-in' },
				{ bone: 'mixamorig:RightLeg', label: 'Knee track', tip: 'Same path · keep alignment' }
			]
		},
		{
			view: 'legs',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Depth', tip: 'Thighs near parallel · heels stay down' },
				{ bone: 'mixamorig:LeftFoot', label: 'Heels', tip: 'Planted · do not rise onto toes' }
			]
		},
		{
			view: 'spine',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine', label: 'Spine long', tip: 'Neutral back · avoid rounding' },
				{ bone: 'mixamorig:Head', label: 'Eyes forward', tip: 'Head follows spine · not looking down hard' }
			]
		},
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Stand tall', tip: 'Drive floor away · squeeze glutes at top' },
				{ bone: 'mixamorig:Head', label: 'Breath', tip: 'Exhale up · inhale down' }
			]
		}
	],
	jumping_jacks: [
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Ready', tip: 'Feet together · soft knees · arms by sides' }
			]
		},
		{
			view: 'legs',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftUpLeg', label: 'Open legs', tip: 'Jump out to shoulder width' },
				{ bone: 'mixamorig:LeftFoot', label: 'Soft land', tip: 'Balls of feet first · light impact' }
			]
		},
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftHand', label: 'Arms up', tip: 'Same beat as feet · finish overhead' },
				{ bone: 'mixamorig:RightHand', label: 'Arms up', tip: 'Reach high · no lazy range' }
			]
		},
		{
			view: 'legs',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:LeftLeg', label: 'Soft knees', tip: 'Never lock on landing' },
				{ bone: 'mixamorig:RightLeg', label: 'Soft knees', tip: 'Springy · not stomping' }
			]
		},
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Close', tip: 'Feet together + arms down · one rhythm' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Breath', tip: 'Steady breathing · stay tall through torso' }
			]
		}
	],
	plank: [
		{
			view: 'hands',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftHand', label: 'Base', tip: 'Under shoulders · push floor away' },
				{ bone: 'mixamorig:RightHand', label: 'Base', tip: 'Active shoulders · no shrug to ears' }
			]
		},
		{
			view: 'legs',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftUpLeg', label: 'Leg line', tip: 'Long legs · heels in the plank rail' },
				{ bone: 'mixamorig:RightFoot', label: 'Feet', tip: 'Step back until body is one line' }
			]
		},
		{
			view: 'spine',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Hips', tip: 'Not up · not down · squeeze glutes' },
				{ bone: 'mixamorig:Spine', label: 'Backbone', tip: 'Straight rail head to heels' }
			]
		},
		{
			view: 'chest',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Core armor', tip: 'Brace like a tap on the stomach' },
				{ bone: 'mixamorig:Spine1', label: 'Ribs', tip: 'Quiet ribs · full-body tension' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Head / neck', tip: 'Neutral · look just ahead on the floor' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Breath', tip: 'Short steady breaths · do not hold air' }
			]
		}
	],
	situps: [
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Setup', tip: 'Back on floor · knees bent · feet planted' },
				{ bone: 'mixamorig:Spine', label: 'Low back', tip: 'Starts in contact with the floor' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftHand', label: 'Hands', tip: 'Temples or crossed on chest · never yank head' },
				{ bone: 'mixamorig:Head', label: 'Chin', tip: 'Slight tuck · fist-distance from chest' }
			]
		},
		{
			view: 'chest',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Abs start', tip: 'Curl ribs toward hips · not head first' }
			]
		},
		{
			view: 'chest',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Top', tip: 'Brief pause · no swing or twist' }
			]
		},
		{
			view: 'spine',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine', label: 'Lower slow', tip: 'Control the way down · shoulders kiss floor' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Breath + neck', tip: 'Exhale up · inhale down · protect the neck' }
			]
		}
	],
	burpee: [
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Stand ready', tip: 'Soft knees · next: squat → plank → jump' }
			]
		},
		{
			view: 'hands',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftHand', label: 'Plant hands', tip: 'Squat down · hands under shoulders' },
				{ bone: 'mixamorig:RightHand', label: 'Plant hands', tip: 'Strong floor contact before kick-back' }
			]
		},
		{
			view: 'spine',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine', label: 'Plank line', tip: 'Feet back · backbone straight before push-up' },
				{ bone: 'mixamorig:Hips', label: 'Hips', tip: 'Level · no collapse' }
			]
		},
		{
			view: 'chest',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Chest', tip: 'Optional push-up · keep hips level' }
			]
		},
		{
			view: 'legs',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftFoot', label: 'Feet forward', tip: 'Jump/step toward hands under control' },
				{ bone: 'mixamorig:RightFoot', label: 'Feet forward', tip: 'Ready to stand tall' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Jump + breath', tip: 'Explode up · land soft knees · exhale on jump' },
				{ bone: 'mixamorig:LeftHand', label: 'Arms', tip: 'Reach overhead on the jump' }
			]
		}
	],
	warming_up: [
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Ready stance', tip: 'Hip-width · soft knees · tall spine' }
			]
		},
		{
			view: 'hands',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftHand', label: 'Arms', tip: 'Swing / circle with control · no yank' },
				{ bone: 'mixamorig:RightHand', label: 'Arms', tip: 'Open shoulders gently' }
			]
		},
		{
			view: 'legs',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Hips', tip: 'Centered · no side collapse' }
			]
		},
		{
			view: 'spine',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine', label: 'Torso tall', tip: 'Ribs quiet · warm without folding hard' },
				{ bone: 'mixamorig:Spine2', label: 'Chest', tip: 'Open · stay long through the back' }
			]
		},
		{
			view: 'feet',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftFoot', label: 'Light feet', tip: 'Quiet · no stomping in the warm-up' },
				{ bone: 'mixamorig:RightFoot', label: 'Light feet', tip: 'Stay springy and soft' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Breath', tip: 'Steady inhale / exhale · warm, not wiped out' }
			]
		}
	],
	arm_stretching: [
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Stable base', tip: 'Feet under hips · soft knees · tall' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Long neck', tip: 'Shoulders down · away from ears' },
				{ bone: 'mixamorig:LeftShoulder', label: 'Shoulders', tip: 'Do not shrug for extra reach' }
			]
		},
		{
			view: 'chest',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Chest open', tip: 'Mild stretch only · stop before pain' },
				{ bone: 'mixamorig:LeftHand', label: 'Reach', tip: 'Controlled end range' }
			]
		},
		{
			view: 'spine',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine', label: 'Ribs stacked', tip: 'No low-back arch to fake range' },
				{ bone: 'mixamorig:Hips', label: 'Pelvis quiet', tip: 'Stay stacked over the feet' }
			]
		},
		{
			view: 'hands',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftHand', label: 'Ease out', tip: 'Slow return · no bouncing' },
				{ bone: 'mixamorig:RightHand', label: 'Ease out', tip: 'Same tempo both sides' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Breath', tip: 'Exhale on reach · inhale on release' }
			]
		}
	],
	bicycle_crunch: [
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Spine', label: 'Setup', tip: 'Back on floor · low back quiet' },
				{ bone: 'mixamorig:Hips', label: 'Brace', tip: 'Light core before legs move' }
			]
		},
		{
			view: 'legs',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftUpLeg', label: 'Tabletop', tip: 'Knees up · shoulders lift gently' },
				{ bone: 'mixamorig:Head', label: 'Chin tuck', tip: 'Fist-distance from chest' }
			]
		},
		{
			view: 'chest',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Rotate', tip: 'Elbow toward opposite knee · abs turn you' },
				{ bone: 'mixamorig:LeftHand', label: 'Hands light', tip: 'Temples only · never yank the head' }
			]
		},
		{
			view: 'legs',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:RightLeg', label: 'Long leg', tip: 'Extend controlled · no heel slam' },
				{ bone: 'mixamorig:LeftUpLeg', label: 'Drive knee', tip: 'Meet the opposite elbow' }
			]
		},
		{
			view: 'chest',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Switch', tip: 'Even left–right · same height both sides' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Breath + tempo', tip: 'Exhale each twist · slow if form breaks' }
			]
		}
	],
	circle_crunch: [
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Base', tip: 'Knees bent · feet planted · back down' },
				{ bone: 'mixamorig:Spine', label: 'Supported', tip: 'Low back starts quiet on the floor' }
			]
		},
		{
			view: 'chest',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Curl up', tip: 'Ribs toward hips · not head first' }
			]
		},
		{
			view: 'chest',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Small circle', tip: 'Tight even path · no wild swings' },
				{ bone: 'mixamorig:Head', label: 'Follow spine', tip: 'Chin lightly tucked' }
			]
		},
		{
			view: 'legs',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Quiet hips', tip: 'Circle from core · feet stay planted' },
				{ bone: 'mixamorig:LeftFoot', label: 'Feet', tip: 'Do not rock side to side' }
			]
		},
		{
			view: 'face',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Head', label: 'Neck safe', tip: 'If strained · arms on chest · shrink circle' }
			]
		},
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Reverse / lower', tip: 'Equal both ways · lower with control' }
			]
		}
	],
	jump_push_up: [
		{
			view: 'spine',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine', label: 'Plank rail', tip: 'Head → hips → heels · rigid before the rep' },
				{ bone: 'mixamorig:Hips', label: 'Hips', tip: 'Neither sag nor pike' }
			]
		},
		{
			view: 'chest',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Spine2', label: 'Lower', tip: 'Chest leads · elbows ~45°' },
				{ bone: 'mixamorig:LeftForeArm', label: 'Elbows', tip: 'Controlled eccentric first' }
			]
		},
		{
			view: 'hands',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftHand', label: 'Explode', tip: 'Drive floor away · hands leave briefly' },
				{ bone: 'mixamorig:RightHand', label: 'Explode', tip: 'Core braced on the press' }
			]
		},
		{
			view: 'full',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Spine', label: 'Air line', tip: 'Stay long · do not pike for height' },
				{ bone: 'mixamorig:Hips', label: 'Level hips', tip: 'Plank shape in the air' }
			]
		},
		{
			view: 'hands',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftHand', label: 'Soft land', tip: 'Under shoulders · quiet wrists' },
				{ bone: 'mixamorig:RightHand', label: 'Soft land', tip: 'Soft elbows absorb · no slap' }
			]
		},
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Reset', tip: 'Rebuild plank · quality over bounce' }
			]
		}
	],
	overhead_squat: [
		{
			view: 'hands',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftHand', label: 'Arms up', tip: 'Long overhead · biceps near ears if able' },
				{ bone: 'mixamorig:RightHand', label: 'Arms up', tip: 'Lock and stay vertical' }
			]
		},
		{
			view: 'feet',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:LeftFoot', label: 'Stance', tip: 'Shoulder-width · toes slightly out' },
				{ bone: 'mixamorig:RightFoot', label: 'Stance', tip: 'Whole foot · especially heels' }
			]
		},
		{
			view: 'legs',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Hips back', tip: 'Sit back · chest stays proud' },
				{ bone: 'mixamorig:Spine2', label: 'Tall chest', tip: 'Arms must not tip forward' }
			]
		},
		{
			view: 'legs',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Depth', tip: 'Only as far as heels stay down' },
				{ bone: 'mixamorig:LeftFoot', label: 'Heels', tip: 'Planted · quality over depth' }
			]
		},
		{
			view: 'legs',
			showSkeleton: true,
			markers: [
				{ bone: 'mixamorig:LeftLeg', label: 'Knee track', tip: 'Follow toes · no cave-in' },
				{ bone: 'mixamorig:RightLeg', label: 'Knee track', tip: 'Same path both sides' }
			]
		},
		{
			view: 'full',
			showSkeleton: false,
			markers: [
				{ bone: 'mixamorig:Hips', label: 'Stand tall', tip: 'Drive up · glutes on · arms still overhead' },
				{ bone: 'mixamorig:Head', label: 'Finish', tip: 'Full stand before next rep' }
			]
		}
	],
	walking_lunges: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Ready', tip: 'Tall · soft brace · feet under hips' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftUpLeg', label: 'Long step', tip: 'Stride that keeps front heel down' }, { bone: 'mixamorig:RightFoot', label: 'Rear foot', tip: 'Travel into the next lunge' } ] },
		{ view: 'legs', showSkeleton: true, markers: [ { bone: 'mixamorig:LeftLeg', label: 'Front knee', tip: 'Tracks over toes · no cave-in' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:RightLeg', label: 'Back knee', tip: 'Lowers with control toward floor' }, { bone: 'mixamorig:Hips', label: 'Depth', tip: 'Front thigh near parallel' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Drive', tip: 'Push front mid-foot · step through' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Tall rhythm', tip: 'Even left–right · chest stays proud' } ] }
	],
	romanian_deadlift: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Setup', tip: 'Hip-width · soft knees · long spine' } ] },
		{ view: 'legs', showSkeleton: true, markers: [ { bone: 'mixamorig:Hips', label: 'Hips back', tip: 'Hinge rearward · not a squat' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine', label: 'Flat back', tip: 'Ribs quiet · stop before rounding' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftUpLeg', label: 'Hamstrings', tip: 'Feel the load · soft knees stay soft' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Drive up', tip: 'Hips forward · squeeze glutes' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Stack tall', tip: 'Do not lean / overextend at lockout' } ] }
	],
	hip_hinge_drill: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Base', tip: 'Shoulder-width · soft knees · tall' } ] },
		{ view: 'legs', showSkeleton: true, markers: [ { bone: 'mixamorig:Hips', label: 'Hinge back', tip: 'Hips first · chest stays proud' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine', label: 'Long back', tip: 'Flat · braced · no round' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftUpLeg', label: 'Loaded', tip: 'Hamstrings on · knees still soft' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Snap through', tip: 'Hips drive forward · glutes finish' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Reset', tip: 'Stack tall · pattern before load' } ] }
	],
	overhead_press: [
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Rack', tip: 'At shoulders · wrists stacked' }, { bone: 'mixamorig:RightHand', label: 'Rack', tip: 'Elbows slightly forward' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine2', label: 'Brace', tip: 'Ribs down · glutes on' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Press up', tip: 'Vertical path · not forward' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Lockout', tip: 'Biceps near ears · ribs quiet' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:RightHand', label: 'Lower', tip: 'Control back to shoulders' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Reset', tip: 'Exhale up · brace before next press' } ] }
	],
	bent_over_row: [
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine', label: 'Hinge', tip: 'Flat back · soft knees · hips back' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Hang long', tip: 'Under shoulders · no shrug' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:RightHand', label: 'Row', tip: 'Elbows toward hips / lower ribs' } ] },
		{ view: 'chest', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine2', label: 'Squeeze', tip: 'Blades on · traps quiet' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Lower', tip: 'Arms long again · no bounce' } ] },
		{ view: 'spine', showSkeleton: false, markers: [ { bone: 'mixamorig:Spine', label: 'Quiet torso', tip: 'Same hinge angle every rep' } ] }
	],
	glute_bridge: [
		{ view: 'feet', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftFoot', label: 'Feet', tip: 'Hip-width · under the knees' }, { bone: 'mixamorig:RightFoot', label: 'Feet', tip: 'Whole foot planted' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine2', label: 'Ribs', tip: 'Quiet before hips leave floor' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Drive', tip: 'Heels push floor · hips rise' } ] },
		{ view: 'legs', showSkeleton: true, markers: [ { bone: 'mixamorig:Hips', label: 'Squeeze', tip: 'Glutes finish · no banana back' } ] },
		{ view: 'spine', showSkeleton: false, markers: [ { bone: 'mixamorig:Spine', label: 'Line', tip: 'Shoulders-to-knees ramp' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Lower', tip: 'Control down · exhale up' } ] }
	],
	bird_dog: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Tabletop', tip: 'Hands under shoulders · knees under hips' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine', label: 'Brace', tip: 'Neutral spine · no sag' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Reach', tip: 'Opposite arm + leg · long not high' }, { bone: 'mixamorig:RightFoot', label: 'Reach', tip: 'Level with torso' } ] },
		{ view: 'legs', showSkeleton: true, markers: [ { bone: 'mixamorig:Hips', label: 'Square hips', tip: 'No twist · glass on low back' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Pause', tip: 'Neck long · ribs quiet' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Return', tip: 'Slow switch · stay square' } ] }
	],
	dead_bug: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Tabletop', tip: 'Arms up · knees over hips' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine', label: 'Pin back', tip: 'Low back quiet toward floor' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Reach', tip: 'Opposite arm + leg extend' }, { bone: 'mixamorig:RightUpLeg', label: 'Reach', tip: 'Only as far as back stays quiet' } ] },
		{ view: 'chest', showSkeleton: false, markers: [ { bone: 'mixamorig:Spine2', label: 'Ribs', tip: 'No flare for extra range' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Return', tip: 'Slow back to tabletop' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Even sides', tip: 'Exhale on each reach' } ] }
	],
	cat_cow: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Tabletop', tip: 'Hands under shoulders · knees under hips' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine', label: 'Cat', tip: 'Exhale · round · tuck pelvis' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine1', label: 'Wave', tip: 'Whole spine · not just neck' } ] },
		{ view: 'spine', showSkeleton: false, markers: [ { bone: 'mixamorig:Spine2', label: 'Cow', tip: 'Inhale · gentle arch · soft gaze' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Shoulders', tip: 'Push floor · no dump into wrists' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Breath flow', tip: 'Slow cycles · finish neutral' } ] }
	],
	worlds_greatest_stretch: [
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftUpLeg', label: 'Lunge', tip: 'Front foot flat · rear leg long' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Hands', tip: 'Inside front foot · heel down' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Elbow', tip: 'Toward instep · mild only' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine2', label: 'Rotate', tip: 'Open mid-back · eyes follow hand' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Hamstring', tip: 'Hips up/back · front leg stretch' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Switch', tip: 'Flow other side · never force' } ] }
	],
	seated_row: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Sit tall', tip: 'Feet planted · light brace' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Reach', tip: 'Arms long · shoulders packed' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:RightHand', label: 'Pull', tip: 'Elbows to lower ribs' } ] },
		{ view: 'chest', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine2', label: 'Squeeze', tip: 'Blades on · neck long' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Return', tip: 'Extend smooth · no torso rock' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Breath', tip: 'Exhale on the pull' } ] }
	],
	seated_shoulder_press: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Sit tall', tip: 'Feet flat · head neutral' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Rack', tip: 'Handles at shoulders · wrists stacked' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:RightHand', label: 'Press', tip: 'Straight up · not forward' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Lockout', tip: 'Long arms · ribs quiet' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Lower', tip: 'Control to shoulders' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine2', label: 'Brace', tip: 'Exhale up · no big arch' } ] }
	],
	chest_press_machine: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Spine2', label: 'Seat height', tip: 'Handles line up mid-chest' } ] },
		{ view: 'spine', showSkeleton: false, markers: [ { bone: 'mixamorig:Spine', label: 'Pad contact', tip: 'Hips + back stay on support' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Press', tip: 'Neutral wrists · shoulders down' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:RightHand', label: 'Soft finish', tip: 'No elbow slam · no shrug' } ] },
		{ view: 'chest', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine2', label: 'Return', tip: 'Mild stretch · no shoulder dump' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Breath', tip: 'Exhale out · smooth tempo' } ] }
	],
	bike_sprint: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Fit first', tip: 'Saddle height · light hands' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftUpLeg', label: 'Warm spin', tip: 'Easy legs before the sprint' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:RightUpLeg', label: 'Sprint', tip: 'Hard + smooth cadence' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine2', label: 'Tall', tip: 'Quiet torso · no collapse' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Recover', tip: 'Easy spin fully between efforts' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Quality', tip: 'Stop if posture falls apart' } ] }
	],
	zone2_bike: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Comfort', tip: 'Sustainable saddle + reach' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Zone 2', tip: 'Conversational pace only' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftUpLeg', label: 'Circles', tip: 'Smooth quiet pedal stroke' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Soft grip', tip: 'Relaxed shoulders + hands' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Spine2', label: 'Check-in', tip: 'Posture + effort every few minutes' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:RightUpLeg', label: 'Cool-down', tip: 'Very easy spin to finish' } ] }
	],
	easy_walk: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Easy start', tip: 'Stroll · recovery pace' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Tall', tip: 'Crown up · eyes ahead' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Swing', tip: 'Natural opposite arm swing' } ] },
		{ view: 'feet', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftFoot', label: 'Soft feet', tip: 'Quiet landings · no stomp' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Chat pace', tip: 'If you cannot talk · slow down' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Finish fresh', tip: 'End better than you started' } ] }
	],
	hiking_intervals: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Warm walk', tip: 'Easy minutes before climbs' } ] },
		{ view: 'legs', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftUpLeg', label: 'Short steps', tip: 'Strong shorter stride uphill' } ] },
		{ view: 'feet', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftFoot', label: 'Whole foot', tip: 'Plant mid-foot · avoid tip-toe mash' } ] },
		{ view: 'spine', showSkeleton: true, markers: [ { bone: 'mixamorig:Spine', label: 'Long lean', tip: 'Slight ankle lean · chest open' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Recover', tip: 'Easy walk between efforts' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Repeat', tip: 'Quality footing each climb' } ] }
	],
	sun_breath_flow: [
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Arrive', tip: 'Hip-width · soft knees · settle breath' } ] },
		{ view: 'hands', showSkeleton: false, markers: [ { bone: 'mixamorig:LeftHand', label: 'Inhale reach', tip: 'Arms up · lengthen the sides' } ] },
		{ view: 'chest', showSkeleton: false, markers: [ { bone: 'mixamorig:Spine2', label: 'Open soft', tip: 'Gentle chest open · no low-back crank' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Exhale soften', tip: 'Fold or lower with the breath' } ] },
		{ view: 'face', showSkeleton: false, markers: [ { bone: 'mixamorig:Head', label: 'Slow rounds', tip: 'Breath leads every shape' } ] },
		{ view: 'full', showSkeleton: false, markers: [ { bone: 'mixamorig:Hips', label: 'Finish quiet', tip: 'Stand tall · soft jaw + shoulders' } ] }
	]
};
