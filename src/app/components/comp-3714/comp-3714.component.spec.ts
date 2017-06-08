/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3714Component } from './comp-3714.component';

describe('Comp3714Component', () => {
  let component: Comp3714Component;
  let fixture: ComponentFixture<Comp3714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
