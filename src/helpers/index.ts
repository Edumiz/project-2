export const openCrisp = () => {
  try {
    $crisp.push(['do', 'chat:open']);
  } catch (error) {
    console.log(error);
  }
};
