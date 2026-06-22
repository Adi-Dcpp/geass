import { findGitRoot } from "../git/findGitRoot.js"
import { cwd } from "node:process"

export const resolveRoot = async (mode : string , customPath : string | null) : Promise<string | null> => {
    if(mode === "cwd") {
        return cwd()
    }else if(mode === "git") {
        const gitRoot = await findGitRoot(cwd())

        return gitRoot;
    }else if(mode === "custom") {
        return customPath
    }else {
        return null
    }
}