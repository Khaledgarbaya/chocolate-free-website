import React from 'react'
import {render} from 'react-dom'
import {InstantSearch, Highlight} from 'react-instantsearch/dom'
import {connectAutoComplete} from 'react-instantsearch/connectors'
import Autocomplete from 'downshift'

function RecipeAutoComplete({refine, hits}) {
  return (
    <Autocomplete
      itemToString={i => (i ? i.name : i)}
      onChange={item => alert(JSON.stringify(item))}
    >
      {({
        getInputProps,
        getItemProps,
        selectedItem,
        highlightedIndex,
        isOpen,
      }) =>
        <div>
          <input
            {...getInputProps({
              onChange(e) {
                refine(e.target.value)
              },
            })}
          />
          {isOpen &&
            <div>
              {hits.map((item, index) =>
                <div
                  key={item.title}
                  {...getItemProps({
                    item,
                    index,
                    style: {
                      backgroundColor:
                      highlighteIndex === index ? 'gray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    },
                  })}
                >
                  <Highlight attributeName="title" hit={item} />
                </div>,
              )}
            </div>}
        </div>}
    </Autocomplete>
  )
}

const AutoCompleteWithData = connectAutoComplete(RecipeAutoComplete)

function Search () {
  return(
    <InstantSearch
      appId="D8B75J2QJC"
      apiKey="45e7ac8da4f912de6a2d9674662d4d9f"
      indexName="prod_recipe"
    >
      <AutoCompleteWithData />
    </InstantSearch>
  )
}

export default Search
