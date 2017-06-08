/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1786Component } from './comp-1786.component';

describe('Comp1786Component', () => {
  let component: Comp1786Component;
  let fixture: ComponentFixture<Comp1786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
