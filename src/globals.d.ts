// Global type declarations for Steam Client API

declare global {
	interface Window {
		SteamClient?: {
			Input?: {
				RegisterForControllerStateChanges?: (
					callback: (states: any[]) => void
				) => {
					unregister: () => void;
				};
			};
			Window?: {
				BringToFront?: () => void;
			};
		};
		Router?: {
			MainRunningApp?: {
				display_name?: string;
			};
		};
		appStore?: {
			GetActiveAppID?: () => number;
			GetAppOverviewByGameID?: (appId: number) => {
				display_name?: string;
			};
		};
	}
}

export {};
