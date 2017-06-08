/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1588Component } from './comp-1588.component';

describe('Comp1588Component', () => {
  let component: Comp1588Component;
  let fixture: ComponentFixture<Comp1588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
