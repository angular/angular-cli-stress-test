/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1563Component } from './comp-1563.component';

describe('Comp1563Component', () => {
  let component: Comp1563Component;
  let fixture: ComponentFixture<Comp1563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
