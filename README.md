# fuse-admin
Angular - Admin template for Web Applications, CRM, CMS, Admin Panels and more..
https://themeforest.net/item/fuse-angularjs-material-design-admin-template/12931855

## Steps to migrate the template : 

1. Error message "error:0308010C:digital envelope routines::unsupported" :

Type this command `export NODE_OPTIONS=--openssl-legacy-provider` in your command prompt to solve this problem.

2. Uninstall the current version of Angular CLI : 

Type this command `sudo npm un -g @angular/cli` in your command prompt to uninsatll it.

3. Install the latest version of Angular CLI : 

Type this command `sudo npm i -g @angular/cli@latest` in your command prompt to insatll it globaly in your computer. After that type `ng version` to check the current version installed in your computer.

4. Upgrade the angular schematics to latest version:

Type the following command `sudo ng update @angular-eslint/schematics@16.0.3 --force` to upgrade the angular schematics to latest version.

5. Upgrate to the reccent version of angular material:

Type these two command to update angular material `sudo ng update @angular/cdk@13 --force` & `sudo ng update @angular/material@13 --force`.

**Note**: You can also all in one command with the second command.

7. Set properties in `tsconfig.json`

- Add the propertie `useDefineForClassFields` with value `false`.
- Update the propertie `target` to `es2022`.

8. Update the package transloco to version 4 with the following command: `sudo npm i @ngneat/transloco@4 --force`.

9. Add options to `allowedCommonJsDependencies` array in `angular.json`:

In order to remove warning, please add `"flat","marked","luxon","moment"` in `allowedCommonJsDependencies` option.

