import React from "react";
import Board from "./Board";

const Boards = ({
  font,
  chatModel,
  sfModel,
  mfModel,
  fsModel,
  iicModel,
  mcModel,
  mcLeft,
  mcRight,
  tttModel,
  tttLeft,
}) => {
  sfModel.scene.position.y = 0.1;
  sfModel.scene.position.x = 0;
  sfModel.scene.position.z = 0;
  sfModel.scene.scale.x = 3;
  sfModel.scene.scale.y = 3;
  sfModel.scene.scale.z = 3;

  chatModel.scene.position.y = 0.1;
  chatModel.scene.position.x = 0;
  chatModel.scene.position.z = -2;
  chatModel.scene.scale.x = 2;
  chatModel.scene.scale.y = 1.8;
  chatModel.scene.scale.z = 2;
  chatModel.scene.rotation.y = Math.PI / 2;

  mfModel.scene.position.y = 0.1;
  mfModel.scene.position.x = 5;
  mfModel.scene.position.z = 18;
  mfModel.scene.scale.x = 0.7;
  mfModel.scene.scale.y = 0.7;
  mfModel.scene.scale.z = 0.7;
  mfModel.scene.rotation.y = -Math.PI - Math.PI / 3;

  fsModel.scene.position.y = 0.1;
  fsModel.scene.position.x = 5;
  fsModel.scene.position.z = -18;
  fsModel.scene.scale.x = 0.7;
  fsModel.scene.scale.y = 0.7;
  fsModel.scene.scale.z = 0.7;
  fsModel.scene.rotation.y = Math.PI / 3;

  iicModel.scene.position.y = 0.1;
  iicModel.scene.position.x = 0;
  iicModel.scene.position.z = 0;
  iicModel.scene.scale.x = 1;
  iicModel.scene.scale.y = 1;
  iicModel.scene.scale.z = 1;
  iicModel.scene.rotation.y = Math.PI / 2;

  mcModel.scene.position.y = 0.1;
  mcModel.scene.position.x = 0;
  mcModel.scene.position.z = 0;
  mcModel.scene.scale.x = 1;
  mcModel.scene.scale.y = 1;
  mcModel.scene.scale.z = 1;
  mcModel.scene.rotation.y = Math.PI / 2;

  mcLeft.scene.position.y = 0.1;
  mcLeft.scene.position.x = 5;
  mcLeft.scene.position.z = 18;
  mcLeft.scene.scale.x = 0.7;
  mcLeft.scene.scale.y = 0.7;
  mcLeft.scene.scale.z = 0.7;
  mcLeft.scene.rotation.y = -Math.PI - Math.PI / 3;

  mcRight.scene.position.y = 0.1;
  mcRight.scene.position.x = 5;
  mcRight.scene.position.z = -18;
  mcRight.scene.scale.x = 0.7;
  mcRight.scene.scale.y = 0.7;
  mcRight.scene.scale.z = 0.7;
  mcRight.scene.rotation.y = Math.PI / 3;

  tttModel.scene.position.y = 0.1;
  tttModel.scene.position.x = 0;
  tttModel.scene.position.z = 0;
  tttModel.scene.scale.x = 1.2;
  tttModel.scene.scale.y = 1.2;
  tttModel.scene.scale.z = 1;
  tttModel.scene.rotation.y = Math.PI / 2;

  tttLeft.scene.position.y = 0.1;
  tttLeft.scene.position.x = 5;
  tttLeft.scene.position.z = 20;
  tttLeft.scene.scale.x = 0.8;
  tttLeft.scene.scale.y = 0.8;
  tttLeft.scene.scale.z = 0.8;
  tttLeft.scene.rotation.y = -Math.PI - Math.PI / 5;
  return (
    <>
      <Board
        x={-120}
        z={-10}
        text="HeadSnap.io"
        font={font}
        model={sfModel}
      />
      <Board
        x={-60}
        z={-40}
        text="Claims Detective"
        rotation={[0, Math.PI, 0]}
        font={font}
        model={iicModel}
      />
      <Board x={-120} z={-70} text="Chat App" font={font} model={chatModel} />
      <Board
        x={-60}
        z={-140}
        text="Leit.ml"
        rotation={[0, Math.PI, 0]}
        font={font}
        model={mcModel}
      />
      <Board
        x={-120}
        z={-140}
        text="Tic Tac Toe"
        font={font}
        model={tttModel}
        modelLeft={tttLeft}
      />
    </>
  );
};

export default Boards;
