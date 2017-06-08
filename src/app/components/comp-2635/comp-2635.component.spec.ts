/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2635Component } from './comp-2635.component';

describe('Comp2635Component', () => {
  let component: Comp2635Component;
  let fixture: ComponentFixture<Comp2635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
