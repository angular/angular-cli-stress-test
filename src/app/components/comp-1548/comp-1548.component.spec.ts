/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1548Component } from './comp-1548.component';

describe('Comp1548Component', () => {
  let component: Comp1548Component;
  let fixture: ComponentFixture<Comp1548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
