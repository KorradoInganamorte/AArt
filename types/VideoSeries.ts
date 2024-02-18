export interface VideoSeries {
    data: {
        id: number
        attributes: {
            video_series: [{
                [id: number]: {
                    id: number
                    series: {
                        data: {
                            id: number
                            attributes: {
                                url: string
                            }
                        }
                    }
                }
            }]
        }
    }
    meta: {}
}