/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2936Component } from './comp-2936.component';

describe('Comp2936Component', () => {
  let component: Comp2936Component;
  let fixture: ComponentFixture<Comp2936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
