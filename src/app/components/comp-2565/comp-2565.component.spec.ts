/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2565Component } from './comp-2565.component';

describe('Comp2565Component', () => {
  let component: Comp2565Component;
  let fixture: ComponentFixture<Comp2565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
