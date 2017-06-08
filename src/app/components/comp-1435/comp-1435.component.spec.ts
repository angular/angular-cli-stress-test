/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1435Component } from './comp-1435.component';

describe('Comp1435Component', () => {
  let component: Comp1435Component;
  let fixture: ComponentFixture<Comp1435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});