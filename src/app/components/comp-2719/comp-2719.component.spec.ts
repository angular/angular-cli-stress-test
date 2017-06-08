/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2719Component } from './comp-2719.component';

describe('Comp2719Component', () => {
  let component: Comp2719Component;
  let fixture: ComponentFixture<Comp2719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
