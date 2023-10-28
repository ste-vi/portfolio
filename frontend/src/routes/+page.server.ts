import transporter from '$lib/emails/email.server';
import { GOOGLE_EMAIL_FROM, GOOGLE_EMAIL_TO } from '$env/static/private';
import Email from '$lib/emails/Email.svelte';
import { render } from 'svelte-email';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import type { SuperValidated } from 'sveltekit-superforms';
import { sendEmailFormSchema } from '$lib/schemas';

export const load = async () => {
	const form = await superValidate(sendEmailFormSchema);
	return {
		form
	};
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, sendEmailFormSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const message = getEmailMessage(form);

		await new Promise((resolve, reject) => {
			transporter.sendMail(message, (err, info) => {
				if (err) {
					console.error(err);
					reject(err);
				} else {
					resolve(info);
				}
			});
		});


		return { form };
	}
};

function getEmailMessage(form: SuperValidated<any>) {
	const emailHtml = render({
		template: Email,
		props: {
			name: form.data.name,
			body: form.data.message,
			email: form.data.email
		}
	});

	return {
		from: GOOGLE_EMAIL_FROM,
		to: GOOGLE_EMAIL_TO,
		subject: 'Portfolio | ' + form.data.subject,
		html: emailHtml
	};
}
