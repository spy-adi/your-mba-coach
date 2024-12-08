import { React, useState } from "react";
import "./Team.css";

export const Team = (props) => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const limitText = (text, limit, isExpanded) => {
    return isExpanded || text.length <= limit
      ? text
      : text.substring(0, limit) + "...";
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div id="after" className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>

        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => {
                const isExpanded = expandedIndexes.includes(i);
                return (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-4 col-sm-6 team"
                  >
                    <div className="thumbnail">
                      <img src={d.img} alt="........" className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>
                          {limitText(d.job, 100, isExpanded)}
                          {d.job.length > 100 && (
                            <button
                              onClick={() => toggleExpand(i)}
                              className="btn-toggle"
                            >
                              {isExpanded ? "show Less" : "...show more"}
                            </button>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            : "loading"}
        </div>
      </div>
    </div>
  );
};
