// import Dynamsoft from 'dwt';

Dynamsoft.WebTwainEnv.AutoLoad = true;
Dynamsoft.WebTwainEnv.ProductKey = "LICENSE-KEY"; // https://www.dynamsoft.com/customer/license/trialLicense
Dynamsoft.WebTwainEnv.ResourcesPath = "node_modules/dwt/dist";

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
