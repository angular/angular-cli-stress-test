/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1314Component } from './comp-1314.component';

describe('Comp1314Component', () => {
  let component: Comp1314Component;
  let fixture: ComponentFixture<Comp1314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
