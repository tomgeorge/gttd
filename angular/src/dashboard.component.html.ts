export const dashboardHtml = `
                            <h3>Top Heroes</h3>
                                <div class="grid grid-pad">
                                    <div *ngFor="#hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
                                        <div class="module hero">
                                            <h4>{{hero.name}}</h4>
                                        </div>
                                    </div>
                                </div>`;
