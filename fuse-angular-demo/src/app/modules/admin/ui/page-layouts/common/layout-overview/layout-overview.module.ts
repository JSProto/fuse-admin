import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { SharedModule } from 'app/shared/shared.module';
import { LayoutOverviewComponent } from 'app/modules/admin/ui/page-layouts/common/layout-overview/layout-overview.component';

@NgModule({
    declarations: [
        LayoutOverviewComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild([]),
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTabsModule
    ],
    exports     : [
        LayoutOverviewComponent
    ]
})
export class LayoutOverviewModule
{
}
