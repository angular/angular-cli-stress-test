/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1582Component } from './comp-1582.component';

describe('Comp1582Component', () => {
  let component: Comp1582Component;
  let fixture: ComponentFixture<Comp1582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
