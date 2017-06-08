/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2783Component } from './comp-2783.component';

describe('Comp2783Component', () => {
  let component: Comp2783Component;
  let fixture: ComponentFixture<Comp2783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
