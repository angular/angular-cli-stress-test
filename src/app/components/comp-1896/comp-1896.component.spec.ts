/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1896Component } from './comp-1896.component';

describe('Comp1896Component', () => {
  let component: Comp1896Component;
  let fixture: ComponentFixture<Comp1896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
