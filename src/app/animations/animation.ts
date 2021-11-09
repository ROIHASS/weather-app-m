import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const dataChange: AnimationTriggerMetadata = trigger('dataChange', [
  transition('done => entering', [
    style({ marginLeft: '30px', opacity: 0 }),
    animate('500ms', style({ marginLeft: '0', opacity: 1 })),
  ]),
]);

export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
]);
