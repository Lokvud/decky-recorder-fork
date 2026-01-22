// Global type declarations for Steam Client API

interface ControllerState {
	ulButtons: number;
	sLeftStickX?: number;
	sLeftStickY?: number;
	sRightStickX?: number;
	sRightStickY?: number;
	sTriggerL?: number;
	sTriggerR?: number;
}

interface ControllerInputRegister {
	unregister: () => void;
}

interface SteamClientInput {
	RegisterForControllerStateChanges?: (
		callback: (states: ControllerState[]) => void
	) => ControllerInputRegister;
}

interface SteamClient {
	Input?: SteamClientInput;
}

interface Window {
	SteamClient?: SteamClient;
	Router?: {
		MainRunningApp?: {
			display_name?: string;
		};
	};
}

declare global {
	interface Window {
		SteamClient?: SteamClient;
	}
}

export {};
