import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    
    constructor(props) {
        super(props);
       
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
// const displayComment = comments.map((comment) => 
            // {
            //     //2012-10-16
            // return (
                
            //     <div key = {comment.id}>
            //         <li>{comment.comment}</li>
            //         {/* {"-- "+comment.author + " , " + date[parseInt(comment.date.substring(5,7))] + " " +
            //         comment.date[8] + comment.date[9] + " , " +comment.date.substring(0, 4)}
            //         <br/><br/> */}
            //     </div>
            // );}
    renderComments(comments) 
    {
        const date = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if(comments != null) {
            const displayComment = comments.map((comment) => {
                return (
                    <li key = {comment.id}>
                        {comment.comment}
                        <br/>
                        {"-- "+comment.author + " , " + date[parseInt(comment.date.substring(5,7))] + " " +
                        comment.date[8] + comment.date[9] + " , " +comment.date.substring(0, 4)}
                        <br/><br/>
                    </li>
                );
            });
            return displayComment;
        }
        else
            return(
                <div></div>
            );
    }

    render() {
        if(this.props.dish == null) {
            return (
                <div></div>
            );
        }
        const comments = this.props.dish.comments.map((comment) => {
            return (
                <div key = {comment.id} className = "col-12 col-md-5 m-1">

                </div>
            );
        });
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className = "col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        
                        <ul class = "list-unstyled">
                            {this.renderComments(this.props.dish.comments)}    
                       </ul>
                    </div>
                </div>

            </div>
        );
    }
}
export default Dishdetail; 