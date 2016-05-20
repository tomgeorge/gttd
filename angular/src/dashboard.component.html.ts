export const dashboardHtml = `
                            <h3>Inbox</h3>
                            <div class="input-field">
                                <input type="text" placeholder="Add an item to the inbox"/> 
                            </div>
                            Inbox goes here....
                            <h3>Projects</h3>
                            Projects go here....
                            <h3>Actions</h3>
                            Actions go here....
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <h3>Top Heroes</h3>
                                <div class="grid grid-pad">
                                    <div *ngFor="#hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
                                        <div class="module hero">
                                            {{hero.name}}
                                        </div>
                                    </div>
                                </div>`;
