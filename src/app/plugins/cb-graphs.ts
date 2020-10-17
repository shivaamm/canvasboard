declare var $: any;

export class AddGraphs {
  constructor() {}

  addGraphsHTMLCode = (uid) => {
    $(`#cb-buttons-${uid}`).append(`
    <!-- paragraph -->
    <dialog open *ngIf="showDialogue"> <div class="cb-graphs">
          <p><strong>Upload Graph File</strong></p>
          <div class="d-flex flex-wrap mt-2">
              <div class="m-1">
                <input type="file"
                id="file-${uid}"
                accept=".json"
                #fileUpload
                class="btn btn-light"
                (change)="onFileChanged($event)">
            </div>
          </div>
        </div>
    </dialog>
    `);
  }

  addGraphFunction = (uid) => {
    // Adding Paragraphs
    $(`#add-p-box2-${uid}`).click(() => {
      $(`#cb-box-2-${uid}`).removeClass('cb-H1 cb-H2 cb-H3');
    });
  }

  addParaTagToolBox = (uid) => {
    $(`#cb-box-2-${uid}`).removeClass('cb-H1 cb-H2 cb-H3');
  }
}
