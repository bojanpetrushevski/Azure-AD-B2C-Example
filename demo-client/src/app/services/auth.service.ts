import { Inject, Injectable, OnInit } from '@angular/core';
import * as msal from '@azure/msal-browser';
import { MsalService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { Observable } from 'rxjs';


export interface MsalPluginOptions {
  clientId: string;
  loginAuthority: string;
  knownAuthority: string;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
    constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalService: MsalService) {}

    public async login() {
        try {
            const loginRequest: msal.RedirectRequest = {
                scopes: ['openid', 'profile', 'offline_access',
                 'https://demoexample1.onmicrosoft.com/5a89d3c5-332c-4b49-afb0-f0ca88d8d679/access_as_user'],
            };
            await this.msalService.loginRedirect(loginRequest);
            // do something with this?
        } catch (err) {
            // handle error
            console.log(err);
        }
    }

    public async signOut() {
        await this.msalService.logout();
    }

    public acquireToken(): Observable<msal.AuthenticationResult> {
        const request = {
            account: this.msalService.instance.getAllAccounts()[0],
            scopes: ['https://demoexample1.onmicrosoft.com/5a89d3c5-332c-4b49-afb0-f0ca88d8d679/access_as_user']
        };

        return this.msalService.acquireTokenSilent(request);
    }

    private getIsAuthenticated(): boolean {
        const accounts: msal.AccountInfo[] = this.msalService.instance.getAllAccounts();
        return accounts && accounts.length > 0;
    }
}
