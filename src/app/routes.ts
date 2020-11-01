import { FlopListComponent } from "./flop-list/flop-list.component";
import { WatchListComponent } from "./watch-list/watch-list.component";

export const routingTable = [
  { path: "", redirectTo: "flops", fullMatch: "full" },
  { path: "flop", redirectTo: "flops", fullMatch: "full" },
  { path: "movies", redirectTo: "flops", fullMatch: "full" },
  { path: "favorites", redirectTo: "watchlist", fullMatch: "full" },
  { path: "favs", redirectTo: "watchlist", fullMatch: "full" },
  { path: "watch", redirectTo: "watchlist", fullMatch: "full" },
  { path: "flops", component: FlopListComponent },
  { path: "watchlist", component: WatchListComponent }
];
