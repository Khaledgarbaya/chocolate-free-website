import React from "react";
import { InstantSearch, Highlight } from "react-instantsearch/dom";
import { PoweredBy } from "react-instantsearch-dom";
import { connectAutoComplete } from "react-instantsearch/connectors";
import Autocomplete from "downshift";
import { navigate } from "gatsby";

const RecipeAutoComplete = ({ refine, hits }) => {
  return (
    <Autocomplete
      itemToString={(i) => (i ? i.title : i)}
      onChange={(item) => navigate(`/article/${item.slug}.html`)}
    >
      {({
        getInputProps,
        getItemProps,
        selectedItem,
        highlightedIndex,
        isOpen,
      }) => (
        <div>
          <input
            placeholder="Orange cake..."
            className="w-full bg-purple-white shadow rounded border-0 p-3"
            {...getInputProps({
              onChange(e) {
                refine(e.target.value);
              },
            })}
          />
          {isOpen && (
            <div className="search-result">
              {hits.map((item, index) => (
                <div
                  className="p-2 border-t border-gray-300 font-paragraph"
                  key={item.objectID}
                  {...getItemProps({
                    item,
                    index,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? "#e3e3e6" : "white",
                      fontWeight: selectedItem === item ? "700" : "normal",
                    },
                  })}
                >
                  <Highlight attribute="title" hit={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </Autocomplete>
  );
};

const AutoCompleteWithData = connectAutoComplete(RecipeAutoComplete);

const Search = () => {
  return (
    <InstantSearch
      appId="D8B75J2QJC"
      apiKey="45e7ac8da4f912de6a2d9674662d4d9f"
      indexName="chocolate-free"
    >
      <AutoCompleteWithData />
      <PoweredBy />
    </InstantSearch>
  );
};

export default Search;
