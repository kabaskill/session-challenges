import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({
  entries,
  onToggleFavorite,
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab
          active={filter === "ALL" ? true : false}
          onClick={onShowAllEntries}
          allEntriesCount={allEntriesCount}
        >
          All Entries{" "}
          <Badge isActive={filter === "ALL" ? true : false}>
            {allEntriesCount}
          </Badge>
        </Tab>
        <Tab
          active={filter === "FAVORITE" ? true : false}
          onClick={onShowFavoriteEntries}
          favoriteEntriesCount={favoriteEntriesCount}
        >
          Favorites{" "}
          <Badge isActive={filter === "FAVORITE" ? true : false}>
            {favoriteEntriesCount}
          </Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={index}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
