  
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class SaveDataGuard implements CanDeactivate<ComponentCanDeactivate> {
    canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
        return component.canDeactivate ? component.canDeactivate() : true;
    }

}