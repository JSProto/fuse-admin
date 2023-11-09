import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CalendarService } from 'app/modules/admin/apps/calendar/calendar.service';

@Component({
    selector       : 'calendar-settings',
    templateUrl    : './settings.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation  : ViewEncapsulation.None
})
export class CalendarSettingsComponent implements OnInit, OnDestroy
{
    settingsForm: UntypedFormGroup;
    private _unsubscribeAll = new Subject<void>();

    /**
     * Constructor
     */
    constructor(
        private _calendarService: CalendarService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _formBuilder: UntypedFormBuilder
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get year(): string
    {
        return new Date().getFullYear().toString();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the event form
        this.settingsForm = this._formBuilder.group({
            dateFormat : [''],
            timeFormat : [''],
            startWeekOn: ['']
        });

        // Get settings
        this._calendarService.settings$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {

                // Fill the settings form
                this.settingsForm.patchValue(settings);

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    updateSettings(): void
    {
        // Get the settings
        const settings = this.settingsForm.value;

        // Update the settings on the server
        this._calendarService.updateSettings(settings).subscribe((updatedSettings) => {

            // Reset the form with the updated settings
            this.settingsForm.reset(updatedSettings);
        });
    }
}
