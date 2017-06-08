/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2521Component } from './comp-2521.component';

describe('Comp2521Component', () => {
  let component: Comp2521Component;
  let fixture: ComponentFixture<Comp2521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
