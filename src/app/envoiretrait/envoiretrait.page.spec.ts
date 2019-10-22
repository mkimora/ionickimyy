import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiretraitPage } from './envoiretrait.page';

describe('EnvoiretraitPage', () => {
  let component: EnvoiretraitPage;
  let fixture: ComponentFixture<EnvoiretraitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoiretraitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiretraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
