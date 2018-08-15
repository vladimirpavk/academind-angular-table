
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppnavComponent } from './appnav.component';

describe('AppnavComponent', () => {
  let component: AppnavComponent;
  let fixture: ComponentFixture<AppnavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [AppnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
