/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1696Component } from './comp-1696.component';

describe('Comp1696Component', () => {
  let component: Comp1696Component;
  let fixture: ComponentFixture<Comp1696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
