function acquireImage() {
  let DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
  let bSelected = DWObject.SelectSource();
  if (bSelected) {
    let OnAcquireImageSuccess = () => { DWObject.CloseSource(); };
    let OnAcquireImageFailure = OnAcquireImageSuccess;
    DWObject.OpenSource();
    DWObject.AcquireImage({}, OnAcquireImageSuccess, OnAcquireImageFailure);
  }
}
