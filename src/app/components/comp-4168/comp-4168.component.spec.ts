/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4168Component } from './comp-4168.component';

describe('Comp4168Component', () => {
  let component: Comp4168Component;
  let fixture: ComponentFixture<Comp4168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
