/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1229Component } from './comp-1229.component';

describe('Comp1229Component', () => {
  let component: Comp1229Component;
  let fixture: ComponentFixture<Comp1229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
