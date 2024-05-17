import { useSnake } from "../../context/SnakeContext";
import GameHomeScreen from "../snake/GameHomeScreen";
import GamePlayBoard from "../snake/GamePlayBoard";

const SnakeGame = () => {
  const { gameStatus } = useSnake();

  return (
    <div className="max-h-screen min-h-screen w-screen bg-slate-300">
      {/* game home screen  */}
      {gameStatus === "idle" && <GameHomeScreen />}

      {/* game play board  */}
      {gameStatus !== "idle" && <GamePlayBoard />}
    </div>
  );
};
export default SnakeGame;
