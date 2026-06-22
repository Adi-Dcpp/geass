import { stat } from "node:fs/promises"
import { dirname , join} from "node:path"

const findGitRoot = async (startPath : string) : Promise<string | null> =>  {
    const parent = dirname(startPath)

    if(parent === startPath) 
            return null
    
    const gitPath = join(startPath , ".git")

    try {
        const info = await stat(gitPath);

        if(info.isDirectory()) {
            return startPath
        }

        return findGitRoot(parent);
    } catch {
        return findGitRoot(parent)
    }
}

export { findGitRoot };
