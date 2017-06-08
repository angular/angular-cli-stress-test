/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1150Component } from './comp-1150.component';

describe('Comp1150Component', () => {
  let component: Comp1150Component;
  let fixture: ComponentFixture<Comp1150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
