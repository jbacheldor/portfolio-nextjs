import { ProjectCardsType } from "../types/Projects";

export const projectsData: ProjectCardsType[] = [
    {
        title: 'hangul drag & drop',
        link: 'https://jbacheldor.github.io/dragAndDropHangul/',
        repolink: 'https://github.com/jbacheldor/dragAndDropHangul',
        description: "A simple vanilla js game designed to teach users the Korean Alphabet - inspired by <a target='_blank' href='https://endual.com/'>Adrians</a> <a target='_blank' href='https://drlingua.com/japanese/games/kana-bento/'>Japanese Drag and Drop Game</a>",
        video: '',
        image: '/websites/drag-and-drop.png',
        techStack: ['vanillajs','html', 'css'],
    },
        {
        title: 'japanese conjugation',
        link: 'https://jbacheldor.github.io/japaneseConjugator/',
        repolink: 'https://github.com/jbacheldor/japaneseConjugator', 
        description: 'A homegrown vanilla js game designed to help teach Japanese conjugation to beginners by matching vocabulary with grammar points with when they are introduced in the Japanese textbook: Genki.',
        video: '',
        image: '/websites/conjugation.png',
        techStack: ['vanillajs','html', 'css'],
    },
        {
        title: 'hot takes',
        link: 'https://hot-takes-indol.vercel.app/',
        repolink: 'https://github.com/jbacheldor/hot_takes',
        description: 'Inspired by Subway Hotcakes with Kareem Rahma and Kahoot - this website allows individuals to submit hot takes and then guess on which takes are their peers, with corresponding accuracy rates, using game-based isolation! <a target="_blank" href="https://www.linkedin.com/in/bdettmer/">Bradley Dettmer</a> and I pair programmed this website for a non-programming talk at the Recurse Center.',
        video: '',
        image: '/websites/hottakes.png',
        techStack: ['nextjs', 'ts', 'vercel', 'supabase'],
    },
    {
        title: 'how is my driving',
        link: 'https://howsmydriving.vercel.app/',
        repolink: 'https://github.com/jbacheldor/howsmydriving',
        description: 'A quick website spun up in less than an hour designed to gather feedback from my peers after non-programming talks at the Recurse Center.',
        video: '',
        image: '/websites/howsmydriving.png',
        techStack: ['nextjs', 'ts', 'vercel', 'supabase'],
    },
    // {
    //     title: 'crush tracker!!! in progress',
    //     link: '',
    //     repolink: '',
    //     description: 'website designed to allow my close friends and peers',
    //     video: '',
    //     image: '',
    //     techStack: ['nextjs', 'ts', 'vercel', 'firebase'],
    // },
    // {
    //     title: 'stranger danger - in progress',
    //     link: 'https://strangerdanger.vercel.app/',
    //     repolink: 'https://github.com/jbacheldor/strangerdanger',
    //     description: 'A social experiment designed to gather reviews about my personal interactions with individuals - all for funzies. Inspired by <a target="_blank" href="https://mayaontheinter.net/">Maya Man`s</a> <a target="_blank" href="https://pureinformation.stream/">Pure Information</a>',
    //     video: '',
    //     image: '',
    //     techStack: ['nextjs', 'ts', 'vercel', 'turso'],
    // }
]