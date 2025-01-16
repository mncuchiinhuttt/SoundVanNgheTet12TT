import type { PageServerLoad } from "./$types";
import process from "process";
import path from "path";
import fs from "fs";

export const load = (async() => {
	let fileNames: string[] = [];
	// const dir = process.cwd() + '/audio';
	const dir = '../audio';
	console.log(dir);
	const files = fs.readdirSync(dir, { withFileTypes: true });
	for (const file of files) {
		if (file.isFile()) {
			fileNames.push(file.name);
		}
	}
	return {
		fileNames
	};
}) satisfies PageServerLoad;