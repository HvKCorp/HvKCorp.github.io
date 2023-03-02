import { BreakoutGame } from "./breakout-game.js";
import BreakoutGame from "@glitchkey/breakout-game";
const canvas = document.getElementById("breakout");
var game = new BreakoutGame(canvas, 800, 600);
game.start();
