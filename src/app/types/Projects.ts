export type ProjectCardsType = {
    link: string,
    title: string,
    repolink: string,
    description: string,
    video?: string,
    image?: string,
    techStack?: string[]
    onClick: (value: string) => void;
}