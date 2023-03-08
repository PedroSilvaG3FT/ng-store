import { NgModule } from '@angular/core';
import { LocalStorageService } from './storage/local-storage';
import { SessionStorageService } from './storage/session-storage';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [LocalStorageService, SessionStorageService],
})
export class NgStorePersistModule {}
