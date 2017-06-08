/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3552Component } from './comp-3552.component';

describe('Comp3552Component', () => {
  let component: Comp3552Component;
  let fixture: ComponentFixture<Comp3552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
