function acquireImage() {
    var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    var bSelected = DWObject.SelectSource();
    if (bSelected) {
        var OnAcquireImageSuccess = function () { DWObject.CloseSource(); };
        var OnAcquireImageFailure = OnAcquireImageSuccess;
        DWObject.OpenSource();
        DWObject.AcquireImage({}, OnAcquireImageSuccess, OnAcquireImageFailure);
    }
}
