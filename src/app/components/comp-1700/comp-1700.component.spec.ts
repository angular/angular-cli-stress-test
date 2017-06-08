/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1700Component } from './comp-1700.component';

describe('Comp1700Component', () => {
  let component: Comp1700Component;
  let fixture: ComponentFixture<Comp1700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
