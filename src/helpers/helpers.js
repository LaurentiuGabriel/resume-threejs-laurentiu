export const openProfileTab = (gh, li, lc, cc, hr, onObject) => {
  if (onObject.object.uuid === gh.current.uuid)
    window.open("https://github.com/LaurentiuGabriel", "new");
  if (onObject.object.uuid === li.current.uuid)
    window.open("https://www.linkedin.com/in/laurentiur/", "new");
  if (onObject.object.uuid === lc.current.uuid)
    window.open("https://instagram.com/bitheap.tech", "new");
  if (onObject.object.uuid === cc.current.uuid)
    window.open("https://twitter.com/Bitheap_tech", "new");
  if (onObject.object.uuid === hr.current.uuid)
    window.open("https://bitheap.tech", "new");
};

export const openProjectTab = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("https://headsnap.io/", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("https://claims-detective.com", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("https://interview-master.vercel.app", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://play.google.com/store/apps/details?id=io.ionic.leit", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open("https://tic-tac-toe-7fcb8.web.app/", "new");
};
