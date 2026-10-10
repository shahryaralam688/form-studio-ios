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
	]
};
