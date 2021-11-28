interface Rect {
    readonly id: string
    color?: string
    size:{
        width: number
        height: number
    }
}

const rect1: Rect={
    id: '1234',
    size:{
        width:20,
        height:30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size:{
        width:10,
        height:5
    }
}

rect2.color ='black'