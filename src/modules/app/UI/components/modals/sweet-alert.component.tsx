import type { SweetAlertIcon, SweetAlertResult } from "sweetalert2";

import Swal from "sweetalert2";

const defaultConfig = {
	confirmButtonColor: "#FF6600",
	cancelButtonColor: "#d33",
};

export const Alert = {
	success: (
		title: string,
		text?: string,
		showConfirmButton = true,
		timer = showConfirmButton ? undefined : 1000,
	): Promise<SweetAlertResult> => {
		return Swal.fire({
			...defaultConfig,
			icon: "success" as SweetAlertIcon,
			title,
			text,
			showConfirmButton,
			timer,
		});
	},

	warning: (
		title: string,
		text?: string,
		showConfirmButton = true,
		timer = showConfirmButton ? undefined : 1000,
	): Promise<SweetAlertResult> => {
		return Swal.fire({
			...defaultConfig,
			icon: "warning" as SweetAlertIcon,
			title,
			text,
			showConfirmButton,
			timer,
		});
	},

	error: (
		title: string,
		text?: string,
		footer?: string,
		showConfirmButton = true,
		timer = showConfirmButton ? undefined : 1000,
	): Promise<SweetAlertResult> => {
		return Swal.fire({
			...defaultConfig,
			icon: "error" as SweetAlertIcon,
			title,
			text,
			footer,
			showConfirmButton,
			timer,
		});
	},

	confirm: async (
		title: string,
		text?: string,
		confirmButtonText = "Yes, delete it!",
		showCancelButton = true,
		showConfirmButton = true,
		timer = showConfirmButton ? undefined : 1000,
	): Promise<boolean> => {
		const result = await Swal.fire({
			...defaultConfig,
			title,
			text,
			icon: "warning" as SweetAlertIcon,
			showCancelButton,
			confirmButtonText,
			showConfirmButton,
			timer,
		});

		return result.isConfirmed;
	},

	info: (
		title: string,
		text?: string,
		showConfirmButton = true,
		timer = showConfirmButton ? undefined : 1000,
	): Promise<SweetAlertResult> => {
		return Swal.fire({
			...defaultConfig,
			icon: "info" as SweetAlertIcon,
			title,
			text,
			showConfirmButton,
			timer,
		});
	},
};

export type AlertType = typeof Alert;
