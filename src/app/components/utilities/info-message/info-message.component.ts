import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-info-message',
    templateUrl: './info-message.component.html',
    styleUrls: ['./info-message.component.scss']
})
export class InfoMessageComponent implements OnInit {
    @Input('type') type: string
    @Input('content') content: string
    @Input('size') size: string
    @Input('has-icon') hasIcon: boolean = true
    alertClass: string = ''
    icon: string = ''

    constructor() { }

    ngOnInit(): void {
        this.setAlertClass()
        this.setIcon()
    }

    /**
     * Set alertClass based on type passed as prop
     */
    setAlertClass(): void {
        switch (this.type) {
            case 'error':
                this.alertClass = 'alert-magenta'
                break
            default:
                this.alertClass = 'alert-dark'
        }

        this.alertClass += this.size ? ` alert-${this.size}` : ''
    }

    /**
     * Set icon based on type passed as prop
     */
    setIcon(): void {
        switch (this.type) {
            case 'error':
                this.icon = 'error'
                break
            default:
                this.icon = 'info'
        }
    }

}
