interface BallInfo {
    runsScored: number;
    isOut?: boolean;
    dismissalType?: DismissalTypes;
    dismissalInfo?: DismissalInfo;
    batsmanName: string;
    bowlerName: string;
}

interface DismissalInfo {
    fielderName: string;
    hasBatsmanCrossed: boolean;
    batsmanOut: BatsmanType
}

enum BatsmanType {
    STRIKER,
    NONSTRIKER
}

enum DismissalTypes {
    RUN_OUT = 'Run Out',
    CAUGHT = 'Caught',
    BOWLED = 'Bowled',
    LBW = 'lbw'
}