/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1634Component } from './comp-1634.component';

describe('Comp1634Component', () => {
  let component: Comp1634Component;
  let fixture: ComponentFixture<Comp1634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
