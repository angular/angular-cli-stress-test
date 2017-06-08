/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2300Component } from './comp-2300.component';

describe('Comp2300Component', () => {
  let component: Comp2300Component;
  let fixture: ComponentFixture<Comp2300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
