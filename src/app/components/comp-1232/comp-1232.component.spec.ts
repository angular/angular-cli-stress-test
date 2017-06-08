/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1232Component } from './comp-1232.component';

describe('Comp1232Component', () => {
  let component: Comp1232Component;
  let fixture: ComponentFixture<Comp1232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
