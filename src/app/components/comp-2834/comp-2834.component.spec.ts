/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2834Component } from './comp-2834.component';

describe('Comp2834Component', () => {
  let component: Comp2834Component;
  let fixture: ComponentFixture<Comp2834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
