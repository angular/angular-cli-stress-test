/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1760Component } from './comp-1760.component';

describe('Comp1760Component', () => {
  let component: Comp1760Component;
  let fixture: ComponentFixture<Comp1760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
