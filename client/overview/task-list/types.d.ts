/**
 * External dependencies
 */
import { TaskItem } from '@woocommerce/experimental';

export interface TaskItemProps extends React.ComponentProps< typeof TaskItem > {
	/**
	 * Unique key for the task.
	 */
	key: string;
	/**
	 * Used to pass data attributes be rendered with a task, e.g. `data-urgent="true"`.
	 */
	dataAttrs?: Record< string, string | boolean >;

	/**
	 * Whether the task is dismissable.
	 */
	isDismissable?: boolean;

	content: string | React.ReactElement;
	showActionButton?: boolean;
	expandable?: boolean;
	expanded?: boolean;
	completed?: boolean;
	level?: number;
	time?: string;
	actionLabel?: string;
	title?: string;
	additionalInfo?: string;
	onClick?: () => void;
	action?: () => void;
}
