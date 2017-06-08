/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2482Component } from './comp-2482.component';

describe('Comp2482Component', () => {
  let component: Comp2482Component;
  let fixture: ComponentFixture<Comp2482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
