/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2893Component } from './comp-2893.component';

describe('Comp2893Component', () => {
  let component: Comp2893Component;
  let fixture: ComponentFixture<Comp2893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
