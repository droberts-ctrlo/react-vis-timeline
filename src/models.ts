import type { TimelineAnimationOptions, TimelineEvents } from 'vis-timeline/types';

export type TimelineEventsWithMissing = TimelineEvents | 'dragover' | 'markerchange' | 'markerchanged';
export type TimelineEventHandler =
	| 'currentTimeTickHandler'
	| 'clickHandler'
	| 'contextmenuHandler'
	| 'doubleClickHandler'
	| 'dragoverHandler'
	| 'dropHandler'
	| 'mouseOverHandler'
	| 'mouseDownHandler'
	| 'mouseUpHandler'
	| 'mouseMoveHandler'
	| 'groupDraggedHandler'
	| 'changedHandler'
	| 'rangechangeHandler'
	| 'rangechangedHandler'
	| 'selectHandler'
	| 'itemoverHandler'
	| 'itemoutHandler'
	| 'timechangeHandler'
	| 'timechangedHandler'
	| 'markerchangeHandler'
	| 'markerchangedHandler';

export type TimelineEventsHandlers = Partial<Record<TimelineEventHandler, (event: any) => void>>;

export type CustomTime = {
	datetime: Date;
	id: string;
};

export type SelectionOptions = { focus?: boolean; animation?: TimelineAnimationOptions };
