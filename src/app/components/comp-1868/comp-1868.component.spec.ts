/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1868Component } from './comp-1868.component';

describe('Comp1868Component', () => {
  let component: Comp1868Component;
  let fixture: ComponentFixture<Comp1868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
