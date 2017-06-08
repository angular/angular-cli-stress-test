/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1813Component } from './comp-1813.component';

describe('Comp1813Component', () => {
  let component: Comp1813Component;
  let fixture: ComponentFixture<Comp1813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
