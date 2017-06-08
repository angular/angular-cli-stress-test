/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1133Component } from './comp-1133.component';

describe('Comp1133Component', () => {
  let component: Comp1133Component;
  let fixture: ComponentFixture<Comp1133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
