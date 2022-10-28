import React, { Component } from 'react';

// function navigateToDetailCourse(course, user){
//     console.log(course)
//     console.log(user)
// }

class CardClass extends Component {
    constructor(props) {
        super(props);
        this.state={ data:[] }
    }
    

    
    componentDidMount() {
        // console.log(this.props);
        // console.log()
    }

    componentWillUnmount() {

    }

    render() {
        const{ data:{
            title, 
            image, 
            instructors: {0:{ name, photo }},
            instructor_role,
            course_id
            }, nav } = this.props;

        const user_id = JSON.parse(localStorage.getItem('data_user_login')).user_id;
        // console.log(typeof nav);
        return (
        <div className='card-inside'>
            <div className="top-section">
                    <img src={image} alt="" />
            </div>
            <div className="bottom-section">
                    <div className="title-section">
                        {title}
                    </div>
                    <div className="instructor-section">
                        <img src={photo} alt="" />
                        <div className="instructor-detail">
                            <div className="instructor-name">
                                {name}
                            </div>
                            <div className="instructor-role">
                                {instructor_role}
                            </div>
                        </div>
                    </div>
                    <div className="layerButton">
                        <button id='courseBtn' onClick={ (e)=> nav(e, course_id, user_id) }>Lanjut</button>
                    </div>
            </div>
        </div>
        );
    }
}


export default CardClass;