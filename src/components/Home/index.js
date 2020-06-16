import React from 'react';
import './home.css';
import firebase from '../../firebase';

export default class Home extends React.Component{
	
	state = {
		posts: []
	};

	componentDidMount(){
		firebase.app.ref('posts').once('value', (snapshot) => {
			let state = this.state;
			state.posts = [];
			snapshot.forEach((childItem) => {
				state.posts.push({
					key: childItem.key,
					titulo: childItem.val().titulo,
					img: childItem.val().img,
					descricao: childItem.val().descricao,
					autor: childItem.val().autor
				})
			});
			this.setState(state);
		});
	}

	render(){
		return(
			<section id="post">
				{this.state.posts.map((post) => {
					return(
						<article key={post.key}>
							<header>
								<div className="title">
									<strong>{post.titulo}</strong>
									<span>Autor: {post.autor}</span>
								</div>
							</header>
							<img src={post.img} alt="Capa do Post"/>
							<footer>
								<p>{post.descricao}</p>
							</footer>
						</article>
					)
				})}
			</section>
		);
	}
}