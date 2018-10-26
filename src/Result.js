import React, {Component} from "react"
import styled from "styled-components"

const ResultWrapper = styled.div`
	margin: 20px;
	transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border: 2px solid rgba(1,1,1,0.1);
	border-radius: 5px;
`

const Url = styled.div`
	font-size: 22px;
	font-weight: 500;
	padding: 20px;
`

const Votes = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	color: #000000;
`

const Upvotes = styled.div`
	font-size: 22px;
	font-weight: 500;
	padding: 10px;
	margin: 10px;
	border: 2px solid transparent;
	border-radius: 5px;
`

const Downvotes = styled.div`
	font-size: 22px;
	font-weight: 500;
	padding: 10px;
	margin: 10px;
	border: 2px solid transparent;
	border-radius: 5px;
`

class Result extends Component {
	render() {
		return (
			<ResultWrapper className="resultWrapper">
				<Url className="url" onClick={() => {
					window.open(this.props.url)
				}}>
					{this.props.url}
				</Url>
				<Votes>
					<Upvotes className="vote" onClick={() => {
						console.log("upvoted")
					}}>
						👍 {this.props.upvotes}
					</Upvotes>
					<Downvotes className="vote" onClick={() => {
						console.log("downvoted")
					}}>
						👎 {this.props.downvotes}
					</Downvotes>
				</Votes>
				<style>
					{`
						.url:hover {
							color: #3857B5;
							cursor: default;
						}
						.resultWrapper:hover {
							transform: scale(1.02);
							box-shadow: rgba(63, 63, 63, 0.08) 0 5px 10px 0;
						}
						.vote:hover {
							border: 2px solid rgba(1,1,1,0.1);
							cursor: default;
						}
					`}
				</style>
			</ResultWrapper>
		)
	}
}

export default Result