import { FlopListComponent } from "./flop-list/flop-list.component";
import { WatchListComponent } from "./watch-list/watch-list.component";

export const routingTable = [
  { path: "", redirectTo: "flops", pathMatch: "full" },
  { path: "flop", redirectTo: "flops", pathMatch: "full" },
  { path: "movies", redirectTo: "flops", pathMatch: "full" },
  { path: "favorites", redirectTo: "watchlist", pathMatch: "full" },
  { path: "favs", redirectTo: "watchlist", pathMatch: "full" },
  { path: "watch", redirectTo: "watchlist", pathMatch: "full" },
  { path: "flops", component: FlopListComponent },
  { path: "watchlist", component: WatchListComponent }
];
