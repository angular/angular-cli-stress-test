/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3565Component } from './comp-3565.component';

describe('Comp3565Component', () => {
  let component: Comp3565Component;
  let fixture: ComponentFixture<Comp3565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
