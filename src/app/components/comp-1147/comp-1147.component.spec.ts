/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1147Component } from './comp-1147.component';

describe('Comp1147Component', () => {
  let component: Comp1147Component;
  let fixture: ComponentFixture<Comp1147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
