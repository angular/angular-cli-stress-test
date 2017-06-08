/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2625Component } from './comp-2625.component';

describe('Comp2625Component', () => {
  let component: Comp2625Component;
  let fixture: ComponentFixture<Comp2625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
