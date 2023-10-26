import fs from 'fs';

export const GET = () => {
	const pdf = fs.readFileSync('./static/CV_Vitalii_Stefanchak.pdf');

	return new Response(pdf, {
		status: 200,
		headers: {
			'Content-type': 'application/pdf',
			'Content-Disposition': 'attachment; filename=CV_Vitalii_Stefanchak.pdf'
		}
	});
};
