import fs from 'fs';
import cvPath from '$lib/cv/CV_Vitalii_Stefanchak.pdf';

export const GET = () => {


	const pdf = fs.readFileSync("." + cvPath);

	return new Response(pdf, {
		status: 200,
		headers: {
			'Content-type': 'application/pdf',
			'Content-Disposition': 'attachment; filename=CV_Vitalii_Stefanchak.pdf'
		}
	});
};
