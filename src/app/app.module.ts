import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { EditBookComponent } from './components/modal/edit-book/edit-book.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AuthenticationModule } from './authentication/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { EditGamesComponent } from './components/modal/edit-games/edit-games.component';
import { AddGamesComponent } from './components/add-games/add-games.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        AppComponent,
        BooksComponent,
        HomeComponent,
        EditBookComponent,
        SearchComponent,
        EditGamesComponent,
        AddGamesComponent,
        UserComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        NgbModule,
        AuthenticationModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        AngularFireModule.initializeApp(environment.firebase),
        BrowserAnimationsModule,
        MatTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
