import React from 'react'
import Item from './Item'

export default function Main({data}) {
  return (
    <section id="product" className="container product">
      <div className="row">
        {
          data.map((item, idx) => {
            return <Item item={item} idx={idx} key={idx} />
          })
        }
      </div>
  </section>
  )
}
