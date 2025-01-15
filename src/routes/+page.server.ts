import type { PageServerLoad } from "./$types";
import fs from 'fs';
import path from "path";

export const load = (async() => {
	let fileNames: string[] = [];
	const files = fs.readdirSync(path.resolve('src/lib/audio'), { withFileTypes: true });
	for (const file of files) {
		if (file.isFile()) {
				fileNames.push(file.name);
		}
	}
	return {
		fileNames
	};
}) satisfies PageServerLoad;