import React from 'react'
import './AnimatedTable.css'
import './AnimatedTable.css'
const AnimatedTable = () => {
  return (
	<div className='container'>
		<div className='image-container'>
			<img src='https://cdn.pixabay.com/photo/2024/04/04/03/08/ai-generated-8674235_1280.png' alt='placeholder' className='animated-image'>

			</img>
			<table className='animated-table'>
				<thead>
					<tr>
						<th>Header 1</th>
						<th>Header 2</th>
						<th>Header 3</th>
					</tr>

				</thead>
				<tr>
					<td>Data 1</td>
					<td>Data 2</td>
					<td>Data 3</td>
				</tr>
				<tr>
					<td>Data 4</td>
					<td>Data 5</td>
					<td>Data 6</td>
				</tr>
				<tr>
					<td>Data 7</td>
					<td>Data 8</td>
					<td>Data 9</td>
				</tr>

			</table>
		</div>
	</div>
  )
}

export default AnimatedTable