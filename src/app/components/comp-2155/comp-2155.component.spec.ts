/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2155Component } from './comp-2155.component';

describe('Comp2155Component', () => {
  let component: Comp2155Component;
  let fixture: ComponentFixture<Comp2155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
