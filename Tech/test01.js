class AccContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namechat: "hi",
            emailuser: null,
            detail: null,
            price: null,
            travel: null,
            kmtime: "",
            messages: [
                {
                    _id: FD1S2F4WRR6E5S3F2GF1E5RREWRW,
                    text: 'How are you?',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                    },
                },
                {
                    _id: DA5S6DW8F445151F2D1F3S3D68F5,
                    text: 'Hi Friend',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                    },
                },
                {
                    _id: DS4F5A5X8D4F6A8W4R5KJ5OIIU2,
                    text: 'Hello',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                    },
                },
            ],
        };
    }
}