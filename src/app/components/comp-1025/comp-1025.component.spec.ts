/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1025Component } from './comp-1025.component';

describe('Comp1025Component', () => {
  let component: Comp1025Component;
  let fixture: ComponentFixture<Comp1025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
